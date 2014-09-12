.. _Image Mapped Input:

###########################
Exercice d'insertion d'images mappées
###########################

Dans un exercice d'insertion d'images mappées, les étudiants cliquent dans une zone définie à l'intérieur d'une image. Pour définir cette zone, incluez des coordonnées dans le corps de l'exercice.

.. image:: /Images/ImageMappedInputExample.png
 :alt: Image d'un exercice d'insertion d'images mappées

****************************************
Créer un exercice d'insertion d'images mappées
****************************************

Pour créer un exercice d'insertion d'images mappées :

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Image Mapped Input** (Insertion d'images mappées).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par votre propre code.
#. Cliquez sur **Enregistrer**.

**Code d'exercice** :

.. code-block:: xml

  <problem>
    <p><b>Exemple d'exercice</b></p>
     <startouttext/>
      <p>Dans l'image ci-après, cliquez sur le triangle.</p>
      <endouttext/>
      <imageresponse>
      <imageinput src="/static/threeshapes.png" width="220" height="150" rectangle="(80,40)-(130,90)" />
      </imageresponse>
  </problem>


.. _Image Mapped Input Problem XML:

******************************
Exercice d'insertion d'images mappées - Format XML 
******************************

==========
Modèle
==========

.. code-block:: xml

  <problem>
    <startouttext/>
      <p>Dans l'image ci-après, cliquez sur le triangle.</p>
    <endouttext/>
        <imageresponse>
         <imageinput src="IMAGE FILE PATH" width="NUMBER" height="NUMBER" rectangle="(X-AXIS,Y-AXIS)-(X-AXIS,Y-AXIS)" />
        </imageresponse>
  </problem>

=====
Balises
=====

* ``<imageresponse>`` : Indique que cet exercice est un exercice d'insertion d'images mappées.
* ``<imageinput>`` : Spécifie le fichier image et la zone du fichier dans laquelle l'étudiant doit cliquer.

**Balise :** ``<imageresponse>``

Indique que cet exercice est un exercice d'insertion d'images mappées.

  Attributs

  (aucun)

  Enfants

  * ``<imageinput>``

**Balise :** ``<imageinput>``

Spécifie le fichier image et la zone du fichier dans laquelle l'étudiant doit cliquer.

  Attributs

   .. list-table::
      :widths: 20 80

      * - Attribut
        - Description
      * - src (obligatoire)
        - URL de l'image
      * - height (obligatoire)
        - Hauteur de l'image, exprimée en pixels
      * - width (obligatoire)
        - Largeur de l'image, exprimée en pixels
      * - rectangle (obligatoire)
        - Attribut avec quatre valeurs intégrées au format (<start_width>,<start_height>)-(<end_width>,<end-height>) Toutes les coordonnées commencent par (0,0) dans le coin supérieur gauche. Les valeurs augmentent au fur et à mesure de la progression vers le coin inférieur droit. Cette évolution est très similaire au sens de lecture du français. Les deux coordonnées définies constituent les deux coins opposés d'une zone dans laquelle un étudiant peut cliquer.

  Enfants
  
  (aucun)