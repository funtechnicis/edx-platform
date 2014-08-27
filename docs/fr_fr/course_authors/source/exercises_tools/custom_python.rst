.. _Write Your Own Grader:

##############################
Exercice avec élaboration d'un système d'évaluation personnalisé
##############################

Dans les exercices avec évaluation personnalisée par Python (également appelés exercices avec élaboration d'un système d'évaluation personnalisé), l'évaluateur utilise un script Python que vous créez et intégrez dans l'exercice afin d'évaluer la réponse de l'étudiant ou de fournir des indices. Ces problèmes peuvent être de tout type. Les exercices associant saisie de chiffres et de données sont les exercices intégrant l'élaboration d'un système d'évaluation personnalisé les plus courants.

.. image:: /Images/CustomPythonExample.png
 :alt: Image d'un exercice avec élaboration d'un système d'évaluation personnalisé

Les exercices avec évaluation personnalisée par Python peuvent inclure les types d'exercices suivants :

* :ref:`Équation chimique`
* :ref:`Code JavaScript personnalisé`
* :ref:`Gene Explorer`
* :ref:`Éditeur de molécules`
* :ref:`Système d'élaboration de protéines`

.. list-table::
   :widths: 20 80

   * - ``<script type="loncapa/python">``
     - Indique que l'exercice contient un script Python.
   * - ``<customresponse cfn="test_add_to_ten">``
     - 
   * - ``<customresponse cfn="test_add" expect="20">``
     - 
   * - <textline size="10" correct_answer="3"/>
     - Cette balise inclut les attributs ``size``, ``correct_answer`` et ``label``. L'attribut ``correct_answer`` est facultatif.

Vous pouvez créer l'un de ces exercices dans :ref:`Format de balise answer` ou :ref:`Format de balise script`.

.. _Answer Tag Format:

**************************
Format de balise answer
**************************

Le format de balise answer englobe le script Python dans une balise ``<answer>`` :

.. code-block:: xml

  <answer>
  if answers[0] == expect:
      correct[0] = 'correct'
      overall_message = 'Bon travail !'
  else:
      correct[0] = 'incorrect'
      messages[0] = 'Cette réponse est incorrecte'
      overall_message = 'Veuillez réessayer'
  </answer>

Important : Python respecte certaines règles d'indentation. Dans la balise ``<answer>``, vous devez commencer votre script sans indentation.

Le script Python interagit avec ces variables dans un contexte global :

* ``answers`` : Liste triée répertoriant les réponses fournies par l'étudiant. Par exemple, si l'étudiant a répondu ``6``, ``answers[0]`` sera égal à ``6``.
* ``expect`` : Valeur de l'attribut ``expect`` de ``<customresponse>`` (si fourni).
* ``correct`` : Liste triée des chaînes indiquant si l'étudiant a répondu correctement à la question.  Les valeurs valides sont ``"correct"``, ``"incorrect"`` et ``"unknown"``.  Vous pouvez définir ces valeurs dans le script.
* ``messages`` : Liste triée des messages qui apparaissent sous chaque champ de réponse de l'exercice. Vous pouvez l'utiliser pour donner des indices aux utilisateurs. Par exemple, si vous incluez ``messages[0] = "The capital of California is Sacramento"`` (La capitale de l'État de Californie est Sacramento), ce message apparaît sous le premier champ de réponse de l'exercice.
* ``overall_message`` : Message qui apparaît sous l'exercice (et non sous un champ de réponse spécifique). Vous pouvez l'utiliser pour donner un indice qui concerne l'exercice dans son ensemble plutôt qu'un champ de réponse particulier.

========================================================================
Créer un exercice avec évaluation personnalisée par Python au format de balise answer
========================================================================

Pour créer un exercice avec évaluation personnalisée par Python en utilisant une balise ``<answer>`` :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Custom Python-Evaluated Input** (Évaluation personnalisée par Python).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par le code suivant.
#. Cliquez sur **Enregistrer**.

.. code-block:: xml

    <problem>
        <p>Quelle est la somme de 2 et 3 ?</p>

        <customresponse expect="5">
        <textline math="1" />
        </customresponse>

        <answer>
    if answers[0] == expect:
        correct[0] = 'correct'
        overall_message = 'Bon travail !'
    else:
        correct[0] = 'incorrect'
        messages[0] = 'Cette réponse est incorrecte'
        overall_message = 'Veuillez réessayer'
        </answer>
    </problem>

Important : Python respecte certaines règles d'indentation. Dans la balise ``<answer>``, vous devez commencer votre script sans indentation.

.. _Script Tag Format:

**************************
Format de balise script
**************************

Le format de balise script englobe un script Python qui contient une "fonction de vérification" dans une balise ``<script>`` et ajoute l'attribut ``cfn`` de la balise ``<customresponse>`` afin de référencer cette fonction :

.. code-block:: xml

  <problem>

  <script type="loncapa/python">

  def test_add(expect, ans):
      try:
          a1=int(ans[0])
          a2=int(ans[1])
          return (a1+a2) == int(expect)
      except ValueError:
          return False

  def test_add_to_ten(expect, ans):
      return test_add(10, ans)

  </script>

  <p>Saisissez deux nombres entiers dont la somme est égale à 10. </p>
  <customresponse cfn="test_add_to_ten">
          <textline size="10"/><br/>
          <textline size="10/>
  </customresponse>

    </problem>

**Important** : Python respecte certaines règles d'indentation. Dans la balise ``<script>``, la ligne ``def check_func(expect, ans):`` ne doit contenir aucune indentation.

La fonction de **vérification** accepte deux arguments :

* ``expect`` correspond à la valeur de l'attribut ``expect`` de ``<customresponse>`` (si fourni)
* ``answer`` peut correspondre à :

    * La valeur de la réponse de l'étudiant, si l'exercice ne dispose que d'un champ de réponse.
    * La liste triée répertoriant les réponses de l'étudiant, si l'exercice comporte plusieurs champs de réponse.

La fonction de **vérification** peut renvoyer l'une ou l'autre des valeurs ci-après afin d'indiquer si la réponse de l'étudiant est correcte :

* ``True`` : Indique que l'étudiant a inséré une réponse correcte dans tous les champs de réponse.
* ``False`` : Indique que l'étudiant n'a pas répondu correctement. Tous les champs de réponse sont marqués comme étant incorrects.
* Un dictionnaire du type : ``{ 'ok': True, 'msg': 'Message' }``
  Si la valeur du dictionnaire pour ``ok`` est définie sur ``True``, tous les champs de réponse sont marqués comme étant corrects ; si elle est définie sur ``False``, tous les champs de réponse sont marqués comme étant incorrects. La valeur ``msg`` est affichée sous tous les champs de réponse et peut contenir des balises XHTML.
* Un dictionnaire du type 

.. code-block:: xml
      
    
    { 'overall_message': 'Overall message',
        'input_list': [
            { 'ok': True, 'msg': 'Feedback for input 1'},
            { 'ok': False, 'msg': 'Feedback for input 2'},
            ... ] }

Le dernier type est utile pour les réponses qui contiennent plusieurs champs de réponse. Vous pouvez ainsi présenter des commentaires pour chaque champ de réponse, individuellement, mais également envoyer un message qui s'applique à la réponse dans son ensemble.

Exemple d'une fonction de vérification :

.. code-block:: python

    def check_func(expect, answer_given):
        check1 = (int(answer_given[0]) == 1)
        check2 = (int(answer_given[1]) == 2)
        check3 = (int(answer_given[2]) == 3)
        return {'overall_message': 'Overall message',
                    'input_list': [
                        { 'ok': check1, 'msg': 'Feedback 1'},
                        { 'ok': check2, 'msg': 'Feedback 2'},
                        { 'ok': check3, 'msg': 'Feedback 3'} ] }

La fonction vérifie que l'utilisateur a entré ``1`` lors de la première saisie, ``2`` lors de la deuxième saisie et ``3`` lors de la troisième saisie. Elle présente des messages de commentaires pour chaque saisie individuelle, et permet également d'afficher un message sous l'exercice dans son ensemble.

========================================================================
Créer un exercice avec évaluation personnalisée par Python au format de balise script
========================================================================

Pour créer un exercice avec évaluation personnalisée par Python en utilisant une balise ``<script>`` :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Custom Python-Evaluated Input** (Évaluation personnalisée par Python).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par le code suivant.
#. Cliquez sur **Enregistrer**.

**Code d'exercice** :

.. code-block:: xml

  <problem>
  <p>Cette question comporte deux parties.</p>

  <script type="loncapa/python">

  def test_add(expect, ans):
      try:
          a1=int(ans[0])
          a2=int(ans[1])
          return (a1+a2) == int(expect)
      except ValueError:
          return False

  def test_add_to_ten(expect, ans):
      return test_add(10, ans)

  </script>

  <p>Partie 1 : Saisissez deux nombres entiers dont la somme est égale à 10. </p>
  <customresponse cfn="test_add_to_ten">
          <textline size="10" correct_answer="3" label="Integer #1"/><br/>
          <textline size="10" correct_answer="7" label="Integer #2"/>
  </customresponse>

  <p>Partie 2 : Saisissez deux nombres entiers dont la somme est égale à 20. </p>
  <customresponse cfn="test_add" expect="20">
          <textline size="10" label="Integer #1"/><br/>
          <textline size="10" label="Integer #2"/>
  </customresponse>

  <solution>
      <div class="detailed-solution">
          <p>Explication</p>
          <p>Pour la partie 1, deux nombres (quels qu'ils soient) de type <i>n</i> et <i>10-n</i>, où <i>n</i> est un nombre entier (n'importe lequel), sont acceptés. Une réponse possible serait constituée par la paire 0 et 10.</p>
          <p>Pour la partie 2, toute paire <i>x</i> et <i>20-x</i>, où <i>x</i> est un nombre réel (n'importe lequel) avec une représentation décimale finie, est acceptée. Les deux nombres doivent être saisis soit via une notation décimale standard soit via une notation exponentielle scientifique. Une réponse possible serait constituée par la paire 0,5 et 19,5. Une autre façon d'écrire cette réponse serait : 5e-1 et 1.95e1.</p>
      </div>
  </solution>
  </problem>

**Modèles**

Le modèle suivant inclut les réponses qui apparaissent lorsque l'étudiant clique sur **Afficher la réponse**. 

.. code-block:: xml

  <problem>

  <script type="loncapa/python">
  def test_add(expect,ans):
    a1=float(ans[0])
    a2=float(ans[1])
    return (a1+a2)== float(expect)
  </script>

  <p>Texte de l'exercice</p>
  <customresponse cfn="test_add" expect="20">
          <textline size="10" correct_answer="11" label="Integer #1"/><br/>
          <textline size="10" correct_answer="9" label="Integer #2"/>
  </customresponse>

      <solution>
          <div class="detailed-solution">
            <p>Solution or Explanation Heading</p>
            <p>Solution or explanation text</p>
          </div>
      </solution>
  </problem>

Le modèle suivant ne renvoie pas de réponses lorsque l'étudiant clique sur **Afficher la réponse**. Si votre exercice n'inclut pas de réponses que l'étudiant puisse visualiser, assurez-vous de définir **Afficher la réponse** sur **Jamais** dans le composant Exercice.

.. code-block:: xml

  <problem>

  <script type="loncapa/python">
  def test_add(expect,ans):
    a1=float(ans[0])
    a2=float(ans[1])
    return (a1+a2)== float(expect)
  </script>

  <p>Saisissez deux nombres entiers dont la somme est égale à 20 : </p>
  <customresponse cfn="test_add" expect="20">
          <textline size="10"  label="Integer #1"/><br/>
          <textline size="10"  label="Integer #2"/>
  </customresponse>

      <solution>
          <div class="detailed-solution">
            <p>Titre de la solution ou de l'explication</p>
            <p>Texte de la solution ou de l'explication</p>
          </div>
      </solution>
  </problem>