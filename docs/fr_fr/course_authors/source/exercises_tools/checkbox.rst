.. _Case à cocher:

#######################
QCM avec cases à cocher
#######################

Dans un QCM avec cases à cocher, l'étudiant sélectionne une ou plusieurs options dans une liste de réponses possibles. Pour répondre correctement aux questions posées lors de l'exercice, l'étudiant doit sélectionner toutes les réponses pertinentes. Chaque QCM avec cases à cocher doit inclure au moins une réponse correcte.

.. image:: /Images/CheckboxExample.png
 :alt: Image d'un QCM avec cases à cocher

********************************
Créer un QCM avec cases à cocher
********************************

Vous pouvez créer des QCM avec cases à cocher en utilisant l'Éditeur simple ou l'Éditeur avancé.

.. note:: Tous les exercices doivent inclure des étiquettes afin de garantir l'accessibilité. L'étiquette comprend généralement le texte de la question principale de l'exercice. Pour ajouter une étiquette à un exercice courant, entourez le texte de l'étiquette avec des crochets pointus, orientés vers le texte (>>texte de l'étiquette<<).

==============
Éditeur simple
==============

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'écran **Select Problem Component Type** (Sélectionner le type du composant Exercice), cliquez sur **Cases à cocher** dans l'onglet **Types d'exercices classiques**.
#. Dans le composant Exercice qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez le texte par défaut par le texte de votre exercice. Saisissez chaque réponse possible sur la ligne appropriée.
#. Choisissez le texte de l'exercice à utiliser en tant qu'étiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. Sélectionnez toutes les réponses possibles, puis cliquez sur le bouton Case à cocher. 

   .. image:: /Images/ProbComponent_CheckboxIcon.png
    :alt: Image du bouton Case à cocher
   
   Ensuite, des crochets apparaissent en regard de chaque réponse.

#. Insérez un **x** entre les crochets pour désigner la ou les réponses correctes.
#. Dans l'éditeur de composant, sélectionnez le texte de l'explication, puis cliquez sur le bouton associé afin d'insérer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

#. Dans l'onglet **Paramètres**, indiquez les paramètres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour l'exemple d'exercice présenté ci-dessus, le texte dans le composant Exercice est le suivant.

.. code-block:: xml

    Il peut être particulièrement difficile d'identifier les bénéfices des soins préventifs. >>Ci-dessous, sélectionnez toutes les raisons justifiant cette affirmation.<<

    [x] Un délai considérable s'écoule entre la prise d'une mesure préventive et l'obtention de résultats. 
    [ ] Les personnes non vaccinées tomberont systématiquement malades. 
    [x] Si d'autres personnes sont vaccinées, le nombre de personnes tombant malades diminuera, indépendamment de la décision d'un individu particulier de se faire vacciner ou non. 
    [x] La confiance accordée aux professionnels de santé et fonctionnaires ou représentants du gouvernement est fragile. 

    [explication]
    Les personnes qui ne sont pas vaccinées contre une maladie peuvent ne pas tomber malades. Si une personne tente d'évaluer l'efficacité de mesures préventives contre une maladie donnée, elle pourrait conclure, au vu de la bonne santé des personnes non vaccinées, que la vaccination ne joue aucun rôle. Elle serait donc amenée à croire que la vaccination (ou toute autre mesure préventive) ne présente que peu de bénéfices, voire aucun, alors qu'en réalité la vaccination et les autres mesures de prévention jouent un rôle essentiel.
    [explication]

==============
Éditeur avancé
==============

Pour créer cet exercice dans l'Éditeur avancé, cliquez sur l'onglet **Avancé** dans l'éditeur du composant Exercice, puis remplacez le code existant par le code présenté ci-après.

.. code-block:: xml

  <problem>
    <p>Il peut être particulièrement difficile d'identifier les bénéfices des soins préventifs. Ci-dessous, sélectionnez toutes les raisons justifiant cette affirmation.</p>

  <choiceresponse>
    <checkboxgroup direction="vertical" label="Check all of the reasons below why this may be the case">
      <choice correct="true"><text>Un délai considérable s'écoule entre la prise d'une mesure préventive et l'obtention de résultats..</text></choice>
      <choice correct="false"><text>Les personnes non vaccinées tomberont systématiquement malades.</text></choice>
      <choice correct="true"><text>Si d'autres personnes sont vaccinées, le nombre de personnes tombant malades diminuera, indépendamment de la décision d'un individu particulier de se faire vacciner ou non.</text></choice>
      <choice correct="true"><text>La confiance accordée aux professionnels de santé et fonctionnaires ou représentants du gouvernement est fragile.</text></choice>
    </checkboxgroup>
  </choiceresponse>

   <solution>
   <div class="detailed-solution">
   <p>Explication</p>
   <p>Les personnes qui ne sont pas vaccinées contre une maladie peuvent ne pas tomber malades. Si une personne tente d'évaluer l'efficacité de mesures préventives contre une maladie donnée, elle pourrait conclure, au vu de la bonne santé des personnes non vaccinées, que la vaccination ne joue aucun rôle. Elle serait donc amenée à croire que la vaccination (ou toute autre mesure préventive) ne présente que peu de bénéfices, voire aucun, alors qu'en réalité la vaccination et les autres mesures de prévention jouent un rôle essentiel.</p>
   </div>
   </solution>
  </problem>

.. _Checkbox Problem XML:

************************************
QCM avec cases à cocher - Format XML 
************************************

======
Modèle
======

.. code-block:: xml

  <problem>
    <p>Texte de la question</p>

  <choiceresponse>

  <checkboxgroup direction="vertical" label="label text">
  <choice correct="false"><text>Réponse 1 (incorrecte)</text></choice>
  <choice correct="true"><text>Réponse 2 (correcte)</text></choice>
  </checkboxgroup>
  </choiceresponse>

   <solution>
   <div class="detailed-solution">
   <p>Titre de la solution ou de l'explication</p>
   <p>Texte de la solution ou de l'explication</p>
   </div>
   </solution>

  </problem>

=======
Balises
=======

* ``<choiceresponse>`` (obligatoire) : Indique que l'exercice contient des réponses parmi lesquelles les étudiants doivent choisir.
* ``<checkboxgroup>`` (obligatoire) : Indique que l'exercice est un QCM avec cases à cocher.
* ``<choice>`` (obligatoire) : Désigne une réponse.

**Balise :** ``<choiceresponse>``

Indique que l'exercice contient des réponses parmi lesquelles les étudiants doivent choisir.

  Attributs

  (aucun)

  Enfants

  * ``<checkboxgroup>``

**Balise :** ``<checkboxgroup>``

Indique que l'exercice est un QCM avec cases à cocher.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - direction (facultatif)
       - Indique l'orientation de la liste de réponses. L'orientation par défaut est verticale.
     * - label (obligatoire)
       - Spécifie le nom du champ de la réponse.

  Enfants

  * ``<choice>`` 

**Balise :** ``<choice>``

Désigne une réponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - true (l'exercice doit en comporter au moins un)
       - Indique une réponse correcte. Pour les QCM avec cases à cocher, une ou plusieurs balises ``<choice>`` peuvent contenir une réponse correcte.
     * - false (l'exercice doit en comporter au moins un)
       - Indique une réponse incorrecte.

  Enfants
  
  (aucun)
