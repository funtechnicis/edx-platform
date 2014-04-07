define(["jquery", "underscore", "js/views/xblock", "js/utils/module", "gettext", "js/views/feedback_notification"],
    function ($, _, XBlockView, ModuleUtils, gettext, NotificationView) {
        var ContainerView = XBlockView.extend({

            xblockReady: function () {
                XBlockView.prototype.xblockReady.call(this);
                var verticalContainer = $(this.$el).find('.vertical-container'),
                    alreadySortable = $(this.$el).find('.ui-sortable'),
                    newParent,
                    oldParent,
                    self = this;

                if (alreadySortable.length > 0) {
                    alreadySortable.sortable("destroy");
                    // TODO: add unit test for this (render twice?).
                    console.log('destroyed sortable');
                }

                verticalContainer.sortable({
                    handle: '.drag-handle',

                    stop: function (event, ui) {
                        console.log('stop');

                        if (oldParent === undefined) {
                            // If no actual change occurred,
                            // oldParent will never have been set.
                            return;
                        }

                        var saving = new NotificationView.Mini({
                            title: gettext('Saving&hellip;')
                        });
                        saving.show();

                        var hideSaving = function () {
                            saving.hide();
                        };

                        // If moving from one container to another,
                        // add to new container before deleting from old to
                        // avoid creating an orphan if the addition fails.
                        if (newParent) {
                            var removeFromParent = oldParent;
                            self.reorder(newParent, function () {
                                self.reorder(removeFromParent, hideSaving);
                            });
                        }
                        else {
                            // No new parent, only reordering within same container.
                            self.reorder(oldParent, hideSaving);
                        }

                        oldParent = undefined;
                        newParent = undefined;
                    },
                    update: function (event, ui) {
                        // When dragging from one ol to another, this method
                        // will be called twice (once for each list). ui.sender will
                        // be null if the change is related to the list the element
                        // was originally in (the case of a move within the same container
                        // or the deletion from a container when moving to a new container).
                        var parent = $(event.target).closest('.wrapper-xblock');
                        if (ui.sender) {
                            // Move to a new container (the addition part).
                            newParent = parent;
                        }
                        else {
                            // Reorder inside a container, or deletion when moving to new container.
                            oldParent = parent;
                        }
                    },
                    helper: "clone",
                    opacity: '0.5',
                    placeholder: 'component-placeholder',
                    forcePlaceholderSize: true,
                    axis: 'y',
                    items: '> .vertical-element',
                    connectWith: ".vertical-container"

                });
            },

            reorder: function (targetParent, successCallback) {
                console.log('calling reorder for ' + targetParent.data('locator'));

                // Find descendants with class "wrapper-xblock" whose parent == targetParent.
                // This is necessary to filter our grandchildren, great-grandchildren, etc.
                var children = targetParent.find('.wrapper-xblock').filter(function () {
                    var parent = $(this).parent().closest('.wrapper-xblock');
                    return parent.data('locator') === targetParent.data('locator');
                });

                var childLocators = _.map(
                    children,
                    function (child) {
                        return $(child).data('locator');
                    }
                );
                $.ajax({
                    url: ModuleUtils.getUpdateUrl(targetParent.data('locator')),
                    type: 'PUT',
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify({
                        children: childLocators
                    }),
                    success: function () {
                        // change data-parent on the element moved.
                        console.log('SAVED! ' + targetParent.data('locator') + " with " + childLocators.length + "  children");
                        if (successCallback) {
                            successCallback();
                        }
                    }
                });

            }
        });

        return ContainerView;
    }); // end define();