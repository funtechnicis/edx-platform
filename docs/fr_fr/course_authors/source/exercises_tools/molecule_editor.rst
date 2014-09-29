.. _Éditeur de molécules:

####################
Éditeur de molécules
####################

Les étudiants peuvent utiliser l'éditeur de molécules pour apprendre à créer des molécules. L'éditeur de molécules permet aux étudiants de dessiner des molécules qui respectent les règles de formation de liaisons covalentes et de charges formelles, même si ces molécules sont chimiquement impossibles, qu'elles sont instables ou qu'elles n'existent pas dans les organismes vivants. L'éditeur de molécules avertit les étudiants s'ils tentent de soumettre une structure chimiquement impossible.

L'éditeur de molécules comporte deux outils : l'éditeur de molécules JSME créé par Peter Erl et Bruno Bienfait, et une visionneuse moléculaire JSmol, la version JavaScript de Jmol. (Vous n'avez pas besoin de télécharger l'un ou l'autre de ces outils ; Studio les utilise automatiquement.) Pour plus d'informations sur l'éditeur de molécules JSME, voir `Éditeur de molécules JSME <http://peter-ertl.com/jsme/index.html>`_. Pour plus d'informations sur JSmol, voir `JSmol <http://sourceforge.net/projects/jsmol/>`_.

.. image:: /Images/Molecule_Editor.png
  :alt: Image de l'éditeur de molécules

.. _Create the Molecule Editor:

****************************
Créer l'éditeur de molécules
****************************

Pour créer un éditeur de molécules, vous aurez besoin des fichiers suivants :

* MoleculeAnswer.png
* MoleculeEditor_HTML.png
* dopamine.mol

Pour télécharger tous ces fichiers dans une archive .zip, rendez-vous sur le site http://files.edx.org/MoleculeEditorFiles.zip.

.. note:: La molécule qui apparaît lorsque l'outil est lancé est une molécule de dopamine. Pour utiliser une molécule différente, téléchargez le fichier .mol de cette molécule à partir de la `liste de molécules <http://www.biotopics.co.uk/jsmol/molecules/>`_ figurant sur le site Web `BioTopics <http://www.biotopics.co.uk/>`_. Ensuite, chargez le fichier .mol sur la page **Fichiers et uploads** de votre cours dans Studio, puis remplacez "dopamine.mol" dans le code présenté en exemple par le nom de votre fichier .mol.

Pour créer l'éditeur de molécules qui apparaît dans l'image ci-dessus, vous devrez utiliser un composant HTML, puis un composant Exercice.

#. Chargez tous les fichiers répertoriés ci-dessus sur la page **Fichiers et uploads** dans votre cours.
#. Créez le composant HTML.

  #. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **HTML** sous **Ajouter un nouveau composant**, puis sur **HTML**.
  #. Dans le composant qui apparaît, cliquez sur **Éditer**.
  #. Dans l'éditeur de composant, collez le code du composant HTML présenté ci-après.
  #. Effectuez les modifications souhaitées, puis cliquez sur **Enregistrer**.

3. Créez le composant Exercice.

  #. Sous le composant HTML, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis sur **Blank Advanced Problem** (Exercice avancé vide).
  #. Dans le composant qui apparaît, cliquez sur **Éditer**.
  #. Dans l'éditeur de composant, collez le code du composant Exercice présenté ci-après.
  #. Cliquez sur **Enregistrer**.

.. _EMC Problem Code:

==============================
Code de l'éditeur de molécules
==============================

Pour créer l'éditeur de molécules, vous devrez utiliser un composant HTML et un composant Exercice.

Code du composant HTML
***************************

.. code-block:: xml

  <h2>Éditeur de molécules</h2>
  <p>L'éditeur de molécules facilite la création et la visualisation des molécules. Dans le cadre d'un exercice, un professeur de chimie peut vous demander d'élaborer une molécule et de soumettre votre proposition.</p>
  <div>
  <script type="text/javascript">// <![CDATA[
  function toggle2(showHideDiv, switchTextDiv) {
              var ele = document.getElementById(showHideDiv);
              var text = document.getElementById(switchTextDiv);
              if(ele.style.display == "block") {
                  ele.style.display = "none";
                  text.innerHTML = "+ open";
                  }
              else {
                  ele.style.display = "block";
                  text.innerHTML = "- close";
              }
          }
  // ]]></script>
  </div>
  <div>
  <style type="text/css"></style>
  </div>
  <div id="headerDiv">
  <div id="titleText">Utilisation de l'éditeur de molécules<a id="myHeader" href="javascript:toggle2('myContent','myHeader');">+ ouvrir </a></div>
  </div>
  <div id="contentDiv">
  <div id="myContent" style="display: none;">
  <p>Dans cet exercice, vous devrez modifier une molécule en utilisant le logiciel de dessin de molécules, présenté ci-après :</p>
  <img alt="" src="/static/MoleculeEditor_HTML.png" /></div>
  </div>
  <p>&nbsp;</p>
  <div id="headerDiv">
  <div id="titleText">Les molécules que j'ai dessinées sont-elles chimiquement possibles ?<a id="IntroductionHeader" href="javascript:toggle2('IntroductionContent','IntroductionHeader');">+ ouvrir </a></div>
  </div>
  <div id="contentDiv">
  <div id="IntroductionContent" style="display: none;">
  <p>L'éditeur chimique que vous utilisez permet de garantir que les structures que vous dessinez sont correctes (au sens strict), et qu'elles respectent les règles de formation de liaisons covalentes et de charges formelles. Toutefois, de nombreuses structures respectent ces règles, mais sont chimiquement impossibles, instables, n'existent pas dans les organismes vivants ou ne s'inscrivent pas dans le cadre de ce cours. L'éditeur vous permettra de les dessiner car, à la différence des règles de charges formelles, ces propriétés ne peuvent pas être prédites facilement et de manière fiable à partir des structures.</p>
  <p>Si vous soumettez une structure contenant des atomes qui ne sont pas possibles ou qui ne s'inscrivent pas dans le cadre de ce cours, le logiciel vous avertira spécifiquement à propos de ces parties de votre structure. Vous pourrez alors modifier votre structure et la soumettre une nouvelle fois. La soumission d'une structure défectueuse ne sera pas comptabilisée comme l'une de vos tentatives. En général, nous vous recommandons de tenter d'utiliser uniquement les atomes cités le plus fréquemment dans ce cours : C, H, N, O, P et S. Si vous souhaitez avoir plus d'informations sur les charges formelles, vous pouvez vous exercer avec d'autres atomes ou des configurations exceptionnelles, et observer les structures qui en résultent.</p>
  </div>
  </div>
  <div id="ap_listener_added">&nbsp;</div>




Code du composant Exercice
***************************

.. code-block:: xml

  <problem>
  <p>La molécule de dopamine, telle que présentée, ne peut pas créer de liaisons ioniques. Modifiez la molécule de dopamine afin qu'elle puisse créer des liaisons ioniques.</p>
  <p>Lorsque votre réponse vous satisfait, cliquez sur Valider. Si vous devez recommencer, cliquez sur Réinitialiser.</p>
    <script type="loncapa/python">
  def check1(expect, ans):
      import json
      mol_info = json.loads(ans)["info"]
      return any(res == "Can Make Ionic Bonds" for res in mol_info)
      </script>
    <customresponse cfn="check1">
      <editamoleculeinput file="/static/dopamine.mol">
          </editamoleculeinput>
    </customresponse>
    <solution>
      <img src="/static/MoleculeAnswer.png"/>
    </solution>
  </problem>

**Exercice 2**

::

  <problem>
  <p>La molécule de dopamine, telle que présentée, ne peut pas créer de liaisons hydrogène fortes. Modifiez la molécule de dopamine afin qu'elle puisse créer des liaisons hydrogène fortes.</p>
  <script type="loncapa/python">
  def grader_1(expect, ans):
      import json
      mol_info = json.loads(ans)["info"]
      return any(res == "Cannot Make Strong Hydrogen Bonds" for res in mol_info)
  </script>
    <customresponse cfn="grader_1">
      <editamoleculeinput file="/static/dopamine.mol">
      </editamoleculeinput>
    </customresponse>
  </problem>

**Exercice 3**

::

  <problem>
  <p>La molécule de dopamine présente une hydrophobie intermédiaire. Modifiez la molécule de dopamine afin qu'elle soit plus hydrophobe.</p>
  <script type="loncapa/python">
  def grader_2(expect, ans):
      import json
      mol_info = json.loads(ans)["info"]

      hydrophobicity_index_str=mol_info[0]
      hydrophobicity_index=float(hydrophobicity_index_str[23:])
      return hydrophobicity_index &gt; .490
  </script>
    <customresponse cfn="grader_2">
      <editamoleculeinput file="/static/dopamine.mol">
      </editamoleculeinput>
  </customresponse>
  </problem>
