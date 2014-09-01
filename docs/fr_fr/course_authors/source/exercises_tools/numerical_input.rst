.. _Numerical Input:

########################
Saisie de chiffres
########################

Les exercices avec saisie de chiffres sont les outils math�matiques les plus simples propos�s par Studio. Dans ce type d'exercices, les �tudiants r�pondent � une question en saisissant des chiffres ou des expressions math�matiques sp�cifiques et relativement simples. Le texte saisi par les �tudiants est converti en une expression symbolique qui appara�t sous le champ de r�ponse. 

.. image:: /Images/image292.png
 :alt: Image d'un exercice avec saisie de chiffres

Notez que, pour ces exercices, il n'est pas n�cessaire que les r�ponses des �tudiants soient exactes. Vous pouvez sp�cifier une marge d'erreur ou tol�rance. Vous pouvez �galement indiquer une r�ponse correcte soit explicitement soit par l'interm�diaire d'un script Python. Pour plus d'informations, reportez-vous aux instructions ci-apr�s.

Les r�ponses aux exercices avec saisie de chiffres peuvent inclure des nombres entiers, des fractions et des constantes, comme *pi* et *g*. Les r�ponses peuvent �galement inclure du texte repr�sentant des fonctions communes, comme la racine carr�e (sqrt) et le logarithme en base 2 (log2), ainsi que des fonctions trigonom�triques et trigonom�triques inverses, comme la fonction sinus (sin) et arc-sinus (arcsin). Pour ces fonctions, le texte que l'�tudiant saisit est converti en symboles math�matiques. L'exemple suivant indique comment, dans les exercices avec saisie de chiffres, le syst�me convertit les r�ponses textuelles des �tudiants. 

.. image:: /Images/Math5.png
 :alt: Image d'un exercice avec saisie de chiffres pr�sent� par Studio

Pour plus d'informations sur les caract�res accept�s, voir :ref:`Format des r�ponses dans les exercices de math�matiques`.

***********************************
Cr�er un exercice avec saisie de chiffres 
***********************************

Vous pouvez cr�er des exercices avec saisie de chiffres dans l'�diteur simple ou dans l'�diteur avanc�, ind�pendamment de la r�ponse � l'exercice. Si le texte de votre exercice n'inclut ni formatage en italique ou en gras, ni caract�res sp�ciaux, vous pouvez cr�er l'exercice dans l'�diteur simple. Si le texte de votre exercice contient un formatage particulier ou des caract�res sp�ciaux, ou si votre exercice contient un script Python, vous devrez utiliser l'�diteur avanc�.

Par exemple, les exercices pr�sent�s dans les exemples ci-apr�s requi�rent l'utilisation de l'�diteur avanc�. 

.. image:: /Images/NumericalInput_Complex.png
 :alt: Image d'un exercice avec saisie d'expressions math�matiques plus complexes

Pour plus d'informations sur l'inclusion d'un script Python dans votre exercice, voir :ref:`�laboration d'un syst�me d'�valuation personnalis�`.

==================
�diteur simple
==================

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'�cran **Select Problem Component Type** (S�lectionner le type du composant Exercice), cliquez sur **Chiffres � saisir** dans l'onglet **Types d'exercices classiques**.
   
3. Lorsque le nouveau composant Exercice appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez le texte de l'exercice pr�sent� par votre propre texte.
#. Choisissez le texte de l'exercice � utiliser en tant qu'�tiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. S�lectionnez le texte de la r�ponse, puis cliquez sur le bouton Chiffres � saisir. 

.. image:: /Images/ProbCompButton_NumInput.png
    :alt: Image du bouton Chiffres � saisir

Lorsque vous avez effectu� cette op�ration, un signe �gal (=) appara�t en regard de la r�ponse.
        
7. (Facultatif) Sp�cifiez une marge d'erreur (ou tol�rance). Vous pouvez sp�cifier un pourcentage, un nombre ou une plage.

   * Pour sp�cifier un pourcentage de chaque c�t� de la r�ponse correcte, ajoutez **+-NOMBRE%** apr�s la r�ponse. Par exemple, si vous souhaitez inclure une tol�rance de 2 %, ajoutez **+-2%**. 

   * Pour sp�cifier un pourcentage de chaque c�t� de la r�ponse correcte, ajoutez **+-NOMBRE** apr�s la r�ponse. Par exemple, si vous souhaitez inclure une tol�rance de 5, ajoutez **+-5**.

   * Pour sp�cifier une plage, utilisez des crochets [] ou des parenth�ses (). Un crochet indique que le nombre situ� � proximit� sera inclus dans la plage. Une parenth�se indique que la plage n'inclut pas le nombre situ� � proximit�. Par exemple, si vous sp�cifiez **[5, 8)**, les r�ponses correctes peuvent �tre 5, 6 et 7, mais pas 8. De m�me, si vous sp�cifiez **(5, 8]**, les r�ponses correctes peuvent �tre 6, 7 et 8, mais pas 5.

8. Dans l'�diteur de composant, s�lectionnez le texte de l'explication, puis cliquez sur le bouton associ� afin d'ins�rer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

9. Dans l'onglet **Param�tres**, indiquez les param�tres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour le premier exercice pr�sent� en exemple ci-dessus, le texte dans le composant Exercice est le suivant.

::

   >>Sur quelle base se fonde le syst�me d�cimal ?<<

   = 10
    
   [explication]
   Le syst�me d�cimal est de base 10.
   [explication]

==================
�diteur avanc�
==================

Pour cr�er cet exercice dans l'�diteur avanc�, cliquez sur l'onglet **Avanc�** dans l'�diteur du composant Exercice, puis remplacez le code existant par le code pr�sent� ci-apr�s.

**Code d'exercice** :

.. code-block:: xml

  <problem>
    <p><b>Exemple d'exercice</b></p>

  <p>Sur quelle base se fonde le syst�me d�cimal ?
      <numericalresponse answer="10">
          <formulaequationinput label="What base is the decimal numeral system in?"/>
      </numericalresponse>
  </p>

    <p>Quelle est la valeur de la constante gravitationnelle standard <i>g</i>, mesur�e en m/s<sup>2</sup> ? Votre r�ponse doit pr�senter une pr�cision minimale de deux d�cimales.
    <numericalresponse answer="9.80665">
      <responseparam type="tolerance" default="0.01" />
      <formulaequationinput label="Votre r�ponse doit pr�senter une pr�cision minimale de deux d�cimales."/>
    </numericalresponse>
  </p>

  <!-- The following uses Python script spacing. Make sure it isn't indented when you add it to the Problem component. -->
  <script type="loncapa/python">
  computed_response = math.sqrt(math.fsum([math.pow(math.pi,2), math.pow(math.e,2)]))
  </script>

  <p>Quelle est la distance dans l'avion entre les points (pi, 0) et (0, e) ? Vous pouvez r�pondre avec des expressions math�matiques.
      <numericalresponse answer="$computed_response">
          <responseparam type="tolerance" default="0.0001" />
          <formulaequationinput label="Quelle est la distance dans l'avion entre les points (pi, 0) et (0, e) ?"/>
      </numericalresponse>
  </p>
  <solution>
    <div class="detailed-solution">
      <p>Explication</p>
      <p>Le syst�me d�cimal est de base 10.</p>
      <p>La constante gravitationnelle standard est exactement �gale � 9,80665 m/s<sup>2</sup>.
      Pour une pr�cision sur deux d�cimales, cette valeur est ramen�e � 9,80. Vous pouvez �galement saisir 9,8.</p>
      <p>D'apr�s la formule permettant de calculer la distance orthodromique, la distance entre deux points dans un avion est la racine carr�e de la somme des carr�s des diff�rences de chaque coordonn�e.
        M�me si une valeur num�rique exacte a �t� v�rifi�e dans ce cas pr�cis, le mode de saisie le plus simple pour cette r�ponse consiste � saisir <code>sqrt(pi^2+e^2)</code> dans l'�diteur.
        D'autres r�ponses comme <code>sqrt((pi-0)^2+(0-e)^2)</code> sont �galement valides.
      </p>
    </div>
  </solution>
  </problem>

.. _Numerical Input Problem XML:

****************************
Exercice avec saisie de chiffres - Format XML
****************************

=========
Mod�les
=========

Les mod�les suivants repr�sentent les exercices avec et sans tol�rance exprim�e sous forme d�cimale ou en tant que pourcentage.

Exercice sans tol�rance
***************************

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

Exercice associ� � une tol�rance exprim�e sous forme d�cimale
************************************

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

Exercice associ� � une tol�rance exprim�e en pourcentage
************************************

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

R�ponse cr��e avec un script
************************************

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

====
Balises
====

* ``<numericalresponse>`` (obligatoire) : Indique que cet exercice est un exercice avec saisie de chiffres.
* ``<formulaequationinput />`` (obligatoire) : Fournit un champ de r�ponse dans lequel l'�tudiant saisit une r�ponse.
* ``<responseparam>`` (facultatif) : Sp�cifie la tol�rance (ou marge d'erreur) pour une r�ponse.
* ``<script>`` (facultatif) :

.. note:: Certains exercices moins r�cents utilisent la balise ``<textline math="1" />`` plut�t que la balise ``<formulaequationinput />``. La balise ``<textline math="1" />`` est toutefois devenue obsol�te. Tous les nouveaux exercices devraient utiliser la balise ``<formulaequationinput />``.

**Balise :** ``<numericalresponse>``

Indique que cet exercice est un exercice avec saisie de chiffres. La balise ``<numericalresponse>`` est similaire � la balise ``<formularesponse>``. La balise ``<numericalresponse>`` n'autorise toutefois pas l'utilisation de variables non sp�cifi�es.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - answer (obligatoire)
       - R�ponse correcte au probl�me, pr�sent�e en tant qu'expression math�matique. 

  .. note:: Si vous incluez dans l'exercice un nom de variable, pr�c�d� d'un signe de dollar ($), vous pouvez alors inclure (toujours dans l'exercice) un script qui calcule l'expression sur la base de cette variable.

  L'�valuateur �value de la m�me fa�on la r�ponse que vous pr�sentez et la r�ponse de l'�tudiant. En outre, l'�valuateur simplifie automatiquement toute expression num�rique que vous ou tout �tudiant fournirez. Les r�ponses peuvent inclure des expressions simples comme "0,3" et "42", ou des expressions plus complexes comme "1/3" et "sin(pi/5)". 

  Enfants
  
  * ``<responseparam>``
  * ``<formulaequationinput>``

**Balise :** * ``<formulaequationinput>``

Cr�e un champ de r�ponse dans le LMS. Les �tudiants peuvent y saisir leur r�ponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description     
     * - label (obligatoire)
       - Sp�cifie le nom du champ de la r�ponse.
     * - size (facultatif)
       - Sp�cifie la taille, en caract�res, du champ de r�ponse dans le LMS.
  
  Enfants

  (aucun)

**Balise :** ``<responseparam>``

Sp�cifie la tol�rance (ou marge d'erreur) pour une r�ponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - type (facultatif)
       - "tolerance" : D�finit une tol�rance pour un nombre
     * - default (facultatif)
       - Nombre ou pourcentage sp�cifiant une tol�rance, exprim�e sous forme d'une valeur num�rique ou d'un pourcentage.

  Enfants
  
  (aucun)

**Balise :** ``<script>``

Sp�cifie un script que l'�valuateur utilise pour �valuer la r�ponse d'un �tudiant. Un exercice se comporte comme si l'int�gralit� du code dans toutes les balises script figurait dans une unique balise script. Sp�cifiquement, les variables utilis�es dans diff�rentes balises ``<script>`` partagent un espace de noms et peuvent �tre remplac�es.

Comme dans tout script Python, l'indentation joue un r�le important, m�me si le code est int�gr� en XML.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - type (obligatoire)
       - Doit �tre d�fini sur "loncapa/python".

  Enfants
  
  (aucun)