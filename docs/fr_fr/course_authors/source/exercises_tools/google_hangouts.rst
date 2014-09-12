.. _Google Instant Hangout:

###########################################
Outil de messagerie instantan�e : Google Hangouts
###########################################

Ce chapitre d�crit comment utiliser le syst�me de messagerie instantan�e dans votre cours. Sommaire :

* :ref:`Pr�sentation de Hangouts`
* :ref:`Ajouter des conversations instantan�es � un cours`
* :ref:`Participer � une conversation instantan�e : le point de vue de l'�tudiant`
* :ref:`Limites`
* :ref:`Cr�er une conversation instantan�e`

.. _Hangouts_Overview:

*****************
Pr�sentation
*****************

Vous pouvez permettre aux �tudiants de participer � des conversations (via Hangouts) directement depuis votre cours.

Avec les conversations instantan�es, les �tudiants peuvent :

* passer des appels audio ou vid�o ;
* partager leurs �crans et regarder des vid�os ensemble ;
* collaborer sur des documents.

Pour obtenir la liste compl�te des fonctions relatives aux conversations instantan�es, reportez-vous � la `page Google Hangouts <http://www.google.com/+/learnmore/hangouts/>`_.

.. note:: Les �tudiants qui souhaitent participer � une conversation instantan�e doivent avoir un compte Google.  Nous vous recommandons de mentionner ce point dans vos ressources p�dagogiques.

.. _Instant Hangouts in Your Course:

**********************************
Ajouter des conversations instantan�es � un cours
**********************************

Vous pouvez ajouter une ou plusieurs conversations instantan�es � votre cours. Par exemple, vous pouvez ajouter une conversation instantan�e :

* Dans une page : les �tudiants pourront ainsi participer � des conversations instantan�es tout au long du cours. Pour plus d'informations, voir :ref:`Ajout de pages � un cours`.

* Dans un composant HTML : les �tudiants inscrits � cette unit� de cours sp�cifique pourront ainsi participer � des conversations instantan�es. Pour plus d'informations sur la cr�ation de composants HTML, voir :ref:`Utilisation de composants HTML`.

Une conversation instantan�e est sp�cifique � la page � partir de laquelle elle est lanc�e. Ainsi, les �tudiants qui se joignent � une conversation depuis une unit� de cours particuli�re interagissent entre eux. Les �tudiants qui se joignent � une conversation lanc�e depuis une autre unit� interagissent donc dans une autre conversation.

.. _The Student Experience:

*************************
Participer � une conversation instantan�e : le point de vue de l'�tudiant
*************************

Lorsque vous ajoutez une conversation instantan�e � votre cours, une option d�di�e appara�t sur cette page. L'exemple suivant pr�sente l'option telle qu'elle appara�t dans une unit� de cours. Avec cette option, l'�tudiant peut lancer la conversation et �tre le premier participant.

.. image:: /Images/hangout_unit.png
 :alt: Image de l'option associ�e � une conversation instantan�e dans une unit�

Pour lancer la conversation, l'�tudiant clique sur **Start the Hangout** (Lancer la conversation). (Lorsque le premier �tudiant clique sur **Start the Hangout** [Lancer la conversation], les autres �tudiants peuvent acc�der au bouton **Join the Hangout** [Se joindre � la conversation].)

L'exemple suivant pr�sente l'option telle qu'elle appara�t dans une page lorsqu'une conversation a d�j� �t� lanc�e. Le bouton **Join the Hangout** (Se joindre � la conversation) est affich�. Cela signifie que la conversation a �t� lanc�e et qu'un autre �tudiant est d�j� en ligne.

.. image:: /Images/hangout_static_page.png
 :alt: Image de l'option associ�e � une conversation instantan�e dans une page

Pour se joindre � la conversation, l'�tudiant clique sur **Join the Hangout** (Se joindre � la conversation).

S'il n'est pas d�j� connect�, l'�tudiant est invit� � se connecter � son compte Google :

.. image:: /Images/google_login.png
 :alt: Image de la page de connexion Google

Les �tudiants qui ne poss�dent pas de compte Google peuvent en cr�er un depuis la page de connexion.

Une fois l'�tudiant connect� � son compte Google, la conversation commence dans une nouvelle fen�tre du navigateur :

.. image:: /Images/GoogleHangout_WithPeople.png
 :alt: Image de la conversation instantan�e

.. _Limitations:

****************
Limites
****************

Actuellement, seuls dix �tudiants peuvent se joindre � une m�me conversation instantan�e. Nous vous recommandons de mentionner ce point dans vos ressources p�dagogiques.

Les �tudiants participant � des conversations lanc�es � partir de votre cours, mais depuis des pages diff�rentes, sont compt�s s�par�ment. Ainsi, les dix �tudiants participant � une conversation lanc�e depuis l'unit� � laquelle ils sont inscrits seront comptabilis�s � part des dix �tudiants participant � une conversation lanc�e depuis une autre unit�.

.. _Create the Instant Hangout:

**************************************************
Cr�er une conversation instantan�e
**************************************************

Pour cr�er une conversation instantan�e dans votre cours :

#. T�l�chargez le `fichier JavaScript de conversation instantan�e depuis GitHub <https://raw.github.com/google/instant-hangouts/master/instanthangouts-0.1.0.js>`_.

#. Copiez le texte de ce fichier dans un �diteur de texte sur votre ordinateur, puis enregistrez le fichier en tant que fichier JavaScript (en d'autres termes, lorsque vous enregistrez le fichier, remplacez l'extension .txt par .js).

   .. note::  Assurez-vous de copier le fichier GitHub brut, qui ne contient aucun formatage. Ne copiez pas le fichier mise en forme. Toute mise en forme entra�nerait un dysfonctionnement du fichier JavaScript.

#. Chargez le fichier JavaScript sur la page **Fichiers et uploads** dans votre cours. Pour plus d'informations, voir :ref:`Ajouter des fichiers � un cours`.

#. Dans une page ou dans un composant HTML, ouvrez l'�diteur HTML.

#. Sur la premi�re ligne, ajoutez le fichier JavaScript que vous avez charg� dans une balise <script> . Par exemple, si votre fichier JavaScript s'appelle **instanthangouts-0.1.0.js**, saisissez ce qui suit :
  
    <script src='/static/instanthangouts-0.1.0.js'/>

#. Apr�s la balise <script> , ajoutez :
  
    <div class='instanthangouts'/>

#. Ajoutez le texte et les balises suppl�mentaires souhait�s.

   Par exemple, le code HTML complet pourrait �tre le suivant :

    <p>Pour vous joindre � une conversation instantan�e, cliquez sur le bouton ci-dessous. 
    Notez que la conversation peut �galement �tre transform�e en appel vid�o.</p>
    <script src='/static/instanthangouts-0.1.0.js'></script>
    <div class='instanthangouts'/>

#. Testez l'outil de conversation instantan� dans votre cours.

=============================
Mise � jour du fichier JavaScript
=============================

Google mettra r�guli�rement � jour le fichier JavaScript relatif aux conversations instantan�es.  Pour recevoir les notifications de mise � jour, acc�dez � la `page du r�f�rentiel relatif aux conversations instantan�es <https://github.com/google/instant-hangouts/>`_, puis cliquez sur **Watch** (Consulter) dans le coin sup�rieur droit de la page. 

Pour utiliser dans votre cours un fichier JavaScript mis � jour, nous vous recommandons de copier le fichier JavaScript depuis le r�f�rentiel dans un fichier qui a le m�me nom que le fichier charg� dans votre cours. Lorsque vous chargez le nouveau fichier, ce dernier remplace l'ancien fichier.

Avertissement : Si vous ins�rez des num�ros de version dans les noms des fichiers charg�s, vous devrez �diter les pages ou composants HTML incluant une option de conversation instantan�e lors de chaque mise � jour du fichier JavaScript.