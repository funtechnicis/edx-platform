.. _Full Screen Image:

######################
Outil d'affichage des images en plein �cran
######################

Certaines images de grande taille sont difficiles � visualiser dans le cours pour les �tudiants.  L'outil d'affichage des images en plein �cran permet aux �tudiants d'agrandir l'image et d'en visualiser tous les d�tails en contexte.

****************************************
Vue par l'�tudiant d'une image en plein �cran
****************************************

L'�tudiant visualise l'image en plein �cran sur une page de l'unit�. Lorsque l'�tudiant fait passer le pointeur de la souris sur l'image, le bouton **Plein �cran** appara�t :

.. image:: /Images/image-modal.png
 :alt: Image de l'outil d'affichage des images en plein �cran et du bouton Plein �cran.

Lorsque l'�tudiant clique sur **Plein �cran**, l'image s'ouvre et est affich�e en plein �cran dans la fen�tre du navigateur.  Les boutons **Proche**, **Zoomer** et **D�zoomer** apparaissent :

.. image:: /Images/image-modal-window.png
 :alt: Image de l'outil d'affichage contextuel des images et du bouton Plein �cran.

L'�tudiant peut alors zoomer sur l'image et la faire glisser afin de mieux visualiser la partie souhait�e :

.. image:: /Images/image-modeal-zoomed.png
 :alt: Image de l'outil d'affichage contextuel des images et du bouton Plein �cran.

******************************
Cr�er une image en plein �cran
******************************

#. Chargez votre fichier image sur la page **Fichiers et uploads**. Pour plus d'informations sur le chargement du fichier, voir :ref:`Ajouter des fichiers � un cours`.

#. Sous **Ajouter un nouveau composant**, cliquez sur **html**, puis sur **Full Screen Image** (Image en plein �cran).

#. Dans le nouveau composant qui appara�t, cliquez sur **�diter**.

#. Dans l'�diteur de composant, remplacez le titre par d�faut, retirez le paragraphe d'instruction et ajoutez le texte, le cas �ch�ant.

#. Basculez sur l'onglet **HTML**.

#. Remplacez les espaces r�serv�s ci-apr�s par votre propre contenu.

   * Remplacez la valeur de l'attribut href de l'�l�ment <a>  par le chemin de votre image. Ne modifiez pas la valeur de l'attribut class. Par exemple :

     **<a href="/static/Image1.jpg" class="modal-content">**

   * Remplacez la valeur de l'attribut src de l'�l�ment <img> par le chemin de votre image. Par exemple :
     
     **<img alt="Full screen image" src="/static/Image1.jpg"/>**

   * Assurez-vous que les valeurs des attributs href et src sont identiques. En outre, vous ne devez pas modifier l'attribut class. Le code que vous proposez doit ressembler au code pr�sent� ci-apr�s :

   .. code-block:: xml

     <h2>Exemple d'affichage contextuel d'image</h2>
     <a href="/static/Image1.jpg" class="modal-content">
     <img alt="Full screen image" src="/static/Image1.jpg"/>
     </a>

   .. note:: Vous pouvez utiliser le m�me code HTML dans tout composant HTML et pas uniquement dans les composants que vous cr�ez en tant qu'images en plein �cran.

#. Pour enregistrer le composant HTML, cliquez sur **Enregistrer**.