
.. _Poll:

##########
Outil de sondage
##########

Vous pouvez réaliser des sondages dans vos cours afin que vos étudiants échangent leurs points de vue sur différentes questions.

.. image:: /Images/PollExample.png

.. note:: Pour créer un sondage, vous devez exporter votre cours, modifier certains des fichiers XML de votre cours dans un éditeur de texte, puis ré-importer votre cours. Nous vous recommandons de créer une copie de sauvegarde de votre cours avant de créer le sondage. Pour effectuer des modifications dans l'éditeur de texte sur les fichiers qui contiendront des sondages, il est recommandé d'avoir de très solides connaissances en édition de fichiers XML. 

**************
Terminologie
**************

Les sections, sous-sections, unités et composants ont des noms différents dans la vue **Plan du cours** et dans la liste de fichiers que vous visualisez après avoir exporté votre cours et ouvert les fichiers .xml à éditer. Le tableau suivant répertorie les noms de ces éléments dans la vue **Plan du cours**, ainsi que dans une liste de fichiers.

.. list-table::
   :widths: 15 15
   :header-rows: 0

   * - Vue Plan du cours
     - Liste de fichiers
   * - Section
     - Chapitre
   * - Sous-section
     - Séquentiel
   * - Unité
     - Vertical
   * - Composant
     - Discussion, HTML, Exercice ou vidéo

Pour exemple, si vous recherchez une section spécifique dans votre cours, vous devrez consulter le dossier **Chapitre** lorsque vous ouvrez la liste des fichiers que votre cours contient. Pour rechercher une unité, ouvrez le dossier **Vertical**.

.. _Create a Poll:

**************
Créer un sondage
**************

#. Dans l'unité dans laquelle vous souhaitez créer le sondage, créez des composants qui contiennent l'intégralité du contenu souhaité *sauf* le sondage. Notez l'identifiant de l'unité de 32 caractères qui apparaît dans le champ **Identifiant d'unité** sous **Position de l'unité**.

#. Exportez votre cours. Pour plus d'informations sur l'exportation d'un cours, voir :ref:`Exportation et importation d'un cours`. Enregistrez le fichier .tar.gz qui contient votre cours dans un emplacement facile à retenir. Vous pourrez ainsi le retrouver sans difficulté.

#. Localisez le fichier .tar.gz qui contient votre cours, puis décompressez le fichier .tar.gz afin de pouvoir accéder à son contenu dans une liste de dossiers et de fichiers.

   - Pour effectuer cette opération sur un ordinateur Windows, vous devrez télécharger un programme tiers. Pour plus d'informations, reportez-vous aux pages Web `How to Unpack a tar File in Windows <http://www.haskell.org/haskellwiki/How_to_unpack_a_tar_file_in_Windows>`_ (Comment décompresser un fichier tar dans Windows), `How to Extract a Gz File <http://www.wikihow.com/Extract-a-Gz-File>`_ (Comment extraire un fichier Gz), `The gzip Home Page <http://www.gzip.org/>`_ (Page d'accueil gzip), ou à la section `Windows <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/#windows>`_ de la page `How to Open .tar.gz Files <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/>`_ (Comment ouvrir des fichiers .tar.gz).

   - Pour plus d'informations sur la procédure à suivre pour un Mac, reportez-vous à la section `Mac OS X <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/#mac-os-x>`_ de la page `How to Open .tar.gz Files <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/>`_ (Comment ouvrir des fichiers .tar.gz).

#. Dans la liste des dossiers et des fichiers, ouvrez le dossier **Vertical**. 

   .. note:: Si votre unité n'est pas publiée, ouvrez le dossier **Brouillons**, puis le dossier **Vertical** dans le dossier **Brouillons**.

#. Dans le dossier **Vertical**, localisez le fichier .xml portant le même nom que l'identifiant de l'unité, noté à l'étape 1, puis ouvrez le fichier dans un éditeur de texte comme Sublime Text 2. Par exemple, si l'identifiant de l'unité est e461de7fe2b84ebeabe1a97683360d31, vous devrez ouvrir le fichier e461de7fe2b84ebeabe1a97683360d31.xml.

   Le fichier contient la liste de tous les composants de l'unité, ainsi que les noms d'URL des composants. Par exemple, le fichier suivant contient un composant HTML, suivi d'un composant Discussion.

   .. code-block:: xml
     
       <vertical display_name="Test Unit">
        <html url_name="b59c54e2f6fc4cf69ba3a43c49097d0b"/>
        <discussion url_name="8320c3d511484f3b96bdedfd4a44ac8b"/>
       </vertical>

#. Placez le code de sondage ci-après à l'emplacement où vous souhaitez enregistrer le sondage. Remplacez le texte de l'invite par le texte que vous souhaitez utiliser.

   .. code-block:: xml
      
    <poll_question display_name="Poll Question">
      <p>Texte de l'invite</p>
      <answer id="yes">Oui</answer>
      <answer id="no">Non</answer>
    </poll_question>

   Dans l'exemple ci-dessus, si vous souhaitez que votre sondage apparaisse entre le composant HTML et le composant Discussion dans l'unité, votre code doit ressembler au code présenté ci-après.

   .. code-block:: xml

     <vertical display_name="Test Unit">
      <html url_name="b59c54e2f6fc4cf69ba3a43c49097d0b"/>
      <poll_question display_name="Poll Question">
        <p>Texte de l'invite</p>
        <answer id="yes">Oui</answer>
        <answer id="no">Non</answer>
      </poll_question>
      <discussion url_name="8320c3d511484f3b96bdedfd4a44ac8b"/>
     </vertical>

#. Après avoir ajouté le code du sondage, enregistrez et fermez le fichier .xml.

#. Recompressez votre cours en tant que fichier .tar.gz.

   * Pour plus d'informations sur la procédure à suivre sur un Mac, reportez-vous à la page Web `How to Create a Tar GZip File from the Command Line (Comment créer un fichier Tar GZip à partir de la ligne de commande). <http://osxdaily.com/2012/04/05/create-tar-gzip/>`_.

   * Pour plus d'informations sur la procédure à suivre pour un ordinateur Windows, reportez-vous à la page Web `How to Make a .tar.gz on Windows (Comment créer un fichier Tar GZip sur Windows). <http://stackoverflow.com/questions/12774707/how-to-make-a-tar-gz-on-windows>`_.

#. Dans Studio, ré-importez votre cours. Vous pouvez revoir la question du sondage et les réponses que vous avez ajoutées dans Studio.

.. note::

  * Bien que les sondages s'affichent correctement dans Studio, vous ne pouvez pas les éditer dans Studio. Pour modifier vos sondages, vous devrez suivre les instructions relatives à l'exportation/l'importation présentées ci-dessus.
  
  * Un fichier .csv qui contient les réponses saisies par les étudiants pour cet exercice n'est pas disponible actuellement pour les sondages. Toutefois, vous pouvez obtenir les données agrégées directement dans l'exercice.  

*********************
Description de format
*********************

La principale balise de l'entrée du module de sondage est :

.. code-block:: xml

    <poll_question> ... </poll_question>

``poll_question`` peut inclure un nombre illimité des balises ci-après :
tout code xml et toute balise ``answer``. Nous appelons "question" tout code XML interne, à l'exception des balises ``answer``.

==================
Balise poll_question
==================

Xmodule pour la création de la fonctionnalité de sondage - le système de vote. Les attributs suivants peuvent être spécifiés pour cette balise :

    name - Nom du xmodule.
    [display_name| AUTOGENERATE] - Nom d'affichage du xmodule. Lorsque cet attribut n'est pas défini - Le nom d'affichage se génère automatiquement avec hachage.
    [reset | False] - Nombreuses réinitialisations/votes possibles (valeur = True/False)

============
Balise answer
============

Définit l'une des réponses possibles pour le module de sondage. Les attributs suivants peuvent être spécifiés pour cette balise :

    id - Identifiant unique (utilisé pour identifier les différentes réponses)

Inner text - Texte d'affichage pour une réponse possible.

***********
Exemple
***********

==================
Exemple de sondage
==================

.. code-block:: xml

    <poll_question name="second_question" display_name="Second question">
        <h3>Âge</h3>
        <p>Quel âge avez-vous ?</p>
        <answer id="less18">&lt; 18</answer>
        <answer id="10_25">de 10 à 25</answer>
        <answer id="more25">&gt; 25</answer>
    </poll_question>

================================================
Exemple de sondage avec fonction de réinitialisation désactivée
================================================

.. code-block:: xml

    <poll_question name="first_question_with_reset" display_name="Première question avec réinitialisation"
        reset="True">
        <h3>Votre sexe</h3>
        <p>Êtes-vous de sexe masculin ou féminin ?</p>
        <answer id="man">Masculin</answer>
        <answer id="woman">Féminin</answer>
    </poll_question>