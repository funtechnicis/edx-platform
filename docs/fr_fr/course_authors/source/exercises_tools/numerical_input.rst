.. _Saisie numérique:

##################
Saisie numérique
##################

Les exercices avec saisie numérique sont les outils mathématiques les plus simples proposés par Studio. Dans ce type d'exercices, les étudiants répondent à une question en saisissant des nombres ou des expressions mathématiques spécifiques et relativement simples. Le texte saisi par les étudiants est converti en une expression symbolique qui apparaît sous le champ de réponse. 

.. image:: /Images/image292.png
 :alt: Image d'un exercice avec saisie numérique

Notez que, pour ces exercices, il n'est pas nécessaire que les réponses des étudiants soient exactes. Vous pouvez spécifier une marge d'erreur ou tolérance. Vous pouvez également indiquer une réponse correcte soit explicitement soit par l'intermédiaire d'un script Python. Pour plus d'informations, reportez-vous aux instructions ci-après.

Les réponses aux exercices avec saisie numérique peuvent inclure des nombres entiers, des fractions et des constantes, comme *pi* et *g*. Les réponses peuvent également inclure du texte représentant des fonctions communes, comme la racine carrée (sqrt) et le logarithme en base 2 (log2), ainsi que des fonctions trigonométriques et trigonométriques inverses, comme la fonction sinus (sin) et arc-sinus (arcsin). Pour ces fonctions, le texte que l'étudiant saisit est converti en symboles mathématiques. L'exemple suivant indique comment, dans les exercices avec saisie numérique, le système convertit les réponses textuelles des étudiants. 

.. image:: /Images/Math5.png
 :alt: Image d'un exercice avec saisie numérique présenté par Studio

Pour plus d'informations sur les caractères acceptés, voir :ref:`Format des réponses dans les exercices de mathématiques`.

*****************************************
Créer un exercice avec saisie numérique 
*****************************************

Vous pouvez créer des exercices avec saisie numérique dans l'Éditeur simple ou dans l'Éditeur avancé, indépendamment de la réponse à l'exercice. Si le texte de votre exercice n'inclut ni formatage en italique ou en gras, ni caractères spéciaux, vous pouvez créer l'exercice dans l'Éditeur simple. Si le texte de votre exercice contient un formatage particulier ou des caractères spéciaux, ou si votre exercice contient un script Python, vous devrez utiliser l'Éditeur avancé.

Par exemple, les exercices présentés dans les exemples ci-après requièrent l'utilisation de l'Éditeur avancé. 

.. image:: /Images/NumericalInput_Complex.png
 :alt: Image d'un exercice avec saisie d'expressions mathématiques plus complexes

Pour plus d'informations sur l'inclusion d'un script Python dans votre exercice, voir :ref:`Élaboration d'un système d'évaluation personnalisé`.

==============
Éditeur simple
==============

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'écran **Select Problem Component Type** (Sélectionner le type du composant Exercice), cliquez sur **Chiffres à saisir** dans l'onglet **Types d'exercices classiques**.
   
3. Lorsque le nouveau composant Exercice apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez le texte de l'exercice présenté par votre propre texte.
#. Choisissez le texte de l'exercice à utiliser en tant qu'étiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. Sélectionnez le texte de la réponse, puis cliquez sur le bouton Chiffres à saisir. 

.. image:: /Images/ProbCompButton_NumInput.png
    :alt: Image du bouton Nombres à saisir

Lorsque vous avez effectué cette opération, un signe égal (=) apparaît en regard de la réponse.
        
7. (Facultatif) Spécifiez une marge d'erreur (ou tolérance). Vous pouvez spécifier un pourcentage, un nombre ou une plage.

   * Pour spécifier un pourcentage de chaque côté de la réponse correcte, ajoutez **+-NOMBRE%** après la réponse. Par exemple, si vous souhaitez inclure une tolérance de 2 %, ajoutez **+-2%**. 

   * Pour spécifier un pourcentage de chaque côté de la réponse correcte, ajoutez **+-NOMBRE** après la réponse. Par exemple, si vous souhaitez inclure une tolérance de 5, ajoutez **+-5**.

   * Pour spécifier une plage, utilisez des crochets [] ou des parenthèses (). Un crochet indique que le nombre situé à proximité sera inclus dans la plage. Une parenthèse indique que la plage n'inclut pas le nombre situé à proximité. Par exemple, si vous spécifiez **[5, 8)**, les réponses correctes peuvent être 5, 6 et 7, mais pas 8. De même, si vous spécifiez **(5, 8]**, les réponses correctes peuvent être 6, 7 et 8, mais pas 5.

8. Dans l'éditeur de composant, sélectionnez le texte de l'explication, puis cliquez sur le bouton associé afin d'insérer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

9. Dans l'onglet **Paramètres**, indiquez les paramètres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour le premier exercice présenté en exemple ci-dessus, le texte dans le composant Exercice est le suivant.

::

   >>Sur quelle base se fonde le système décimal ?<<

   = 10
    
   [explication]
   Le système décimal est de base 10.
   [explication]

==============
Éditeur avancé
==============

Pour créer cet exercice dans l'Éditeur avancé, cliquez sur l'onglet **Avancé** dans l'éditeur du composant Exercice, puis remplacez le code existant par le code présenté ci-après.

**Code d'exercice** :

.. code-block:: xml

  <problem>
    <p><b>Exemple d'exercice</b></p>

  <p>Sur quelle base se fonde le système décimal ?
      <numericalresponse answer="10">
          <formulaequationinput label="What base is the decimal numeral system in?"/>
      </numericalresponse>
  </p>

    <p>Quelle est la valeur de la constante gravitationnelle standard <i>g</i>, mesurée en m/s<sup>2</sup> ? Votre réponse doit présenter une précision minimale de deux décimales.
    <numericalresponse answer="9.80665">
      <responseparam type="tolerance" default="0.01" />
      <formulaequationinput label="Votre réponse doit présenter une précision minimale de deux décimales."/>
    </numericalresponse>
  </p>

  <!-- The following uses Python script spacing. Make sure it isn't indented when you add it to the Problem component. -->
  <script type="loncapa/python">
  computed_response = math.sqrt(math.fsum([math.pow(math.pi,2), math.pow(math.e,2)]))
  </script>

  <p>Quelle est la distance dans l'avion entre les points (pi, 0) et (0, e) ? Vous pouvez répondre avec des expressions mathématiques.
      <numericalresponse answer="$computed_response">
          <responseparam type="tolerance" default="0.0001" />
          <formulaequationinput label="Quelle est la distance dans l'avion entre les points (pi, 0) et (0, e) ?"/>
      </numericalresponse>
  </p>
  <solution>
    <div class="detailed-solution">
      <p>Explication</p>
      <p>Le système décimal est de base 10.</p>
      <p>La constante gravitationnelle standard est exactement égale à 9,80665 m/s<sup>2</sup>.
      Pour une précision sur deux décimales, cette valeur est ramenée à 9,80. Vous pouvez également saisir 9,8.</p>
      <p>D'après la formule permettant de calculer la distance orthodromique, la distance entre deux points dans un avion est la racine carrée de la somme des carrés des différences de chaque coordonnée.
        Même si une valeur numérique exacte a été vérifiée dans ce cas précis, le mode de saisie le plus simple pour cette réponse consiste à saisir <code>sqrt(pi^2+e^2)</code> dans l'éditeur.
        D'autres réponses comme <code>sqrt((pi-0)^2+(0-e)^2)</code> sont également valides.
      </p>
    </div>
  </solution>
  </problem>

.. _Numerical Input Problem XML:

*********************************************
Exercice avec saisie numérique - Format XML
*********************************************

=======
Modèles
=======

Les modèles suivants représentent les exercices avec et sans tolérance exprimée sous forme décimale ou en tant que pourcentage.

Exercice sans tolérance
***********************

.. code-block:: xml

  <p>TEXTE DE L'EXERCICE
      <numericalresponse answer="ANSWER (NUMBER)">
          <formulaequationinput label="TEXTE DE L'EXERCICE"/>
      </numericalresponse>
  </p>
   
    <solution>
    <div class="detailed-solution">
    <p>TEXTE DE LA SOLUTION</p>
    </div>
  </solution>
  </problem>

Exercice associé à une tolérance exprimée sous forme décimale
*************************************************************

.. code-block:: xml

  <problem>
   
    <p>TEXTE DE L'EXERCICE
    <numericalresponse answer="ANSWER (NUMBER)">
      <responseparam type="tolerance" default="NUMBER (DECIMAL, e.g., .02)" />
      <formulaequationinput label="TEXTE DE L'EXERCICE"/>
    </numericalresponse>
  </p>
   
    <solution>
    <div class="detailed-solution">
    <p>TEXTE DE LA SOLUTION</p>
    </div>
  </solution>
  </problem>

Exercice associé à une tolérance exprimée en pourcentage
********************************************************

.. code-block:: xml

  <problem>
   
   <p>TEXTE DE L'EXERCICE
    <numericalresponse answer="ANSWER (NUMBER)">
      <responseparam type="tolerance" default="NUMBER (PERCENTAGE, e.g., 3%)" />
      <formulaequationinput label="TEXTE DE L'EXERCICE"/>
    </numericalresponse>
   </p>

    <solution>
    <div class="detailed-solution">
    <p>TEXTE DE LA SOLUTION</p>
    </div>
  </solution>
  </problem>

Réponse créée avec un script
****************************

.. code-block:: xml

  <problem>

  <!-- The following uses Python script spacing. Make sure it isn't indented when you add it to the Problem component. -->
  <script type="loncapa/python">
  computed_response = math.sqrt(math.fsum([math.pow(math.pi,2), math.pow(math.e,2)]))
  </script>

  <p>TEXTE DE L'EXERCICE
      <numericalresponse answer="$computed_response">
          <responseparam type="tolerance" default="0.0001" />
          <formulaequationinput label="TEXTE DE L'EXERCICE"/>
      </numericalresponse>
  </p>

    <solution>
    <div class="detailed-solution">
     <p>TEXTE DE LA SOLUTION</p>
    </div>
  </solution>
  </problem>

=======
Balises
=======

* ``<numericalresponse>`` (obligatoire) : Indique que cet exercice est un exercice avec saisie numérique.
* ``<formulaequationinput />`` (obligatoire) : Fournit un champ de réponse dans lequel l'étudiant saisit une réponse.
* ``<responseparam>`` (facultatif) : Spécifie la tolérance (ou marge d'erreur) pour une réponse.
* ``<script>`` (facultatif) :

.. note:: Certains exercices moins récents utilisent la balise ``<textline math="1" />`` plutôt que la balise ``<formulaequationinput />``. La balise ``<textline math="1" />`` est toutefois devenue obsolète. Tous les nouveaux exercices devraient utiliser la balise ``<formulaequationinput />``.

**Balise :** ``<numericalresponse>``

Indique que cet exercice est un exercice avec saisie numérique. La balise ``<numericalresponse>`` est similaire à la balise ``<formularesponse>``. La balise ``<numericalresponse>`` n'autorise toutefois pas l'utilisation de variables non spécifiées.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - answer (obligatoire)
       - Réponse correcte au problème, présentée en tant qu'expression mathématique. 

  .. note:: Si vous incluez dans l'exercice un nom de variable, précédé d'un signe de dollar ($), vous pouvez alors inclure (toujours dans l'exercice) un script qui calcule l'expression sur la base de cette variable.

  L'évaluateur évalue de la même façon la réponse que vous présentez et la réponse de l'étudiant. En outre, l'évaluateur simplifie automatiquement toute expression numérique que vous ou tout étudiant fournirez. Les réponses peuvent inclure des expressions simples comme "0,3" et "42", ou des expressions plus complexes comme "1/3" et "sin(pi/5)". 

  Enfants
  
  * ``<responseparam>``
  * ``<formulaequationinput>``

**Balise :** * ``<formulaequationinput>``

Crée un champ de réponse dans le LMS. Les étudiants peuvent y saisir leur réponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description     
     * - label (obligatoire)
       - Spécifie le nom du champ de la réponse.
     * - size (facultatif)
       - Spécifie la taille, en caractères, du champ de réponse dans le LMS.
  
  Enfants

  (aucun)

**Balise :** ``<responseparam>``

Spécifie la tolérance (ou marge d'erreur) pour une réponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - type (facultatif)
       - "tolerance" : Définit une tolérance pour un nombre
     * - default (facultatif)
       - Nombre ou pourcentage spécifiant une tolérance, exprimée sous forme d'une valeur numérique ou d'un pourcentage.

  Enfants
  
  (aucun)

**Balise :** ``<script>``

Spécifie un script que l'évaluateur utilise pour évaluer la réponse d'un étudiant. Un exercice se comporte comme si l'intégralité du code dans toutes les balises script figurait dans une unique balise script. Spécifiquement, les variables utilisées dans différentes balises ``<script>`` partagent un espace de noms et peuvent être remplacées.

Comme dans tout script Python, l'indentation joue un rôle important, même si le code est intégré en XML.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - type (obligatoire)
       - Doit être défini sur "loncapa/python".

  Enfants
  
  (aucun)
