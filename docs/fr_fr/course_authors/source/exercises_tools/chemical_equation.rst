.. _Équations chimiques:

#################################
Exercice avec équations chimiques
#################################

Dans l'exercice avec équations chimiques, l'étudiant peut saisir, dans une zone dédiée, un texte qui représente une équation chimique. Le système convertit alors ce texte en une équation chimique et l'insère sous la zone de texte. L'évaluateur évalue la réponse de l'étudiant en utilisant un script Python que vous créez et intégrez dans l'exercice.

.. image:: /Images/ChemicalEquationExample.png
 :alt: Image d'un exercice avec équations chimiques

******************************************
Créer un exercice avec équations chimiques
******************************************

Les exercices impliquant des équations chimiques utilisent MathJax pour créer des formules. Pour plus d'informations sur l'utilisation de MathJax dans Studio, voir :ref:`Introduction à l'utilisation de MathJax dans Studio`.

Pour créer l'exercice avec équations chimiques mentionné ci-dessus :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Blank Advanced Problem** (Exercice avancé vide).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, collez le code présenté ci-après.
#. Cliquez sur **Enregistrer**.

=========================================================
Exemple de code pour un exercice avec équations chimiques
=========================================================

.. code-block:: xml

  <problem>
    <startouttext/>
    <p>Certains exercices font référence à une équation chimique particulière. Entraînez-vous en écrivant la réaction suivante dans la zone ci-dessous.</p>
    
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
    <li>Utilisez les symboles d'éléments réels.</li>
    <li>Créez des indices en utilisant un texte brut..</li>
    <li>Créez des exposants en utilisant un signe insertion (caret). (^).</li>
    <li>Créez la flèche de la réaction (\(\longrightarrow\)) en utilisant "->".</li>
    </ul>

    <endouttext/>
  
   <solution>
   <div class="detailed-solution">
   <p>Solution</p>
   <p>Pour créer cette équation, saisissez :</p>
     <p>H2SO4 -> H^+ + HSO4^-</p>
   </div>
   </solution>
  </problem>

.. _Exercice avec équations chimiques - Format XML:

**********************************************
Exercice avec équations chimiques - Format XML
**********************************************

======
Modèle
======

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

=======
Balises
=======

* ``<customresponse>`` : Indique que la réponse au problème posé par cet exercice est personnalisée. 
* ``<chemicalequationinput>`` : Spécifie que la réponse de cet exercice est une équation chimique. 
* ``<answer type=loncapa/python>`` : Contient le script Python qui permet de noter l'exercice.

**Balise :** ``<customresponse>``

Indique que la réponse au problème posé par cet exercice est personnalisée. Les balises ``<customresponse>`` doivent encadrer les balises ``<chemicalequation>``.

  Attributs

  (aucun)

  Enfants

  * ``<chemicalequationinput>``
  * ``<answer>``

**Balise :** ``<chemicalequationinput>``

Indique que la réponse de cet exercice est une équation chimique et crée un champ de réponse dans lequel l'étudiant saisit sa réponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - size 
       - Spécifie la taille du champ de la réponse (nombre de caractères).
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
       - Doit être "loncapa/python".

  Enfants
  
  (aucun)
