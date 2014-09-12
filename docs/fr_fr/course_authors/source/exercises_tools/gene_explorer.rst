.. _Gene Explorer:

##################
Gene Explorer
##################

L'application Gene Explorer (GeneX), du d�partement de biologie de `UMB <http://www.umb.edu/>`_, simule la transcription, l'�pissage, la maturation et la traduction d'un petit g�ne eucaryote hypoth�tique. GeneX permet aux �tudiants de proc�der � des mutations sp�cifiques dans une s�quence g�nique, puis calcule et affiche les effets des mutations sur l'ARNm et les prot�ines. 

L'application Gene Explorer effectue en particulier les op�rations suivantes :

#. Identifie le promoteur et le terminateur
#. Lit la s�quence d'ADN afin de produire le pr�-ARNm
#. Identifie les sites d'�pissage
#. R�alise l'�pissage de l'ARNm et ajoute la queue
#. Identifie le codon initiateur
#. Traduit l'ARNm

.. image:: /Images/GeneExplorer.png
  :alt: Image de Gene Explorer

Pour plus d'informations sur l'application Gene Explorer, voir la page `The Gene Explorer <http://intro.bio.umb.edu/GX/>`_.

********************
Code de l'application Gene Explorer
********************

.. code-block:: xml

  <problem>
  <p>Effectuez une mutation par substitution d'une paire de bases simples dans le g�ne ci-dessous. Il en r�sulte une prot�ine plus longue que la prot�ine produite par le g�ne d'origine. Lorsque les modifications effectu�es et leurs effets vous semblent satisfaisants, cliquez sur le bouton <b>SOUMETTRE</b> .</p>
  <p>Notez qu'une "mutation par substitution d'une paire de bases simples" correspond � la modification d'une base simple en une autre base ; par exemple, la modification de A en position 80 en T. Les d�l�tions et les insertions ne sont pas autoris�es.</p>
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

* **width** et **height** sp�cifient les dimensions de l'application (en pixels).
* **genex_dna_sequence** est la s�quence d'ADN par d�faut qui appara�t � l'ouverture de l'exercice.
* **dna_sequence** contient l'�tat de l'application et la r�ponse de l'�tudiant. Cette valeur doit �tre identique � la valeur **genex_dna_sequence**. 
* **genex_problem_number** sp�cifie le chiffre associ� � l'exercice. Ce chiffre est d�fini en fonction des cinq exercices de l'�diteur de g�nes, inclus dans le cours MITx 7.00x. Par exemple, si vous souhaitez que cet exercice soit similaire au deuxi�me exercice du cours 7.00x, vous devrez d�finir la valeur **genex_problem_number** sur 2. Ce chiffre doit �tre �gal � 1, 2, 3, 4 ou 5.