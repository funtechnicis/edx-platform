.. _Multiple Choice:

########################
Exercice � choix multiples
########################

Dans des exercices � choix multiples, les �tudiants peuvent s�lectionner une option dans une liste de r�ponses possibles. � la diff�rence des exercices avec menu d�roulant, dans lesquels les r�ponses possibles n'apparaissent que lorsque l'�tudiant clique sur la fl�che du menu d�roulant, les exercices � choix multiples affichent toujours les r�ponses possibles sous la question.

.. image:: /Images/MultipleChoiceExample.png
 :alt: Image d'un exercice � choix multiples

Les exercices � choix multiples pr�sentent �galement plusieurs options avanc�es, comme la pr�sentation � chaque �tudiant d'une s�rie al�atoire d'options. Pour plus d'informations sur ces options, voir :ref:`Options avanc�es des exercices � choix multiples`.

****************************************
Cr�er un exercice � choix multiples
****************************************

Vous pouvez cr�er des exercices � choix multiples en utilisant l'�diteur simple ou l'�diteur avanc�.

.. note:: Tous les exercices doivent inclure des �tiquettes afin de garantir l'accessibilit�. L'�tiquette comprend g�n�ralement le texte de la question principale de l'exercice. Pour ajouter une �tiquette � un exercice courant, entourez le texte de l'�tiquette avec des crochets pointus, orient�s vers le texte (>>texte de l'�tiquette<<).

================
�diteur simple
================

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'�cran **Select Problem Component Type** (S�lectionner le type du composant Exercice), cliquez sur **Multiple Choice** (Choix multiples) dans l'onglet **Types d'exercices classiques**.
#. Lorsque le nouveau composant Exercice appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez le texte de l'exercice pr�sent� en exemple par le texte de votre exercice. Saisissez chaque r�ponse possible sur la ligne appropri�e.
#. Choisissez le texte de l'exercice � utiliser en tant qu'�tiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. S�lectionnez toutes les r�ponses, puis cliquez sur le bouton Choix multiples. 
   
   .. image:: /Images/ProbCompButton_MultChoice.png
    :alt: Image du bouton Choix multiples
   
   Une fois ces diff�rentes �tapes effectu�es, l'�diteur de composant ajoute une paire de parenth�ses � c�t� de chaque r�ponse possible.
   
#. Ajoutez une croix ("x") entre les parenth�ses, � c�t� de chaque r�ponse correcte.
   
#. Dans l'�diteur de composant, s�lectionnez le texte de l'explication, puis cliquez sur le bouton associ� afin d'ins�rer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

#. Dans l'onglet **Param�tres**, indiquez les param�tres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour l'exemple d'exercice pr�sent� ci-dessus, le texte dans le composant Exercice est le suivant.

::

    >>Inhibition lat�rale, observ�e et identifi�e pour la premi�re fois chez la limule (crabe en fer � cheval) :<<

    ( ) est une propri�t� tactile : elle fait r�f�rence � la capacit� des crabes � d�tecter les pr�dateurs � proximit�.
    ( ) est une propri�t� auditive : elle fait r�f�rence � la capacit� des crabes � d�tecter des bruits basse fr�quence.
    (x) est une propri�t� visuelle : elle fait r�f�rence � la capacit� visuelle d'am�lioration des contrastes observ�e chez les crabes.
    ( ) fait r�f�rence � la capacit� des crabes � utiliser un sonar pour d�tecter la pr�sence d'autres crabes en fer � cheval situ�s � proximit�.
    ( ) fait r�f�rence au syst�me de pond�ration du squelette des crabes. Ce syst�me leur permet de conserver leur �quilibre dans une mer agit�e.

    [Explication]
    Les limules (ou crabes en fer � cheval) ont jou� un r�le essentiel dans la d�couverte de l'inhibition lat�rale. Cette propri�t� visuelle, observ�e chez les limules et les �tres humains, permet d'am�liorer le contraste au niveau des contours d'objets, comme d�montr� en classe. En 1967, Haldan Hartline a re�u le prix Nobel pour ses travaux sur les m�canismes de la vision et, en particulier, pour ses recherches sur l'inhibition lat�rale chez les limules.
    [Explication]

================
�diteur avanc�
================

Pour cr�er cet exercice dans l'�diteur avanc�, cliquez sur l'onglet **Avanc�** dans l'�diteur du composant Exercice, puis remplacez le code existant par le code pr�sent� ci-apr�s.

.. code-block:: xml

  <problem>
  <p>Inhibition lat�rale, observ�e et identifi�e pour la premi�re fois chez la limule (crabe en fer � cheval)...</p>
  <multiplechoiceresponse>
    <choicegroup type="MultipleChoice" label="Lateral inhibition, as was first discovered in the horsehoe crab">
      <choice correct="false">est une propri�t� tactile : elle fait r�f�rence � la capacit� des crabes � d�tecter les pr�dateurs � proximit�.</choice>
      <choice correct="false">est une propri�t� auditive : elle fait r�f�rence � la capacit� des crabes � d�tecter des bruits basse fr�quence.</choice>
      <choice correct="false">est une propri�t� visuelle : elle fait r�f�rence � la capacit� des yeux des crabes d'am�liorer les contrastes.</choice>
      <choice correct="true">fait r�f�rence � la capacit� des crabes � utiliser un sonar pour d�tecter la pr�sence d'autres crabes en fer � cheval situ�s � proximit�.</choice>
      <choice correct="false">fait r�f�rence au syst�me de pond�ration du squelette des crabes. Ce syst�me leur permet de conserver leur �quilibre dans une mer agit�e.</choice>
    </choicegroup>
  </multiplechoiceresponse>
  <solution>
    <div class="detailed-solution">
      <p>Explication</p>
      <p>Les limules (ou crabes en fer � cheval) ont jou� un r�le essentiel dans la d�couverte de l'inhibition lat�rale. Cette propri�t� visuelle, observ�e chez les limules et les �tres humains, permet d'am�liorer le contraste au niveau des contours d'objets, comme d�montr� en classe. En 1967, Haldan Hartline a re�u le prix Nobel pour ses travaux sur les m�canismes de la vision et, en particulier, pour ses recherches sur l'inhibition lat�rale chez les limules.</p>
    </div>
  </solution>
  </problem>

.. _Multiple Choice Advanced Options:

*********************************************
Options avanc�es pour les exercices � choix multiples
*********************************************

Les exercices � choix multiples pr�sentent plusieurs options avanc�es. Vous pouvez modifier l'ordre des r�ponses dans l'exercice, inclure des explications afin qu'elles apparaissent lorsqu'un �tudiant s�lectionne une r�ponse incorrecte sp�cifique, ou pr�senter une s�rie al�atoire de r�ponses possibles � chaque �tudiant. Pour plus d'informations, reportez-vous aux sections suivantes :


* :ref:`Activer la pr�sentation al�atoire des r�ponses d'un exercice � choix multiples`
* :ref:`Commentaires cibl�s dans un exercice � choix multiples`
* :ref:`S�ries de r�ponses dans un exercice � choix multiples`

.. _Shuffle Answers in a Multiple Choice Problem:

=============================================
Activer la pr�sentation al�atoire des r�ponses d'un exercice � choix multiples
============================================= 

Vous pouvez, si vous le souhaitez, configurer un exercice � choix multiples afin qu'il propose une pr�sentation al�atoire des r�ponses possibles.

Par exemple, l'exercice pourrait se pr�senter comme suit :

.. image:: ../Images/multiple-choice-shuffle-1.png
 :alt: Image d'un exercice � choix multiples

Le m�me exercice pourrait se pr�senter diff�remment, pour un autre �tudiant ou pour le m�me �tudiant visualisant une autre vue de l'unit�. Par exemple :

.. image:: ../Images/multiple-choice-shuffle-2.png
 :alt: Image d'un exercice � choix multiples avec r�ponses m�lang�es

Il est �galement possible de proposer une pr�sentation al�atoire de certaines r�ponses (sans inclure toutes les r�ponses). Par exemple, vous pouvez souhaiter que la r�ponse "Toutes les r�ponses susmentionn�es" figure toujours en fin de liste, mais activer une pr�sentation al�atoire des autres r�ponses.

Vous pouvez configurer l'exercice afin de proposer une pr�sentation al�atoire des r�ponses via l':ref:`�diteur simple` ou l':ref:`�diteur avanc�`.


Utiliser l'�diteur simple pour proposer une pr�sentation al�atoire des r�ponses
*********************************************

Vous pouvez configurer l'exercice pour proposer une pr�sentation al�atoire des r�ponses dans l':ref:`�diteur simple`.

Par exemple, le texte ci-apr�s d�finit un exercice � choix multiples, avant l'activation de la lecture al�atoire. La croix ``(x)`` indique la r�ponse correcte :

 >>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?<<
     ( ) L'iPad
     ( ) Napster
     (x) L'iPod
     ( ) L'�plucheur de l�gumes

Pour permettre une pr�sentation al�atoire des r�ponses de cet exercice, ajoutez ``!`` entre les parenth�ses de la premi�re r�ponse :

 >>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?<<
     (!) L'iPad
     ( ) Napster
     (x) L'iPod
     ( ) L'�plucheur de l�gumes

Pour figer l'emplacement d'une r�ponse dans la liste, ajoutez ``@`` entre les parenth�ses de cette r�ponse :

 >>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?<<
     (!) L'iPad
     ( ) Napster
     (x) L'iPod
     ( ) L'�plucheur de l�gumes
     (@) Toutes les r�ponses susmentionn�es

Vous pouvez associer les symboles entre parenth�ses, le cas �ch�ant. Par exemple, pour afficher la r�ponse correcte � un emplacement fixe, vous pourriez utiliser :
 
  (x@) L'iPod

Utiliser l'�diteur avanc� pour une pr�sentation al�atoire des r�ponses
*********************************************

Vous pouvez configurer l'exercice pour proposer une pr�sentation al�atoire des r�ponses au format XML dans l':ref:`�diteur avanc�`.

Par exemple, le code XML ci-apr�s d�finit un exercice � choix multiples, avant l'activation d'une pr�sentation al�atoire :

.. code-block:: xml

 <p>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?</p>
 <multiplechoiceresponse>
  <choicegroup type="MultipleChoice">
    <choice correct="false">L'iPad</choice>
    <choice correct="false">Napster</choice>
    <choice correct="true">L'iPod</choice>
    <choice correct="false">L'�plucheur de l�gumes</choice>
  </choicegroup>
 </multiplechoiceresponse>


Pour activer une pr�sentation al�atoire des r�ponses de cet exercice, ajoutez ``shuffle="true"`` � l'�l�ment ``<choicegroup>`` :

.. code-block:: xml

 <p>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?</p>
 <multiplechoiceresponse>
  <choicegroup type="MultipleChoice" shuffle="true">
    <choice correct="false">L'iPad</choice>
    <choice correct="false">Napster</choice>
    <choice correct="true">L'iPod</choice>
    <choice correct="false">L'�plucheur de l�gumes</choice>
  </choicegroup>
 </multiplechoiceresponse>

Pour figer l'emplacement d'une r�ponse dans la liste, ajoutez ``fixed="true"`` � l'�l�ment ``choice`` de cette r�ponse :

.. code-block:: xml

 <p>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?</p>
 <multiplechoiceresponse>
  <choicegroup type="MultipleChoice" shuffle="true">
    <choice correct="false">L'iPad</choice>
    <choice correct="false">Napster</choice>
    <choice correct="true">L'iPod</choice>
    <choice correct="false">L'�plucheur de l�gumes</choice>
    <choice correct="false" fixed="true">Toutes les r�ponses susmentionn�es</choice>
  </choicegroup>
 </multiplechoiceresponse>


.. _Targeted Feedback in a Multiple Choice Problem:

===============================================
Commentaires cibl�s dans un exercice � choix multiples
===============================================

Vous pouvez configurer un exercice � choix multiples afin que les explications associ�es aux r�ponses incorrectes soient pr�sent�es automatiquement aux �tudiants. Vous pouvez utiliser ces explications pour orienter les �tudiants vers la r�ponse correcte. Les commentaires cibl�s sont donc particuli�rement utiles pour les exercices � choix multiples, lorsque plusieurs tentatives sont autoris�es.


Utiliser l'�diteur avanc� pour configurer les commentaires cibl�s
********************************************************

Vous pouvez configurer l'exercice afin de proposer des commentaires cibl�s au format XML dans l':ref:`�diteur avanc�`.

Suivez les instructions XML ci-apr�s :

* Ajoutez un attribut ``targeted-feedback`` � l'�l�ment ``<multiplechoiceresponse>``, sans lui attribuer de valeur : ``<multiplechoiceresponse targeted-feedback="">``
* Ajoutez un �l�ment ``<targetedfeedbackset>`` avant l'�l�ment ``<solution>``.
* Dans ``<targetedfeedbackset>``, ajoutez un ou plusieurs �l�ments ``<targetedfeedback>``.
* Dans chaque �l�ment ``<targetedfeedback>``, saisissez l'explication associ�e � la r�ponse incorrecte au format HTML, comme d�crit ci-dessous.
* Associez l'�l�ment ``<targetedfeedback>`` � une r�ponse incorrecte sp�cifique. Attribuez, pour chaque r�ponse incorrecte, la m�me valeur � l'attribut ``explanation-id``.
* Utilisez l'�l�ment ``<solution>`` pour la r�ponse correcte. Utilisez la m�me valeur pour l'attribut ``explanation-id`` que l'�l�ment ``<choice>`` correct.

Par exemple, le code XML pour l'exercice � choix multiples peut se pr�senter comme suit :

.. code-block:: xml

   <p>Quel appareil Apple a �t� en concurrence avec le lecteur CD portable ?</p>
   <multiplechoiceresponse targeted-feedback="">
    <choicegroup type="MultipleChoice">
      <choice correct="false" explanation-id="feedback1">L'iPad</choice>
      <choice correct="false" explanation-id="feedback2">Napster</choice>
      <choice correct="true" explanation-id="correct">L'iPod</choice>
      <choice correct="false" explanation-id="feedback3">L'�plucheur de l�gumes</choice>
    </choicegroup>
   </multiplechoiceresponse>
 
Ce code est suivi par le code XML qui d�finit les commentaires cibl�s :

.. code-block:: xml

   <targetedfeedbackset>
     <targetedfeedback explanation-id="feedback1">
       <div class="detailed-targeted-feedback">
         <p>Commentaires cibl�s</p>
         <p>L'iPad a �t� d�velopp� ult�rieurement et n'a pas �t� en concurrence directe avec les lecteurs CD portables.</p>
       </div>
     </targetedfeedback>
     <targetedfeedback explanation-id="feedback2">
       <div class="detailed-targeted-feedback">
         <p>Commentaires cibl�s</p>
         <p>Napster n'�tait pas un produit Apple.</p>
       </div>
     </targetedfeedback>
     <targetedfeedback explanation-id="feedback3">
       <div class="detailed-targeted-feedback">
         <p>Commentaires cibl�s</p>
         <p>Les �plucheurs de l�gumes ne permettent pas d'�couter de la musique.</p>
       </div>
     </targetedfeedback>
    </targetedfeedbackset>

    <solution explanation-id="correct">
     <div class="detailed-solution">
      <p>L'iPod a �t� en concurrence directe avec les lecteurs CD portables.</p>
     </div>
    </solution>


.. _Answer Pools in a Multiple Choice Problem:

=============================================
S�ries de r�ponses dans un exercice � choix multiples
=============================================

Vous pouvez configurer un exercice � choix multiples afin qu'un sous-ensemble al�atoire de r�ponses possibles soit pr�sent� automatiquement � chaque �tudiant. Par exemple, vous pouvez ajouter 10 r�ponses possibles � l'exercice et chaque �tudiant visualisera une s�rie de cinq r�ponses.

La s�rie de r�ponses doit comporter au moins une r�ponse correcte. Elle peut inclure plus d'une r�ponse correcte. Dans chaque s�rie de r�ponses possibles pr�sent�es � l'�tudiant, une r�ponse correcte est incluse. Par exemple, vous pouvez configurer deux r�ponses correctes dans la s�rie de 10 r�ponses. L'une des deux r�ponses correctes est incluse dans la s�rie de r�ponses que l'�tudiant visualisera.

Utiliser l'�diteur avanc� pour configurer des s�ries de r�ponses
**************************************************

Vous pouvez configurer l'exercice afin de proposer des s�ries de r�ponses au format XML dans l':ref:`�diteur avanc�`.

Suivez les instructions XML ci-apr�s :

* Dans l'�l�ment ``<choicegroup>``, ajoutez l'attribut ``answer-pool`` ; le chiffre utilis� indique le nombre de r�ponses possibles dans la s�rie. Par exemple, ``<choicegroup answer-pool="4">``.

* Pour chaque r�ponse correcte, ajoutez une valeur et un attribut ``explanation-id`` � l'�l�ment ``<choice>`` qui soient mapp�s � une solution. Par exemple, ``<choice correct="true" explanation-id="iPod">l'iPod</choice>``.

* Pour chaque �l�ment ``<solution>``, ajoutez une valeur et un attribut ``explanation-id`` qui soient mapp�s � une r�ponse correcte. Par exemple, ``<solution explanation-id="iPod">``.

.. note:: Si les r�ponses possibles n'incluent qu'une seule r�ponse correcte, vous n'avez pas � utiliser l'attribut ``explanation-id`` dans l'�l�ment ``choice`` ou ``<solution>``. Vous devez toutefois toujours utiliser l'�l�ment ``<solutionset>`` pour encadrer l'�l�ment ``<solution>``.

Par exemple, pour l'exercice � choix multiples pr�sent� ci-apr�s, un �tudiant pourra visualiser quatre r�ponses possibles. Chaque s�rie de r�ponses inclura l'une des deux r�ponses correctes. L'explication associ�e � la r�ponse correcte pr�sente le m�me identifiant d'explication.

.. code-block:: xml

 <problem>
   <p>Quels appareils Apple vous permettent d'emporter votre musicoth�que num�rique dans votre poche ?</p>
   <multiplechoiceresponse>
    <choicegroup type="MultipleChoice" answer-pool="4">
      <choice correct="false">L'iPad</choice>
      <choice correct="false">Napster</choice>
      <choice correct="true" explanation-id="iPod">L'iPod</choice>
      <choice correct="false">L'�plucheur de l�gumes</choice>
      <choice correct="false">L'iMac</choice>
      <choice correct="true" explanation-id="iPhone">L'iPhone</choice>
    </choicegroup>
   </multiplechoiceresponse>

    <solutionset>
        <solution explanation-id="iPod">
        <div class="detailed-solution">
            <p>Explication</p>
            <p>Oui, l'iPod est un lecteur de musique num�rique portable d�velopp� par Apple.</p>
        </div>
        </solution>
        <solution explanation-id="iPhone">
        <div class="detailed-solution">
            <p>Explication</p>
            <p>L'iPhone est non seulement un t�l�phone portable, mais il peut �galement stocker et d'�couter de la musique.</p>
        </div>
        </solution>
    </solutionset>
 </problem>


.. _Multiple Choice Problem XML:

******************************
Exercice � choix multiples - Format XML 
******************************

================
Mod�le
================

.. code-block:: xml

  <problem>
  <p>Texte de la question</p>
  <multiplechoiceresponse>
    <choicegroup type="MultipleChoice" label="label text">
      <choice correct="false" name="a">Choix incorrect</choice>
      <choice correct="true" name="b">Choix correct</choice>
    </choicegroup>
  </multiplechoiceresponse>

  <solution>
    <div class="detailed-solution">
    <p>Titre de la solution ou de l'explication</p>
    <p>Texte de la solution ou de l'explication</p>
    </div>
  </solution>
  </problem>

================
Balises
================

* ``<multiplechoiceresponse>`` (obligatoire) : Indique que cet exercice est un exercice � choix multiples.
* ``<choicegroup>`` (obligatoire) : D�signe le d�but de la liste des r�ponses possibles. 
* ``<choice>`` (obligatoire) : Indique une r�ponse possible.

**Balise :** ``<multiplechoiceresponse>``

Indique que cet exercice est un exercice � choix multiples.

  Attributs

  (aucun)

  Enfants

  * ``<choicegroup>``
  * Toutes les balises HTML standard (peuvent �tre utilis�es pour formater du texte)

**Balise :** ``<choicegroup>``

D�signe le d�but de la liste des r�ponses possibles.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - label (obligatoire)
       - Sp�cifie le nom du champ de la r�ponse.
     * - type (obligatoire)
       - Doit �tre d�fini sur "MultipleChoice".

  Enfants

  * ``<choice>`` 

**Balise :** ``<choice>``

Indique une r�ponse possible. 

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - correct (au moins un requis)
       - Indique une r�ponse correcte ou incorrecte. Lorsque l'attribut est d�fini sur "true", la r�ponse est correcte. Lorsque l'attribut est d�fini sur "false", la r�ponse est incorrecte. Une seule r�ponse peut �tre correcte.
     * - name
       - Un nom unique que le serveur principal utilise pour faire r�f�rence � la r�ponse possible.

  Enfants
  
  (aucun)