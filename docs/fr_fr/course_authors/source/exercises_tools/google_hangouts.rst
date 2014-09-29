.. _Hangouts (Google):

#################################################
Outil de messagerie instantanée : Google Hangouts
#################################################

Ce chapitre décrit comment utiliser le système de messagerie instantanée dans votre cours. Sommaire :

* :ref:`Hangouts_Overview`
* :ref:`Instant Hangouts in Your Course`
* :ref:`The Student Experience`
* :ref:`Limitations`
* :ref:`Create the Instant Hangout`


.. _Hangouts_Overview:

************
Présentation
************

Vous pouvez permettre aux étudiants de participer à des conversations (via Hangouts) directement depuis votre cours.

Avec les conversations instantanées, les étudiants peuvent :

* passer des appels audio ou vidéo ;
* partager leurs écrans et regarder des vidéos ensemble ;
* collaborer sur des documents.

Pour obtenir la liste complète des fonctions relatives aux conversations instantanées, reportez-vous à la `page Google Hangouts <http://www.google.com/+/learnmore/hangouts/>`_.

.. note:: Les étudiants qui souhaitent participer à une conversation instantanée doivent avoir un compte Google.  Nous vous recommandons de mentionner ce point dans vos ressources pédagogiques.

.. _Instant Hangouts in Your Course:

*************************************************
Ajouter des conversations instantanées à un cours
*************************************************

Vous pouvez ajouter une ou plusieurs conversations instantanées à votre cours. Par exemple, vous pouvez ajouter une conversation instantanée :

* Dans une page : les étudiants pourront ainsi participer à des conversations instantanées tout au long du cours. Pour plus d'informations, voir :ref:`Ajout de pages à un cours`.

* Dans un composant HTML : les étudiants inscrits à cette unité de cours spécifique pourront ainsi participer à des conversations instantanées. Pour plus d'informations sur la création de composants HTML, voir :ref:`Utilisation de composants HTML`.

Une conversation instantanée est spécifique à la page à partir de laquelle elle est lancée. Ainsi, les étudiants qui se joignent à une conversation depuis une unité de cours particulière interagissent entre eux. Les étudiants qui se joignent à une conversation lancée depuis une autre unité interagissent donc dans une autre conversation.

.. _The Student Experience:

*************************************************************************
Participer à une conversation instantanée : le point de vue de l'étudiant
*************************************************************************

Lorsque vous ajoutez une conversation instantanée à votre cours, une option dédiée apparaît sur cette page. L'exemple suivant présente l'option telle qu'elle apparaît dans une unité de cours. Avec cette option, l'étudiant peut lancer la conversation et être le premier participant.

.. image:: /Images/hangout_unit.png
 :alt: Image de l'option associée à une conversation instantanée dans une unité

Pour lancer la conversation, l'étudiant clique sur **Start the Hangout** (Lancer la conversation). (Lorsque le premier étudiant clique sur **Start the Hangout** [Lancer la conversation], les autres étudiants peuvent accéder au bouton **Join the Hangout** [Se joindre à la conversation].)

L'exemple suivant présente l'option telle qu'elle apparaît dans une page lorsqu'une conversation a déjà été lancée. Le bouton **Join the Hangout** (Se joindre à la conversation) est affiché. Cela signifie que la conversation a été lancée et qu'un autre étudiant est déjà en ligne.

.. image:: /Images/hangout_static_page.png
 :alt: Image de l'option associée à une conversation instantanée dans une page

Pour se joindre à la conversation, l'étudiant clique sur **Join the Hangout** (Se joindre à la conversation).

S'il n'est pas déjà connecté, l'étudiant est invité à se connecter à son compte Google :

.. image:: /Images/google_login.png
 :alt: Image de la page de connexion Google

Les étudiants qui ne possèdent pas de compte Google peuvent en créer un depuis la page de connexion.

Une fois l'étudiant connecté à son compte Google, la conversation commence dans une nouvelle fenêtre du navigateur :

.. image:: /Images/GoogleHangout_WithPeople.png
 :alt: Image de la conversation instantanée

.. _Limitations:

*******
Limites
*******

Actuellement, seuls dix étudiants peuvent se joindre à une même conversation instantanée. Nous vous recommandons de mentionner ce point dans vos ressources pédagogiques.

Les étudiants participant à des conversations lancées à partir de votre cours, mais depuis des pages différentes, sont comptés séparément. Ainsi, les dix étudiants participant à une conversation lancée depuis l'unité à laquelle ils sont inscrits seront comptabilisés à part des dix étudiants participant à une conversation lancée depuis une autre unité.

.. _Create the Instant Hangout:

**********************************
Créer une conversation instantanée
**********************************

Pour créer une conversation instantanée dans votre cours :

#. Téléchargez le `fichier JavaScript de conversation instantanée depuis GitHub <https://raw.github.com/google/instant-hangouts/master/instanthangouts-0.1.0.js>`_.

#. Copiez le texte de ce fichier dans un éditeur de texte sur votre ordinateur, puis enregistrez le fichier en tant que fichier JavaScript (en d'autres termes, lorsque vous enregistrez le fichier, remplacez l'extension .txt par .js).

   .. note::  Assurez-vous de copier le fichier GitHub brut, qui ne contient aucun formatage. Ne copiez pas le fichier mise en forme. Toute mise en forme entraînerait un dysfonctionnement du fichier JavaScript.

#. Chargez le fichier JavaScript sur la page **Fichiers et uploads** dans votre cours. Pour plus d'informations, voir :ref:`Ajouter des fichiers à un cours`.

#. Dans une page ou dans un composant HTML, ouvrez l'éditeur HTML.

#. Sur la première ligne, ajoutez le fichier JavaScript que vous avez chargé dans une balise <script> . Par exemple, si votre fichier JavaScript s'appelle **instanthangouts-0.1.0.js**, saisissez ce qui suit :
  
    <script src='/static/instanthangouts-0.1.0.js'/>

#. Après la balise <script> , ajoutez :
  
    <div class='instanthangouts'/>

#. Ajoutez le texte et les balises supplémentaires souhaités.

   Par exemple, le code HTML complet pourrait être le suivant :

    <p>Pour vous joindre à une conversation instantanée, cliquez sur le bouton ci-dessous. 
    Notez que la conversation peut également être transformée en appel vidéo.</p>
    <script src='/static/instanthangouts-0.1.0.js'></script>
    <div class='instanthangouts'/>

#. Testez l'outil de conversation instantané dans votre cours.

=================================
Mise à jour du fichier JavaScript
=================================

Google mettra régulièrement à jour le fichier JavaScript relatif aux conversations instantanées.  Pour recevoir les notifications de mise à jour, accédez à la `page du référentiel relatif aux conversations instantanées <https://github.com/google/instant-hangouts/>`_, puis cliquez sur **Watch** (Consulter) dans le coin supérieur droit de la page. 

Pour utiliser dans votre cours un fichier JavaScript mis à jour, nous vous recommandons de copier le fichier JavaScript depuis le référentiel dans un fichier qui a le même nom que le fichier chargé dans votre cours. Lorsque vous chargez le nouveau fichier, ce dernier remplace l'ancien fichier.

Avertissement : Si vous insérez des numéros de version dans les noms des fichiers chargés, vous devrez éditer les pages ou composants HTML incluant une option de conversation instantanée lors de chaque mise à jour du fichier JavaScript.
