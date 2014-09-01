.. _Problem Written in LaTeX:

############################
Exercice écrit en langage LaTeX
############################

Avertissement : Ce type d'exercice reste un prototype et pourrait ne pas être pris en charge à l'avenir. Par défaut, la fonction permettant de créer ces exercices n'est pas activée dans Studio. Pour pouvoir créer des exercices avec LaTex, vous devez modifier les paramètres avancés dans votre cours. Par conséquent, utilisez ce type d'exercice avec circonspection.

Si vous disposez d'un exercice qui a déjà été écrit en LaTeX, vous pouvez utiliser ce type d'exercice afin de convertir facilement votre code en XML. Après avoir collé votre code dans l'éditeur LaTeX, vous n'aurez plus qu'à effectuer quelques ajustements mineurs. 

.. note:: Si vous souhaitez utiliser le langage LaTeX afin de mettre en page des expressions mathématiques dans les exercices que vous n'avez pas encore rédigés, utilisez l'un des modèles d'exercice avec `MathJax <http://www.mathjax.org>`_. Pour plus d'informations sur la création d'expressions mathématiques dans Studio à l'aide de MathJax, voir *Introduction à l'utilisation de MathJax dans Studio*.

.. image:: /Images/ProblemWrittenInLaTeX.png
 :alt: Image d'un exercice écrit en langage LaTeX

************************************
Créer un exercice écrit en langage LaTeX
************************************

Pour créer un exercice écrit en langage LaTeX :

#. Activez la clé de stratégie dans votre cours.

   #. Dans Studio, cliquez sur **Paramètres**, puis sur **Paramètres avancés**.
   #. Dans le champ de la clé de stratégie **Autoriser le compilateur LaTeX**, remplacez **false** par **true**.
   #. Au bas de la page, cliquez sur **Enregistrer les modifications**.
   
#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Problem Written in LaTeX** (Exercice écrit en langage LaTex).
#. Dans l'éditeur de composant qui apparaît, cliquez sur **Éditer**.
#. Dans le coin inférieur gauche de l'éditeur de composant, cliquez sur **Exécuter le compilateur Latex**.
#. Remplacez le code utilisé dans l'exemple par votre propre code. Vous pouvez également charger un fichier Latex dans l'éditeur depuis votre ordinateur. Il vous suffit de cliquer sur le bouton **Charger**, situé dans le coin inférieur droit.
#. Dans le coin inférieur gauche du compilateur LaTeX, cliquez sur **Save & Compile to edX XML** (Enregistrer et compiler en code edX XML).