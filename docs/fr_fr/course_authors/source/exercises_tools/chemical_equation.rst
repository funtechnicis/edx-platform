.. _Chemical Equation:

################################
Exercice avec �quations chimiques
################################

Dans l'exercice avec �quations chimiques, l'�tudiant peut saisir, dans une zone d�di�e, un texte qui repr�sente une �quation chimique. Le syst�me convertit alors ce texte en une �quation chimique et l'ins�re sous la zone de texte. L'�valuateur �value la r�ponse de l'�tudiant en utilisant un script Python que vous cr�ez et int�grez dans l'exercice.

.. image:: /Images/ChemicalEquationExample.png
 :alt: Image d'un exercice avec �quations chimiques

************************************
Cr�er un exercice avec �quations chimiques
************************************

Les exercices impliquant des �quations chimiques utilisent MathJax pour cr�er des formules. Pour plus d'informations sur l'utilisation de MathJax dans Studio, voir :ref:`Introduction � l'utilisation de MathJax dans Studio`.

Pour cr�er l'exercice avec �quations chimiques mentionn� ci-dessus :

#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Blank Advanced Problem** (Exercice avanc� vide).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, collez le code pr�sent� ci-apr�s.
#. Cliquez sur **Enregistrer**.

==========================================
Exemple de code pour un exercice avec �quations chimiques
==========================================

.. code-block:: xml

  <problem>
    <startouttext/>
    <p>Certains exercices font r�f�rence � une �quation chimique particuli�re. Entra�nez-vous en �crivant la r�action suivante dans la zone ci-dessous.</p>
    
  \( \text{H}_2\text{SO}_4 \longrightarrow \text { H}^+ + \text{ HSO}_4^-\)

    <customresponse>
      <chemicalequationinput size="50" label="Enter the chemical equation"/>
      <answer type="loncapa/python">

  if chemcalc.chemical_equations_equal(submission[0], 'H2SO4 -> H^+ + HSO4^-'):
      correct = ['correct']
  else:
      correct = ['incorrect']

      </answer>
    </customresponse>
    <p>Quelques astuces :</p>
    <ul>
    <li>Utilisez les symboles d'�l�ments r�els.</li>
    <li>Cr�ez des indices en utilisant un texte brut..</li>
    <li>Cr�ez des exposants en utilisant un signe insertion (caret). (^).</li>
    <li>Cr�ez la fl�che de la r�action (\(\longrightarrow\)) en utilisant "->".</li>
    </ul>

    <endouttext/>
  
   <solution>
   <div class="detailed-solution">
   <p>Solution</p>
   <p>Pour cr�er cette �quation, saisissez :</p>
     <p>H2SO4 -> H^+ + HSO4^-</p>
   </div>
   </solution>
  </problem>

.. _Chemical Equation Problem XML:

************************************
Exercice avec �quations chimiques - Format XML
************************************

============
Mod�le
============

.. code-block:: xml

  <problem>
    <startouttext/>
    <p>Texte de l'exercice</p>

    <customresponse>
      <chemicalequationinput size="NUMBER" label="LABEL TEXT"/>
      <answer type="loncapa/python">

  if chemcalc.chemical_equations_equal(submission[0], 'TEXT REPRESENTING CHEMICAL EQUATION'):
      correct = ['correct']
  else:
      correct = ['incorrect']

      </answer>
    </customresponse>

    <endouttext/>
  
   <solution>
   <div class="detailed-solution">
   <p>Titre de la solution ou de l'explication</p>
   <p>Texte de la solution ou de l'explication</p>
   </div>
   </solution>
  </problem>

======
Balises
======

* ``<customresponse>`` : Indique que la r�ponse au probl�me pos� par cet exercice est personnalis�e. 
* ``<chemicalequationinput>`` : Sp�cifie que la r�ponse de cet exercice est une �quation chimique. 
* ``<answer type=loncapa/python>`` : Contient le script Python qui permet de noter l'exercice.

**Balise :** ``<customresponse>``

Indique que la r�ponse au probl�me pos� par cet exercice est personnalis�e. Les balises ``<customresponse>`` doivent encadrer les balises ``<chemicalequation>``.

  Attributs

  (aucun)

  Enfants

  * ``<chemicalequationinput>``
  * ``<answer>``

**Balise :** ``<chemicalequationinput>``

Indique que la r�ponse de cet exercice est une �quation chimique et cr�e un champ de r�ponse dans lequel l'�tudiant saisit sa r�ponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - size 
       - Sp�cifie la taille du champ de la r�ponse (nombre de caract�res).
     * - label (obligatoire)
       - Contient le texte de la question principale de l'exercice.

  Enfants
  
  (aucun)

**Balise :** ``<answer>``

Contient le script Python qui permet de noter l'exercice.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - type (obligatoire) 
       - Doit �tre "loncapa/python".

  Enfants
  
  (aucun)