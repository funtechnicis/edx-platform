.. _Gene Explorer:

#############
Gene Explorer
#############

L'application Gene Explorer (GeneX), du département de biologie de `UMB <http://www.umb.edu/>`_, simule la transcription, l'épissage, la maturation et la traduction d'un petit gène eucaryote hypothétique. GeneX permet aux étudiants de procéder à des mutations spécifiques dans une séquence génique, puis calcule et affiche les effets des mutations sur l'ARNm et les protéines. 

L'application Gene Explorer effectue en particulier les opérations suivantes :

#. Identifie le promoteur et le terminateur
#. Lit la séquence d'ADN afin de produire le pré-ARNm
#. Identifie les sites d'épissage
#. Réalise l'épissage de l'ARNm et ajoute la queue
#. Identifie le codon initiateur
#. Traduit l'ARNm

.. image:: /Images/GeneExplorer.png
  :alt: Image de Gene Explorer

Pour plus d'informations sur l'application Gene Explorer, voir la page `The Gene Explorer <http://intro.bio.umb.edu/GX/>`_.

***********************************
Code de l'application Gene Explorer
***********************************

.. code-block:: xml

  <problem>
  <p>Effectuez une mutation par substitution d'une paire de bases simples dans le gène ci-dessous. Il en résulte une protéine plus longue que la protéine produite par le gène d'origine. Lorsque les modifications effectuées et leurs effets vous semblent satisfaisants, cliquez sur le bouton <b>SOUMETTRE</b> .</p>
  <p>Notez qu'une "mutation par substitution d'une paire de bases simples" correspond à la modification d'une base simple en une autre base ; par exemple, la modification de A en position 80 en T. Les délétions et les insertions ne sont pas autorisées.</p>
  <script type="loncapa/python">
  def genex_grader(expect,ans):
      if ans=="CORRECT": return True
      import json
      ans=json.loads(ans)
      return ans["genex_answer"]=="CORRECT"
  </script>
  <customresponse cfn="genex_grader">
  <editageneinput width="818" height="1000" dna_sequence="TAAGGCTATAACCGAGATTGATGCCTTGTGCGATAAGGTGTGTCCCCCCCCAAAGTGTCGGATGTCGAGTGCGCGTGCAAAAAAAAACAAAGGCGAGGACCTTAAGAAGGTGTGAGGGGGCGCTCGAT" genex_dna_sequence="TAAGGCTATAACCGAGATTGATGCCTTGTGCGATAAGGTGTGTCCCCCCCCAAAGTGTCGGATGTCGAGTGCGCGTGCAAAAAAAAACAAAGGCGAGGACCTTAAGAAGGTGTGAGGGGGCGCTCGAT" genex_problem_number="2"/>
  </customresponse>
  </problem>

Dans ce code :

* **width** et **height** spécifient les dimensions de l'application (en pixels).
* **genex_dna_sequence** est la séquence d'ADN par défaut qui apparaît à l'ouverture de l'exercice.
* **dna_sequence** contient l'état de l'application et la réponse de l'étudiant. Cette valeur doit être identique à la valeur **genex_dna_sequence**. 
* **genex_problem_number** spécifie le chiffre associé à l'exercice. Ce chiffre est défini en fonction des cinq exercices de l'éditeur de gènes, inclus dans le cours MITx 7.00x. Par exemple, si vous souhaitez que cet exercice soit similaire au deuxième exercice du cours 7.00x, vous devrez définir la valeur **genex_problem_number** sur 2. Ce chiffre doit être égal à 1, 2, 3, 4 ou 5.
