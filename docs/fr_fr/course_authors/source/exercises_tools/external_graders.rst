.. _Évaluateur externe:

##################
Évaluateur externe
##################


.. _External Grader Overview:

*******************
Présentation
*******************

Un évaluateur externe est un service qui reçoit les réponses fournies par les étudiants pour un exercice donné, les traite, renvoie des commentaires et note l'exercice. Toutes ces données sont renvoyées à la plate-forme edX. L'évaluateur externe que vous concevez est déployé séparément, à l'extérieur de la plate-forme edX.

Pour plus d'informations, reportez-vous aux sections suivantes :

* :ref:`Exemple d'évaluateur externe`
* :ref:`Évaluateurs externes et XQueue`
* :ref:`Interface XQueue`
* :ref:`Élaboration d'un évaluateur externe`
* :ref:`Créer un exercice avec réponse en code`

.. _External Grader Example:

****************************
Exemple d'évaluateur externe
****************************

Un évaluateur externe est particulièrement utile pour les cours de programmation de logiciels dans lesquels les étudiants sont invités à soumettre un code complexe.  L'évaluateur peut effectuer sur ce code les tests que vous aurez définis. Les résultats seront alors renvoyés à l'étudiant.

Par exemple, définissez un exercice au cours duquel les étudiants doivent soumettre un code Python, et créez un ensemble de tests qu'un évaluateur externe peut lancer afin de vérifier les réponses soumises par les étudiants. Lorsqu'un étudiant entre le code Python pour l'exercice et clique sur **Valider**, le code est envoyé à l'évaluateur pour vérification.  Si tous les tests auxquels le code est soumis sont réussis, l'évaluateur renvoie la note et une chaîne indiquant que la solution est correcte.

.. image:: /Images/external-grader-correct.png
 :alt: Image de la vue de l'exercice de programmation d'un étudiant avec recours à un évaluateur externe et résultat correct 


L'évaluateur externe peut renvoyer une chaîne avec les résultats, que l'étudiant peut visualiser en cliquant sur **See full output** (Afficher le commentaire complet). Cette option s'avère particulièrement utile lorsque la solution proposée par l'étudiant est incorrecte et que vous souhaitez renvoyer des informations en cas d'échec. Par exemple :

.. image:: /Images/external-grader-incorrect.png
 :alt: Image de la vue de l'exercice de programmation d'un étudiant avec recours à un évaluateur externe et résultat correct 

.. _External Graders and XQueue:

******************************
Évaluateurs externes et XQueue
******************************

La plate-forme edX communique avec votre évaluateur externe via XQueue.  XQueue communique les réponses des étudiants à l'évaluateur ; le système reçoit ensuite les résultats renvoyés par l'évaluateur et les transmet aux étudiants.  

Les réponses soumises par les étudiants sont recueillies dans XQueue, où elles sont conservées jusqu'à ce que l'évaluateur récupère, ou extraie, de manière active les prochaines réponses en attente d'évaluation.

L'évaluateur externe interroge régulièrement XQueue via une interface RESTful. Lorsqu'il extrait la réponse soumise par un étudiant, l'évaluateur externe lance les tests sur cette réponse, puis renvoie les résultats à XQueue via l'interface RESTful. XQueue envoie alors les résultats à la plate-forme edX de gestion de l'apprentissage (système LMS, de l'anglais Learning Management System).

Pour visualiser un exemple de code utilisé par un évaluateur externe qui utilise le mode de récupération, voir `le référentiel Stanford-Online/xqueue_pull_ref <https://github.com/Stanford-Online/xqueue_pull_ref>`_.


====================================================
Évaluateur externe : présentation du flux de travail
====================================================

Les étapes suivantes présentent le processus dans son intégralité :

#. L'étudiant saisit le code ou joint un fichier comprenant la réponse à l'exercice, puis clique sur Valider.
#. L'évaluateur externe extrait le code de XQueue.
#. L'évaluateur externe effectue sur le code les tests que vous avez créés.
#. L'évaluateur externe renvoie à XQueue la note de l'exercice et tout autre résultat dans une chaîne. 
#. XQueue envoie les résultats à la plate-forme edX de gestion de l'apprentissage (système LMS, de l'anglais Learning Management System).
#. L'étudiant peut consulter les résultats de l'exercice et la note obtenue.


==========
Nom XQueue
==========

Votre cours utilisera un nom XQueue spécifique. Vous utilisez ce nom lors de la création d'exercices dans edX Studio. Ce nom vous est attribué par votre gestionnaire de programme edX. La plate-forme edX héberge de nombreuses instances XQueue pour différents cours. Il est donc essentiel que vous utilisiez dans vos exercices le nom exact de l'instance XQueue concernée, comme décrit dans la section :ref:`Créer un exercice avec réponse en code`. 


.. _The XQueue Interface:

****************
Interface XQueue
****************

Les réponses soumises par l'étudiant, transmises par XQueue à l'évaluateur, et les résultats transmis par l'évaluateur à XQueue, sont des objets JSON, comme décrit ci-après.

.. note:: XQueue n'envoie pas l'ID de l'étudiant à l'évaluateur externe. Votre évaluateur ne peut ni accéder aux ID des étudiants ni associer les ID des étudiants aux réponses soumises.

Pour visualiser le code de l'interface XQueue, reportez-vous au fichier urls.py situé dans le référentiel XQueue de la plate-forme edX. <https://github.com/edx/xqueue/blob/master/queue/urls.py>`_.

===========================================
Envoi d'informations à l'évaluateur externe
===========================================

L'évaluateur reçoit les réponses soumises par l'étudiant en tant qu'objet JSON associé à deux clés :

* **student_response** : Chaîne contenant la soumission de code de l'étudiant.  La chaîne provient soit d'une saisie effectuée par l'étudiant dans la plate-forme edX de gestion de l'apprentissage (système LMS, de l'anglais Learning Management System), soit d'un fichier joint transmis par l'étudiant.

* **grader_payload** : Chaîne facultative que vous pouvez spécifier lorsque vous créez l'exercice. Pour plus d'informations, reportez-vous à la section :ref:`Créer un exercice avec réponse en code`.

Par exemple ::

 {
   "xqueue_body":
   "{
     "student_response": "def double(x):\n return 2*x\n",
     "grader_payload": "problem_2"
    }"
 }

================================
Réponses de l'évaluateur externe
================================

Après l'exécution des tests et l'enregistrement des résultats associés à la réponse d'un étudiant, l'évaluateur doit renvoyer les informations en publiant une réponse JSON. La chaîne JSON indique si la réponse de l'étudiant est correcte, et contient la note de l'exercice et tout message que les tests créent.

Dans l'exemple suivant, l'évaluateur renvoie une chaîne JSON qui indique que la réponse soumise par l'étudiant était correcte et que la note obtenue était de 1. Cette chaîne inclut également le message suivant ::

 { 
  "correct": true, 
  "score": 1, 
  "msg": "<p>The code passed all tests.</p>" 
 }

.. _Building an External Grader:

***********************************
Élaboration d'un évaluateur externe
***********************************

C'est l'équipe pédagogique en charge du cours, et non le personnel edX, qui doit assurer l'élaboration et le déploiement de l'évaluateur externe. 

Outre la création de tests spécifiques aux exercices que vous utilisez dans le cadre de votre cours, vous devez tenir compte de quatre axes fondamentaux lors de l'élaboration d'un évaluateur externe :

* :ref:`Évolutivité`
* :ref:`Sécurité`
* :ref:`Fiabilité et récupération`
* :ref:`Tests`


.. _Scale:

===========
Évolutivité
===========

Votre évaluateur externe doit être un système évolutif, à même de prendre en charge le nombre d'étudiants de votre cours.

Gardez à l'esprit que les réponses des étudiants risquent d'être soumises de façon groupée. Elles ne seront probablement pas transmises en un flot continu et régulier.  Vous pouvez, par exemple, vous attendre à un nombre de soumissions bien supérieur à la moyenne dans les heures précédant la date d'échéance d'un exercice.  Par conséquent, vous devriez vous assurer que l'évaluateur externe peut traiter les réponses d'une majorité d'étudiants sur une courte période. 

.. _Security:

========
Sécurité
========

Les étudiants soumettent un code qui s'exécute directement sur un serveur dont vous êtes responsable. Il est possible qu'un étudiant soumette un code malveillant. Votre système doit être protégé contre ce type de scénario et garantir que l'évaluateur externe n'exécute que le code associé aux exercices du cours.  La mise en uvre de systèmes de protection adaptés dépend du langage de programmation que vous utilisez et de votre architecture de déploiement.  Vous devez vous assurer qu'aucun code malveillant n'endommage pas votre serveur.

.. _Reliability and Recovery:

=========================
Fiabilité et récupération
=========================

Dès le début du cours, de nombreux étudiants soumettent un code, à toute heure du jour ou de la nuit, et espèrent recevoir rapidement leurs résultats.  Si votre évaluateur externe est sujet à des pannes ou à des retards, l'expérience risque de ne pas être satisfaisante pour les étudiants.

Par conséquent, vous devez vous assurer que votre évaluateur présente un niveau élevé de disponibilité et est à même de recommencer à fonctionner après une erreur ou une panne. Avant le début de votre cours, vous devez disposer d'une procédure sur laquelle vous appuyer en cas de défaillance de l'évaluateur. Cette procédure doit permettre d'avertir immédiatement l'équipe en charge du fonctionnement de l'évaluateur et des opérations edX. En collaboration avec edX, vous devriez développer une procédure vous permettant d'identifier rapidement la cause de la panne (par exemple l'évaluateur ou une instance XQueue de la plate-forme edX).

Pour plus d'informations, contactez votre gestionnaire de programme edX.

Si vous savez que l'évaluateur ne sera pas disponible à une période donnée en raison d'opérations de maintenance, nous vous recommandons de :ref:`mettre le cours à jour`. 

.. _Testing:

=====
Tests
=====

Nous vous recommandons de procéder à des tests complets sur l'évaluateur avant le début de votre cours.  Assurez-vous de tester du code incorrect et du code correct afin de garantir que l'évaluateur présente des notes et messages adaptés.

.. _Create a Code Response Problem:

**************************************
Créer un exercice avec réponse en code
**************************************

Pour créer un exercice avec réponse en code dans edX Studio, ajoutez un exercice vide courant, puis modifiez la définition XML de l'exercice dans l':ref:`Éditeur avancé`.

Pour plus d'informations, voir :ref:`Utilisation de composants Exercice`.

Vous trouverez ci-après l'exemple simple de la définition XML d'un exercice qui utilise un évaluateur externe ::

 <problem display_name="Problem 6">
    <text>
        <p>Write a program that prints "hello world".</p>
    </text>
    <coderesponse queuename="my_course_queue">
        <textbox rows="10" cols="80" mode="python" tabsize="4"/>
        <codeparam>
            <initial_display>
              # students please write your program here
              print ""
            </initial_display>
            <answer_display>
              print "hello world"
            </answer_display>
            <grader_payload>
            {"output": "hello world", "max_length": 2}
            </grader_payload>
        </codeparam>
    </coderesponse>
 </problem>

Notez les points suivants concernant la définition XML :

* **queuename** : La valeur de l'attribut queuename de l'élément <coderesponse>  est mappée sur une instance XQueue que la plate-forme edX spécifie pour le cours.  Ce nom vous est attribué par votre gestionnaire de programme edX. Vous devez utiliser ce nom afin que l'exercice communique avec l'instance XQueue correcte.

* **Input Type** : Dans cet exemple, le type de saisie est spécifié par l'élément **<textbox>**.  Lorsque vous utilisez <textbox>, l'étudiant saisit le code dans le champ d'un navigateur lorsqu'il visualise l'unité du cours.  L'autre élément que vous pouvez utiliser pour spécifier le type de saisie est <filesubmission>, qui permet à l'étudiant de joindre et de soumettre un fichier de code dans l'unité.

* **<grader_payload>** : Vous pouvez utiliser l'élément <grader_payload> pour envoyer des informations à l'évaluateur externe sous la forme d'un objet JSON. Par exemple, vous pouvez utiliser <grader_payload>  pour indiquer à l'évaluateur quels tests exécuter pour un exercice donné.
