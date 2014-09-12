.. _IFrame:

##################
Outil IFrame
##################

Un cadre IFrame vous permet d'int�grer des exercices et des outils non not�s depuis n'importe quel site Internet dans le corps de votre cours. Le cadre IFrame appara�t dans un composant HTML, et l'exercice ou l'outil appara�t dans le cadre IFrame. Les cadres IFrame peuvent inclure vos propres outils ou des outils tiers. 

.. image:: /Images/IFrame_1.png
  :alt: Outil IFrame pr�sentant un exercice avec droite d'Euler
  :width: 500

Les cadres IFrame sont parfaitement adapt�s aux outils permettant de d�montrer un concept. Ils ne seront toutefois pas not�s et ne permettront pas de stocker les donn�es d'�tudiants. Si vous souhaitez ajouter un outil ou un exercice not�, ajoutez-le en tant qu':ref:`exercice JavaScript personnalis�<Custom JavaScript>` ou :ref:`composant LTI<LTI Component>`. 

Pour plus d'informations sur les cadres IFrame, voir la `sp�cification IFrame <http://www.w3.org/wiki/HTML/Elements/iframe>`_.

****************************
Cr�er un outil IFrame
****************************

Pour ajouter un exercice ou un outil dans un cadre IFrame, vous devrez cr�er un composant HTML IFrame, puis ajouter au composant l'URL de la page contenant l'exercice ou l'outil. Vous pouvez �galement ajouter du texte et des images avant et apr�s le cadre IFrame.

.. note:: L'URL de la page contenant l'exercice ou l'outil doit commencer par ``https`` et non par ``http``. Si l'URL commence par ``http``, vous devrez contacter le propri�taire de cette page afin de d�terminer si une version ``https`` est disponible. Certains sites Web ne permettent pas que leur contenu soit int�gr� � des cadres IFrame.

#. Sous **Ajouter un nouveau composant**, cliquez sur **html**, puis sur **IFrame**.

#. Dans le nouveau composant qui appara�t, cliquez sur **�diter**.

#. Dans la barre d'outils de l'�diteur de composant, cliquez sur **HTML**.

#. Dans l'�diteur de code source HTML, identifiez le code HTML suivant (ligne 7). Ce code HTML inclut l'�l�ment ``<iframe>`` :

   .. code-block:: html

      <p><iframe src="https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html" width="402" height="402" marginwidth="0" marginheight="0" frameborder="0" scrolling="no">Pour le visualiser, vous devrez utiliser un navigateur prenant en charge iFrame.</iframe></p>

5. Remplacez l'URL par d�faut dans l'attribut **src** (**https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html**) par l'URL de la page contenant l'exercice ou l'outil. **Cette URL doit commencer par https**. Vous ne devez pas supprimer les guillemets encadrant l'URL.

#. Modifiez les attributs dans l'�l�ment IFrame afin de sp�cifier d'autres param�tres. Pour plus d'informations sur ces param�tres, voir :ref:`Param�tres IFrame`. Vous pouvez �galement modifier le texte entre les balises ``<iframe>`` ouvrantes et fermantes. Un �tudiant n'apercevra ce texte que s'il utilise un navigateur ne prenant pas en charge les cadres IFrame.

7. Pour fermer l'�diteur de code source HTML et revenir � l'�diteur visuel, cliquez sur **OK**.

#. Dans l'�diteur visuel, remplacez le texte par d�faut par votre propre texte.

#. Cliquez sur **Enregistrer**.

.. _IFrame Settings:

======================
Param�tres IFrame
======================

Pour sp�cifier les param�tres de votre cadre IFrame, vous devrez ajouter, supprimer ou modifier les attributs au sein de la balise ``<iframe>`` ouvrante. La balise ``<iframe>`` **doit** contenir un attribut **src** sp�cifiant l'URL de la page Web souhait�e. Les autres attributs sont facultatifs. 

Vous pouvez ajouter ces attributs dans l'ordre que vous souhaitez.

.. list-table::
   :widths: 20 80
   :header-rows: 1
 
   * - Attribut
     - Description
   * - **src** (obligatoire)
     - Sp�cifie l'URL de la page contenant l'exercice ou l'outil.
   * - **width** et **height** (facultatifs)
     - Sp�cifient la largeur et la hauteur du cadre IFrame, en pixels ou sous la forme d'un pourcentage. Pour sp�cifier la valeur en pixels, saisissez des chiffres. Pour sp�cifier un pourcentage, saisissez des chiffres suivis du signe de pourcentage.

       Si vous ne sp�cifiez pas la largeur et la hauteur, le cadre IFrame utilise les dimensions que la page li�e a d�finies. Ces dimensions varient d'un site Web � un autre. Si vous modifiez la largeur et la hauteur du cadre IFrame, le contenu de la page li�e peut �tre redimensionn�. Autre possibilit� : seule une partie de ce contenu sera affich�e.

   * - **marginwidth** et **marginheight** (facultatifs)
     - Sp�cifient (en pixels) les dimensions de l'espace entre les bords du cadre IFrame et votre exercice ou votre outil.
   * - **frameborder** (facultatif)
     - Sp�cifie si une bordure appara�t autour de votre cadre IFrame. Si la valeur est �gale � 0, aucune bordure n'appara�t. Si la valeur est un chiffre positif, une bordure appara�t.
   * - **scrolling** (facultatif)
     - Indique si une barre de d�filement est utilis�e. Avec cette barre, les utilisateurs peuvent acc�der � l'int�gralit� du contenu d'un cadre IFrame si ce cadre est plus petit que l'exercice ou l'outil qu'il contient. Par exemple, si la hauteur du contenu de votre cadre IFrame pr�sente une valeur tr�s �lev�e, vous pouvez d�finir cette hauteur sur une valeur inf�rieure, puis ajouter une barre de d�filement verticale, comme dans la premi�re image pr�sent�e ci-apr�s.

Par exemple, observez comment les diff�rents param�tres de chacun des �l�ments ``<iframe>`` ci-apr�s affectent le cadre IFrame. 

.. code-block:: html

      <p><iframe src="https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html" width="442" height="200" marginwidth="20" marginheight="20" frameborder="1" scrolling="yes">Pour ce faire, vous devrez utiliser un navigateur prenant en charge les �l�ments iFrame.</iframe></p>

.. image:: /Images/IFrame_3.png
   :alt: Moiti� sup�rieure d'un cadre IFrame et barre de d�filement verticale sur le c�t�
   :width: 500

.. code-block:: html

      <p><iframe src="https://studio.edx.org/c4x/edX/DemoX/asset/eulerLineDemo.html" width="550" height="250" marginwidth="30" marginheight="60" frameborder="1" scrolling="no">Pour cela, vous devrez utiliser un navigateur prenant en charge les �l�ments iFrame.</iframe></p>

.. image:: /Images/IFrame_4.png
   :alt: 
   :width: 500

Pour plus d'informations sur les attributs IFrame, voir la `sp�cification IFrame. <http://www.w3.org/wiki/HTML/Elements/iframe>`_.