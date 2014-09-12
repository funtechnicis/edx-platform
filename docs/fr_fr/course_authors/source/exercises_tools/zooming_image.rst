.. _Zooming Image:

##################
Outil avec zoom d'images
##################

Vous pouvez, si vous le souhaitez, présenter les informations à vos étudiants sous forme d'images. Toutefois, si vous utilisez une image très grande ou très détaillée, les étudiants risquent de ne pas voir toutes les informations contenues dans l'image. Dans ce cas, l'outil avec zoom d'images peut être utilisé pour agrandir les zones souhaitées. Il suffit à l'étudiant de faire passer la souris au-dessus de l'image, comme dans l'exemple présenté ci-dessous.

.. image:: /Images/Zooming_Image.png
  :alt: Exemple d'outil avec zoom d'images présentant un exercice de chimie

***********************************
Composants d'un outil avec zoom d'images
***********************************

Pour créer un outil avec zoom d'images, vous aurez besoin des fichiers suivants :

* Image que vous souhaitez que les étudiants voient lorsqu'ils accèdent à l'unité.
* Image qui apparaît dans la zone agrandie lorsqu'un étudiant clique sur l'image d'origine. Cette image peut être plus grande que l'image d'origine.
* Fichier JavaScript **jquery.loupeAndLightbox.js**. Chaque outil avec zoom d'images utilise ce fichier JavaScript. Vous n'y apporterez aucune modification. `Pour télécharger ce fichier, cliquez ici <http://files.edx.org/jquery.loupeAndLightbox.js>`_ avec le bouton droit de la souris, puis cliquez sur **Save Link As** (Enregistrer le lien sous) pour enregistrer le fichier sur votre ordinateur.

****************************
Créer un outil avec zoom d'images
****************************

#. Chargez votre fichier image de taille normale, votre petit fichier image et le fichier **jquery.loupeAndLightbox.js** sur la page **Fichiers et uploads**. Pour plus d'informations sur le chargement du fichier, voir :ref:`Ajouter des fichiers à un cours`.

#. Sous **Ajouter un nouveau composant**, cliquez sur **html**, puis sur **Zooming Image** (Zoom d'image).

#. Dans le nouveau composant qui apparaît, cliquez sur **Éditer**.

#. Dans l'éditeur de composant, remplacez le texte par défaut de l'exercice par votre propre texte.

#. Basculez sur l'onglet **HTML**.

#. Remplacez les espaces réservés ci-après par votre propre contenu.

   - Remplacez le nom et le chemin de fichier suivants par le nom et le chemin de l'image que vous souhaitez agrandir lorsque l'utilisateur fait passer la souris au-dessus de l'image de taille normale.

     **https://studio.edx.org/c4x/edX/DemoX/asset/pathways_detail_01.png**

     Par exemple, le nom et le chemin de fichier peuvent se présenter comme suit : **/static/Image1.jpg**.

   - Remplacez le nom et le chemin de fichier suivants par le nom et le chemin de l'image que vous souhaitez voir apparaître lorsque la page s'ouvre.
     
     **https://studio.edx.org/c4x/edX/DemoX/asset/pathways_overview_01.png**

     Par exemple, le nom et le chemin de fichier peuvent se présenter comme suit : **/static/Image2.jpg**.

   - Remplacez le nom et le chemin de fichier suivants par le nom et le chemin du fichier JavaScript pour votre cours.

     **https://studio.edx.org/c4x/edX/DemoX/asset/jquery.loupeAndLightbox.js**

     Comme vous avez chargé le fichier **jquery.loupeAndLightbox.js** sur la page **Fichiers et uploads**, le nom et le chemin de votre fichier apparaît comme suit : **/static/jquery.loupeAndLightbox.js**.

   - (facultatif) Si vous souhaitez que la zone agrandie soit agrandie (une nouvelle fois) ou réduite, modifiez les valeurs **width** et **height** définies sur 350, et définissez-les sur des chiffres inférieurs ou supérieurs. Par exemple, vous pouvez modifier les deux valeurs et les définir sur 450. Ou, si vous souhaitez présenter une image horizontale, de forme ovale et non plus circulaire, vous pouvez définir la valeur **width** sur 500 et la valeur **height** sur 150, par exemple.

   Le code HTML de votre outil avec zoom d'images peut se présenter comme suit.

   .. image:: /Images/ZoomingImage_Modified.png
     :alt: Exemple de code HTML d'un outil avec zoom d'images

#. Pour enregistrer le composant HTML, cliquez sur **Enregistrer**.