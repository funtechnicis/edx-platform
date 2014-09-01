.. _Multiple Choice and Numerical Input:

############################################
Exercice avec choix multiples et saisie de chiffres
############################################

Vous pouvez créer un exercice qui associe choix multiples et saisie de chiffres. Les étudiants sont amenés à sélectionner une réponse parmi les différentes possibilités proposées, mais doivent également saisir des informations plus spécifiques, le cas échéant.

.. image:: /Images/MultipleChoice_NumericalInput.png
  :alt: Image d'un exercice avec choix multiples et saisie de chiffres

.. note:: Actuellement, les étudiants ne peuvent saisir que des chiffres dans la zone de texte. Dans cette zone, les étudiants ne peuvent saisir ni texte ni expressions mathématiques.

.. _Create an MCNI Problem:

********************************************************
Créer un exercice avec choix multiples et saisie de chiffres
********************************************************

Pour créer un exercice avec choix multiples et saisie de chiffres :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Blank Advanced Problem** (Exercice avancé vide).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, collez le code présenté ci-après.
#. Remplacez le texte de l'exercice présenté en exemple et les réponses possibles par votre propre texte.
#. Cliquez sur **Enregistrer**.

.. _MCNI Problem Code:

************************************************
Code de l'exercice avec choix multiples et saisie de chiffres
************************************************

.. code-block:: xml

  <problem>
  La valeur numérique de Pi, arrondie à deux décimales, est égale à 3,24.
  <choicetextresponse>
  <radiotextgroup>
  <choice correct="false">Vrai.</choice>
  <choice correct="true">Faux. La valeur correcte est <numtolerance_input answer="3.14"/>.</choice>
  </radiotextgroup>
  </choicetextresponse>
  </problem>