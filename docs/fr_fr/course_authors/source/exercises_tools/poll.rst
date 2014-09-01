
.. _Poll:

##########
Outil de sondage
##########

Vous pouvez r�aliser des sondages dans vos cours afin que vos �tudiants �changent leurs points de vue sur diff�rentes questions.

.. image:: /Images/PollExample.png

.. note:: Pour cr�er un sondage, vous devez exporter votre cours, modifier certains des fichiers XML de votre cours dans un �diteur de texte, puis r�-importer votre cours. Nous vous recommandons de cr�er une copie de sauvegarde de votre cours avant de cr�er le sondage. Pour effectuer des modifications dans l'�diteur de texte sur les fichiers qui contiendront des sondages, il est recommand� d'avoir de tr�s solides connaissances en �dition de fichiers XML. 

**************
Terminologie
**************

Les sections, sous-sections, unit�s et composants ont des noms diff�rents dans la vue **Plan du cours** et dans la liste de fichiers que vous visualisez apr�s avoir export� votre cours et ouvert les fichiers .xml � �diter. Le tableau suivant r�pertorie les noms de ces �l�ments dans la vue **Plan du cours**, ainsi que dans une liste de fichiers.

.. list-table::
   :widths: 15 15
   :header-rows: 0

   * - Vue Plan du cours
     - Liste de fichiers
   * - Section
     - Chapitre
   * - Sous-section
     - S�quentiel
   * - Unit�
     - Vertical
   * - Composant
     - Discussion, HTML, Exercice ou vid�o

Pour exemple, si vous recherchez une section sp�cifique dans votre cours, vous devrez consulter le dossier **Chapitre** lorsque vous ouvrez la liste des fichiers que votre cours contient. Pour rechercher une unit�, ouvrez le dossier **Vertical**.

.. _Create a Poll:

**************
Cr�er un sondage
**************

#. Dans l'unit� dans laquelle vous souhaitez cr�er le sondage, cr�ez des composants qui contiennent l'int�gralit� du contenu souhait� *sauf* le sondage. Notez l'identifiant de l'unit� de 32 caract�res qui appara�t dans le champ **Identifiant d'unit�** sous **Position de l'unit�**.

#. Exportez votre cours. Pour plus d'informations sur l'exportation d'un cours, voir :ref:`Exportation et importation d'un cours`. Enregistrez le fichier .tar.gz qui contient votre cours dans un emplacement facile � retenir. Vous pourrez ainsi le retrouver sans difficult�.

#. Localisez le fichier .tar.gz qui contient votre cours, puis d�compressez le fichier .tar.gz afin de pouvoir acc�der � son contenu dans une liste de dossiers et de fichiers.

   - Pour effectuer cette op�ration sur un ordinateur Windows, vous devrez t�l�charger un programme tiers. Pour plus d'informations, reportez-vous aux pages Web `How to Unpack a tar File in Windows <http://www.haskell.org/haskellwiki/How_to_unpack_a_tar_file_in_Windows>`_ (Comment d�compresser un fichier tar dans Windows), `How to Extract a Gz File <http://www.wikihow.com/Extract-a-Gz-File>`_ (Comment extraire un fichier Gz), `The gzip Home Page <http://www.gzip.org/>`_ (Page d'accueil gzip), ou � la section `Windows <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/#windows>`_ de la page `How to Open .tar.gz Files <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/>`_ (Comment ouvrir des fichiers .tar.gz).

   - Pour plus d'informations sur la proc�dure � suivre pour un Mac, reportez-vous � la section `Mac OS X <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/#mac-os-x>`_ de la page `How to Open .tar.gz Files <http://www.ofzenandcomputing.com/how-to-open-tar-gz-files/>`_ (Comment ouvrir des fichiers .tar.gz).

#. Dans la liste des dossiers et des fichiers, ouvrez le dossier **Vertical**. 

   .. note:: Si votre unit� n'est pas publi�e, ouvrez le dossier **Brouillons**, puis le dossier **Vertical** dans le dossier **Brouillons**.

#. Dans le dossier **Vertical**, localisez le fichier .xml portant le m�me nom que l'identifiant de l'unit�, not� � l'�tape 1, puis ouvrez le fichier dans un �diteur de texte comme Sublime Text 2. Par exemple, si l'identifiant de l'unit� est e461de7fe2b84ebeabe1a97683360d31, vous devrez ouvrir le fichier e461de7fe2b84ebeabe1a97683360d31.xml.

   Le fichier contient la liste de tous les composants de l'unit�, ainsi que les noms d'URL des composants. Par exemple, le fichier suivant contient un composant HTML, suivi d'un composant Discussion.

   .. code-block:: xml
     
       <vertical display_name="Test Unit">
        <html url_name="b59c54e2f6fc4cf69ba3a43c49097d0b"/>
        <discussion url_name="8320c3d511484f3b96bdedfd4a44ac8b"/>
       </vertical>

#. Placez le code de sondage ci-apr�s � l'emplacement o� vous souhaitez enregistrer le sondage. Remplacez le texte de l'invite par le texte que vous souhaitez utiliser.

   .. code-block:: xml
      
    <poll_question display_name="Poll Question">
      <p>Texte de l'invite</p>
      <answer id="yes">Oui</answer>
      <answer id="no">Non</answer>
    </poll_question>

   Dans l'exemple ci-dessus, si vous souhaitez que votre sondage apparaisse entre le composant HTML et le composant Discussion dans l'unit�, votre code doit ressembler au code pr�sent� ci-apr�s.

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

#. Apr�s avoir ajout� le code du sondage, enregistrez et fermez le fichier .xml.

#. Recompressez votre cours en tant que fichier .tar.gz.

   * Pour plus d'informations sur la proc�dure � suivre sur un Mac, reportez-vous � la page Web `How to Create a Tar GZip File from the Command Line (Comment cr�er un fichier Tar GZip � partir de la ligne de commande). <http://osxdaily.com/2012/04/05/create-tar-gzip/>`_.

   * Pour plus d'informations sur la proc�dure � suivre pour un ordinateur Windows, reportez-vous � la page Web `How to Make a .tar.gz on Windows (Comment cr�er un fichier Tar GZip sur Windows). <http://stackoverflow.com/questions/12774707/how-to-make-a-tar-gz-on-windows>`_.

#. Dans Studio, r�-importez votre cours. Vous pouvez revoir la question du sondage et les r�ponses que vous avez ajout�es dans Studio.

.. note::

  * Bien que les sondages s'affichent correctement dans Studio, vous ne pouvez pas les �diter dans Studio. Pour modifier vos sondages, vous devrez suivre les instructions relatives � l'exportation/l'importation pr�sent�es ci-dessus.
  
  * Un fichier .csv qui contient les r�ponses saisies par les �tudiants pour cet exercice n'est pas disponible actuellement pour les sondages. Toutefois, vous pouvez obtenir les donn�es agr�g�es directement dans l'exercice.  

*********************
Description de format
*********************

La principale balise de l'entr�e du module de sondage est :

.. code-block:: xml

    <poll_question> ... </poll_question>

``poll_question`` peut inclure un nombre illimit� des balises ci-apr�s :
tout code xml et toute balise ``answer``. Nous appelons "question" tout code XML interne, � l'exception des balises ``answer``.

==================
Balise poll_question
==================

Xmodule pour la cr�ation de la fonctionnalit� de sondage - le syst�me de vote. Les attributs suivants peuvent �tre sp�cifi�s pour cette balise :

    name - Nom du xmodule.
    [display_name| AUTOGENERATE] - Nom d'affichage du xmodule. Lorsque cet attribut n'est pas d�fini - Le nom d'affichage se g�n�re automatiquement avec hachage.
    [reset | False] - Nombreuses r�initialisations/votes possibles (valeur = True/False)

============
Balise answer
============

D�finit l'une des r�ponses possibles pour le module de sondage. Les attributs suivants peuvent �tre sp�cifi�s pour cette balise :

    id - Identifiant unique (utilis� pour identifier les diff�rentes r�ponses)

Inner text - Texte d'affichage pour une r�ponse possible.

***********
Exemple
***********

==================
Exemple de sondage
==================

.. code-block:: xml

    <poll_question name="second_question" display_name="Second question">
        <h3>�ge</h3>
        <p>Quel �ge avez-vous ?</p>
        <answer id="less18">&lt; 18</answer>
        <answer id="10_25">de 10 � 25</answer>
        <answer id="more25">&gt; 25</answer>
    </poll_question>

================================================
Exemple de sondage avec fonction de r�initialisation d�sactiv�e
================================================

.. code-block:: xml

    <poll_question name="first_question_with_reset" display_name="Premi�re question avec r�initialisation"
        reset="True">
        <h3>Votre sexe</h3>
        <p>�tes-vous de sexe masculin ou f�minin ?</p>
        <answer id="man">Masculin</answer>
        <answer id="woman">F�minin</answer>
    </poll_question>