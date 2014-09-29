.. _IFrame:

############
Outil IFrame
############

Un cadre IFrame vous permet d'intégrer des exercices et des outils non notés depuis n'importe quel site Internet dans le corps de votre cours. Le cadre IFrame apparaît dans un composant HTML, et l'exercice ou l'outil apparaît dans le cadre IFrame. Les cadres IFrame peuvent inclure vos propres outils ou des outils tiers. 

.. image:: /Images/IFrame_1.png
  :alt: Outil IFrame présentant un exercice avec droite d'Euler
  :width: 500

Les cadres IFrame sont parfaitement adaptés aux outils permettant de démontrer un concept. Ils ne seront toutefois pas notés et ne permettront pas de stocker les données d'étudiants. Si vous souhaitez ajouter un outil ou un exercice noté, ajoutez-le en tant qu':ref:`exercice JavaScript personnalisé<Custom JavaScript>` ou :ref:`composant LTI<LTI Component>`. 

Pour plus d'informations sur les cadres IFrame, voir la `spécification IFrame <http://www.w3.org/wiki/HTML/Elements/iframe>`_.

*********************
Créer un outil IFrame
*********************

Pour ajouter un exercice ou un outil dans un cadre IFrame, vous devrez créer un composant HTML IFrame, puis ajouter au composant l'URL de la page contenant l'exercice ou l'outil. Vous pouvez également ajouter du texte et des images avant et après le cadre IFrame.

.. note:: L'URL de la page contenant l'exercice ou l'outil doit commencer par ``https`` et non par ``http``. Si l'URL commence par ``http``, vous devrez contacter le propriétaire de cette page afin de déterminer si une version ``https`` est disponible. Certains sites Web ne permettent pas que leur contenu soit intégré à des cadres IFrame.

#. Sous **Ajouter un nouveau composant**, cliquez sur **html**, puis sur **IFrame**.

#. Dans le nouveau composant qui apparaît, cliquez sur **Éditer**.

#. Dans la barre d'outils de l'éditeur de composant, cliquez sur **HTML**.

#. Dans l'éditeur de code source HTML, identifiez le code HTML suivant (ligne 7). Ce code HTML inclut l'élément ``<iframe>`` :

   .. code-block:: html

      <p><iframe src="https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html" width="402" height="402" marginwidth="0" marginheight="0" frameborder="0" scrolling="no">Pour le visualiser, vous devrez utiliser un navigateur prenant en charge iFrame.</iframe></p>

5. Remplacez l'URL par défaut dans l'attribut **src** (**https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html**) par l'URL de la page contenant l'exercice ou l'outil. **Cette URL doit commencer par https**. Vous ne devez pas supprimer les guillemets encadrant l'URL.

#. Modifiez les attributs dans l'élément IFrame afin de spécifier d'autres paramètres. Pour plus d'informations sur ces paramètres, voir :ref:`Paramètres IFrame`. Vous pouvez également modifier le texte entre les balises ``<iframe>`` ouvrantes et fermantes. Un étudiant n'apercevra ce texte que s'il utilise un navigateur ne prenant pas en charge les cadres IFrame.

7. Pour fermer l'éditeur de code source HTML et revenir à l'éditeur visuel, cliquez sur **OK**.

#. Dans l'éditeur visuel, remplacez le texte par défaut par votre propre texte.

#. Cliquez sur **Enregistrer**.

.. _IFrame Settings:

=================
Paramètres IFrame
=================

Pour spécifier les paramètres de votre cadre IFrame, vous devrez ajouter, supprimer ou modifier les attributs au sein de la balise ``<iframe>`` ouvrante. La balise ``<iframe>`` **doit** contenir un attribut **src** spécifiant l'URL de la page Web souhaitée. Les autres attributs sont facultatifs. 

Vous pouvez ajouter ces attributs dans l'ordre que vous souhaitez.

.. list-table::
   :widths: 20 80
   :header-rows: 1
 
   * - Attribut
     - Description
   * - **src** (obligatoire)
     - Spécifie l'URL de la page contenant l'exercice ou l'outil.
   * - **width** et **height** (facultatifs)
     - Spécifient la largeur et la hauteur du cadre IFrame, en pixels ou sous la forme d'un pourcentage. Pour spécifier la valeur en pixels, saisissez des chiffres. Pour spécifier un pourcentage, saisissez des chiffres suivis du signe de pourcentage.

       Si vous ne spécifiez pas la largeur et la hauteur, le cadre IFrame utilise les dimensions que la page liée a définies. Ces dimensions varient d'un site Web à un autre. Si vous modifiez la largeur et la hauteur du cadre IFrame, le contenu de la page liée peut être redimensionné. Autre possibilité : seule une partie de ce contenu sera affichée.

   * - **marginwidth** et **marginheight** (facultatifs)
     - Spécifient (en pixels) les dimensions de l'espace entre les bords du cadre IFrame et votre exercice ou votre outil.
   * - **frameborder** (facultatif)
     - Spécifie si une bordure apparaît autour de votre cadre IFrame. Si la valeur est égale à 0, aucune bordure n'apparaît. Si la valeur est un chiffre positif, une bordure apparaît.
   * - **scrolling** (facultatif)
     - Indique si une barre de défilement est utilisée. Avec cette barre, les utilisateurs peuvent accéder à l'intégralité du contenu d'un cadre IFrame si ce cadre est plus petit que l'exercice ou l'outil qu'il contient. Par exemple, si la hauteur du contenu de votre cadre IFrame présente une valeur très élevée, vous pouvez définir cette hauteur sur une valeur inférieure, puis ajouter une barre de défilement verticale, comme dans la première image présentée ci-après.

Par exemple, observez comment les différents paramètres de chacun des éléments ``<iframe>`` ci-après affectent le cadre IFrame. 

.. code-block:: html

      <p><iframe src="https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html" width="442" height="200" marginwidth="20" marginheight="20" frameborder="1" scrolling="yes">Pour ce faire, vous devrez utiliser un navigateur prenant en charge les éléments iFrame.</iframe></p>

.. image:: /Images/IFrame_3.png
   :alt: Moitié supérieure d'un cadre IFrame et barre de défilement verticale sur le côté
   :width: 500

.. code-block:: html

      <p><iframe src="https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html" width="550" height="250" marginwidth="30" marginheight="60" frameborder="1" scrolling="no">Pour cela, vous devrez utiliser un navigateur prenant en charge les éléments iFrame.</iframe></p>

.. image:: /Images/IFrame_4.png
   :alt: 
   :width: 500

Pour plus d'informations sur les attributs IFrame, voir la `spécification IFrame. <http://www.w3.org/wiki/HTML/Elements/iframe>`_.
