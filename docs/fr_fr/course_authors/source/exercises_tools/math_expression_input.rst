.. _Math Expression Input:

####################################
Exercices avec saisie d'expressions math�matiques
####################################

Dans les exercices avec saisie d'expressions math�matiques, les �tudiants saisissent dans un champ un texte qui repr�sente une expression math�matique. Ce texte est alors converti en une expression symbolique qui appara�t sous le champ. � la diff�rence des exercices avec saisie de chiffres, qui n'autorisent que les nombres entiers et quelques constantes s�lectionn�es, les exercices avec saisie d'expressions math�matiques peuvent inclure des variables inconnues et des expressions symboliques plus complexes. 

.. image:: /Images/MathExpressionInputExample.png
 :alt: Image d'un exercice avec saisie d'expressions math�matiques

Pour plus d'informations sur les caract�res accept�s, voir :ref:`Format des r�ponses dans les exercices de math�matiques`.

L'�valuateur se base sur un �chantillonnage num�rique pour d�terminer si la r�ponse de l'�tudiant correspond � l'expression math�matique fournie par l'enseignant et si elle est conforme aux instructions d�finies en mati�re de caract�res num�riques. L'enseignant doit sp�cifier quelles sont les variables autoris�es dans l'expression et indiquer la plage de valeurs associ�e � chaque variable.

Avertissement : Les exercices avec saisie d'expressions math�matiques ne peuvent actuellement pas inclure de chiffre n�gatif �lev� � une puissance fractionnaire, par exemple : (-1)^(1/2). Les exercices avec saisie d'expressions math�matiques peuvent inclure des nombres complexes �lev�s � des puissances fractionnaires ou des nombres positifs non complexes �lev�s � des puissances fractionnaires.

Lorsque vous cr�ez un exercice avec saisie d'expressions math�matiques dans Studio, vous devrez utiliser `MathJax <http://www.mathjax.org>`_ pour transformer votre texte brut en expression math�matique. Pour plus d'informations sur l'utilisation de MathJax dans Studio, voir :ref:`Introduction � l'utilisation de MathJax dans Studio`.

************************************************
Cr�er un exercice avec saisie d'expressions math�matiques
************************************************

Pour cr�er un exercice avec saisie d'expressions math�matiques :

#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Math Expression Input** (Saisie d'expressions math�matiques).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez l'exemple de code par votre propre code. Pour votre exercice, vous pouvez utiliser le code de l'exercice pr�sent� en exemple ci-apr�s.
#. Cliquez sur **Enregistrer**.

**Exemple de code d'exercice**

.. code-block:: xml

  <problem>
    <p>Certains exercices font r�f�rence � une �quation math�matique. Entra�nez-vous � cr�er des expressions math�matiques en r�pondant aux questions ci-apr�s.</p>

    <p>�crivez une expression pour le produit de R_1, R_2 et l'inverse de R_3.</p>
    <formularesponse type="ci" samples="R_1,R_2,R_3@1,2,3:3,4,5#10" answer="$VoVi">
      <responseparam type="tolerance" default="0.00001"/>
      <formulaequationinput size="40" label="Saisissez l'�quation"/>
    </formularesponse>

  <script type="loncapa/python">
  VoVi = "(R_1*R_2)/R_3"
  </script>

    <p>Supposons que <i>x</i> est la variable et que <i>n</i> est la constante arbitraire. Quelle est la d�riv�e de <i>x<sup>n</sup></i>?</p>
  <script type="loncapa/python">
  d�riv�e = "n*x^(n-1)"
  </script>
    <formularesponse type="ci" samples="x,n@1,2:3,4#10" answer="$derivative">
      <responseparam type="tolerance" default="0.00001"/>
      <formulaequationinput size="40"  label="Enter the equation"/>
    </formularesponse>

    <solution>
      <div class="detailed-solution">
        <p>Titre de la solution ou de l'explication</p>
        <p>Texte de la solution ou de l'explication</p>
      </div>
    </solution>
  </problem>

.. _Math Expression Input Problem XML:

**********************************
Exercice avec saisie d'expressions math�matiques - Format XML
**********************************

============
Mod�les
============

.. code-block:: xml

  <problem>
    <p>�crivez une expression pour le produit de R_1, R_2 et l'inverse de R_3.</p>
    <formularesponse type="ci" samples="R_1,R_2,R_3@1,2,3:3,4,5#10" answer="R_1*R_2/R_3">
      <responseparam type="tolerance" default="0.00001"/> 
      <formulaequationinput size="40"  label="Enter the equation" />
    </formularesponse>
  </problem>

.. code-block:: xml

  <problem>
    <p>Texte de l'exercice</p>
    <formularesponse type="ci" samples="VARIABLES@LOWER_BOUNDS:UPPER_BOUNDS#NUMBER_OF_SAMPLES" answer="$VoVi">
      <responseparam type="tolerance" default="0.00001"/>
      <formulaequationinput size="20"  label="Saisissez l'�quation" />
    </formularesponse>

  <script type="loncapa/python">
  SCRIPT PYTHON
  </script>

    <solution>
      <div class="detailed-solution">
        <p>Titre de la solution ou de l'explication</p>
        <p>Texte de la solution ou de l'explication</p>
      </div>
    </solution>
  </problem>

====
Balises
====

* ``<formularesponse>``
* ``<formulaequationinput />``
* ``<responseparam>``
* ``<script>``

**Balise :** ``<formularesponse>``

Indique que cet exercice est un exercice avec saisie d'expressions math�matiques. La balise ``<formularesponse>`` est similaire � ``<numericalresponse>`` mais ``<formularesponse>`` accepte les variables inconnues.

  Attributs

  **type** : Peut �tre "cs" (de l'anglais case sensitive, soit : sensible � la casse ; il s'agit de la valeur par d�faut) ou "ci" (de l'anglais case insensitive, soit : insensible � la casse ; il est alors possible d'utiliser indiff�remment majuscules ou de minuscules dans les noms de variables).

  **answer** : R�ponse correcte au probl�me, pr�sent�e en tant qu'expression math�matique. Si vous incluez dans l'exercice un nom de variable, pr�c�d� d'un signe de dollar ($), vous pouvez inclure (toujours dans l'exercice) un script qui calcule l'expression sur la base de cette variable.

  **samples** : Sp�cifie des informations importantes sur l'exercice dans quatre listes :

    * **variables** : Ensemble de variables que les �tudiants peuvent saisir.
    * **lower_bounds** : Pour chaque variable d�finie, la limite inf�rieure � utiliser pour cette variable lors des tests num�riques.
    * **upper_bounds** : Pour chaque variable d�finie, la limite sup�rieure � utiliser pour cette variable lors des tests num�riques.
    * **num_samples** : Nombre de fois que l'expression est test�e.

    Les virgules s�parent les �l�ments dans chacune des quatre listes ; le signe (@), le deux-points (:) et le di�se (#) s�parent les quatre listes. Le format est le suivant :

    ``"variables@lower_bounds:upper_bounds#num_samples``

    Par exemple, une balise ``<formularesponse>`` qui inclut l'attribut **samples** peut ressembler � l'une des balises pr�sent�es ci-apr�s.

    ``<formularesponse samples="x,n@1,2:3,4#10">``

    ``<formularesponse samples="R_1,R_2,R_3@1,2,3:3,4,5#10">``

  Enfants

  * ``<formulaequationinput />``

**Balise :** ``<formulaequationinput />``

Cr�e un champ de r�ponse dans lequel l'�tudiant saisit une r�ponse en texte brut ; cr�e �galement un second champ de r�ponse sous le champ dans lequel l'�tudiant peut voir une version mise en page du texte brut. Un analyseur permet l'affichage de la r�ponse de l'�tudiant, pr�sent�e en texte brut, en expression math�matique mise en page. Ce m�me analyseur �value la r�ponse de l'�tudiant pour la noter.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - label (obligatoire)
       - Sp�cifie le nom du champ de la r�ponse.
     * - size (facultatif)
       - Sp�cifie la largeur, en caract�res, du champ de r�ponse dans lequel les �tudiants saisissent leurs r�ponses.

  Enfants
  
  (aucun)

**Balise :** ``<responseparam>``

Permet de d�finir une limite sup�rieure pour l'�cart entre les m�thodes num�riques utilis�es pour r�aliser un test d'�galit� approximative.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - default (obligatoire)
       - Chiffre ou pourcentage indiquant le degr� de proximit� des expression de l'�tudiant et de l'�valuateur. L'incapacit� d'inclure une tol�rance introduit une vuln�rabilit� au niveau des expressions : des erreurs d'arrondi in�vitables risquent de survenir lors de l'�chantillonnage, entra�nant alors l'�valuation incorrecte de la r�ponse d'un �tudiant, m�me si sa r�ponse est alg�briquement �quivalente � l'expression de l'�valuateur.
     * - type
       - "tolerance"--d�finit une tol�rance pour un nombre

  Enfants
  
  (aucun)