.. _Write Your Own Grader:

##############################
Exercice avec �laboration d'un syst�me d'�valuation personnalis�
##############################

Dans les exercices avec �valuation personnalis�e par Python (�galement appel�s exercices avec �laboration d'un syst�me d'�valuation personnalis�), l'�valuateur utilise un script Python que vous cr�ez et int�grez dans l'exercice afin d'�valuer la r�ponse de l'�tudiant ou de fournir des indices. Ces probl�mes peuvent �tre de tout type. Les exercices associant saisie de chiffres et de donn�es sont les exercices int�grant l'�laboration d'un syst�me d'�valuation personnalis� les plus courants.

.. image:: /Images/CustomPythonExample.png
 :alt: Image d'un exercice avec �laboration d'un syst�me d'�valuation personnalis�

Les exercices avec �valuation personnalis�e par Python peuvent inclure les types d'exercices suivants :

* :ref:`�quation chimique`
* :ref:`Code JavaScript personnalis�`
* :ref:`Gene Explorer`
* :ref:`�diteur de mol�cules`
* :ref:`Syst�me d'�laboration de prot�ines`

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

Vous pouvez cr�er l'un de ces exercices dans :ref:`Format de balise answer` ou :ref:`Format de balise script`.

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
      messages[0] = 'Cette r�ponse est incorrecte'
      overall_message = 'Veuillez r�essayer'
  </answer>

Important : Python respecte certaines r�gles d'indentation. Dans la balise ``<answer>``, vous devez commencer votre script sans indentation.

Le script Python interagit avec ces variables dans un contexte global :

* ``answers`` : Liste tri�e r�pertoriant les r�ponses fournies par l'�tudiant. Par exemple, si l'�tudiant a r�pondu ``6``, ``answers[0]`` sera �gal � ``6``.
* ``expect`` : Valeur de l'attribut ``expect`` de ``<customresponse>`` (si fourni).
* ``correct`` : Liste tri�e des cha�nes indiquant si l'�tudiant a r�pondu correctement � la question.  Les valeurs valides sont ``"correct"``, ``"incorrect"`` et ``"unknown"``.  Vous pouvez d�finir ces valeurs dans le script.
* ``messages`` : Liste tri�e des messages qui apparaissent sous chaque champ de r�ponse de l'exercice. Vous pouvez l'utiliser pour donner des indices aux utilisateurs. Par exemple, si vous incluez ``messages[0] = "The capital of California is Sacramento"`` (La capitale de l'�tat de Californie est Sacramento), ce message appara�t sous le premier champ de r�ponse de l'exercice.
* ``overall_message`` : Message qui appara�t sous l'exercice (et non sous un champ de r�ponse sp�cifique). Vous pouvez l'utiliser pour donner un indice qui concerne l'exercice dans son ensemble plut�t qu'un champ de r�ponse particulier.

========================================================================
Cr�er un exercice avec �valuation personnalis�e par Python au format de balise answer
========================================================================

Pour cr�er un exercice avec �valuation personnalis�e par Python en utilisant une balise ``<answer>`` :

#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Custom Python-Evaluated Input** (�valuation personnalis�e par Python).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez l'exemple de code par le code suivant.
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
        messages[0] = 'Cette r�ponse est incorrecte'
        overall_message = 'Veuillez r�essayer'
        </answer>
    </problem>

Important : Python respecte certaines r�gles d'indentation. Dans la balise ``<answer>``, vous devez commencer votre script sans indentation.

.. _Script Tag Format:

**************************
Format de balise script
**************************

Le format de balise script englobe un script Python qui contient une "fonction de v�rification" dans une balise ``<script>`` et ajoute l'attribut ``cfn`` de la balise ``<customresponse>`` afin de r�f�rencer cette fonction :

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

  <p>Saisissez deux nombres entiers dont la somme est �gale � 10. </p>
  <customresponse cfn="test_add_to_ten">
          <textline size="10"/><br/>
          <textline size="10/>
  </customresponse>

    </problem>

**Important** : Python respecte certaines r�gles d'indentation. Dans la balise ``<script>``, la ligne ``def check_func(expect, ans):`` ne doit contenir aucune indentation.

La fonction de **v�rification** accepte deux arguments :

* ``expect`` correspond � la valeur de l'attribut ``expect`` de ``<customresponse>`` (si fourni)
* ``answer`` peut correspondre � :

    * La valeur de la r�ponse de l'�tudiant, si l'exercice ne dispose que d'un champ de r�ponse.
    * La liste tri�e r�pertoriant les r�ponses de l'�tudiant, si l'exercice comporte plusieurs champs de r�ponse.

La fonction de **v�rification** peut renvoyer l'une ou l'autre des valeurs ci-apr�s afin d'indiquer si la r�ponse de l'�tudiant est correcte :

* ``True`` : Indique que l'�tudiant a ins�r� une r�ponse correcte dans tous les champs de r�ponse.
* ``False`` : Indique que l'�tudiant n'a pas r�pondu correctement. Tous les champs de r�ponse sont marqu�s comme �tant incorrects.
* Un dictionnaire du type : ``{ 'ok': True, 'msg': 'Message' }``
  Si la valeur du dictionnaire pour ``ok`` est d�finie sur ``True``, tous les champs de r�ponse sont marqu�s comme �tant corrects ; si elle est d�finie sur ``False``, tous les champs de r�ponse sont marqu�s comme �tant incorrects. La valeur ``msg`` est affich�e sous tous les champs de r�ponse et peut contenir des balises XHTML.
* Un dictionnaire du type 

.. code-block:: xml
      
    
    { 'overall_message': 'Overall message',
        'input_list': [
            { 'ok': True, 'msg': 'Feedback for input 1'},
            { 'ok': False, 'msg': 'Feedback for input 2'},
            ... ] }

Le dernier type est utile pour les r�ponses qui contiennent plusieurs champs de r�ponse. Vous pouvez ainsi pr�senter des commentaires pour chaque champ de r�ponse, individuellement, mais �galement envoyer un message qui s'applique � la r�ponse dans son ensemble.

Exemple d'une fonction de v�rification :

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

La fonction v�rifie que l'utilisateur a entr� ``1`` lors de la premi�re saisie, ``2`` lors de la deuxi�me saisie et ``3`` lors de la troisi�me saisie. Elle pr�sente des messages de commentaires pour chaque saisie individuelle, et permet �galement d'afficher un message sous l'exercice dans son ensemble.

========================================================================
Cr�er un exercice avec �valuation personnalis�e par Python au format de balise script
========================================================================

Pour cr�er un exercice avec �valuation personnalis�e par Python en utilisant une balise ``<script>`` :

#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Custom Python-Evaluated Input** (�valuation personnalis�e par Python).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez l'exemple de code par le code suivant.
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

  <p>Partie 1 : Saisissez deux nombres entiers dont la somme est �gale � 10. </p>
  <customresponse cfn="test_add_to_ten">
          <textline size="10" correct_answer="3" label="Integer #1"/><br/>
          <textline size="10" correct_answer="7" label="Integer #2"/>
  </customresponse>

  <p>Partie 2 : Saisissez deux nombres entiers dont la somme est �gale � 20. </p>
  <customresponse cfn="test_add" expect="20">
          <textline size="10" label="Integer #1"/><br/>
          <textline size="10" label="Integer #2"/>
  </customresponse>

  <solution>
      <div class="detailed-solution">
          <p>Explication</p>
          <p>Pour la partie 1, deux nombres (quels qu'ils soient) de type <i>n</i> et <i>10-n</i>, o� <i>n</i> est un nombre entier (n'importe lequel), sont accept�s. Une r�ponse possible serait constitu�e par la paire 0 et 10.</p>
          <p>Pour la partie 2, toute paire <i>x</i> et <i>20-x</i>, o� <i>x</i> est un nombre r�el (n'importe lequel) avec une repr�sentation d�cimale finie, est accept�e. Les deux nombres doivent �tre saisis soit via une notation d�cimale standard soit via une notation exponentielle scientifique. Une r�ponse possible serait constitu�e par la paire 0,5 et 19,5. Une autre fa�on d'�crire cette r�ponse serait : 5e-1 et 1.95e1.</p>
      </div>
  </solution>
  </problem>

**Mod�les**

Le mod�le suivant inclut les r�ponses qui apparaissent lorsque l'�tudiant clique sur **Afficher la r�ponse**. 

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

Le mod�le suivant ne renvoie pas de r�ponses lorsque l'�tudiant clique sur **Afficher la r�ponse**. Si votre exercice n'inclut pas de r�ponses que l'�tudiant puisse visualiser, assurez-vous de d�finir **Afficher la r�ponse** sur **Jamais** dans le composant Exercice.

.. code-block:: xml

  <problem>

  <script type="loncapa/python">
  def test_add(expect,ans):
    a1=float(ans[0])
    a2=float(ans[1])
    return (a1+a2)== float(expect)
  </script>

  <p>Saisissez deux nombres entiers dont la somme est �gale � 20 : </p>
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