.. _Molecule Editor:

#######################
�diteur de mol�cules
#######################

Les �tudiants peuvent utiliser l'�diteur de mol�cules pour apprendre � cr�er des mol�cules. L'�diteur de mol�cules permet aux �tudiants de dessiner des mol�cules qui respectent les r�gles de formation de liaisons covalentes et de charges formelles, m�me si ces mol�cules sont chimiquement impossibles, qu'elles sont instables ou qu'elles n'existent pas dans les organismes vivants. L'�diteur de mol�cules avertit les �tudiants s'ils tentent de soumettre une structure chimiquement impossible.

L'�diteur de mol�cules comporte deux outils : l'�diteur de mol�cules JSME cr�� par Peter Erl et Bruno Bienfait, et une visionneuse mol�culaire JSmol, la version JavaScript de Jmol. (Vous n'avez pas besoin de t�l�charger l'un ou l'autre de ces outils ; Studio les utilise automatiquement.) Pour plus d'informations sur l'�diteur de mol�cules JSME, voir `�diteur de mol�cules JSME <http://peter-ertl.com/jsme/index.html>`_. Pour plus d'informations sur JSmol, voir `JSmol <http://sourceforge.net/projects/jsmol/>`_.

.. image:: /Images/Molecule_Editor.png
  :alt: Image de l'�diteur de mol�cules

.. _Create the Molecule Editor:

******************************
Cr�er l'�diteur de mol�cules
******************************

Pour cr�er un �diteur de mol�cules, vous aurez besoin des fichiers suivants :

* MoleculeAnswer.png
* MoleculeEditor_HTML.png
* dopamine.mol

Pour t�l�charger tous ces fichiers dans une archive .zip, rendez-vous sur le site http://files.edx.org/MoleculeEditorFiles.zip.

.. note:: La mol�cule qui appara�t lorsque l'outil est lanc� est une mol�cule de dopamine. Pour utiliser une mol�cule diff�rente, t�l�chargez le fichier .mol de cette mol�cule � partir de la `liste de mol�cules <http://www.biotopics.co.uk/jsmol/molecules/>`_ figurant sur le site Web `BioTopics <http://www.biotopics.co.uk/>`_. Ensuite, chargez le fichier .mol sur la page **Fichiers et uploads** de votre cours dans Studio, puis remplacez "dopamine.mol" dans le code pr�sent� en exemple par le nom de votre fichier .mol.

Pour cr�er l'�diteur de mol�cules qui appara�t dans l'image ci-dessus, vous devrez utiliser un composant HTML, puis un composant Exercice.

#. Chargez tous les fichiers r�pertori�s ci-dessus sur la page **Fichiers et uploads** dans votre cours.
#. Cr�ez le composant HTML.

  #. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **HTML** sous **Ajouter un nouveau composant**, puis sur **HTML**.
  #. Dans le composant qui appara�t, cliquez sur **�diter**.
  #. Dans l'�diteur de composant, collez le code du composant HTML pr�sent� ci-apr�s.
  #. Effectuez les modifications souhait�es, puis cliquez sur **Enregistrer**.

3. Cr�ez le composant Exercice.

  #. Sous le composant HTML, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis sur **Blank Advanced Problem** (Exercice avanc� vide).
  #. Dans le composant qui appara�t, cliquez sur **�diter**.
  #. Dans l'�diteur de composant, collez le code du composant Exercice pr�sent� ci-apr�s.
  #. Cliquez sur **Enregistrer**.

.. _EMC Problem Code:

========================
Code de l'�diteur de mol�cules
========================

Pour cr�er l'�diteur de mol�cules, vous devrez utiliser un composant HTML et un composant Exercice.

Code du composant HTML
***************************

.. code-block:: xml

  <h2>�diteur de mol�cules</h2>
  <p>L'�diteur de mol�cules facilite la cr�ation et la visualisation des mol�cules. Dans le cadre d'un exercice, un professeur de chimie peut vous demander d'�laborer une mol�cule et de soumettre votre proposition.</p>
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
  <div id="titleText">Utilisation de l'�diteur de mol�cules<a id="myHeader" href="javascript:toggle2('myContent','myHeader');">+ ouvrir </a></div>
  </div>
  <div id="contentDiv">
  <div id="myContent" style="display: none;">
  <p>Dans cet exercice, vous devrez modifier une mol�cule en utilisant le logiciel de dessin de mol�cules, pr�sent� ci-apr�s :</p>
  <img alt="" src="/static/MoleculeEditor_HTML.png" /></div>
  </div>
  <p>&nbsp;</p>
  <div id="headerDiv">
  <div id="titleText">Les mol�cules que j'ai dessin�es sont-elles chimiquement possibles ?<a id="IntroductionHeader" href="javascript:toggle2('IntroductionContent','IntroductionHeader');">+ ouvrir </a></div>
  </div>
  <div id="contentDiv">
  <div id="IntroductionContent" style="display: none;">
  <p>L'�diteur chimique que vous utilisez permet de garantir que les structures que vous dessinez sont correctes (au sens strict), et qu'elles respectent les r�gles de formation de liaisons covalentes et de charges formelles. Toutefois, de nombreuses structures respectent ces r�gles, mais sont chimiquement impossibles, instables, n'existent pas dans les organismes vivants ou ne s'inscrivent pas dans le cadre de ce cours. L'�diteur vous permettra de les dessiner car, � la diff�rence des r�gles de charges formelles, ces propri�t�s ne peuvent pas �tre pr�dites facilement et de mani�re fiable � partir des structures.</p>
  <p>Si vous soumettez une structure contenant des atomes qui ne sont pas possibles ou qui ne s'inscrivent pas dans le cadre de ce cours, le logiciel vous avertira sp�cifiquement � propos de ces parties de votre structure. Vous pourrez alors modifier votre structure et la soumettre une nouvelle fois. La soumission d'une structure d�fectueuse ne sera pas comptabilis�e comme l'une de vos tentatives. En g�n�ral, nous vous recommandons de tenter d'utiliser uniquement les atomes cit�s le plus fr�quemment dans ce cours : C, H, N, O, P et S. Si vous souhaitez avoir plus d'informations sur les charges formelles, vous pouvez vous exercer avec d'autres atomes ou des configurations exceptionnelles, et observer les structures qui en r�sultent.</p>
  </div>
  </div>
  <div id="ap_listener_added">&nbsp;</div>




Code du composant Exercice
***************************

.. code-block:: xml

  <problem>
  <p>La mol�cule de dopamine, telle que pr�sent�e, ne peut pas cr�er de liaisons ioniques. Modifiez la mol�cule de dopamine afin qu'elle puisse cr�er des liaisons ioniques.</p>
  <p>Lorsque votre r�ponse vous satisfait, cliquez sur Valider. Si vous devez recommencer, cliquez sur R�initialiser.</p>
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
  <p>La mol�cule de dopamine, telle que pr�sent�e, ne peut pas cr�er de liaisons hydrog�ne fortes. Modifiez la mol�cule de dopamine afin qu'elle puisse cr�er des liaisons hydrog�ne fortes.</p>
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
  <p>La mol�cule de dopamine pr�sente une hydrophobie interm�diaire. Modifiez la mol�cule de dopamine afin qu'elle soit plus hydrophobe.</p>
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
