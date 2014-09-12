.. _LTI Component:

###############
Composant LTI
###############

Avez-vous découvert ou développé une application didactique externe que vous souhaitez ajouter à votre cours en ligne ? Disposez-vous d'une version numérique de votre manuel qui utilise un format autre que le format PDF ? Vous pouvez ajouter des applications didactiques externes ou des manuels dans Studio en utilisant un composant LTI (Learning Tools Interoperability). Le composant LTI est basé sur les spécifications `IMS Global Learning Tools Interoperability <http://www.imsglobal.org/LTI/v1p1p1/ltiIMGv1p1p1.html>`_version 1.1.1.

Pour ajouter un composant LTI, vous pouvez procéder de plusieurs façons.

* Vous pouvez ajouter du contenu LTI externe en lecture seule, comme le contenu d'un manuel : aucune réponse n'est attendue des étudiants.

* Vous pouvez ajouter du contenu LTI externe requérant une réponse des étudiants. Un prestataire externe se chargera de noter les réponses des étudiants.

* Vous pouvez utiliser le composant en tant qu'espace réservé pour la synchronisation avec un système d'évaluation externe.

Par exemple, le composant LTI suivant incorpore un outil Cerego avec lequel les étudiants peuvent interagir. 

.. image:: /Images/LTIExample.png
   :alt: Exemple de composant LTI incorporant un outil Cerego

.. _LTI Information:

************************
Obtenir des informations LTI
************************

Pour créer un composant LTI dans une unité depuis un fournisseur LTI externe, vous aurez besoin des informations suivantes.

-  **URL de lancement** (si le composant LTI requiert la réponse d'un étudiant qui sera notée). L'URL de lancement peut être obtenue du fournisseur LTI. L'URL de lancement correspond à l'URL que Studio envoie au fournisseur LTI externe, qui peut ainsi renvoyer les notes des étudiants.

- Clé de stratégie **Passeports LTI**. La clé de stratégie comporte trois parties : un identifiant LTI, une clé de client et une clé secrète client.

  -  **Identifiant LTI**. Vous créez cette valeur et l'utilisez pour faire référence au fournisseur LTI externe. Nous vous recommandons de créer un identifiant LTI dont vous vous souviendrez facilement.

     L'identifiant LTI peut contenir des caractères alphanumériques majuscules et minuscules, ainsi que des traits de soulignement (_). Aucune restriction de longueur n'est appliquée. Par exemple, vous pouvez créer un identifiant LTI aussi simple que **test_lti_id**. Votre identifiant LTI peut également être une série de chiffres et de lettres comme **id_21441** ou **book_lti_provider_from_new_york**.
  -  **Clé de client**. Cette valeur correspond à une séquence de caractères. Vous l'obtenez auprès du fournisseur LTI. La clé de client est utilisée pour l'authentification. Elle peut contenir un nombre illimité de caractères. Par exemple, votre clé de client peut être **b289378-f88d-2929-ctools.school.edu**.
  -  **Clé secrète client**. Cette valeur correspond à une séquence de caractères. Vous l'obtenez auprès du fournisseur LTI. La clé secrète client est utilisée pour l'authentification. Elle peut contenir un nombre illimité de caractères. Votre clé secrète client peut se présenter sous une forme très simple (par exemple, **clé secrète**) ou comme une série de chiffres et de lettres (par exemple **23746387264** ou **yt4984yr8**).

  Pour créer la clé de stratégie **Passeports LTI**, associez l'identifiant LTI, la clé de client et la clé secrète client au format suivant (assurez-vous d'inclure les deux-points) :

  ``lti_id:client_key:client_secret``

  Par exemple, une clé de stratégie **Passeports LTI** peut rassembler n'importe lequel des éléments suivants :

  ``test_lti_id:b289378-f88d-2929-ctools.school.edu:secret``
  
  ``id_21441:b289378-f88d-2929-ctools.school.edu:23746387264``

  ``book_lti_provider_from_new_york:b289378-f88d-2929-ctools.company.com:yt4984yr8``

************************
Créer un composant LTI
************************

Le processus de création d'un composant LTI dans votre cours compte trois étapes.

#. Ajoutez LTI à la clé de stratégie **Liste des modules avancés**.
#. Enregistrez le fournisseur LTI.
#. Créez le composant LTI dans une unité individuelle.

======================================================
Étape 1. Ajouter LTI à la clé de stratégie **Liste des modules avancés**
======================================================

#. Dans le menu **Paramètres**, cliquez sur **Paramètres avancés**.

#. Dans le champ de la clé de règle **Liste des modules avancés**, placez le curseur entre les parenthèses.

#. Saisissez ``“lti”``. Vous devez inclure les guillemets mais pas le point.

   .. image:: /Images/LTIPolicyKey.png
     :width: 500
     :alt: Image de la clé des modules avancés dans la page Paramètres avancés, avec ajout de la valeur LTI note: : Si le champ **Liste des modules avancés** contient déjà du texte, placez votre curseur directement après le guillemet fermant (qui suit l'élément final). Ensuite, saisissez une virgule, puis ``“lti”`` (veillez à inclure les guillemets).

4. Au bas de la page, cliquez sur **Enregistrer les modifications**.

La page est actualisée automatiquement. En haut de la page, une notification apparaît, confirmant que vos modifications ont été enregistrées.

==========================================
Étape 2. Enregistrer le fournisseur LTI externe
==========================================

Pour enregistrer le fournisseur LTI externe, ajoutez la clé de stratégie **Passeports LTI** aux paramètres avancés du cours.

#. Sur la page **Paramètres avancés**, identifiez la clé de stratégie **Passeports LTI**.

#. Placez le curseur entre crochets.

#. Saisissez la clé de stratégie **Passeports LTI** et placez-la entre guillemets.

   Par exemple, le texte dans le champ **Passeports LTI** peut ressembler au texte présenté ci-après.

   ``"test_lti_id:b289378-f88d-2929-ctools.umich.edu:secret"``

   Si vous avez plusieurs fournisseurs LTI, séparez par une virgule les valeurs de chaque clé de stratégie **Passeports LTI**. Vous devez encadrer chaque entrée avec des guillemets.

   .. code-block:: xml

      "test_lti_id:b289378-f88d-2929-ctools.umich.edu:secret",
      "id_21441:b289378-f88d-2929-ctools.school.edu:23746387264",
      "book_lti_provider_from_new_york:b289378-f88d-2929-ctools.company.com:yt4984yr8"

4. Au bas de la page, cliquez sur **Enregistrer les modifications**.

La page est actualisée automatiquement. En haut de la page, une notification apparaît, indiquant que vos modifications ont été enregistrées. Vous pouvez alors voir les entrées de la clé de stratégie **Passeports LTI**.

==========================================
Étape 3. Ajouter le composant LTI à une unité
==========================================

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Avancé** sous **Ajouter un nouveau composant**, puis cliquez sur **LTI**.
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, indiquez les paramètres que vous souhaitez utiliser. Pour obtenir une description de chaque paramètre, voir :ref:`Paramètres du composant LTI`.
#. Cliquez sur **Enregistrer**.

.. _LTI Component settings:

**********************
Paramètres du composant LTI
**********************

.. list-table::
   :widths: 10 80
   :header-rows: 1

   * - Paramètre
     - Description
   * - Paramètres personnalisés
     - Vous permet d'ajouter un ou plusieurs paramètres personnalisés. Par exemple, si vous avez ajouté un livre électronique, vous pouvez définir un paramètre personnalisé qui ouvre ce livre à une page spécifique. Vous pouvez également utiliser un paramètre personnalisé pour définir la couleur d'arrière-plan du composant LTI.

       Chaque paramètre personnalisé est associé à une clé et à une valeur. Vous devez ajouter la clé et la valeur au format suivant.

       ::

          key=value

       Par exemple, un paramètre personnalisé peut ressembler au paramètre présenté ci-après.

       ::

          bgcolor=red

          page=144

       Pour ajouter un paramètre personnalisé, cliquez sur **Ajouter**.
   * - Nom d'affichage
     - Spécifie le nom de l'exercice. Ce nom apparaît au-dessus de l'exercice et dans le plan du cours, en haut de la page du cours. Des rapports d'analyse peuvent également utiliser le nom d'affichage afin d'identifier ce composant.
   * - Hide External Tool (Masquer l'outil externe)
     - Indique si vous souhaitez lancer un outil externe ou utiliser ce composant en tant qu'espace réservé pour la synchronisation avec un système d'évaluation externe. Si vous définissez la valeur sur **Vrai**, Studio masque le bouton **Launch** (Lancer) et tous les cadres IFrame de ce composant. Par défaut, cette valeur est définie sur **Faux**.
   * - Identifiant LTI
     - Spécifie l'identifiant LTI pour le fournisseur LTI externe. Cette valeur doit correspondre à l'identifiant LTI que vous avez saisi sur la page **Paramètres avancés**.
   * - URL LTI
     - Spécifie l'URL de l'outil externe que ce composant lance. Ce paramètre est applicable lorsque l'option **Hide External Tool** (Masquer l'outil externe) est définie sur Faux.
   * - Ouvrir dans une nouvelle page
     - Indique si le problème s'ouvre dans une nouvelle page. Si vous définissez cette valeur sur **Vrai**, l'étudiant clique sur un lien qui affiche le contenu LTI dans une nouvelle fenêtre. Si vous définissez cette valeur sur **Faux**, le contenu LTI est affiché dans un cadre IFrame sur la page en cours. Ce paramètre est applicable lorsque l'option **Hide External Tool** (Masquer l'outil externe) est définie sur Faux.
   * - A obtenu
     - Indique si le composant LTI reçoit une note du système LTI externe. Par défaut, cette valeur est définie sur **Faux**.
   * - Coefficient
     - Spécifie le nombre de points possibles pour l'exercice. Par défaut, si un fournisseur LTI externe note l'exercice, l'exercice est noté sur 1 point. La note d'un étudiant peut donc correspondre à n'importe quelle valeur entre 0 et 1. Ce paramètre est applicable lorsque l'option **A obtenu** est définie sur **Vrai**.

       Pour plus d'informations sur le coefficient des exercices et le calcul des notes, voir :ref:`Coefficient de l'exercice`.