.. _Review_Answers:

############################
R�ponses et donn�es associ�es
############################

Vous pouvez consulter les r�ponses des �tudiants aux exercices de votre cours. Vous pouvez notamment consulter la r�ponse qu'un �tudiant donn� a fournie � un exercice sp�cifique, t�l�charger un rapport de toutes les r�ponses aux exercices du cours, ou consulter un histogramme des r�ponses des �tudiants � un exercice s�lectionn�.

* :ref:`Student_Answer_Submission`

* :ref:`Student_Answer_Distribution`

* :ref:`score_histogram`

.. _Student_Answer_Submission:

************************************************************
V�rifier la r�ponse soumise par un �tudiant et consulter l'historique des soumissions
************************************************************

Pour un �tudiant donn� et un exercice sp�cifique, vous pouvez prendre connaissance de la r�ponse exacte qui a �t� soumise, du nombre d'essais effectu�s, ainsi que de la date et de l'heure de la soumission. Pour identifier l'�tudiant, indiquez son nom d'utilisateur.

Pour consulter la r�ponse soumise par un �tudiant :

#. Affichez la version r�elle de votre cours.

#. Cliquez sur **Contenu du cours** et acc�dez � l'unit� contenant l'exercice que vous souhaitez consulter.

#. Affichez l'exercice, puis cliquez sur **Historique des soumissions** sous l'exercice.

#. Saisissez le nom d'utilisateur de l'�tudiant dont vous souhaitez consulter les travaux, puis cliquez sur **Afficher historique** en bas de la page.

  Les informations sur la r�ponse ou les r�ponses soumises par l'�tudiant s'affichent.

Pour fermer la Visionneuse d'historique de soumission, cliquez sur la page du navigateur en dehors de la visionneuse.
   
.. _Student_Answer_Distribution:

****************************************
Distribution des r�ponses des �tudiants
****************************************

Pour certains types d'exercices figurant dans votre cours, vous pouvez t�l�charger un fichier CSV incluant des donn�es sur la distribution des r�ponses des �tudiants. Les donn�es de distribution incluses dans ce fichier concernent les types d'exercices list�s ci-apr�s :

* QCM avec cases � cocher (``<choiceresponse>``)
* QCM avec menu d�roulant (``<optionresponse>``)
* Exercices � choix multiples (``<multiplechoiceresponse>``)
* Exercices avec saisie de chiffres (``<numericalresponse>``)
* Exercices avec saisie de texte (``<stringresponse>``)
* Exercices avec saisie d'expressions math�matiques (``<formularesponse>``)

Le fichier inclut une ligne pour chaque association exercice-r�ponse s�lectionn�e par vos �tudiants. Par exemple, pour un exercice associ� � cinq r�ponses possibles, le fichier compte cinq lignes, une pour chaque r�ponse s�lectionn�e par au moins un �tudiant. Les exercices dont la fonction **Randomisation** a �t� activ�e dans Studio (parfois d�sign�e par le terme de re-randomisation) comportent une ligne pour chaque association exercice-variante-r�ponse s�lectionn�e par vos �tudiants. Voir :ref:`Param�tres de l'exercice`.

Le fichier CSV contient les colonnes suivantes :

.. list-table::
   :widths: 20 60
   :header-rows: 1

   * - Colonne
     - Description
   * - ModuleID
     - Identifiant interne du composant Exercice.
   * - PartID
     - Pour un composant Exercice qui contient plusieurs exercices, correspond � l'identifiant interne de chaque exercice individuel. Pour un composant Exercice qui contient un seul exercice, correspond � l'identifiant interne de cet exercice.
   * - Correct Answer
     - 0 si la valeur **AnswerValue** est incorrecte ou 1 si la valeur **AnswerValue** est correcte.
   * - Count
     - Nombre de fois que les �tudiants ont saisi ou s�lectionn� cette r�ponse (celle-ci constitue leur soumission la plus r�cente pour l'exercice ou la variante d'exercice). Pour les exercices dont le nombre d'**essais** est d�fini sur une valeur sup�rieure � 1, cela signifie que chaque �tudiant contribue � ce nombre � hauteur de 1 (valeur maximale), m�me si la m�me r�ponse est fournie au cours de plusieurs tentatives.
   * - ValueID
     - Identifiant interne de la r�ponse possible aux QCM avec cases � cocher ou aux exercices � choix multiples. Cette colonne demeure vide pour les QCM avec menu d�roulant, les exercices avec saisie de chiffres, les exercices avec saisie de texte et les exercices avec saisie d'expressions math�matiques.
   * - AnswerValue
     - �tiquette de texte de la r�ponse possible aux QCM avec cases � cocher, aux QCM avec menu d�roulant ou aux exercices � choix multiples. Valeur saisie par l'�tudiant pour les exercices avec saisie de chiffres, les exercices avec saisie de texte et les exercices avec saisie d'expressions math�matiques.
   * - Variant
     - Pour les exercices utilisant le param�tre **Randomisation** dans Studio, contient l'identifiant unique de la variante de l'exercice. Cette colonne est vide pour les exercices qui n'utilisent pas le param�tre **Randomisation** ou qui utilisent l'option **Jamais** pour ce param�tre.
   * - Problem Display Name
     - **Nom d'affichage** d�fini pour l'exercice.
   * - Question
     - �tiquette relative � l'accessibilit� qui appara�t au-dessus des r�ponses possibles ou du champ de saisie de texte de l'exercice. Dans l'�diteur simple de Studio, ce texte est encadr� par deux paires de crochets pointus (>>Question<<). Cette colonne reste vide pour les questions dont l'�tiquette relative � l'accessibilit� n'a pas �t� d�finie.

Les entr�es sont tri�es par la valeur dans chaque colonne, en commen�ant par la colonne ModuleID � gauche et en passant aux colonnes suivantes � droite.

.. _Download_Answer_Distributions:

===================================================
T�l�charger le rapport de distribution des r�ponses des �tudiants
===================================================

Un processus automatis� est ex�cut� r�guli�rement sur les serveurs edX afin de mettre � jour le fichier CSV incluant les donn�es relatives aux r�ponses des �tudiants. Un lien vers la version la plus r�cente de ce fichier figure dans le tableau de bord de l'enseignant.

Pour t�l�charger la version la plus r�cente du fichier CSV :

#. Affichez la version r�elle de votre cours.

#. Cliquez sur **Instructor** (Enseignant), puis sur **T�l�chargement des donn�es**.

#. Au bas de la page, cliquez sur le nom du fichier ``{course_id}_answer_distribution.csv``. Vous devrez peut-�tre faire d�filer vers le bas pour trouver ce fichier.

==========================================================================
Forum aux questions sur le rapport de distribution des r�ponses des �tudiants
==========================================================================

Les r�ponses aux questions relatives au rapport de distribution des r�ponses des �tudiants sont pr�sent�es ci-apr�s.   

**Il n'existe pas de rapport de distribution des r�ponses des �tudiants pour mon cours. Comment puis-je le g�n�rer ?**

Les rapports de distribution des r�ponses des �tudiants sont g�n�r�s automatiquement et actualis�s plusieurs fois par jour. Le fichier ``{course_id}_answer_distribution.csv`` est affich� � la suite de tous les fichiers ``{course_id}_grade_report_{date}.csv``. V�rifiez l'int�gralit� de la liste (en faisant d�filer la liste des rapports disponibles jusqu'� la fin).

**Pourquoi certains exercices ne figurent-ils pas dans ce rapport ? Les types des exercices non r�pertori�s sont list�s sous ** :ref:`Review_Answers`. Ce rapport inclut uniquement les exercices qu'au moins un �tudiant a effectu�s depuis le d�but du mois de mars 2014. Pour ces exercices, ce rapport inclut uniquement les activit�s survenues apr�s le mois d'octobre 2013.

**Pourquoi la colonne AnswerValue n'appara�t-elle pas pour certains de mes exercices ?**

Pour les QCM avec cases � cocher et les exercices � choix multiples, les r�ponses possibles s�lectionn�es par un �tudiant apr�s le d�but du mois de 2014 sont affich�es comme d�crit dans la r�ponse pr�c�dente. Les r�ponses possibles s�lectionn�es par au moins un �tudiant apr�s le mois d'octobre 2013, mais qui n'ont pas �t� s�lectionn�es depuis le d�but du mois de mars 2014, sont incluses dans le rapport. Elles ne pr�sentent toutefois pas de valeur **AnswerValue**. La colonne **ValueID** pr�sente des identifiants internes, comme choice_1 et choice_2, pour ces r�ponses.

**Pourquoi la colonne Question n'appara�t-elle pas pour certains de mes exercices ?**

La valeur indiqu�e dans la colonne **Question** correspond � l'�tiquette relative � l'accessibilit� de l'exercice.
Pour plus d'informations sur la configuration d'�tiquettes pour les exercices, voir :ref:`Cr�ation d'exercices`.

En outre, pour les exercices qui utilisent le param�tre **Randomisation** dans Studio, si une r�ponse particuli�re n'a pas �t� s�lectionn�e depuis le d�but du mois de mars 2014, la colonne **Question** ne contient aucune valeur pour cette r�ponse.

**Mes �tudiants indiquent qu'ils ont r�pondu � une question, mais celle-ci n'appara�t pas dans le rapport. Comment est-ce possible ?**

Seules les questions pour lesquelles le param�tre **Nombre d'essais maximum** est sup�rieur ou �gal � 1 sont incluses dans ce rapport.

**J'ai apport� une correction � un exercice apr�s sa publication. Comment puis-je identifier les �tudiants qui ont tent� de r�pondre � cet exercice avant l'insertion de la modification ?**

Les valeurs de la colonne **Count** de l'exercice permettent d'avoir une vision compl�te de l'historique de l'exercice. Si vous modifiez un exercice apr�s sa publication, il ne sera peut-�tre pas possible de d�terminer quelles r�ponses ont �t� pr�sent�es avant et apr�s l'insertion de la modification.

**Pourquoi la m�me r�ponse appara�t-elle dans deux lignes diff�rentes lorsque je consulte le rapport dans une feuille de calcul ?**

Certains tableurs peuvent alt�rer les donn�es dans le rapport CSV � des fins d'affichage. Par exemple, pour les r�ponses d'�tudiant pr�sent�es dans un format diff�rent, comme "0,5" et ".5", Excel inclut correctement les deux lignes diff�rentes du fichier CSV, mais affiche la valeur **AnswerValue** dans les deux lignes comme suit : "0,5". Si vous notez que des r�ponses sont identiques sur des lignes distinctes avec des comptes s�par�s, vous pouvez consulter les donn�es r�elles et non modifi�es en ouvrant le fichier CSV dans un �diteur de texte.

**Pourquoi des caract�res �tranges apparaissent-ils dans le rapport lorsque je le consulte dans une
feuille de calcul ?**

Le fichier CSV est encod� au format UTF-8. Toutefois, certains tableurs n'interpr�tent ni ne rendent correctement les caract�res encod�s en UTF-8. Par exemple, un rapport de distribution des r�ponses des �tudiants pr�sentant en fran�ais les valeurs AnswerValue s'affichera diff�remment dans Microsoft Excel pour Mac et dans le module Calc d'OpenOffice.

  Valeurs AnswerValue dans Microsoft Excel pour Mac :

   .. image:: ../Images/student_answer_excel.png
     :alt: Feuille de calcul qui remplace les caract�res accentu�s fran�ais par des traits de soulignement

  Valeurs AnswerValue dans le module Calc d'OpenOffice :

   .. image:: ../Images/student_answer_calc.png
     :alt: Feuille de calcul qui affiche correctement les caract�res accentu�s fran�ais

Si des caract�res ne s'affichent pas correctement dans une feuille de calcul, tentez d'ouvrir le fichier CSV dans un autre tableur comme LibreOffice ou Apache OpenOffice.

==========================================================================
Interpr�ter le rapport de distribution des r�ponses des �tudiants
==========================================================================

Vous pouvez utiliser le rapport de distribution afin de consulter les r�ponses soumises par les �tudiants dans le cadre de leurs travaux. Il vous est ainsi possible d'�valuer la structure et l'exhaustivit� de votre cours et des composants Exercice.

Par exemple, d�finissez une question dans Studio afin que celle-ci soit associ�e � la saisie d'une seule r�ponse correcte : "Warfarine". Lorsque vous produisez le rapport de distribution des r�ponses des �tudiants, vous devez v�rifier que cette r�ponse a en fait �t� marqu�e comme �tant correcte : la valeur 1 est indiqu�e dans la colonne **Correct Answer** en regard de la valeur Warfarine indiqu�e dans la colonne **AnswerValue**.

.. image:: ../Images/SAD_Answer_Review.png
    :alt: Dans Excel, 5 lignes pr�sentent 5 valeurs AnswerValue ; 4 de ces valeurs sont associ�es � une compr�hension de la question, mais seule 1 r�ponse est correcte.

Toutefois, lorsque vous consultez le rapport, vous notez que d'autres r�ponses, comme "Warfarine ou Coumadine", n'ont pas �t� configur�es pour �tre marqu�es comme correctes dans Studio. Or, ce sont des r�ponses que vous pourriez (ou non) consid�rer comme �tant correctes. La colonne **Correct Answer** indique que ces autres r�ponses ont �t� marqu�es comme incorrectes (0). Toutefois, pour les �ditions futures de votre cours, vous souhaiterez peut-�tre r�viser la question ou mettre � jour l'exercice afin de d�signer les variations dans la r�ponse comme �tant correctes.

De nombreux tableurs proposent des options de visualisation des donn�es, comme les diagrammes ou les graphiques. Les diagrammes peuvent faciliter l'identification des erreurs courantes de vos �tudiants.

.. image:: ../Images/SAD_Column_Chart.png
    :alt: Dans Excel, pr�sentation des colonnes AnswerValue et Count l'une � c�t� de l'autre avec s�lection des valeurs de 4 lignes ; au premier plan, un histogramme des comptes des 4 r�ponses

Dans cet exemple, le rapport de distribution des r�ponses des �tudiants est ouvert dans Microsoft Excel. Pour cr�er un diagramme qui pr�sente le nombre d'�tudiants ayant s�lectionn� diff�rentes r�ponses � une question � choix multiples, placez les colonnes **AnswerValue** et **Count** l'une � c�t� de l'autre. Apr�s avoir s�lectionn� (en cliquant dessus) et fait glisser les cellules du rapport contenant les donn�es � utiliser dans le diagramme, cliquez sur la barre d'outils des diagrammes, puis sur le type de diagramme souhait�.

.. note:: Pour plus d'informations sur l'utilisation de ces options, reportez-vous � l'aide du tableur que vous utilisez. Vous devrez peut-�tre modifier votre feuille de calcul, en r�-agen�ant les colonnes, par exemple. Avant de commencer, enregistrez une copie de sauvegarde du fichier d'origine que vous avez t�l�charg�. 

Vous pouvez adapter le contenu de votre cours en fonction des erreurs courantes faites par les �tudiants. Dans cet exemple, la plupart des �tudiants ont s�lectionn� la r�ponse correcte. Toutefois, le nombre de r�ponses incorrectes peut permettre de d�finir les modifications � apporter au cours.

.. _score_histogram:

**************************************************
Afficher un histogramme des notes obtenues pour un exercice sp�cifique
**************************************************

Vous pouvez afficher un diagramme de la distribution des notes pour un exercice donn�. 

.. note:: Pour afficher la distribution des notes pour un exercice donn�, vous devez utiliser son identifiant unique. Vous pouvez afficher l'histogramme des exercices dont l'identifiant unique inclut le pr�fixe ``/problem/``. Voir :ref:`find_URL`.

Pour afficher la distribution des notes pour un exercice :

#. Affichez la version r�elle de votre cours.

#. Cliquez sur **Instructor** (Enseignant), puis cliquez sur **Analyses**. 

#. Dans la section de distribution des scores (ou notes), s�lectionnez un exercice en utilisant son identifiant unique.

   La page **Analyses** est mise � jour afin d'afficher l'histogramme des notes pour cet exercice.

   .. image:: ../Images/score_histogram.png
     :alt: Graphique pr�sentant le nombre d'�tudiants ayant re�u des notes diff�rentes pour la **question** d'un exercice s�lectionn� :  LMS-2522

===================================================
Interpr�ter un histogramme des notes
===================================================

L'histogramme des notes d'un exercice s�lectionn� pr�sente les informations suivantes.

   .. image:: ../Images/score_histogram_callouts.png
     :alt: Histogramme pr�sentant le nombre students scored (�tudiants comptabilis�s pour l'exercice) ; les nombres sur l'axe des x indiquent les notes illustr�es sur le graphique

* L'axe des x indique le nombre de points que les �tudiants peuvent recevoir pour l'exercice, sans pond�ration. Bien que des valeurs d�cimales figurent sur l'axe des x, chaque note est un nombre entier. Le nombre entier � gauche de la barre illustr�e sur le graphique correspond � la note qui s'applique.

* L'axe des y indique le nombre d'�tudiants ayant soumis une r�ponse pour l'exercice et ayant valid� leur r�ponse.

* Au-dessus du graphique, le nombre **students scored** (�tudiants comptabilis�s pour l'exercice) appara�t. Ce nombre indique le nombre total de dossiers de la base de donn�es associ�s � l'exercice : il inclut non seulement les �tudiants ayant soumis et valid� leur r�ponse afin d'�tre not�s, mais �galement les �tudiants qui ont ouvert l'exercice, mais ne l'ont pas encore termin�.

* Un processus automatis� est ex�cut� chaque semaine (approximativement) sur les serveurs edX. Il permet de mettre � jour les histogrammes. Ce processus est ex�cut� moins fr�quemment que le processus mettant � jour le rapport de distribution des r�ponses des �tudiants : il peut donc arriver que, lors d'un cours, le nombre d'�tudiants affich� dans l'histogramme des notes soit relativement diff�rent de la valeur **Count** du m�me exercice dans le rapport de distribution des r�ponses des �tudiants.