.. _Dropdown:

#####################
QCM avec menu d�roulant
#####################

Les QCM avec menu d�roulant permettent � l'�tudiant d'effectuer son choix parmi une s�rie de r�ponses, pr�sent�es dans une liste d�roulante. � la diff�rence des autres types de QCM, dans lesquels les r�ponses sont toujours visibles directement sous la question, les QCM avec menu d�roulant n'affichent les diff�rentes possibilit�s de r�ponses que lorsque l'�tudiant clique sur la fl�che du menu d�roulant.

.. image:: /Images/DropdownExample.png
 :alt: Image d'un QCM avec menu d�roulant

********************************
Cr�er un QCM avec menu d�roulant
********************************

Vous pouvez cr�er des QCM avec menu d�roulant en utilisant l'�diteur simple ou l'�diteur avanc�.

.. note:: Tous les exercices doivent inclure des �tiquettes afin de garantir l'accessibilit�. L'�tiquette comprend g�n�ralement le texte de la question principale de l'exercice. Pour ajouter une �tiquette � un exercice courant, entourez le texte de l'�tiquette avec des crochets pointus, orient�s vers le texte (>>texte de l'�tiquette<<).

================
�diteur simple
================

Pour cr�er un QCM avec menu d�roulant, proc�dez comme suit.

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'�cran **Select Problem Component Type** (S�lectionner le type du composant Exercice), cliquez sur **Liste d�roulante** dans l'onglet **Types d'exercices classiques**.
#. Dans le nouveau composant Exercice qui appara�t, cliquez sur **�diter**.
#. Remplacez le texte par d�faut par le texte de votre exercice. Saisissez chacune des r�ponses possibles sur la m�me ligne. Les diff�rentes r�ponses doivent �tre s�par�es par des virgules.
#. Choisissez le texte de l'exercice � utiliser en tant qu'�tiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. S�lectionnez toutes les r�ponses, puis cliquez le bouton Menu d�roulant. 
      
   .. image:: /Images/ProbCompButton_Dropdown.png
    :alt: Image du bouton Menu d�roulant
      
   Lorsque vous effectuez cette op�ration, une double s�rie de crochets ([[ ]]) appara�t et encadre les r�ponses possibles.
      
#. Entre les crochets, placez la r�ponse correcte entre parenth�ses.
#. Dans l'�diteur de composant, s�lectionnez le texte de l'explication, puis cliquez sur le bouton associ� afin d'ins�rer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

#. Dans l'onglet **Param�tres**, indiquez les param�tres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour l'exemple d'exercice pr�sent� ci-dessus, le texte dans le composant Exercice est le suivant.

::

    >>� quel type les donn�es suivantes appartiennent-elles ?<<

    �ge :
    [[Nominal, Discret, (Continu)]]
    �ge, arrondi � l'ann�e la plus proche :
    [[Nominal, (Discret), Continu]]
    P�riode de la vie - Premi�re enfance, enfance et �ge adulte :
    [[(Nominal), Discret, Continu]]

================
�diteur avanc�
================

Pour cr�er cet exercice dans l'�diteur avanc�, cliquez sur l'onglet **Avanc�** dans l'�diteur du composant Exercice, puis remplacez le code existant par le code pr�sent� ci-apr�s.

**Code d'exercice :**

.. code-block:: xml

  <problem>
  <p>
    <em>Cet exercice a �t� publi� pour la premi�re fois sur le site de HarvardX, via le document PH207x Health in Numbers: Quantitative Methods in Clinical & Public Health Research course (automne 2012).</em>
  </p>
  <p>� quel type les donn�es suivantes appartiennent-elles ?</p>
  <p>�ge :</p>
  <optionresponse>
    <optioninput options="('Nominal','Discrete','Continuous')" correct="Continuous" label="Age"/>
  </optionresponse>
  <p>�ge, arrondi � l'ann�e la plus proche :</p>
  <optionresponse>
    <optioninput options="('Nominal','Discrete','Continuous')" correct="Discrete" label="Age, rounded to the nearest year"/>
  </optionresponse>
  <p>P�riode de la vie - Premi�re enfance, enfance et �ge adulte :</p>
  <optionresponse>
    <optioninput options="('Nominal','Discrete','Continuous')" correct="Nominal" label="Life stage"/>
  </optionresponse>
  </problem>

.. _Dropdown Problem XML:

************************
QCM avec menu d�roulant - Format XML
************************

========
Mod�le
========

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

========
Balises
========

* ``<optionresponse>`` (obligatoire) : Indique que cet exercice est un QCM avec menu d�roulant.
* ``<optioninput>`` (obligatoire) : R�pertorie les r�ponses possibles.

**Balise :** ``<optionresponse>``

Indique que cet exercice est un QCM avec menu d�roulant.

  Attributs

  (aucun)

  Enfants

  * ``<optioninput>``  

**Balise :** ``<optioninput>``

R�pertorie les r�ponses possibles.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - options (obligatoire)
       - R�pertorie les r�ponses possibles. La liste de toutes les r�ponses possibles est plac�e entre parenth�ses. Les r�ponses possibles individuelles sont plac�es entre des guillemets simples (') et s�par�es par des virgules (,).
     * - correct (obligatoire)
       - Indique si une r�ponse est correcte. Les valeurs possibles sont "true" et "false". Seul un attribut **correct** peut �tre d�fini sur "true".
     * - label (obligatoire)
       - Sp�cifie le nom du champ de la r�ponse.
  
  Enfants

  (aucun)