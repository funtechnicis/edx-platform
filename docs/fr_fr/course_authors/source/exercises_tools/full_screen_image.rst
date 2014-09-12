.. _Full Screen Image:

######################
Outil d'affichage des images en plein écran
######################

Certaines images de grande taille sont difficiles à visualiser dans le cours pour les étudiants.  L'outil d'affichage des images en plein écran permet aux étudiants d'agrandir l'image et d'en visualiser tous les détails en contexte.

****************************************
Vue par l'étudiant d'une image en plein écran
****************************************

L'étudiant visualise l'image en plein écran sur une page de l'unité. Lorsque l'étudiant fait passer le pointeur de la souris sur l'image, le bouton **Plein écran** apparaît :

.. image:: /Images/image-modal.png
 :alt: Image de l'outil d'affichage des images en plein écran et du bouton Plein écran.

Lorsque l'étudiant clique sur **Plein écran**, l'image s'ouvre et est affichée en plein écran dans la fenêtre du navigateur.  Les boutons **Proche**, **Zoomer** et **Dézoomer** apparaissent :

.. image:: /Images/image-modal-window.png
 :alt: Image de l'outil d'affichage contextuel des images et du bouton Plein écran.

L'étudiant peut alors zoomer sur l'image et la faire glisser afin de mieux visualiser la partie souhaitée :

.. image:: /Images/image-modeal-zoomed.png
 :alt: Image de l'outil d'affichage contextuel des images et du bouton Plein écran.

******************************
Créer une image en plein écran
******************************

#. Chargez votre fichier image sur la page **Fichiers et uploads**. Pour plus d'informations sur le chargement du fichier, voir :ref:`Ajouter des fichiers à un cours`.

#. Sous **Ajouter un nouveau composant**, cliquez sur **html**, puis sur **Full Screen Image** (Image en plein écran).

#. Dans le nouveau composant qui apparaît, cliquez sur **Éditer**.

#. Dans l'éditeur de composant, remplacez le titre par défaut, retirez le paragraphe d'instruction et ajoutez le texte, le cas échéant.

#. Basculez sur l'onglet **HTML**.

#. Remplacez les espaces réservés ci-après par votre propre contenu.

   * Remplacez la valeur de l'attribut href de l'élément <a>  par le chemin de votre image. Ne modifiez pas la valeur de l'attribut class. Par exemple :

     **<a href="/static/Image1.jpg" class="modal-content">**

   * Remplacez la valeur de l'attribut src de l'élément <img> par le chemin de votre image. Par exemple :
     
     **<img alt="Full screen image" src="/static/Image1.jpg"/>**

   * Assurez-vous que les valeurs des attributs href et src sont identiques. En outre, vous ne devez pas modifier l'attribut class. Le code que vous proposez doit ressembler au code présenté ci-après :

   .. code-block:: xml

     <h2>Exemple d'affichage contextuel d'image</h2>
     <a href="/static/Image1.jpg" class="modal-content">
     <img alt="Full screen image" src="/static/Image1.jpg"/>
     </a>

   .. note:: Vous pouvez utiliser le même code HTML dans tout composant HTML et pas uniquement dans les composants que vous créez en tant qu'images en plein écran.

#. Pour enregistrer le composant HTML, cliquez sur **Enregistrer**.