.. _Image Mapped Input:

###########################
Exercice d'insertion d'images mapp�es
###########################

Dans un exercice d'insertion d'images mapp�es, les �tudiants cliquent dans une zone d�finie � l'int�rieur d'une image. Pour d�finir cette zone, incluez des coordonn�es dans le corps de l'exercice.

.. image:: /Images/ImageMappedInputExample.png
 :alt: Image d'un exercice d'insertion d'images mapp�es

****************************************
Cr�er un exercice d'insertion d'images mapp�es
****************************************

Pour cr�er un exercice d'insertion d'images mapp�es :

#. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avanc�**.
#. Cliquez sur **Image Mapped Input** (Insertion d'images mapp�es).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, remplacez l'exemple de code par votre propre code.
#. Cliquez sur **Enregistrer**.

**Code d'exercice** :

.. code-block:: xml

  <problem>
    <p><b>Exemple d'exercice</b></p>
     <startouttext/>
      <p>Dans l'image ci-apr�s, cliquez sur le triangle.</p>
      <endouttext/>
      <imageresponse>
      <imageinput src="/static/threeshapes.png" width="220" height="150" rectangle="(80,40)-(130,90)" />
      </imageresponse>
  </problem>


.. _Image Mapped Input Problem XML:

******************************
Exercice d'insertion d'images mapp�es - Format XML 
******************************

==========
Mod�le
==========

.. code-block:: xml

  <problem>
    <startouttext/>
      <p>Dans l'image ci-apr�s, cliquez sur le triangle.</p>
    <endouttext/>
        <imageresponse>
         <imageinput src="IMAGE FILE PATH" width="NUMBER" height="NUMBER" rectangle="(X-AXIS,Y-AXIS)-(X-AXIS,Y-AXIS)" />
        </imageresponse>
  </problem>

=====
Balises
=====

* ``<imageresponse>`` : Indique que cet exercice est un exercice d'insertion d'images mapp�es.
* ``<imageinput>`` : Sp�cifie le fichier image et la zone du fichier dans laquelle l'�tudiant doit cliquer.

**Balise :** ``<imageresponse>``

Indique que cet exercice est un exercice d'insertion d'images mapp�es.

  Attributs

  (aucun)

  Enfants

  * ``<imageinput>``

**Balise :** ``<imageinput>``

Sp�cifie le fichier image et la zone du fichier dans laquelle l'�tudiant doit cliquer.

  Attributs

   .. list-table::
      :widths: 20 80

      * - Attribut
        - Description
      * - src (obligatoire)
        - URL de l'image
      * - height (obligatoire)
        - Hauteur de l'image, exprim�e en pixels
      * - width (obligatoire)
        - Largeur de l'image, exprim�e en pixels
      * - rectangle (obligatoire)
        - Attribut avec quatre valeurs int�gr�es au format (<start_width>,<start_height>)-(<end_width>,<end-height>) Toutes les coordonn�es commencent par (0,0) dans le coin sup�rieur gauche. Les valeurs augmentent au fur et � mesure de la progression vers le coin inf�rieur droit. Cette �volution est tr�s similaire au sens de lecture du fran�ais. Les deux coordonn�es d�finies constituent les deux coins oppos�s d'une zone dans laquelle un �tudiant peut cliquer.

  Enfants
  
  (aucun)