.. _Multiple Choice and Numerical Input:

############################################
Exercice avec choix multiples et saisie de chiffres
############################################

Vous pouvez cr�er un exercice qui associe choix multiples et saisie de chiffres. Les �tudiants sont amen�s � s�lectionner une r�ponse parmi les diff�rentes possibilit�s propos�es, mais doivent �galement saisir des informations plus sp�cifiques, le cas �ch�ant.

.. image:: /Images/MultipleChoice_NumericalInput.png
  :alt: Image d'un exercice avec choix multiples et saisie de chiffres

.. note:: Actuellement, les �tudiants ne peuvent saisir que des chiffres dans la zone de texte. Dans cette zone, les �tudiants ne peuvent saisir ni texte ni expressions math�matiques.

.. _Create an MCNI Problem:

********************************************************
Cr�er un exercice avec choix multiples et saisie de chiffres
********************************************************

Pour cr�er un exercice avec choix multiples et saisie de chiffres :

#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Blank Advanced Problem** (Exercice avanc� vide).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, collez le code pr�sent� ci-apr�s.
#. Remplacez le texte de l'exercice pr�sent� en exemple et les r�ponses possibles par votre propre texte.
#. Cliquez sur **Enregistrer**.

.. _MCNI Problem Code:

************************************************
Code de l'exercice avec choix multiples et saisie de chiffres
************************************************

.. code-block:: xml

  <problem>
  La valeur num�rique de Pi, arrondie � deux d�cimales, est �gale � 3,24.
  <choicetextresponse>
  <radiotextgroup>
  <choice correct="false">Vrai.</choice>
  <choice correct="true">Faux. La valeur correcte est <numtolerance_input answer="3.14"/>.</choice>
  </radiotextgroup>
  </choicetextresponse>
  </problem>