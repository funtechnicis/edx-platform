.. _MathJax in Studio:

############################################
Introduction � l'utilisation de MathJax dans Studio
############################################

Pour �crire des �quations et symboles clairs et de qualit� professionnelle, nous utilisons un langage de type LaTeX appel� `MathJax. <http://www.google.com/url?q=http%3A%2F%2Fwww.mathjax.org%2F&sa=D&sntz=1&usg=AFQjCNGef2H-mZCdmCo7-kWHfu9fUGVCfg>`_.
Vos �quations MathJax peuvent appara�tre avec un autre type de texte dans le paragraphe (�quations en ligne) ou sur leur propre ligne (�quations d'affichage).

- Pour les �quations en ligne, vous pouvez proc�der selon l'une des m�thodes suivantes.

  - Encadrez votre expression Mathjax de barres obliques inverses et de **parenth�ses**.
    
    ``\( �quation \)``

  - Encadrez votre expression Mathjax de balises [mathjaxinline]. Notez que ces balises utilisent des crochets ([]).

    [mathjaxinline] �quation [/mathjaxinline]
    
- Pour les �quations d'affichage, vous pouvez proc�der selon l'une des m�thodes suivantes.

  - Encadrez votre expression Mathjax de barres obliques inverses et de **crochets**.

    ``\[ equation \]``

  - Encadrez votre expression Mathjax de balises [mathjax]. Notez que ces balises utilisent des crochets ([]).

    [mathjax] �quation [/mathjax]

Vous pouvez utiliser MathJax dans des composants HTML (texte) et dans des composants Exercice.

.. note:: La documentation MathJax compl�te (ainsi qu'un outil de test) est disponible � l'adresse suivante : `http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm <http://www.google.com/url?q=http%3A%2F%2Fwww.onemathematicalcat.org%2FMathJaxDocumentation%2FTeXSyntax.htm&sa=D&sntz=1&usg=AFQjCNEV8PtCX6Csp0lW7lDKOLIKCOCkHg>`_.

****************************
Composants HTML (texte)
****************************

Dans l'�diteur de composant HTML, vous pouvez utiliser MathJax dans la vue Visuel et dans la vue HTML.

.. image:: /Images/MathJax_HTML.png
 :alt: Image d'un composant HTML avec MathJax dans la vue Visuel et dans la vue HTML

*********************
Composants Exercice
*********************

Dans l'�diteur de composant Exercice, vous pouvez utiliser MathJax dans l'�diteur simple et dans l'�diteur avanc�.

Dans l'exercice pr�sent� ci-apr�s, notez que l'�quation d'Einstein de l'explication est encadr�e de barres obliques inverses et de parenth�ses. L'�quation appara�t en ligne avec le texte. L'�quation de Navier-Stokes est encadr�e de barres obliques inverses et de crochets. L'�quation appara�t sur sa propre ligne.

.. image:: /Images/MathJax_Problem.png
 :alt: Image d'un composant Exercice avec MathJax dans la vue Visuel et dans la vue HTML