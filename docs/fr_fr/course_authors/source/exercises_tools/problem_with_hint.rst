.. _Problem with Adaptive Hint:

################################
Exercice avec indice adaptatif
################################

Lors d'un exercice avec indice adaptatif, la réponse d'un étudiant est évaluée. L'étudiant reçoit alors des commentaires ou un indice en fonction de sa réponse. Cela permet d'augmenter ses chances de répondre correctement à la prochaine tentative. Ces exercices peuvent être des exercices avec saisie de texte.

.. image:: /Images/ProblemWithAdaptiveHintExample.png
 :alt: Image d'un exercice avec indice adaptatif

******************************************
Créer un exercice avec indice adaptatif
******************************************

Pour créer l'exercice mentionné ci-dessus :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Problem with Adaptive Hint** (Exercice avec indice adaptatif).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par le code ci-après.
#. Cliquez sur **Enregistrer**.

.. code-block:: xml

    <problem>
	    <text>
	        <script type="text/python" system_path="python_lib">
	def test_str(expect, ans):
	  print expect, ans
	  ans = ans.strip("'")
	  ans = ans.strip('"')
	  return expect == ans.lower()

	def hint_fn(answer_ids, student_answers, new_cmap, old_cmap):
	  aid = answer_ids[0]
	  ans = str(student_answers[aid]).lower()
	  print 'hint_fn called, ans=', ans
	  hint = ''
	  if '10' in ans:
	     hint = 'Si la balle coûte 10 cents et que la batte coûte un dollar de plus que la balle, combien coûte la batte ? Si cette somme représente le coût de la batte, combien coûtent la balle et la batte comptabilisées ensemble ?'
	  elif '.05' in ans:
	     hint = 'Vous devrez indiquer la somme sous forme de nombre entier, en cents.'

	  if hint:
	    hint = "&lt;font color='blue'&gt;Hint: {0}&lt;/font&gt;".format(hint)
	    new_cmap.set_hint_and_mode(aid,hint,'always')
	        </script>
	        <p>Si une batte et une balle comptabilisées ensemble coûtent 1,10 dollar et que la batte coûte un dollar de plus que la balle, combien coûte la balle ? Exprimez votre réponse en cents et n'indiquez que le chiffre (c'est-à-dire : n'utilisez ni le symbole $ ni le symbole ¢).</p>
	        <p>
	            <customresponse cfn="test_str" expect="5">
	                <textline correct_answer="5" label="Combien la balle coûte-t-elle ?"/>
	                <hintgroup hintfn="hint_fn"/>
	            </customresponse>
	        </p>
	    </text>
    </problem>

.. _Problem with Adaptive Hint XML:

*********************************
Exercice avec indice adaptatif - Format XML
*********************************

========
Modèle
========

.. code-block:: xml

	<problem>
	  <text>
	    <script type="text/python" system_path="python_lib">
	def test_str(expect, ans):
	  print expect, ans
	  ans = ans.strip("'")
	  ans = ans.strip('"')
	  return expect == ans.lower()

	def hint_fn(answer_ids, student_answers, new_cmap, old_cmap):
	  aid = answer_ids[0]
	  ans = str(student_answers[aid]).lower()
	  print 'hint_fn called, ans=', ans
	  hint = ''
	  if 'incorrect answer 1' in ans:
	     hint = 'hint for incorrect answer 1'
	  elif 'incorrect answer 2' in ans:
	     hint = 'hint for incorrect answer 2'

	  if hint:
	    hint = "&lt;font color='blue'&gt;Hint: {0}&lt;/font&gt;".format(hint)
	    new_cmap.set_hint_and_mode(aid,hint,'always')
	</script>
	    <p>TEXTE DE L'EXERCICE</p>
	    <p>
	      <customresponse cfn="test_str" expect="ANSWER">
	        <textline correct_answer="answer" label="LABEL TEXT"/>
	        <hintgroup hintfn="hint_fn"/>
	      </customresponse>
	    </p>
	  </text>
	</problem>

.. note:: Si les indices que vous fournissez présentent des caractères, les lettres doivent être des minuscules.

========
Balises
========

* ``<text>`` : Encadre le script et le texte de l'exercice.
* ``<customresponse>`` : Indique que la réponse au problème posé par cet exercice est personnalisée.
* ``<textline>`` : Crée un champ de réponse dans le LMS. L'étudiant peut y saisir sa réponse.
* ``<hintgroup>`` : Spécifie que l'exercice contient au moins un indice.

**Balise :** ``<customresponse>``

  Attributs

  (aucun)

  Enfants

     * ``<textline>``
     * ``<hintgroup>``

**Balise :** ``<textline>``

  Attributs

  .. list-table::
     :widths: 20 80
     :header-rows: 1

     * - Attribut
       - Description
     * - label (obligatoire)
       - Contient le texte de l'exercice.
     * - size (facultatif)
       - Spécifie les dimensions, en caractères, du champ de réponse dans le LMS.
     * - hidden (facultatif)
       - Si la valeur est définie sur "true", les étudiants ne peuvent pas voir le champ de réponse.
     * - correct_answer (facultatif)
       - Réponse de l'exercice. Pour présenter une valeur correct_answer
         comportant des lettres, toutes les lettres **doivent être des minuscules**. (Les réponses que les étudiants
         présentent pour l'exercice ne sont pas sensibles à la casse. Elles peuvent donc contenir
         des majuscules et des minuscules.)

  Enfants
  
  (aucun)

**Balise :** ``<hintgroup>``

  Attributs

  .. list-table::
     :widths: 20 80
     :header-rows: 1

     * - Attribut
       - Description
     * - hintfn
       - Doit être défini sur **hint_fn** (c'est-à-dire que la balise doit apparaître comme suit : ``<hintgroup hintfn="hint_fn"/>``).