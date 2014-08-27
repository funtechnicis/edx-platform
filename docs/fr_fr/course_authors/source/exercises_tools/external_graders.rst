.. _External Grader:

###########################
�valuateur externe
###########################


.. _External Grader Overview:

*******************
Pr�sentation
*******************

Un �valuateur externe est un service qui re�oit les r�ponses fournies par les �tudiants pour un exercice donn�, les traite, renvoie des commentaires et note l'exercice. Toutes ces donn�es sont renvoy�es � la plate-forme edX. L'�valuateur externe que vous concevez est d�ploy� s�par�ment, � l'ext�rieur de la plate-forme edX.

Pour plus d'informations, reportez-vous aux sections suivantes :

* :ref:`Exemple d'�valuateur externe`
* :ref:`�valuateurs externes et XQueue`
* :ref:`Interface XQueue`
* :ref:`�laboration d'un �valuateur externe`
* :ref:`Cr�er un exercice avec r�ponse en code`

.. _External Grader Example:

***************************
Exemple d'�valuateur externe
***************************

Un �valuateur externe est particuli�rement utile pour les cours de programmation de logiciels dans lesquels les �tudiants sont invit�s � soumettre un code complexe.  L'�valuateur peut effectuer sur ce code les tests que vous aurez d�finis. Les r�sultats seront alors renvoy�s � l'�tudiant.

Par exemple, d�finissez un exercice au cours duquel les �tudiants doivent soumettre un code Python, et cr�ez un ensemble de tests qu'un �valuateur externe peut lancer afin de v�rifier les r�ponses soumises par les �tudiants. Lorsqu'un �tudiant entre le code Python pour l'exercice et clique sur **Valider**, le code est envoy� � l'�valuateur pour v�rification.  Si tous les tests auxquels le code est soumis sont r�ussis, l'�valuateur renvoie la note et une cha�ne indiquant que la solution est correcte.

.. image:: /Images/external-grader-correct.png
 :alt: Image de la vue de l'exercice de programmation d'un �tudiant avec recours � un �valuateur externe et r�sultat correct 


L'�valuateur externe peut renvoyer une cha�ne avec les r�sultats, que l'�tudiant peut visualiser en cliquant sur **See full output** (Afficher le commentaire complet). Cette option s'av�re particuli�rement utile lorsque la solution propos�e par l'�tudiant est incorrecte et que vous souhaitez renvoyer des informations en cas d'�chec. Par exemple :

.. image:: /Images/external-grader-incorrect.png
 :alt: Image de la vue de l'exercice de programmation d'un �tudiant avec recours � un �valuateur externe et r�sultat correct 

.. _External Graders and XQueue:

**************************************
�valuateurs externes et XQueue
**************************************

La plate-forme edX communique avec votre �valuateur externe via XQueue.  XQueue communique les r�ponses des �tudiants � l'�valuateur ; le syst�me re�oit ensuite les r�sultats renvoy�s par l'�valuateur et les transmet aux �tudiants.  

Les r�ponses soumises par les �tudiants sont recueillies dans XQueue, o� elles sont conserv�es jusqu'� ce que l'�valuateur r�cup�re, ou extraie, de mani�re active les prochaines r�ponses en attente d'�valuation.

L'�valuateur externe interroge r�guli�rement XQueue via une interface RESTful. Lorsqu'il extrait la r�ponse soumise par un �tudiant, l'�valuateur externe lance les tests sur cette r�ponse, puis renvoie les r�sultats � XQueue via l'interface RESTful. XQueue envoie alors les r�sultats � la plate-forme edX de gestion de l'apprentissage (syst�me LMS, de l'anglais Learning Management System).

Pour visualiser un exemple de code utilis� par un �valuateur externe qui utilise le mode de r�cup�ration, voir `le r�f�rentiel Stanford-Online/xqueue_pull_ref <https://github.com/Stanford-Online/xqueue_pull_ref>`_.


============================
�valuateur externe : pr�sentation du flux de travail
============================

Les �tapes suivantes pr�sentent le processus dans son int�gralit� :

#. L'�tudiant saisit le code ou joint un fichier comprenant la r�ponse � l'exercice, puis clique sur Valider.
#. L'�valuateur externe extrait le code de XQueue.
#. L'�valuateur externe effectue sur le code les tests que vous avez cr��s.
#. L'�valuateur externe renvoie � XQueue la note de l'exercice et tout autre r�sultat dans une cha�ne. 
#. XQueue envoie les r�sultats � la plate-forme edX de gestion de l'apprentissage (syst�me LMS, de l'anglais Learning Management System).
#. L'�tudiant peut consulter les r�sultats de l'exercice et la note obtenue.


==================
Nom XQueue
==================

Votre cours utilisera un nom XQueue sp�cifique. Vous utilisez ce nom lors de la cr�ation d'exercices dans edX Studio. Ce nom vous est attribu� par votre gestionnaire de programme edX. La plate-forme edX h�berge de nombreuses instances XQueue pour diff�rents cours. Il est donc essentiel que vous utilisiez dans vos exercices le nom exact de l'instance XQueue concern�e, comme d�crit dans la section :ref:`Cr�er un exercice avec r�ponse en code`. 


.. _The XQueue Interface:

**************************************
Interface XQueue
**************************************

Les r�ponses soumises par l'�tudiant, transmises par XQueue � l'�valuateur, et les r�sultats transmis par l'�valuateur � XQueue, sont des objets JSON, comme d�crit ci-apr�s.

.. note:: XQueue n'envoie pas l'ID de l'�tudiant � l'�valuateur externe. Votre �valuateur ne peut ni acc�der aux ID des �tudiants ni associer les ID des �tudiants aux r�ponses soumises.

Pour visualiser le code de l'interface XQueue, reportez-vous au fichier urls.py situ� dans le r�f�rentiel XQueue de la plate-forme edX. <https://github.com/edx/xqueue/blob/master/queue/urls.py>`_.

======================================================
Envoi d'informations � l'�valuateur externe
======================================================

L'�valuateur re�oit les r�ponses soumises par l'�tudiant en tant qu'objet JSON associ� � deux cl�s :

* **student_response** : Cha�ne contenant la soumission de code de l'�tudiant.  La cha�ne provient soit d'une saisie effectu�e par l'�tudiant dans la plate-forme edX de gestion de l'apprentissage (syst�me LMS, de l'anglais Learning Management System), soit d'un fichier joint transmis par l'�tudiant.

* **grader_payload** : Cha�ne facultative que vous pouvez sp�cifier lorsque vous cr�ez l'exercice. Pour plus d'informations, reportez-vous � la section :ref:`Cr�er un exercice avec r�ponse en code`.

Par exemple :

 {
   "xqueue_body":
   "{
     "student_response": "def double(x):\n return 2*x\n", 
     "grader_payload": "problem_2"
    }"
 }

======================================================
R�ponses de l'�valuateur externe
======================================================

Apr�s l'ex�cution des tests et l'enregistrement des r�sultats associ�s � la r�ponse d'un �tudiant, l'�valuateur doit renvoyer les informations en publiant une r�ponse JSON. La cha�ne JSON indique si la r�ponse de l'�tudiant est correcte, et contient la note de l'exercice et tout message que les tests cr�ent.

Dans l'exemple suivant, l'�valuateur renvoie une cha�ne JSON qui indique que la r�ponse soumise par l'�tudiant �tait correcte et que la note obtenue �tait de 1. Cette cha�ne inclut �galement le message suivant :

 { 
  "correct": true, 
  "score": 1, 
  "msg": "<p>Le code a pass� avec succ�s tous les tests.</p>" 
 }

.. _Building an External Grader:

****************************
�laboration d'un �valuateur externe
****************************

C'est l'�quipe p�dagogique en charge du cours, et non le personnel edX, qui doit assurer l'�laboration et le d�ploiement de l'�valuateur externe. 

Outre la cr�ation de tests sp�cifiques aux exercices que vous utilisez dans le cadre de votre cours, vous devez tenir compte de quatre axes fondamentaux lors de l'�laboration d'un �valuateur externe :

* :ref:`�volutivit�`
* :ref:`S�curit�`
* :ref:`Fiabilit� et r�cup�ration`
* :ref:`Tests`


.. _Scale:

==================
�volutivit�
==================

Votre �valuateur externe doit �tre un syst�me �volutif, � m�me de prendre en charge le nombre d'�tudiants de votre cours.

Gardez � l'esprit que les r�ponses des �tudiants risquent d'�tre soumises de fa�on group�e. Elles ne seront probablement pas transmises en un flot continu et r�gulier.  Vous pouvez, par exemple, vous attendre � un nombre de soumissions bien sup�rieur � la moyenne dans les heures pr�c�dant la date d'�ch�ance d'un exercice.  Par cons�quent, vous devriez vous assurer que l'�valuateur externe peut traiter les r�ponses d'une majorit� d'�tudiants sur une courte p�riode. 

.. _Security:

==================
S�curit�
==================

Les �tudiants soumettent un code qui s'ex�cute directement sur un serveur dont vous �tes responsable. Il est possible qu'un �tudiant soumette un code malveillant. Votre syst�me doit �tre prot�g� contre ce type de sc�nario et garantir que l'�valuateur externe n'ex�cute que le code associ� aux exercices du cours.  La mise en �uvre de syst�mes de protection adapt�s d�pend du langage de programmation que vous utilisez et de votre architecture de d�ploiement.  Vous devez vous assurer qu'aucun code malveillant n'endommage pas votre serveur.

.. _Reliability and Recovery:

==============================
Fiabilit� et r�cup�ration
==============================

D�s le d�but du cours, de nombreux �tudiants soumettent un code, � toute heure du jour ou de la nuit, et esp�rent recevoir rapidement leurs r�sultats.  Si votre �valuateur externe est sujet � des pannes ou � des retards, l'exp�rience risque de ne pas �tre satisfaisante pour les �tudiants.

Par cons�quent, vous devez vous assurer que votre �valuateur pr�sente un niveau �lev� de disponibilit� et est � m�me de recommencer � fonctionner apr�s une erreur ou une panne. Avant le d�but de votre cours, vous devez disposer d'une proc�dure sur laquelle vous appuyer en cas de d�faillance de l'�valuateur. Cette proc�dure doit permettre d'avertir imm�diatement l'�quipe en charge du fonctionnement de l'�valuateur et des op�rations edX. En collaboration avec edX, vous devriez d�velopper une proc�dure vous permettant d'identifier rapidement la cause de la panne (par exemple l'�valuateur ou une instance XQueue de la plate-forme edX).

Pour plus d'informations, contactez votre gestionnaire de programme edX.

Si vous savez que l'�valuateur ne sera pas disponible � une p�riode donn�e en raison d'op�rations de maintenance, nous vous recommandons de :ref:`mettre le cours � jour`. 

.. _Testing:

==================
Tests
==================

Nous vous recommandons de proc�der � des tests complets sur l'�valuateur avant le d�but de votre cours.  Assurez-vous de tester du code incorrect et du code correct afin de garantir que l'�valuateur pr�sente des notes et messages adapt�s.

.. _Create a Code Response Problem:

********************************
Cr�er un exercice avec r�ponse en code
********************************

Pour cr�er un exercice avec r�ponse en code dans edX Studio, ajoutez un exercice vide courant, puis modifiez la d�finition XML de l'exercice dans l':ref:`�diteur avanc�`.

Pour plus d'informations, voir :ref:`Utilisation de composants Exercice`.

Vous trouverez ci-apr�s l'exemple simple de la d�finition XML d'un exercice qui utilise un �valuateur externe :

 <problem display_name="Problem 6">
    <text>
        <p>�crivez un programme qui affiche la phrase "Bonjour le monde".</p>
    </text>
    <coderesponse queuename="my_course_queue">
        <textbox rows="10" cols="80" mode="python" tabsize="4"/>
        <codeparam>
            <initial_display>
              # � l'attention des �tudiants : veuillez �crire votre programme ici
              Ins�rez ""
            </initial_display>
            <answer_display>
              Ins�rez "Bonjour le monde"
            </answer_display>
            <grader_payload>
            {"output": "Bonjour le monde", "max_length": 2}
            </grader_payload>
        </codeparam>
    </coderesponse>
 </problem>

Notez les points suivants concernant la d�finition XML :

* **queuename** : La valeur de l'attribut queuename de l'�l�ment <coderesponse>  est mapp�e sur une instance XQueue que la plate-forme edX sp�cifie pour le cours.  Ce nom vous est attribu� par votre gestionnaire de programme edX. Vous devez utiliser ce nom afin que l'exercice communique avec l'instance XQueue correcte.

* **Input Type** : Dans cet exemple, le type de saisie est sp�cifi� par l'�l�ment **<textbox>**.  Lorsque vous utilisez <textbox>, l'�tudiant saisit le code dans le champ d'un navigateur lorsqu'il visualise l'unit� du cours.  L'autre �l�ment que vous pouvez utiliser pour sp�cifier le type de saisie est <filesubmission>, qui permet � l'�tudiant de joindre et de soumettre un fichier de code dans l'unit�.

* **<grader_payload>** : Vous pouvez utiliser l'�l�ment <grader_payload> pour envoyer des informations � l'�valuateur externe sous la forme d'un objet JSON. Par exemple, vous pouvez utiliser <grader_payload>  pour indiquer � l'�valuateur quels tests ex�cuter pour un exercice donn�.