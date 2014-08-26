.. _Create Exercises:

############################
Création d'exercices et d'outils
############################

************************************
Exercices et outils : introduction
************************************

Studio vous permet de créer une vaste gamme d'exercices et d'outils pour vos cours. Le processus de création est simple, car nombre de ces exercices et outils sont basés sur des modèles proposés par Studio. Par ailleurs, il arrive souvent que certaines équipes pédagogiques créent des exercices pour lesquels Studio ne dispose pas de modèle. Nous nous efforçons de mettre ces outils à la disposition de toutes nos équipes pédagogiques et présentons, dans cette section, les instructions relatives à la création de certains de ces outils. 

En fonction de l'exercice ou de l'outil, vous devrez utiliser un composant HTML, Exercice ou Avancé. La page de chaque exercice ou outil contient un exemple de chaque exercice ou outil, ainsi que tous les fichiers, code et instructions détaillées dont vous avez besoin pour créer l'exercice ou l'outil. 

.. note:: Les exercices doivent inclure des étiquettes afin de garantir l'accessibilité. L'étiquette comprend généralement le texte de la question principale de l'exercice. Les instructions relatives à l'ajout d'étiquettes apparaissent sur la page de chaque exercice.

****************************
Exercices et outils généraux
****************************

.. list-table::
   :widths: 25 25 50

   * - .. image:: /Images/AnnotationExample.png
          :width: 100
          :alt: Exemple d'exercice avec annotations
     - :ref:`Annotation`
     - Dans les exercices avec annotations, les étudiants doivent répondre à des questions portant sur un bloc de texte spécifique. Les questions apparaissent au-dessus du texte lorsque les étudiants font passer la souris sur le texte en surbrillance. Ils peuvent ainsi réfléchir à la question tout en prenant connaissance du texte.
   * - .. image:: /Images/PollExample.png
          :width: 100
          :alt: Exemple de sondage
     - :ref:`Module conditionnel`
     - Vous pouvez créer un module conditionnel afin de contrôler les versions du contenu que différents groupes d'étudiants consultent. Par exemple, les étudiants qui répondent "Oui" à la question d'un sondage ont accès à un bloc de texte différent de celui auquel ont accès les étudiants ayant répondu "Non".
   * - .. image:: /Images/JavaScriptInputExample.png
          :width: 100
          :alt: Exemple d'exercice JavaScript
     - :ref:`Code JavaScript personnalisé`
     - Les exercices d'évaluation et d'affichage en code JavaScript personnalisé (également appelés *exercices en JavaScript personnalisé* ou *exercices en JS*) vous permettent de créer un exercice ou un outil personnalisé qui utilise JavaScript. Vous pourrez alors ajouter directement l'exercice ou l'outil dans Studio.
   * - .. image:: /Images/external-grader-correct.png
          :width: 100
          :alt: Exemple d'évaluateur externe
     - :ref:`Évaluateur externe`
     - Un évaluateur externe est un service qui reçoit les réponses fournies par les étudiants pour un exercice donné, les traite, renvoie des commentaires et note l'exercice. Toutes ces données sont renvoyées à la plate-forme edX. L'évaluateur externe que vous concevez est déployé séparément, à l'extérieur de la plate-forme edX. Un évaluateur externe est particulièrement utile pour les cours de programmation de logiciels dans lesquels les étudiants sont invités à soumettre un code complexe.
   * - .. image:: /Images/GoogleHangout_WithPeople.png   
          :width: 100
          :alt: Hangouts (Google)
     - :ref:`Hangouts (Google)`
     - Vous pouvez permettre aux étudiants de participer à des conversations (via Hangouts) directement depuis votre cours. Grâce à Hangouts, les étudiants peuvent avoir une simple conversation audio, qu'ils peuvent transformer en appel vidéo, partager leurs écrans et regarder des vidéos ensemble, et collaborer sur des documents. 
   * - .. image:: /Images/IFrame_1.png
          :width: 100
          :alt: Exemple d'outil IFrame
     - :ref:`IFrame`
     - Les cadres IFrame vous permettent d'intégrer des exercices et des outils non notés depuis n'importe quel site Internet dans un composant HTML de votre cours.
   * - .. image:: /Images/LTIExample.png
          :width: 100
          :alt: Exemple de composant LTI
     - :ref:`Composant LTI`
     - Les composants LTI vous permettent d'ajouter dans Studio une application didactique externe ou un manuel qui n'est pas au format PDF.
   * - .. image:: /Images/CITL_AssmtTypes.png
          :width: 100
          :alt: Exemple d'évaluation par réponse ouverte
     - :ref:`Évaluation par réponse ouverte`
     - Dans les évaluations par réponse ouverte, les étudiants reçoivent des commentaires sur les réponses qu'ils soumettent, qu'il s'agisse de réponses écrites (plus ou moins longues) ou de fichiers contenant un code informatique ou des images qu'ils chargent. Les évaluations par réponse ouverte incluent les auto-évaluations et les évaluations par les pairs.
   * - .. image:: /Images/PollExample.png
          :width: 100
          :alt: Exemple de sondage
     - :ref:`Sondage`
     - Vous pouvez réaliser des sondages dans vos cours afin que vos étudiants échangent leurs points de vue sur différentes questions.
   * - .. image:: /Images/ProblemWithAdaptiveHintExample.png
          :width: 100
          :alt: Exemple d'exercice avec indice adaptatif
     - :ref:`Exercice avec indice adaptatif`
     - Lors d'un exercice avec indice adaptatif, la réponse d'un étudiant est évaluée. L'étudiant reçoit alors des commentaires ou un indice en fonction de sa réponse. Cela permet d'augmenter ses chances de répondre correctement à la prochaine tentative. Ces exercices peuvent être des exercices avec saisie de texte ou à choix multiples.
   * - .. image:: /Images/ProblemWrittenInLaTeX.png
          :width: 100
          :alt: Exemple d'exercice écrit en langage LaTeX
     - :ref:`Exercice écrit en langage LaTeX`
     - Si vous disposez d'un exercice qui a déjà été écrit en LaTeX, vous pouvez utiliser ce type d'exercice afin de convertir facilement votre code en XML.
   * - .. image:: /Images/TextInputExample.png
          :width: 100
          :alt: Exemple d'exercice avec saisie de texte
     - :ref:`Saisie de texte`
     - Dans les exercices avec saisie de texte, les étudiants saisissent du texte dans un champ de réponse. La réponse peut inclure des nombres, des lettres et des caractères spéciaux comme les signes de ponctuation.
   * - .. image:: /Images/WordCloudExample.png
          :width: 100
          :alt: Exemple de nuage de mots
     - :ref:`Nuage de mots`
     - Les nuages de mots organisent le texte que les étudiants saisissent (par exemple, en réponse à une question) dans un graphique coloré que les étudiants peuvent visualiser.
   * - .. image:: /Images/CustomPythonExample.png  
          :width: 100
          :alt: Exemple d'exercice avec élaboration d'un système d'évaluation personnalisé
     - :ref:`Élaboration d'un système d'évaluation personnalisé`
     - Dans les exercices avec évaluation personnalisée par Python (également appelés exercices avec élaboration d'un système d'évaluation personnalisé), l'évaluateur utilise un script Python que vous créez et intégrez dans l'exercice afin d'évaluer la réponse de l'étudiant ou de fournir des indices. Ces problèmes peuvent être de tout type.
   * - .. image:: /Images/VitalSource.png
          :width: 100
          :alt: Logiciel VitalSource avec notes en surbrillance
     - :ref:`VitalSource`
     - Le logiciel VitalSource Bookshelf permet aux étudiants de lire et parcourir du contenu (non seulement du texte, mais également des illustrations et des notes), et d'y effectuer des recherches. Les étudiants peuvent aussi utiliser différents surligneurs et copier les notes dans des documents externes.

********************************
Exercices et outils reposant sur des images
********************************

.. list-table::
   :widths: 30 25 80

   * - .. image:: /Images/DragAndDropProblem.png
          :width: 100
          :alt: Exemple d'exercice de glisser-déposer
     - :ref:`Glisser-déposer`
     - Dans les exercices de glisser-déposer, les étudiants répondent à une question en faisant glisser du texte ou des objets vers un emplacement spécifique sur une image.
   * - .. image:: /Images/image-modal.png
          :width: 100
          :alt: Exemple d'outil d'affichage des images en plein écran
     - :ref:`Affichage des images en plein écran`
     - L'outil d'affichage des images en plein écran permet à un étudiant d'agrandir une image et de l'afficher en plein écran dans la fenêtre du navigateur. Cet outil est particulièrement utile lorsque l'image contient de nombreux détails et que le texte agrandi est plus facile à consulter dans son contexte.
   * - .. image:: /Images/ImageMappedInputExample.png
          :width: 100
          :alt: Exemple d'exercice d'insertion d'images mappées
     - :ref:`Insertion d'images mappées`
     - Dans un exercice d'insertion d'images mappées, les étudiants cliquent dans une image à l'intérieur d'une zone définie. Pour définir cette zone, incluez des coordonnées dans le corps de l'exercice.
   * - .. image:: /Images/Zooming_Image.png
          :width: 100
          :alt: Exemple d'outil avec zoom d'images
     - :ref:`Zoom d'images`
     - Le zoom d'images permet d'agrandir certaines parties d'une image. Les étudiants peuvent ainsi en observer les détails.

************************************
Outils et exercices à choix multiples
************************************

.. list-table::
   :widths: 30 25 80

   * - .. image:: /Images/CheckboxExample.png
          :width: 100
          :alt: Exemple de QCM avec cases à cocher
     - :ref:`Case à cocher`
     - Dans un QCM avec cases à cocher, l'étudiant sélectionne une ou plusieurs options dans une liste de réponses possibles. Pour répondre correctement aux questions posées lors de l'exercice, l'étudiant doit sélectionner toutes les réponses pertinentes.
   * - .. image:: /Images/DropdownExample.png
          :width: 100
          :alt: Exemple de QCM avec menu déroulant
     - :ref:`Menu déroulant`
     - Les QCM avec menu déroulant permettent à l'étudiant d'effectuer son choix parmi une série de réponses, présentées dans une liste déroulante. À la différence des autres types de QCM, dans lesquels les réponses sont toujours visibles directement sous la question, les QCM avec menu déroulant n'affichent les différentes possibilités de réponses que lorsque l'étudiant clique sur la flèche du menu déroulant.
   * - .. image:: /Images/MultipleChoiceExample.png
          :width: 100
          :alt: Exemple d'exercice à choix multiples
     - :ref:`Choix multiples`
     - Dans des exercices à choix multiples, les étudiants peuvent sélectionner une option dans une liste de réponses possibles. À la différence des exercices avec menu déroulant, dans lesquels les réponses possibles n'apparaissent que lorsque l'étudiant clique sur la flèche du menu déroulant, les exercices à choix multiples affichent toujours les réponses possibles sous la question.
   * - .. image:: /Images/MultipleChoice_NumericalInput.png
          :width: 100
          :alt: Exemple d'exercice avec choix multiples et saisie de chiffres
     - :ref:`Choix multiples et saisie de chiffres`
     - Vous pouvez créer un exercice qui associe choix multiples et saisie de chiffres. Les étudiants sont amenés à sélectionner une réponse parmi les différentes possibilités proposées, mais doivent également saisir des informations plus spécifiques, le cas échéant.

********************************
Exercices et outils STIM
********************************

.. list-table::
   :widths: 30 25 80

   * - .. image:: /Images/ChemicalEquationExample.png
          :width: 100
          :alt: Exemple d'exercice avec équations chimiques
     - :ref:`Équation chimique`
     - Dans les exercices impliquant des équations chimiques, l'étudiant peut saisir, dans une zone dédiée, un texte qui représente une équation chimique. L'évaluateur évalue la réponse de l'étudiant en utilisant un script Python que vous créez et intégrez dans l'exercice.
   * - .. image:: /Images/CircuitSchematicExample_short.png
          :width: 100
          :alt: Exemple d'exercice avec logiciel de conception de schéma de circuit
     - :ref:`Logiciel de conception de schéma de circuit`
     - Dans les exercices avec logiciel de conception de schéma de circuit, les étudiants peuvent organiser les éléments d'un circuit sur une grille interactive : sources de tension, condensateurs, résistances et MOSFET. Ils soumettent ensuite au système une analyse en courant continu (CC) ou en courant alternatif (CA), ou une analyse transitoire de leur circuit pour évaluation.
   * - .. image:: /Images/GeneExplorer.png
          :width: 100
          :alt: Exemple d'exercice avec Gene Explorer
     - :ref:`Gene Explorer`
     - L'application Gene Explorer (GeneX) simule la transcription, l'épissage, la maturation et la traduction d'un hypothétique petit gène eucaryote. GeneX permet aux étudiants de procéder à des mutations spécifiques dans une séquence génique, puis calcule et affiche les effets des mutations sur l'ARNm et les protéines.
   * - .. image:: /Images/MathExpressionInputExample.png
          :width: 100
          :alt: Exemple d'exercice avec saisie d'expressions mathématiques
     - :ref:`Saisie d'expressions mathématiques`
     - Il s'agit du plus complexe des deux types d'exercices mathématiques de Studio. Dans les exercices avec saisie d'expression mathématiques, les étudiants saisissent des expressions mathématiques pour répondre à une question. Ces exercices peuvent inclure des variables inconnues et des expressions symboliques plus complexes. Vous pouvez indiquer une réponse correcte soit explicitement soit par l'intermédiaire d'un script Python. 
   * - .. image:: /Images/Molecule_Editor.png
          :width: 100
          :alt: Exemple d'exercice avec éditeur de molécules
     - :ref:`Éditeur de molécules`
     - L'éditeur de molécules permet aux étudiants de dessiner des molécules qui respectent les règles de formation de liaisons covalentes et de charges formelles, même si ces molécules sont chimiquement impossibles, qu'elles sont instables ou qu'elles n'existent pas dans les organismes vivants.
   * - .. image:: /Images/image292.png
          :width: 100
          :alt: Exemple d'exercice avec saisie de chiffres
     - :ref:`Saisie de chiffres`
     - Il s'agit du plus simple des deux types d'exercices mathématiques de Studio. Dans les exercices avec saisie de chiffres, les étudiants répondent à une question en saisissant des chiffres ou des expressions mathématiques spécifiques et relativement simples. Ces exercices n'acceptent que les nombres entiers et quelques constantes sélectionnées. Vous pouvez spécifier une marge d'erreur. Vous pouvez spécifier une réponse correcte soit explicitement soit par l'intermédiaire d'un script Python.
   * - .. image:: /Images/Periodic_Table.png
          :width: 100
          :alt: Exemple d'exercice avec tableau périodique
     - :ref:`Tableau périodique`
     - Un tableau périodique interactif des éléments chimiques présente des informations détaillées sur chaque élément lorsque l'étudiant fait passer la souris sur l'élément.
   * - .. image:: /Images/ProteinBuilder.png
          :width: 100
          :alt: Exemple d'exercice avec système d'élaboration de protéines
     - :ref:`Système d'élaboration de protéines`
     - Le système d'élaboration de protéines Protex invite les étudiants à créer des formes protéiques spécifiées en associant différents acides aminés. 