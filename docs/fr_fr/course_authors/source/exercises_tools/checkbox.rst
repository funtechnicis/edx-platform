.. _Checkbox:

##################
QCM avec cases � cocher
##################

Dans un QCM avec cases � cocher, l'�tudiant s�lectionne une ou plusieurs options dans une liste de r�ponses possibles. Pour r�pondre correctement aux questions pos�es lors de l'exercice, l'�tudiant doit s�lectionner toutes les r�ponses pertinentes. Chaque QCM avec cases � cocher doit inclure au moins une r�ponse correcte.

.. image:: /Images/CheckboxExample.png
 :alt: Image d'un QCM avec cases � cocher

****************************
Cr�er un QCM avec cases � cocher
****************************

Vous pouvez cr�er des QCM avec cases � cocher en utilisant l'�diteur simple ou l'�diteur avanc�.

.. note:: Tous les exercices doivent inclure des �tiquettes afin de garantir l'accessibilit�. L'�tiquette comprend g�n�ralement le texte de la question principale de l'exercice. Pour ajouter une �tiquette � un exercice courant, entourez le texte de l'�tiquette avec des crochets pointus, orient�s vers le texte (>>texte de l'�tiquette<<).

==================
�diteur simple
==================

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'�cran **Select Problem Component Type** (S�lectionner le type du composant Exercice), cliquez sur **Cases � cocher** dans l'onglet **Types d'exercices classiques**.
#. Dans le composant Exercice qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez le texte par d�faut par le texte de votre exercice. Saisissez chaque r�ponse possible sur la ligne appropri�e.
#. Choisissez le texte de l'exercice � utiliser en tant qu'�tiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. S�lectionnez toutes les r�ponses possibles, puis cliquez sur le bouton Case � cocher. 

   .. image:: /Images/ProbComponent_CheckboxIcon.png
    :alt: Image du bouton Case � cocher
   
   Ensuite, des crochets apparaissent en regard de chaque r�ponse.

#. Ins�rez un **x** entre les crochets pour d�signer la ou les r�ponses correctes.
#. Dans l'�diteur de composant, s�lectionnez le texte de l'explication, puis cliquez sur le bouton associ� afin d'ins�rer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

#. Dans l'onglet **Param�tres**, indiquez les param�tres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour l'exemple d'exercice pr�sent� ci-dessus, le texte dans le composant Exercice est le suivant.

.. code-block:: xml

    Il peut �tre particuli�rement difficile d'identifier les b�n�fices des soins pr�ventifs. >>Ci-dessous, s�lectionnez toutes les raisons justifiant cette affirmation.<<

    [x] Un d�lai consid�rable s'�coule entre la prise d'une mesure pr�ventive et l'obtention de r�sultats. 
    [ ] Les personnes non vaccin�es tomberont syst�matiquement malades. 
    [x] Si d'autres personnes sont vaccin�es, le nombre de personnes tombant malades diminuera, ind�pendamment de la d�cision d'un individu particulier de se faire vacciner ou non. 
    [x] La confiance accord�e aux professionnels de sant� et fonctionnaires ou repr�sentants du gouvernement est fragile. 

    [explication]
    Les personnes qui ne sont pas vaccin�es contre une maladie peuvent ne pas tomber malades. Si une personne tente d'�valuer l'efficacit� de mesures pr�ventives contre une maladie donn�e, elle pourrait conclure, au vu de la bonne sant� des personnes non vaccin�es, que la vaccination ne joue aucun r�le. Elle serait donc amen�e � croire que la vaccination (ou toute autre mesure pr�ventive) ne pr�sente que peu de b�n�fices, voire aucun, alors qu'en r�alit� la vaccination et les autres mesures de pr�vention jouent un r�le essentiel.
    [explication]

==================
�diteur avanc�
==================

Pour cr�er cet exercice dans l'�diteur avanc�, cliquez sur l'onglet **Avanc�** dans l'�diteur du composant Exercice, puis remplacez le code existant par le code pr�sent� ci-apr�s.

.. code-block:: xml

  <problem>
    <p>Il peut �tre particuli�rement difficile d'identifier les b�n�fices des soins pr�ventifs. Ci-dessous, s�lectionnez toutes les raisons justifiant cette affirmation.</p>

  <choiceresponse>
    <checkboxgroup direction="vertical" label="Check all of the reasons below why this may be the case">
      <choice correct="true"><text>Un d�lai consid�rable s'�coule entre la prise d'une mesure pr�ventive et l'obtention de r�sultats..</text></choice>
      <choice correct="false"><text>Les personnes non vaccin�es tomberont syst�matiquement malades.</text></choice>
      <choice correct="true"><text>Si d'autres personnes sont vaccin�es, le nombre de personnes tombant malades diminuera, ind�pendamment de la d�cision d'un individu particulier de se faire vacciner ou non.</text></choice>
      <choice correct="true"><text>La confiance accord�e aux professionnels de sant� et fonctionnaires ou repr�sentants du gouvernement est fragile.</text></choice>
    </checkboxgroup>
  </choiceresponse>

   <solution>
   <div class="detailed-solution">
   <p>Explication</p>
   <p>Les personnes qui ne sont pas vaccin�es contre une maladie peuvent ne pas tomber malades. Si une personne tente d'�valuer l'efficacit� de mesures pr�ventives contre une maladie donn�e, elle pourrait conclure, au vu de la bonne sant� des personnes non vaccin�es, que la vaccination ne joue aucun r�le. Elle serait donc amen�e � croire que la vaccination (ou toute autre mesure pr�ventive) ne pr�sente que peu de b�n�fices, voire aucun, alors qu'en r�alit� la vaccination et les autres mesures de pr�vention jouent un r�le essentiel.</p>
   </div>
   </solution>
  </problem>

.. _Checkbox Problem XML:

****************************
QCM avec cases � cocher - Format XML 
****************************

============
Mod�le
============

.. code-block:: xml

  <problem>
    <p>Texte de la question</p>

  <choiceresponse>

  <checkboxgroup direction="vertical" label="label text">
  <choice correct="false"><text>R�ponse 1 (incorrecte)</text></choice>
  <choice correct="true"><text>R�ponse 2 (correcte)</text></choice>
  </checkboxgroup>
  </choiceresponse>

   <solution>
   <div class="detailed-solution">
   <p>Titre de la solution ou de l'explication</p>
   <p>Texte de la solution ou de l'explication</p>
   </div>
   </solution>

  </problem>

======
Balises
======

* ``<choiceresponse>`` (obligatoire) : Indique que l'exercice contient des r�ponses parmi lesquelles les �tudiants doivent choisir.
* ``<checkboxgroup>`` (obligatoire) : Indique que l'exercice est un QCM avec cases � cocher.
* ``<choice>`` (obligatoire) : D�signe une r�ponse.

**Balise :** ``<choiceresponse>``

Indique que l'exercice contient des r�ponses parmi lesquelles les �tudiants doivent choisir.

  Attributs

  (aucun)

  Enfants

  * ``<checkboxgroup>``

**Balise :** ``<checkboxgroup>``

Indique que l'exercice est un QCM avec cases � cocher.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - direction (facultatif)
       - Indique l'orientation de la liste de r�ponses. L'orientation par d�faut est verticale.
     * - label (obligatoire)
       - Sp�cifie le nom du champ de la r�ponse.

  Enfants

  * ``<choice>`` 

**Balise :** ``<choice>``

D�signe une r�ponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - true (l'exercice doit en comporter au moins un)
       - Indique une r�ponse correcte. Pour les QCM avec cases � cocher, une ou plusieurs balises ``<choice>`` peuvent contenir une r�ponse correcte.
     * - false (l'exercice doit en comporter au moins un)
       - Indique une r�ponse incorrecte.

  Enfants
  
  (aucun)