.. _Problem Written in LaTeX:

############################
Exercice �crit en langage LaTeX
############################

Avertissement : Ce type d'exercice reste un prototype et pourrait ne pas �tre pris en charge � l'avenir. Par d�faut, la fonction permettant de cr�er ces exercices n'est pas activ�e dans Studio. Pour pouvoir cr�er des exercices avec LaTex, vous devez modifier les param�tres avanc�s dans votre cours. Par cons�quent, utilisez ce type d'exercice avec circonspection.

Si vous disposez d'un exercice qui a d�j� �t� �crit en LaTeX, vous pouvez utiliser ce type d'exercice afin de convertir facilement votre code en XML. Apr�s avoir coll� votre code dans l'�diteur LaTeX, vous n'aurez plus qu'� effectuer quelques ajustements mineurs. 

.. note:: Si vous souhaitez utiliser le langage LaTeX afin de mettre en page des expressions math�matiques dans les exercices que vous n'avez pas encore r�dig�s, utilisez l'un des mod�les d'exercice avec `MathJax <http://www.mathjax.org>`_. Pour plus d'informations sur la cr�ation d'expressions math�matiques dans Studio � l'aide de MathJax, voir *Introduction � l'utilisation de MathJax dans Studio*.

.. image:: /Images/ProblemWrittenInLaTeX.png
 :alt: Image d'un exercice �crit en langage LaTeX

************************************
Cr�er un exercice �crit en langage LaTeX
************************************

Pour cr�er un exercice �crit en langage LaTeX :

#. Activez la cl� de strat�gie dans votre cours.

   #. Dans Studio, cliquez sur **Param�tres**, puis sur **Param�tres avanc�s**.
   #. Dans le champ de la cl� de strat�gie **Autoriser le compilateur LaTeX**, remplacez **false** par **true**.
   #. Au bas de la page, cliquez sur **Enregistrer les modifications**.
   
#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Problem Written in LaTeX** (Exercice �crit en langage LaTex).
#. Dans l'�diteur de composant qui appara�t, cliquez sur **�diter**.
#. Dans le coin inf�rieur gauche de l'�diteur de composant, cliquez sur **Ex�cuter le compilateur Latex**.
#. Remplacez le code utilis� dans l'exemple par votre propre code. Vous pouvez �galement charger un fichier Latex dans l'�diteur depuis votre ordinateur. Il vous suffit de cliquer sur le bouton **Charger**, situ� dans le coin inf�rieur droit.
#. Dans le coin inf�rieur gauche du compilateur LaTeX, cliquez sur **Save & Compile to edX XML** (Enregistrer et compiler en code edX XML).