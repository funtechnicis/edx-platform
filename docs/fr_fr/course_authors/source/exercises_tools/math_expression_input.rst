.. _Math Expression Input:

####################################
Exercices avec saisie d'expressions mathématiques
####################################

Dans les exercices avec saisie d'expressions mathématiques, les étudiants saisissent dans un champ un texte qui représente une expression mathématique. Ce texte est alors converti en une expression symbolique qui apparaît sous le champ. À la différence des exercices avec saisie de chiffres, qui n'autorisent que les nombres entiers et quelques constantes sélectionnées, les exercices avec saisie d'expressions mathématiques peuvent inclure des variables inconnues et des expressions symboliques plus complexes. 

.. image:: /Images/MathExpressionInputExample.png
 :alt: Image d'un exercice avec saisie d'expressions mathématiques

Pour plus d'informations sur les caractères acceptés, voir :ref:`Format des réponses dans les exercices de mathématiques`.

L'évaluateur se base sur un échantillonnage numérique pour déterminer si la réponse de l'étudiant correspond à l'expression mathématique fournie par l'enseignant et si elle est conforme aux instructions définies en matière de caractères numériques. L'enseignant doit spécifier quelles sont les variables autorisées dans l'expression et indiquer la plage de valeurs associée à chaque variable.

Avertissement : Les exercices avec saisie d'expressions mathématiques ne peuvent actuellement pas inclure de chiffre négatif élevé à une puissance fractionnaire, par exemple : (-1)^(1/2). Les exercices avec saisie d'expressions mathématiques peuvent inclure des nombres complexes élevés à des puissances fractionnaires ou des nombres positifs non complexes élevés à des puissances fractionnaires.

Lorsque vous créez un exercice avec saisie d'expressions mathématiques dans Studio, vous devrez utiliser `MathJax <http://www.mathjax.org>`_ pour transformer votre texte brut en expression mathématique. Pour plus d'informations sur l'utilisation de MathJax dans Studio, voir :ref:`Introduction à l'utilisation de MathJax dans Studio`.

************************************************
Créer un exercice avec saisie d'expressions mathématiques
************************************************

Pour créer un exercice avec saisie d'expressions mathématiques :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Math Expression Input** (Saisie d'expressions mathématiques).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par votre propre code. Pour votre exercice, vous pouvez utiliser le code de l'exercice présenté en exemple ci-après.
#. Cliquez sur **Enregistrer**.

**Exemple de code d'exercice**

.. code-block:: xml

  <problem>
    <p>Certains exercices font référence à une équation mathématique. Entraînez-vous à créer des expressions mathématiques en répondant aux questions ci-après.</p>

    <p>Écrivez une expression pour le produit de R_1, R_2 et l'inverse de R_3.</p>
    <formularesponse type="ci" samples="R_1,R_2,R_3@1,2,3:3,4,5#10" answer="$VoVi">
      <responseparam type="tolerance" default="0.00001"/>
      <formulaequationinput size="40" label="Saisissez l'équation"/>
    </formularesponse>

  <script type="loncapa/python">
  VoVi = "(R_1*R_2)/R_3"
  </script>

    <p>Supposons que <i>x</i> est la variable et que <i>n</i> est la constante arbitraire. Quelle est la dérivée de <i>x<sup>n</sup></i>?</p>
  <script type="loncapa/python">
  dérivée = "n*x^(n-1)"
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
Exercice avec saisie d'expressions mathématiques - Format XML
**********************************

============
Modèles
============

.. code-block:: xml

  <problem>
    <p>Écrivez une expression pour le produit de R_1, R_2 et l'inverse de R_3.</p>
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
      <formulaequationinput size="20"  label="Saisissez l'équation" />
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

Indique que cet exercice est un exercice avec saisie d'expressions mathématiques. La balise ``<formularesponse>`` est similaire à ``<numericalresponse>`` mais ``<formularesponse>`` accepte les variables inconnues.

  Attributs

  **type** : Peut être "cs" (de l'anglais case sensitive, soit : sensible à la casse ; il s'agit de la valeur par défaut) ou "ci" (de l'anglais case insensitive, soit : insensible à la casse ; il est alors possible d'utiliser indifféremment majuscules ou de minuscules dans les noms de variables).

  **answer** : Réponse correcte au problème, présentée en tant qu'expression mathématique. Si vous incluez dans l'exercice un nom de variable, précédé d'un signe de dollar ($), vous pouvez inclure (toujours dans l'exercice) un script qui calcule l'expression sur la base de cette variable.

  **samples** : Spécifie des informations importantes sur l'exercice dans quatre listes :

    * **variables** : Ensemble de variables que les étudiants peuvent saisir.
    * **lower_bounds** : Pour chaque variable définie, la limite inférieure à utiliser pour cette variable lors des tests numériques.
    * **upper_bounds** : Pour chaque variable définie, la limite supérieure à utiliser pour cette variable lors des tests numériques.
    * **num_samples** : Nombre de fois que l'expression est testée.

    Les virgules séparent les éléments dans chacune des quatre listes ; le signe (@), le deux-points (:) et le dièse (#) séparent les quatre listes. Le format est le suivant :

    ``"variables@lower_bounds:upper_bounds#num_samples``

    Par exemple, une balise ``<formularesponse>`` qui inclut l'attribut **samples** peut ressembler à l'une des balises présentées ci-après.

    ``<formularesponse samples="x,n@1,2:3,4#10">``

    ``<formularesponse samples="R_1,R_2,R_3@1,2,3:3,4,5#10">``

  Enfants

  * ``<formulaequationinput />``

**Balise :** ``<formulaequationinput />``

Crée un champ de réponse dans lequel l'étudiant saisit une réponse en texte brut ; crée également un second champ de réponse sous le champ dans lequel l'étudiant peut voir une version mise en page du texte brut. Un analyseur permet l'affichage de la réponse de l'étudiant, présentée en texte brut, en expression mathématique mise en page. Ce même analyseur évalue la réponse de l'étudiant pour la noter.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - label (obligatoire)
       - Spécifie le nom du champ de la réponse.
     * - size (facultatif)
       - Spécifie la largeur, en caractères, du champ de réponse dans lequel les étudiants saisissent leurs réponses.

  Enfants
  
  (aucun)

**Balise :** ``<responseparam>``

Permet de définir une limite supérieure pour l'écart entre les méthodes numériques utilisées pour réaliser un test d'égalité approximative.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - default (obligatoire)
       - Chiffre ou pourcentage indiquant le degré de proximité des expression de l'étudiant et de l'évaluateur. L'incapacité d'inclure une tolérance introduit une vulnérabilité au niveau des expressions : des erreurs d'arrondi inévitables risquent de survenir lors de l'échantillonnage, entraînant alors l'évaluation incorrecte de la réponse d'un étudiant, même si sa réponse est algébriquement équivalente à l'expression de l'évaluateur.
     * - type
       - "tolerance"--définit une tolérance pour un nombre

  Enfants
  
  (aucun)