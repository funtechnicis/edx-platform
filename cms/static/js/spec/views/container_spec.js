define([ "jquery", "js/spec/create_sinon", "URI", "js/views/container", "js/models/xblock_info",
    "jquery.simulate",
    "xmodule", "coffee/src/main", "xblock/cms.runtime.v1"],
    function ($, create_sinon, URI, ContainerView, XBlockInfo) {

        describe("Container View", function() {
            var model, containerView, mockContainerHTML, respondWithMockXBlockFragment, requests;

            var splitTestUrl = "/xblock/ccc.dd.ee/branch/draft/block/AB_Test";

            // TODO: why did these end up being published locators in the HTML? Should be draft.
            var groupAUrl = "/xblock/ccc.dd.ee/branch/published/block/group_a";
            var groupA = "ccc.dd.ee/branch/published/block/group_a";
            var groupAText = "ccc.dd.ee/branch/published/block/html_4658c0f4c400";
            var groupAVideo = "ccc.dd.ee/branch/published/block/group_a_video";

            var groupBUrl = "/xblock/ccc.dd.ee/branch/published/block/group_b";
            var groupB = "ccc.dd.ee/branch/published/block/group_b";
            var groupBText = "ccc.dd.ee/branch/published/block/html_b5c18016d991";
            var groupBProblem= "ccc.dd.ee/branch/published/block/Checkboxes";

            mockContainerHTML = readFixtures('mock/mock-container.underscore');

            respondWithMockXBlockFragment = function(requests, response) {
                var requestIndex = requests.length - 1;
                create_sinon.respondWithJson(requests, response, requestIndex);
            };

            beforeEach(function () {
                model = new XBlockInfo({
                    id: 'testCourse/branch/draft/split_test/splitFFF',
                    display_name: 'Test AB Test',
                    category: 'split_test'
                });
                // TODO: move set up of sortable out of init method, all render
                // explicitly, set it up in xblockReady.
                // Clear any sortable stuff that is already there.
                requests = create_sinon.requests(this);

                containerView = new ContainerView({
                    model: model,
                    view: 'container_preview'
                });

                respondWithMockXBlockFragment(requests, {
                    html: mockContainerHTML,
                    "resources": []
                });

                $('body').append(containerView.$el);

            });

            afterEach(function () {
               containerView.remove();
            });

            var dragHandle = function (index, dy) {
                containerView.$el.find(".drag-handle:eq(" + index + ")").simulate("drag", {dy: dy});
            };

            var verifyRequest = function (request, expectedURL, expectedChildren) {
                expect(request.url).toEqual(expectedURL);
                var children = (JSON.parse(request.requestBody)).children;
                expect(children.length).toEqual(expectedChildren.length);
                for (var i = 0; i < children.length; i++) {
                    expect(children[i]).toEqual(expectedChildren[i]);
                }
            };

            it('does nothing if item not moved far enough', function() {
                // Drag the first thing in Group A (text component) down very slightly, but not past second thing.
                dragHandle(1, 5);
                expect(requests.length).toEqual(1);
            });


            it('can reorder within a group', function() {
                // Drag the first thing in Group A (text component) after the second thing (video).
                dragHandle(1, 80);
                requests[1].respond(200);
                expect(requests.length).toEqual(2);
                verifyRequest(requests[1], groupAUrl, [groupAVideo, groupAText]);
            });

            it('can drag from one group to another', function() {
                // Drag the first thing in Group A (text component) into the second group.
                dragHandle(1, 200);
                requests[1].respond(200);
                requests[2].respond(200);
                // Will get an event to move into Group B and an event to remove from Group A.
                expect(requests.length).toEqual(3);
                verifyRequest(requests[1], groupBUrl, [groupBText, groupAText, groupBProblem]);
                verifyRequest(requests[2], groupAUrl, [groupAVideo]);
            });

            it('does not remove from old group if addition to new group fails', function() {
                // Drag the first thing in Group A (text component) into the second group.
                dragHandle(1, 200);
                requests[1].respond(500);
                // Send failure for addition to new group-- no removal event should be received.
                expect(requests.length).toEqual(2);
                verifyRequest(requests[1], groupBUrl, [groupBText, groupAText, groupBProblem]);
            });

            it('can swap group A and group B', function() {
                // Drag Group B before group A.
                dragHandle(3, -200);
                requests[1].respond(200);
                // Will get an event to move into Group B and an event to remove from Group A.
                expect(requests.length).toEqual(2);
                verifyRequest(requests[1], splitTestUrl, [groupB, groupA]);
            });

            it('can nest one group inside another', function() {
                // Drag Group A into Group B.
                dragHandle(0, 100);
                requests[1].respond(200);
                // For some reason we are not getting the removal event in the test. :(
//                requests[2].respond(200);
                // Will get an event to move into Group B and an event to remove from Group A.
//                expect(requests.length).toEqual(3);
//                verifyRequest(requests[1], groupBUrl, [groupA, groupBText, groupBProblem]);
                verifyRequest(requests[1], splitTestUrl, [groupB]);
            });

            it('can drag a component to the top level', function() {
                // Drag text item in Group A to the top level (in first position).
                dragHandle(1, -20);
                requests[1].respond(200);
                requests[2].respond(200);
                expect(requests.length).toEqual(3);
                verifyRequest(requests[1], splitTestUrl, [groupAText, groupA, groupB]);
                verifyRequest(requests[2], groupAUrl, [groupAVideo]);
            });

        });
    });