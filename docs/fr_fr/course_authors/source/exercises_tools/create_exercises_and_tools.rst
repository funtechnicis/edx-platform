.. _Create Exercises:

############################
Cr�ation d'exercices et d'outils
############################

************************************
Exercices et outils : introduction
************************************

Studio vous permet de cr�er une vaste gamme d'exercices et d'outils pour vos cours. Le processus de cr�ation est simple, car nombre de ces exercices et outils sont bas�s sur des mod�les propos�s par Studio. Par ailleurs, il arrive souvent que certaines �quipes p�dagogiques cr�ent des exercices pour lesquels Studio ne dispose pas de mod�le. Nous nous effor�ons de mettre ces outils � la disposition de toutes nos �quipes p�dagogiques et pr�sentons, dans cette section, les instructions relatives � la cr�ation de certains de ces outils. 

En fonction de l'exercice ou de l'outil, vous devrez utiliser un composant HTML, Exercice ou Avanc�. La page de chaque exercice ou outil contient un exemple de chaque exercice ou outil, ainsi que tous les fichiers, code et instructions d�taill�es dont vous avez besoin pour cr�er l'exercice ou l'outil. 

.. note:: Les exercices doivent inclure des �tiquettes afin de garantir l'accessibilit�. L'�tiquette comprend g�n�ralement le texte de la question principale de l'exercice. Les instructions relatives � l'ajout d'�tiquettes apparaissent sur la page de chaque exercice.

****************************
Exercices et outils g�n�raux
****************************

.. list-table::
   :widths: 25 25 50

   * - .. image:: /Images/AnnotationExample.png
          :width: 100
          :alt: Exemple d'exercice avec annotations
     - :ref:`Annotation`
     - Dans les exercices avec annotations, les �tudiants doivent r�pondre � des questions portant sur un bloc de texte sp�cifique. Les questions apparaissent au-dessus du texte lorsque les �tudiants font passer la souris sur le texte en surbrillance. Ils peuvent ainsi r�fl�chir � la question tout en prenant connaissance du texte.
   * - .. image:: /Images/PollExample.png
          :width: 100
          :alt: Exemple de sondage
     - :ref:`Module conditionnel`
     - Vous pouvez cr�er un module conditionnel afin de contr�ler les versions du contenu que diff�rents groupes d'�tudiants consultent. Par exemple, les �tudiants qui r�pondent "Oui" � la question d'un sondage ont acc�s � un bloc de texte diff�rent de celui auquel ont acc�s les �tudiants ayant r�pondu "Non".
   * - .. image:: /Images/JavaScriptInputExample.png
          :width: 100
          :alt: Exemple d'exercice JavaScript
     - :ref:`Code JavaScript personnalis�`
     - Les exercices d'�valuation et d'affichage en code JavaScript personnalis� (�galement appel�s *exercices en JavaScript personnalis�* ou *exercices en JS*) vous permettent de cr�er un exercice ou un outil personnalis� qui utilise JavaScript. Vous pourrez alors ajouter directement l'exercice ou l'outil dans Studio.
   * - .. image:: /Images/external-grader-correct.png
          :width: 100
          :alt: Exemple d'�valuateur externe
     - :ref:`�valuateur externe`
     - Un �valuateur externe est un service qui re�oit les r�ponses fournies par les �tudiants pour un exercice donn�, les traite, renvoie des commentaires et note l'exercice. Toutes ces donn�es sont renvoy�es � la plate-forme edX. L'�valuateur externe que vous concevez est d�ploy� s�par�ment, � l'ext�rieur de la plate-forme edX. Un �valuateur externe est particuli�rement utile pour les cours de programmation de logiciels dans lesquels les �tudiants sont invit�s � soumettre un code complexe.
   * - .. image:: /Images/GoogleHangout_WithPeople.png   
          :width: 100
          :alt: Hangouts (Google)
     - :ref:`Hangouts (Google)`
     - Vous pouvez permettre aux �tudiants de participer � des conversations (via Hangouts) directement depuis votre cours. Gr�ce � Hangouts, les �tudiants peuvent avoir une simple conversation audio, qu'ils peuvent transformer en appel vid�o, partager leurs �crans et regarder des vid�os ensemble, et collaborer sur des documents. 
   * - .. image:: /Images/IFrame_1.png
          :width: 100
          :alt: Exemple d'outil IFrame
     - :ref:`IFrame`
     - Les cadres IFrame vous permettent d'int�grer des exercices et des outils non not�s depuis n'importe quel site Internet dans un composant HTML de votre cours.
   * - .. image:: /Images/LTIExample.png
          :width: 100
          :alt: Exemple de composant LTI
     - :ref:`Composant LTI`
     - Les composants LTI vous permettent d'ajouter dans Studio une application didactique externe ou un manuel qui n'est pas au format PDF.
   * - .. image:: /Images/CITL_AssmtTypes.png
          :width: 100
          :alt: Exemple d'�valuation par r�ponse ouverte
     - :ref:`�valuation par r�ponse ouverte`
     - Dans les �valuations par r�ponse ouverte, les �tudiants re�oivent des commentaires sur les r�ponses qu'ils soumettent, qu'il s'agisse de r�ponses �crites (plus ou moins longues) ou de fichiers contenant un code informatique ou des images qu'ils chargent. Les �valuations par r�ponse ouverte incluent les auto-�valuations et les �valuations par les pairs.
   * - .. image:: /Images/PollExample.png
          :width: 100
          :alt: Exemple de sondage
     - :ref:`Sondage`
     - Vous pouvez r�aliser des sondages dans vos cours afin que vos �tudiants �changent leurs points de vue sur diff�rentes questions.
   * - .. image:: /Images/ProblemWithAdaptiveHintExample.png
          :width: 100
          :alt: Exemple d'exercice avec indice adaptatif
     - :ref:`Exercice avec indice adaptatif`
     - Lors d'un exercice avec indice adaptatif, la r�ponse d'un �tudiant est �valu�e. L'�tudiant re�oit alors des commentaires ou un indice en fonction de sa r�ponse. Cela permet d'augmenter ses chances de r�pondre correctement � la prochaine tentative. Ces exercices peuvent �tre des exercices avec saisie de texte ou � choix multiples.
   * - .. image:: /Images/ProblemWrittenInLaTeX.png
          :width: 100
          :alt: Exemple d'exercice �crit en langage LaTeX
     - :ref:`Exercice �crit en langage LaTeX`
     - Si vous disposez d'un exercice qui a d�j� �t� �crit en LaTeX, vous pouvez utiliser ce type d'exercice afin de convertir facilement votre code en XML.
   * - .. image:: /Images/TextInputExample.png
          :width: 100
          :alt: Exemple d'exercice avec saisie de texte
     - :ref:`Saisie de texte`
     - Dans les exercices avec saisie de texte, les �tudiants saisissent du texte dans un champ de r�ponse. La r�ponse peut inclure des nombres, des lettres et des caract�res sp�ciaux comme les signes de ponctuation.
   * - .. image:: /Images/WordCloudExample.png
          :width: 100
          :alt: Exemple de nuage de mots
     - :ref:`Nuage de mots`
     - Les nuages de mots organisent le texte que les �tudiants saisissent (par exemple, en r�ponse � une question) dans un graphique color� que les �tudiants peuvent visualiser.
   * - .. image:: /Images/CustomPythonExample.png  
          :width: 100
          :alt: Exemple d'exercice avec �laboration d'un syst�me d'�valuation personnalis�
     - :ref:`�laboration d'un syst�me d'�valuation personnalis�`
     - Dans les exercices avec �valuation personnalis�e par Python (�galement appel�s exercices avec �laboration d'un syst�me d'�valuation personnalis�), l'�valuateur utilise un script Python que vous cr�ez et int�grez dans l'exercice afin d'�valuer la r�ponse de l'�tudiant ou de fournir des indices. Ces probl�mes peuvent �tre de tout type.
   * - .. image:: /Images/VitalSource.png
          :width: 100
          :alt: Logiciel VitalSource avec notes en surbrillance
     - :ref:`VitalSource`
     - Le logiciel VitalSource Bookshelf permet aux �tudiants de lire et parcourir du contenu (non seulement du texte, mais �galement des illustrations et des notes), et d'y effectuer des recherches. Les �tudiants peuvent aussi utiliser diff�rents surligneurs et copier les notes dans des documents externes.

********************************
Exercices et outils reposant sur des images
********************************

.. list-table::
   :widths: 30 25 80

   * - .. image:: /Images/DragAndDropProblem.png
          :width: 100
          :alt: Exemple d'exercice de glisser-d�poser
     - :ref:`Glisser-d�poser`
     - Dans les exercices de glisser-d�poser, les �tudiants r�pondent � une question en faisant glisser du texte ou des objets vers un emplacement sp�cifique sur une image.
   * - .. image:: /Images/image-modal.png
          :width: 100
          :alt: Exemple d'outil d'affichage des images en plein �cran
     - :ref:`Affichage des images en plein �cran`
     - L'outil d'affichage des images en plein �cran permet � un �tudiant d'agrandir une image et de l'afficher en plein �cran dans la fen�tre du navigateur. Cet outil est particuli�rement utile lorsque l'image contient de nombreux d�tails et que le texte agrandi est plus facile � consulter dans son contexte.
   * - .. image:: /Images/ImageMappedInputExample.png
          :width: 100
          :alt: Exemple d'exercice d'insertion d'images mapp�es
     - :ref:`Insertion d'images mapp�es`
     - Dans un exercice d'insertion d'images mapp�es, les �tudiants cliquent dans une image � l'int�rieur d'une zone d�finie. Pour d�finir cette zone, incluez des coordonn�es dans le corps de l'exercice.
   * - .. image:: /Images/Zooming_Image.png
          :width: 100
          :alt: Exemple d'outil avec zoom d'images
     - :ref:`Zoom d'images`
     - Le zoom d'images permet d'agrandir certaines parties d'une image. Les �tudiants peuvent ainsi en observer les d�tails.

************************************
Outils et exercices � choix multiples
************************************

.. list-table::
   :widths: 30 25 80

   * - .. image:: /Images/CheckboxExample.png
          :width: 100
          :alt: Exemple de QCM avec cases � cocher
     - :ref:`Case � cocher`
     - Dans un QCM avec cases � cocher, l'�tudiant s�lectionne une ou plusieurs options dans une liste de r�ponses possibles. Pour r�pondre correctement aux questions pos�es lors de l'exercice, l'�tudiant doit s�lectionner toutes les r�ponses pertinentes.
   * - .. image:: /Images/DropdownExample.png
          :width: 100
          :alt: Exemple de QCM avec menu d�roulant
     - :ref:`Menu d�roulant`
     - Les QCM avec menu d�roulant permettent � l'�tudiant d'effectuer son choix parmi une s�rie de r�ponses, pr�sent�es dans une liste d�roulante. � la diff�rence des autres types de QCM, dans lesquels les r�ponses sont toujours visibles directement sous la question, les QCM avec menu d�roulant n'affichent les diff�rentes possibilit�s de r�ponses que lorsque l'�tudiant clique sur la fl�che du menu d�roulant.
   * - .. image:: /Images/MultipleChoiceExample.png
          :width: 100
          :alt: Exemple d'exercice � choix multiples
     - :ref:`Choix multiples`
     - Dans des exercices � choix multiples, les �tudiants peuvent s�lectionner une option dans une liste de r�ponses possibles. � la diff�rence des exercices avec menu d�roulant, dans lesquels les r�ponses possibles n'apparaissent que lorsque l'�tudiant clique sur la fl�che du menu d�roulant, les exercices � choix multiples affichent toujours les r�ponses possibles sous la question.
   * - .. image:: /Images/MultipleChoice_NumericalInput.png
          :width: 100
          :alt: Exemple d'exercice avec choix multiples et saisie de chiffres
     - :ref:`Choix multiples et saisie de chiffres`
     - Vous pouvez cr�er un exercice qui associe choix multiples et saisie de chiffres. Les �tudiants sont amen�s � s�lectionner une r�ponse parmi les diff�rentes possibilit�s propos�es, mais doivent �galement saisir des informations plus sp�cifiques, le cas �ch�ant.

********************************
Exercices et outils STIM
********************************

.. list-table::
   :widths: 30 25 80

   * - .. image:: /Images/ChemicalEquationExample.png
          :width: 100
          :alt: Exemple d'exercice avec �quations chimiques
     - :ref:`�quation chimique`
     - Dans les exercices impliquant des �quations chimiques, l'�tudiant peut saisir, dans une zone d�di�e, un texte qui repr�sente une �quation chimique. L'�valuateur �value la r�ponse de l'�tudiant en utilisant un script Python que vous cr�ez et int�grez dans l'exercice.
   * - .. image:: /Images/CircuitSchematicExample_short.png
          :width: 100
          :alt: Exemple d'exercice avec logiciel de conception de sch�ma de circuit
     - :ref:`Logiciel de conception de sch�ma de circuit`
     - Dans les exercices avec logiciel de conception de sch�ma de circuit, les �tudiants peuvent organiser les �l�ments d'un circuit sur une grille interactive : sources de tension, condensateurs, r�sistances et MOSFET. Ils soumettent ensuite au syst�me une analyse en courant continu (CC) ou en courant alternatif (CA), ou une analyse transitoire de leur circuit pour �valuation.
   * - .. image:: /Images/GeneExplorer.png
          :width: 100
          :alt: Exemple d'exercice avec Gene Explorer
     - :ref:`Gene Explorer`
     - L'application Gene Explorer (GeneX) simule la transcription, l'�pissage, la maturation et la traduction d'un hypoth�tique petit g�ne eucaryote. GeneX permet aux �tudiants de proc�der � des mutations sp�cifiques dans une s�quence g�nique, puis calcule et affiche les effets des mutations sur l'ARNm et les prot�ines.
   * - .. image:: /Images/MathExpressionInputExample.png
          :width: 100
          :alt: Exemple d'exercice avec saisie d'expressions math�matiques
     - :ref:`Saisie d'expressions math�matiques`
     - Il s'agit du plus complexe des deux types d'exercices math�matiques de Studio. Dans les exercices avec saisie d'expression math�matiques, les �tudiants saisissent des expressions math�matiques pour r�pondre � une question. Ces exercices peuvent inclure des variables inconnues et des expressions symboliques plus complexes. Vous pouvez indiquer une r�ponse correcte soit explicitement soit par l'interm�diaire d'un script Python. 
   * - .. image:: /Images/Molecule_Editor.png
          :width: 100
          :alt: Exemple d'exercice avec �diteur de mol�cules
     - :ref:`�diteur de mol�cules`
     - L'�diteur de mol�cules permet aux �tudiants de dessiner des mol�cules qui respectent les r�gles de formation de liaisons covalentes et de charges formelles, m�me si ces mol�cules sont chimiquement impossibles, qu'elles sont instables ou qu'elles n'existent pas dans les organismes vivants.
   * - .. image:: /Images/image292.png
          :width: 100
          :alt: Exemple d'exercice avec saisie de chiffres
     - :ref:`Saisie de chiffres`
     - Il s'agit du plus simple des deux types d'exercices math�matiques de Studio. Dans les exercices avec saisie de chiffres, les �tudiants r�pondent � une question en saisissant des chiffres ou des expressions math�matiques sp�cifiques et relativement simples. Ces exercices n'acceptent que les nombres entiers et quelques constantes s�lectionn�es. Vous pouvez sp�cifier une marge d'erreur. Vous pouvez sp�cifier une r�ponse correcte soit explicitement soit par l'interm�diaire d'un script Python.
   * - .. image:: /Images/Periodic_Table.png
          :width: 100
          :alt: Exemple d'exercice avec tableau p�riodique
     - :ref:`Tableau p�riodique`
     - Un tableau p�riodique interactif des �l�ments chimiques pr�sente des informations d�taill�es sur chaque �l�ment lorsque l'�tudiant fait passer la souris sur l'�l�ment.
   * - .. image:: /Images/ProteinBuilder.png
          :width: 100
          :alt: Exemple d'exercice avec syst�me d'�laboration de prot�ines
     - :ref:`Syst�me d'�laboration de prot�ines`
     - Le syst�me d'�laboration de prot�ines Protex invite les �tudiants � cr�er des formes prot�iques sp�cifi�es en associant diff�rents acides amin�s. 