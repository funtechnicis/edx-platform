.. _Glisser-déposer:

###########################
Exercice de glisser-déposer
###########################

Dans les exercices de glisser-déposer, les étudiants répondent à une question en faisant glisser du texte ou des objets vers un emplacement spécifique sur une image.

.. image:: /Images/DragAndDropProblem.png
 :alt: Image d'un exercice de glisser-déposer

************************************
Créer un exercice de glisser-déposer
************************************

Pour créer un simple exercice de glisser-déposer dans lequel les étudiants sont amenés à faire glisser des étiquettes sur une image, chargez l'image dans laquelle vous souhaitez que les étudiants fassent glisser des étiquettes, puis créez un composant Exercice.

#. Sur la page **Fichiers et uploads**, chargez votre fichier image. Pour plus d'informations sur le chargement de fichiers, voir :ref:`Ajouter des fichiers à un cours`.
#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Drag and Drop** (Glisser-déposer).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez le texte présenté dans l'exemple par le texte de votre exercice.
#. Dans la balise ``<drag_and_drop_input>``, remplacez **https://studio.edx.org/c4x/edX/DemoX/asset/L9_buckets.png** par l'URL de votre fichier image sur la page **Fichiers et uploads** (par exemple, **/static/Image.png**). 
#. Pour au moins une balise ``<draggable>``, remplacez le texte de l'attribut **label** par le texte de l'étiquette que vous souhaitez que vos étudiants fassent glisser. Par exemple, si vous souhaitez que vos étudiants fassent glisser le mot "Iceland" (Islande) sur votre image, la nouvelle balise ressemblera alors à :
   
   ``<draggable id="1" label="Iceland"/>``

8. Recommencez l'étape précédente pour toutes les étiquettes que vous souhaitez utiliser. Assurez-vous que l'attribut **id** est différent pour chaque balise ``<draggable>``.
#. Déterminez les coordonnées et le rayon de la zone correcte sur l'image.  
#. Sous ``correct_answer = {``, ajoutez une entrée pour chaque étiquette, en utilisant le format suivant. Ces valeurs sont exprimées en pixels :

    ``'id':    [[x coordinate, y coordinate], radius]``

    Par exemple, si votre image présente une largeur de 600 pixels et une hauteur de 400 pixels, et que vous souhaitez que vos étudiants fassent glisser l'étiquette Iceland (Islande) vers une zone dans le coin supérieur gauche de l'image et l'étiquette Sweden (Suède) à proximité du coin inférieur droit de votre image, le code ressemblera alors au code présenté ci-après (où 2 est l'ID de l'étiquette Sweden [Suède]) :

    .. code-block:: xml

        correct-answer = {
                '1':    [[50, 50], 75]
                '2':    [[550, 350], 75]}

    .. note:: Assurez-vous que le code contient une accolade fermante (**}**). 
#. Cliquez sur **Enregistrer**.

=====================================
Exemple d'exercice de glisser-déposer
=====================================

Pour créer l'exercice de glisser-déposer qui apparaît dans l'image ci-dessus, téléchargez deux fichiers depuis edX, chargez ces fichiers sur la page **Fichiers et uploads**, puis ajoutez le code de l'exercice à un composant Exercice.

#. Téléchargez les fichiers suivants depuis edX :

  * Allopurinol.gif
  * AllopurinolAnswer.gif

  Pour télécharger ces deux fichiers dans une archive .zip, cliquez sur http://files.edx.org/DragAndDropProblemFiles.zip.

2. Chargez les fichiers Allopurinol.gif et AllopurinolAnswer.gif sur la page **Fichiers et uploads**.
#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Drag and Drop** (Glisser-déposer).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par le code suivant.
#. Cliquez sur **Enregistrer**.

**Code d'exercice** :

.. code-block:: xml

  <problem>
    <p> Allopurinol est un médicament utilisé dans le traitement et la prévention de la goutte, une forme très douloureuse de l'arthrite. Autrefois appelée la “maladie des rois” ou “maladie des riches”, la goutte est devenue de plus en plus répandue au cours de ces dernières décennies. Rien qu'aux États-Unis, elle touche désormais près de 3 millions de personnes. L'accumulation de cristaux d'acide urique en forme d'aiguilles dans les tissus conjonctifs ou les articulations est à l'origine de différents symptômes : gonflements, raideurs et douleurs intenses. Les patients atteints de goutte produisent trop d'acide urique, car ils ne parviennent pas à l'éliminer de manière efficace. L'allopurinol permet de traiter et de prévenir la goutte en interrompant la surproduction d'acide urique par l'inhibition d'une enzyme nécessaire à la synthèse de cet acide. </p>
    <p> L'une des nombreuses molécules possibles est présentée ci-après. Identifiez les groupes fonctionnels présents sur la structure de l'allopurinol présentée ci-après. Pour procéder à cette identification, faites glisser le nom du groupe fonctionnel dans la zone cible appropriée sur la structure. Si vous souhaitez modifier votre réponse, faites glisser le nom hors de la zone. Vous devrez peut-être parcourir les noms des groupes fonctionnels afin de visualiser toutes les options. </p>
    <customresponse>
      <drag_and_drop_input no_labels="true" one_per_target="true" target_outline="true" img="/static/Allopurinol.gif">
        <draggable can_reuse="true" label="methyl" id="1"/>
        <draggable can_reuse="true" label="hydroxyl" id="2"/>
        <draggable can_reuse="true" label="amino" id="3"/>
        <draggable can_reuse="true" label="carboxyl" id="4"/>
        <draggable can_reuse="true" label="aldehyde" id="5"/>
        <draggable can_reuse="true" label="phosphate" id="6"/>
        <draggable can_reuse="true" label="sulfhydryl" id="7"/>
        <draggable can_reuse="true" label="phenyl" id="8"/>
        <draggable can_reuse="true" label="none" id="none"/>
        <target id="0" h="53" w="66" y="55.100006103515625" x="131.5"/>
        <target id="1" h="113" w="55" y="140.10000610351562" x="181.5"/>
      </drag_and_drop_input>
      <answer type="loncapa/python"> 
  correct_answer = [ {'draggables': ['2'], 'targets': ['0' ], 'rule':'unordered_equal' }, 
  {'draggables': ['none'], 'targets': ['1' ], 'rule':'unordered_equal' }] 
  if draganddrop.grade(submission[0], correct_answer): 
      correct = ['correct'] 
  else: 
      correct = ['incorrect'] 
      </answer>
    </customresponse>
    <solution>
      <img src="/static/AllopurinolAnswer.gif"/>
    </solution>
  </problem>


.. _Drag and Drop Problem XML:

****************************************
Exercice de glisser-déposer - Format XML
****************************************

=========================
Modèle de problème simple
=========================

.. code-block:: xml

  <problem>
  <p>TEXTE DE L'EXERCICE</p>
   <customresponse>
        <drag_and_drop_input img="/static/TARGET_IMAGE.png">
            <draggable id="1" label="LABEL 1"/>
            <draggable id="2" label="LABEL 2"/>
        </drag_and_drop_input>
        <answer type="loncapa/python">
  correct_answer = {
          '1':      [[x, y], radius],
          '2':      [[x, y], radius]}
  if draganddrop.grade(submission[0], correct_answer):
      correct = ['correct']
  else:
      correct = ['incorrect']
          </answer>
      </customresponse>


=========================
Modèle de problème avancé
=========================

.. code-block:: xml

  <problem>
      <customresponse>
          <text>
              <p>TEXTE DE L'EXERCICE</p>
          </text>
          <drag_and_drop_input img="/static/TARGET_IMAGE.png" target_outline="true" one_per_target="true" no_labels="true" label_bg_color="rgb(222, 139, 238)">
              <draggable id="1" label="LABEL 1" />
              <draggable id="2" label="LABEL 2" />
              <target id="A" x="NUMBER" Y="NUMBER" w="X+WIDTH" h="Y+HEIGHT"/>
              <target id="B" x="NUMBER" Y="NUMBER" w="X+WIDTH" h="Y+HEIGHT"/>
          </drag_and_drop_input>
          <answer type="loncapa/python">
  correct_answer = [{
      'draggables': ['1', '2'],
      'targets': ['A', 'B' ],
      'rule':'anyof'
  }]
  if draganddrop.grade(submission[0], correct_answer):
      correct = ['correct']
  else:
      correct = ['incorrect']
          </answer>
      </customresponse>
  </problem>

=======
Balises
=======

* ``<customresponse>`` : Indique que cet exercice est associé à une réponse personnalisée.
* ``<drag_and_drop_input/>`` : Indique que cet exercice avec réponse personnalisée est un exercice de glisser-déposer.
* ``<draggable/>`` : Spécifie un objet unique qu'un étudiant fera glisser sur l'image de base.
* ``<target>`` : Spécifie l'emplacement sur l'image de base au niveau duquel un élément que l'on peut faire glisser doit être déposé.

**Balise :** ``<drag_and_drop_input/>``

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - img (obligatoire)
       - Chemin relatif d'une image qui sera l'image de base. Tous les éléments que l'on peut faire glisser peuvent être glissés sur cette image.
     * - target_outline 
       - Indique si un contour (ligne grise en pointillé) devrait être tracé autour des cibles (si elles sont spécifiées). La valeur peut être 'true' ou 'false'. Si les cibles ne sont pas spécifiées, elles ne doivent pas présenter de contours.
     * - one_per_target 
       - Indique si plus d'un élément que l'on peut faire glisser peut être placé dans une cible unique. La valeur peut être 'true' ou 'false'. Si aucune valeur n'est spécifiée, la valeur par défaut est 'true'.
     * - no_labels (obligatoire)
       - La valeur par défaut est false ; si l'étiquette n'est pas définie, la valeur par défaut est indiquée ; l'étiquette est obtenue à partir de l'ID. Si la valeur de no_labels est true, les étiquettes ne sont pas renseignées automatiquement à partir de l'ID. Il est alors impossible de définir des étiquettes ; seules des icônes peuvent alors être obtenues.

  Enfants

     * ``<draggable>``
     * ``<target>``

**Balise :** ``<draggable/>``

Désigne un objet unique que l'on peut faire glisser dans un exercice de glisser-déposer.

Un objet que l'on peut faire glisser correspond à l'élément que l'utilisateur doit faire glisser et déposer sur l'image de base avec le curseur. Après avoir fait glisser un objet, si le centre de cet objet est situé hors du périmètre rectangulaire de l'image, il sera de nouveau associé au curseur.

Pour que l'évaluateur fonctionne correctement, chaque élément que l'on peut faire glisser doit avoir un ID unique.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - id (obligatoire)
       - Identifiant unique de l'objet que l'on peut faire glisser.
     * - label (facultatif)
       - Étiquette de texte que l'utilisateur voit.
     * - icon (facultatif)
       - Pour les éléments que l'on peut faire glisser que sont les images, le chemin relatif menant au fichier image.
     * - can_reuse
       - valeur true ou false ; la valeur par défaut est false. Si la valeur est true, le même élément que l'on peut faire glisser peut être utilisé plusieurs fois.

  Enfants
  
  (aucun)

**Balise :** ``<target>``

Spécifie l'emplacement sur l'image de base au niveau duquel un étudiant doit déposer un élément que l'on peut faire glisser. De par la conception du système, si le centre d'un objet que l'on peut faire glisser a été déposé dans la cible (c'est-à-dire, dans le rectangle défini par [[x, y], [x + w, y + h]], ce dernier est considéré comme étant dans la cible. Dans le cas contraire, il est hors de la cible.

Si vous spécifiez au moins une cible et qu'un étudiant dépose un élément que l'on peut faire glisser hors de la cible, cet élément est de nouveau associé au curseur.

Si vous ne spécifiez aucune cible, un étudiant peut déposer un élément que l'on peut faire glisser à n'importe quel emplacement de l'image de base.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - id (obligatoire)
       - Identifiant unique de l'objet cible.
     * - x
       - Coordonnées X sur l'image de base où le coin supérieur gauche de la cible sera positionné.
     * - y
       - Coordonnées Y sur l'image de base où le coin supérieur gauche de la cible sera positionné.
     * - w
       - Largeur de la cible, exprimée en pixels.
     * - h
       - Hauteur de la cible, exprimée en pixels.

  Enfants

  (aucun)


Pour plus d'informations sur la création d'exercices de glisser-déposer, voir `Format XML de données insérées par glisser-déposer
<https://edx.readthedocs.org/en/latest/course_data_formats/drag_and_drop/drag_and_drop_input.html>`_.
