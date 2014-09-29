.. _VitalSource:

####################
Liseuse VitalSource
####################

La liseuse VitalSource Bookshelf permet aux étudiants d'accéder facilement aux e-books. Les étudiants peuvent prendre connaissance de textes, parcourir le contenu de documents et y effectuer des recherches (non seulement dans le texte mais également dans les illustrations et les notes). Lors de leurs travaux, les étudiants pourront utiliser différents surligneurs, créer et gérer des notes, et les copier dans des documents externes.

.. image:: /Images/VitalSource.png
   :width: 500
   :alt: E-book VitalSource avec notes en surbrillance

Pour plus d'informations sur VitalSource et ses fonctions, rendez-vous sur le `site Web de support VitalSource <https://support.vitalsource.com>`_ (page en anglais).

.. note:: Avant d'ajouter la liseuse VitalSource Bookshelf à votre cours, travaillez avec VitalSource afin de vous assurer que le contenu dont vous avez besoin figure déjà dans l'inventaire VitalSource. Si ce contenu n'est pas encore disponible, VitalSource collaborera avec l'éditeur de l'e-book pour créer un e-book conforme aux spécifications de VitalSource Bookshelf. **L'ensemble du processus peut durer quatre mois.** Pour les étapes présentées ci-après, il est supposé que l'e-book que vous souhaitez utiliser fait déjà partie de l'inventaire VitalSource.

*******************************
Ajouter une liseuse VitalSource
*******************************

Pour ajouter une liseuse VitalSource Bookshelf, plusieurs étapes sont nécessaires :

#. :ref:`Obtenir des informations spécifiques<VS Obtain VS Info>` de Vital Source sur votre e-book.

#. :ref:`Modifier les paramètres avancés du cours<VS Modify Advanced Settings>` : vous pourrez ainsi créer un composant LTI (Learning Tools Interoperability) pour VitalSource.

#. :ref:`Ajouter la liseuse VitalSource Bookshelf<VS Add VS EReader>` à une unité.

.. _VS Obtain VS Info:

================================================
Étape 1. Obtenir des informations de VitalSource
================================================

Pour créer une liseuse VitalSource Bookshelf, vous devez obtenir de VitalSource les informations suivantes :

- Clé de stratégie **Passeports LTI**. Cette clé de stratégie vous permet de créer un composant LTI pour la liseuse VitalSource Bookshelf. Pour plus d'informations sur la clé de stratégie **Passeports LTI**, reportez-vous à la sous-section :ref:`Obtenir des informations LTI` de la section :ref:`Composant LTI`.

- Identifiant VBID (VitalSource Book ID) de votre e-book. Il s'agit d'un code spécifique que VitalSource crée pour l'e-book lorsqu'il l'ajoute à son inventaire.

Pour obtenir ces informations, l'équipe pédagogique sélectionne une personne contact (ou MPP, de l'anglais member point person), chargée de la collaboration avec VitalSource. VitalSource transmet la clé de stratégie **Passeports LTI** et l'identifiant VBID au MPP.


.. _VS Modify Advanced Settings:

=================================================
Étape 2. Modifier les paramètres avancés du cours
=================================================

Au cours de cette deuxième étape, vous devez modifier les paramètres avancés du cours. Vous pourrez ainsi créer un composant LTI et ajouter la clé de stratégie **Passeports LTI** de VitalSource.

#. Dans Studio, cliquez sur le menu **Paramètres**, puis cliquez sur **Paramètres avancés**.

#. Dans le champ de la clé de la stratégie **Liste des modules avancés**, placez le curseur entre parenthèses.

#. Saisissez ``“lti”``. Vous devez inclure les guillemets mais pas le point.

   .. image:: /Images/LTIPolicyKey.png
    :alt: Image de la clé Liste des modules avancés dans la page Paramètres avancés, avec ajout de la valeur LTI

  .. note:: Si le champ de valeur contient déjà du texte, placez votre curseur directement après le guillemet fermant (qui suit l'élément final). Ensuite, saisissez une virgule, puis ``“lti”`` (vous devez inclure les guillemets). Par exemple, la valeur de la clé **Liste des modules avancés** peut ressembler à la valeur ci-après :

   ``["value_1","lti"]``

4. Faites défiler vers le bas jusqu'à la clé de stratégie **Passeports LTI**.

#. Dans le champ relatif à la valeur de la clé de stratégie, placez votre curseur entre crochets, puis saisissez la valeur de la clé de stratégie **Passeports LTI**, transmise par VitalSource. Vous devez encadrer la valeur avec des guillemets.

   Par exemple, la valeur de ce champ peut ressembler à la valeur ci-après :

   ``"id_21441:b289378-ctools.school.edu:23746387264"``

6. Au bas de la page, cliquez sur **Enregistrer les modifications**.

La page est actualisée automatiquement. En haut de la page, une notification apparaît, confirmant que vos modifications ont été enregistrées.

.. _VS Add VS EReader:

=============================================================
Étape 3. Ajouter la liseuse VitalSource Bookshelf à une unité
=============================================================

Pour ajouter la liseuse VitalSource Bookshelf à une unité, vous devez créer un composant LTI, puis configurez plusieurs paramètres dans le composant.

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Avancé** sous **Ajouter un nouveau composant**, puis cliquez sur **LTI**.

#. Dans le composant qui apparaît, cliquez sur **Éditer**.

#. Dans le champ **Nom d'affichage**, saisissez le nom de votre e-book. Ce nom apparaît au-dessus du composant et dans le plan du cours, en haut de la page du cours.

#. En regard de l'option **Paramètres avancés**, cliquez sur **Ajouter**.

#. Dans le champ qui apparaît, saisissez les informations suivantes (où ``VitalSourceCode`` correspond à l'identifiant VBID de l'e-book) :

   ``vbid=VitalSourceCode``

   Si vous souhaitez faire un essai et découvrir un e-book dans votre cours, mais que vous ne disposez pas d'identifiant VBID pour cet e-book, saisissez ``vbid=L-999-70103`` afin de créer un lien vers *Orgueil et préjugés*.

#. Si vous souhaitez que votre e-book s'ouvre sur une page spécifique, cliquez une nouvelle fois sur **Ajouter**, en regard de **Paramètres personnalisés**, puis ajoutez les informations suivantes (où ``35`` est le numéro de la page de l'e-book) :

   ``book_location=page/35``

#. Dans le champ **Launch URL** (URL de lancement), saisissez les informations suivantes (vous devez utiliser ``https`` et non ``http``) :

  ``https://bc.vitalsource.com/books/book``

8. Dans le champ **Identifiant LTI**, saisissez les informations suivantes :

  ``vital_source``

9. Cliquez sur **Enregistrer**.

****************************************
Informations à l'attention des étudiants
****************************************

Le responsable de compte VitalSource de chaque établissement formera le MPP à l'utilisation de la liseuse VitalSource Bookshelf. Il fournira par ailleurs la documentation pertinente, nécessaire à la mise en route. Toutefois, afin d'améliorer l'expérience d'apprentissage, nous vous recommandons de donner à vos étudiants quelques informations sur la liseuse et d'indiquer notamment que :

  Les manuels numériques de la liseuse VitalSource Bookshelf permettent une navigation simple et conviviale, ainsi qu'un accès instantané et intuitif à leur contenu. Lors du cours, tout étudiant sera très régulièrement amené à utiliser plusieurs fonctions de la liseuse VitalSource Bookshelf :

  * Parcourir le contenu de documents, y effectuer des recherches (texte, illustrations, notes) et filtrer les résultats.
  * Utiliser plusieurs surligneurs.
  * Créer et gérer des notes.
  * Copier et coller des notes dans des documents externes.

  Pour plus d'informations sur l'utilisation de ses fonctions, rendez-vous sur le `site Web de support VitalSource <https://support.vitalsource.com>`_ (page en anglais).
