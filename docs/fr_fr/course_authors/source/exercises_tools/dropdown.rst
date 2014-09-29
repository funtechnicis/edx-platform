.. _Menu déroulant:

#######################
QCM avec menu déroulant
#######################

Les QCM avec menu déroulant permettent à l'étudiant d'effectuer son choix parmi une série de réponses, présentées dans une liste déroulante. À la différence des autres types de QCM, dans lesquels les réponses sont toujours visibles directement sous la question, les QCM avec menu déroulant n'affichent les différentes possibilités de réponses que lorsque l'étudiant clique sur la flèche du menu déroulant.

.. image:: /Images/DropdownExample.png
 :alt: Image d'un QCM avec menu déroulant

********************************
Créer un QCM avec menu déroulant
********************************

Vous pouvez créer des QCM avec menu déroulant en utilisant l'Éditeur simple ou l'Éditeur avancé.

.. note:: Tous les exercices doivent inclure des étiquettes afin de garantir l'accessibilité. L'étiquette comprend généralement le texte de la question principale de l'exercice. Pour ajouter une étiquette à un exercice courant, entourez le texte de l'étiquette avec des crochets pointus, orientés vers le texte (>>texte de l'étiquette<<).

==============
Éditeur simple
==============

Pour créer un QCM avec menu déroulant, procédez comme suit.

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'écran **Select Problem Component Type** (Sélectionner le type du composant Exercice), cliquez sur **Liste déroulante** dans l'onglet **Types d'exercices classiques**.
#. Dans le nouveau composant Exercice qui apparaît, cliquez sur **Éditer**.
#. Remplacez le texte par défaut par le texte de votre exercice. Saisissez chacune des réponses possibles sur la même ligne. Les différentes réponses doivent être séparées par des virgules.
#. Choisissez le texte de l'exercice à utiliser en tant qu'étiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. Sélectionnez toutes les réponses, puis cliquez le bouton Menu déroulant. 
      
   .. image:: /Images/ProbCompButton_Dropdown.png
    :alt: Image du bouton Menu déroulant
      
   Lorsque vous effectuez cette opération, une double série de crochets ([[ ]]) apparaît et encadre les réponses possibles.
      
#. Entre les crochets, placez la réponse correcte entre parenthèses.
#. Dans l'éditeur de composant, sélectionnez le texte de l'explication, puis cliquez sur le bouton associé afin d'insérer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

#. Dans l'onglet **Paramètres**, indiquez les paramètres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour l'exemple d'exercice présenté ci-dessus, le texte dans le composant Exercice est le suivant.

::

    >>À quel type les données suivantes appartiennent-elles ?<<

    Âge :
    [[Nominal, Discret, (Continu)]]
    Âge, arrondi à l'année la plus proche :
    [[Nominal, (Discret), Continu]]
    Période de la vie - Première enfance, enfance et âge adulte :
    [[(Nominal), Discret, Continu]]

==============
Éditeur avancé
==============

Pour créer cet exercice dans l'Éditeur avancé, cliquez sur l'onglet **Avancé** dans l'éditeur du composant Exercice, puis remplacez le code existant par le code présenté ci-après.

**Code d'exercice :**

.. code-block:: xml

  <problem>
  <p>
    <em>Cet exercice a été publié pour la première fois sur le site de HarvardX, via le document PH207x Health in Numbers: Quantitative Methods in Clinical & Public Health Research course (automne 2012).</em>
  </p>
  <p>À quel type les données suivantes appartiennent-elles ?</p>
  <p>Âge :</p>
  <optionresponse>
    <optioninput options="('Nominal','Discrete','Continuous')" correct="Continuous" label="Age"/>
  </optionresponse>
  <p>Âge, arrondi à l'année la plus proche :</p>
  <optionresponse>
    <optioninput options="('Nominal','Discrete','Continuous')" correct="Discrete" label="Age, rounded to the nearest year"/>
  </optionresponse>
  <p>Période de la vie - Première enfance, enfance et âge adulte :</p>
  <optionresponse>
    <optioninput options="('Nominal','Discrete','Continuous')" correct="Nominal" label="Life stage"/>
  </optionresponse>
  </problem>

.. _Dropdown Problem XML:

************************************
QCM avec menu déroulant - Format XML
************************************

======
Modèle
======

.. code-block:: xml

  <problem>
  <p>
    Texte de l'exercice</p>
  <optionresponse>
    <optioninput options="('Option 1','Option 2','Option 3')" correct="Option 2" label="label text"/>
  </optionresponse>
    <solution>
      <div class="detailed-solution">
      <p>Titre de la solution ou de l'explication</p>
      <p>Texte de la solution ou de l'explication</p>
      </div>
    </solution>
  </problem>

.. code-block:: xml

  <problem>
   <p>Texte de l'exercice</p>
    <optionresponse>
     options="('A','B')"
      correct="A"/>
      label="label text"
    </optionresponse>
   
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

* ``<optionresponse>`` (obligatoire) : Indique que cet exercice est un QCM avec menu déroulant.
* ``<optioninput>`` (obligatoire) : Répertorie les réponses possibles.

**Balise :** ``<optionresponse>``

Indique que cet exercice est un QCM avec menu déroulant.

  Attributs

  (aucun)

  Enfants

  * ``<optioninput>``  

**Balise :** ``<optioninput>``

Répertorie les réponses possibles.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - options (obligatoire)
       - Répertorie les réponses possibles. La liste de toutes les réponses possibles est placée entre parenthèses. Les réponses possibles individuelles sont placées entre des guillemets simples (') et séparées par des virgules (,).
     * - correct (obligatoire)
       - Indique si une réponse est correcte. Les valeurs possibles sont "true" et "false". Seul un attribut **correct** peut être défini sur "true".
     * - label (obligatoire)
       - Spécifie le nom du champ de la réponse.
  
  Enfants

  (aucun)
