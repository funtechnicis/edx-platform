.. _MathJax in Studio:

############################################
Introduction à l'utilisation de MathJax dans Studio
############################################

Pour écrire des équations et symboles clairs et de qualité professionnelle, nous utilisons un langage de type LaTeX appelé `MathJax. <http://www.google.com/url?q=http%3A%2F%2Fwww.mathjax.org%2F&sa=D&sntz=1&usg=AFQjCNGef2H-mZCdmCo7-kWHfu9fUGVCfg>`_.
Vos équations MathJax peuvent apparaître avec un autre type de texte dans le paragraphe (équations en ligne) ou sur leur propre ligne (équations d'affichage).

- Pour les équations en ligne, vous pouvez procéder selon l'une des méthodes suivantes.

  - Encadrez votre expression Mathjax de barres obliques inverses et de **parenthèses**.
    
    ``\( équation \)``

  - Encadrez votre expression Mathjax de balises [mathjaxinline]. Notez que ces balises utilisent des crochets ([]).

    [mathjaxinline] équation [/mathjaxinline]
    
- Pour les équations d'affichage, vous pouvez procéder selon l'une des méthodes suivantes.

  - Encadrez votre expression Mathjax de barres obliques inverses et de **crochets**.

    ``\[ equation \]``

  - Encadrez votre expression Mathjax de balises [mathjax]. Notez que ces balises utilisent des crochets ([]).

    [mathjax] équation [/mathjax]

Vous pouvez utiliser MathJax dans des composants HTML (texte) et dans des composants Exercice.

.. note:: La documentation MathJax complète (ainsi qu'un outil de test) est disponible à l'adresse suivante : `http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm <http://www.google.com/url?q=http%3A%2F%2Fwww.onemathematicalcat.org%2FMathJaxDocumentation%2FTeXSyntax.htm&sa=D&sntz=1&usg=AFQjCNEV8PtCX6Csp0lW7lDKOLIKCOCkHg>`_.

****************************
Composants HTML (texte)
****************************

Dans l'éditeur de composant HTML, vous pouvez utiliser MathJax dans la vue Visuel et dans la vue HTML.

.. image:: /Images/MathJax_HTML.png
 :alt: Image d'un composant HTML avec MathJax dans la vue Visuel et dans la vue HTML

*********************
Composants Exercice
*********************

Dans l'éditeur de composant Exercice, vous pouvez utiliser MathJax dans l'Éditeur simple et dans l'Éditeur avancé.

Dans l'exercice présenté ci-après, notez que l'équation d'Einstein de l'explication est encadrée de barres obliques inverses et de parenthèses. L'équation apparaît en ligne avec le texte. L'équation de Navier-Stokes est encadrée de barres obliques inverses et de crochets. L'équation apparaît sur sa propre ligne.

.. image:: /Images/MathJax_Problem.png
 :alt: Image d'un composant Exercice avec MathJax dans la vue Visuel et dans la vue HTML