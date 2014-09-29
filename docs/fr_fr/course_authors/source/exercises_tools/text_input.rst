.. _Saisie de texte:

#############################
Exercice avec saisie de texte
#############################



Dans les exercices avec saisie de texte, les étudiants saisissent du texte dans un champ de réponse. La réponse peut inclure des nombres, des lettres et des caractères spéciaux comme les signes de ponctuation. Le texte saisi par l'étudiant doit correspondre exactement à la réponse spécifiée par l'enseignant, y compris en termes d'orthographe et de ponctuation. Par conséquent, nous vous recommandons d'autoriser plus d'une tentative pour les exercices avec saisie de texte, afin de permettre la correction d'éventuelles erreurs typographiques.

.. image:: /Images/TextInputExample.png
 :alt: Image d'un exercice avec saisie de texte

**************************************
Créer un exercice avec saisie de texte
**************************************

Vous pouvez créer des exercices avec saisie de texte en utilisant l'Éditeur simple ou l'Éditeur avancé.

.. note:: Tous les exercices doivent inclure des étiquettes afin de garantir l'accessibilité. L'étiquette comprend généralement le texte de la question principale de l'exercice. Pour ajouter une étiquette à un exercice courant, entourez le texte de l'étiquette avec des crochets pointus, orientés vers le texte (>>texte de l'étiquette<<).

==============
Éditeur simple
==============

Pour créer un exercice avec saisie de texte dans l'Éditeur simple, suivez les étapes présentées ci-après.

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**.
#. Dans l'écran **Select Problem Component Type** (Sélectionner le type du composant Exercice), cliquez sur **Texte à saisir** dans l'onglet **Types d'exercices classiques**.
#. Dans le nouveau composant Exercice qui apparaît, cliquez sur **Éditer**.
#. Remplacez le texte par défaut par le texte de votre exercice.
#. Choisissez le texte de l'exercice à utiliser en tant qu'étiquette, puis placez ce texte entre deux paires de crochets pointus (>><<).
#. Sélectionnez le texte de la réponse, puis cliquez sur le bouton Texte à saisir. 
   
   .. image:: /Images/ProbCompButton_TextInput.png
    :alt: Image du bouton Texte à saisir
   
   Lorsque vous avez effectué cette opération, un signe égal (=) apparaît en regard de la réponse.
  
   
#. Dans l'éditeur de composant, sélectionnez le texte de l'explication, puis cliquez sur le bouton associé afin d'insérer les balises correspondantes autour du texte.

   .. image:: /Images/ProbCompButton_Explanation.png
    :alt: Image du bouton Explication

#. Dans l'onglet **Paramètres**, indiquez les paramètres que vous souhaitez utiliser. 
#. Cliquez sur **Enregistrer**.

Pour l'exemple d'exercice présenté ci-dessus, le texte dans le composant Exercice est le suivant.

::

    >>Quel est le terme technique qui fait référence au fait que, lorsqu'un nombre suffisant de personnes dorment sous une moustiquaire, la maladie peut complètement disparaître ?<<
    = immunité collective

    [explanation]
    La réponse correcte est : immunité collective. Plus le nombre de personnes utilisant des moustiquaires augmente, plus le risque de paludisme commence à diminuer pour l'ensemble de la population, chez les utilisateurs de moustiquaires et chez les autres. 
    Le risque peut devenir si faible que le paludisme est alors véritablement éradiqué dans cette population (même si celle-ci ne se protège pas complètement et que l'utilisation de moustiquaires n'est pas systématique).
    [explanation]

==============
Éditeur avancé
==============

Pour créer cet exercice dans l'Éditeur avancé, cliquez sur l'onglet **Avancé** dans l'éditeur du composant Exercice, puis remplacez le code existant par le code présenté ci-après.

.. code-block:: xml

  <problem>
  <p>
    <em>Ce problème est adapté d'un exercice, publié pour la première fois dans le cours MITx: 14.73x: The Challenges of Global Poverty (printemps 2013).</em>
  </p>
  <p>Quel est le terme technique qui fait référence au fait que, lorsqu'un nombre suffisant de personnes dorment sous une moustiquaire, la maladie peut complètement disparaître ?</p>
  <stringresponse answer=".*immunité collective.*" type="ci regexp">
         <additional_answer>immunité dans une communauté</additional_answer>
          <additional_answer>immunité dans une population</additional_answer>
          <textline size="20" label="Quel est le terme technique qui fait référence au fait que, lorsqu'un nombre suffisant de personnes dorment sous une moustiquaire, la maladie peut complètement disparaître ?"/>
          <hintgroup>
              <stringhint answer="contact immunity" type="ci" name="contact_immunity_hint" />
              <hintpart on="contact_immunity_hint">
                  <startouttext />
                  Dans le cas de l'immunité de contact, une personne vaccinée peut transférer son immunité à une autre personne par simple contact avec les selles ou fluides corporels. La réponse à la question ci-dessus fait référence à la forme d'immunité qui survient lorsque de nombreux membres d'une population donnée sont protégés. Il est alors peu probable qu'une maladie infectieuse se propage aux membres non protégés de cette population.
                  <endouttext />
              </hintpart >
              <stringhint answer="firewall immunity" type="ci" name="firewall_immunity_hint" />
              <hintpart on="firewall_immunity_hint">
                  <startouttext />
                  L'immunité collective présente un véritable effet pare-feu, qui permet de protéger une population. Bien que pertinent, le terme "pare-feu" est toutefois plus fréquemment utilisé dans les domaines informatique et technologique qu'en épidémiologie.
                  <endouttext />
              </hintpart >
          </hintgroup>
  </stringresponse>
  <solution>
    <div class="detailed-solution">
      <p>Explication</p>
      <p>La réponse correcte est : <b>immunité collective</b>. Plus le nombre de personnes utilisant des moustiquaires augmente, plus le risque de paludisme commence à diminuer pour l'ensemble de la population, chez les utilisateurs de moustiquaires et chez les autres. Le risque peut devenir si faible que le paludisme est alors véritablement éradiqué dans cette population (même si celle-ci ne se protège pas complètement et que l'utilisation de moustiquaires n'est pas systématique).</p>
    </div>
  </solution>
  </problem>




**********************************************************
Réponses multiples dans les exercices avec saisie de texte
**********************************************************

Vous pouvez spécifier plus d'une réponse correcte pour les exercices avec saisie de texte. 
Par exemple, plutôt que de demander aux étudiants de saisir exactement "Dr Martin Luther King, Junior", vous pouvez autoriser d'autres réponses : "Martin Luther King", "Docteur Martin Luther King", ainsi que d'autres variantes. Pour ce faire, vous pouvez utiliser l'Éditeur simple ou l'Éditeur avancé.

==============
Éditeur simple
==============

Pour spécifier des réponses correctes supplémentaires dans l'Éditeur simple, incluez "or=" (sans les guillemets) avant chaque réponse correcte supplémentaire.

::

    >>Quel leader Afro-américain a dirigé le mouvement des droits civiques aux États-Unis dans les années 1960 ?<<
    = Dr Martin Luther King, Jr
    or= Dr Martin Luther King, Junior
    or= Martin Luther King, Jr
    or= Martin Luther King

==============
Éditeur avancé
==============

Pour spécifier des réponses correctes supplémentaires dans l'Éditeur avancé, ajoutez une balise ``<additional_answer>`` pour chaque réponse correcte à l'intérieur des balises ouvrantes et fermantes ``<stringresponse>``.

.. code-block:: xml

  <problem>

  <p>Quel leader Afro-américain a dirigé le mouvement des droits civiques aux États-Unis dans les années 1960 ?</p>
    
  <stringresponse answer="Dr. Martin Luther King, Jr." type="ci" >
    <additional_answer>Dr Martin Luther King, Junior</additional_answer>
    <additional_answer>Martin Luther King, Jr</additional_answer>
    <additional_answer>Martin Luther King</additional_answer>
    <textline label="Quel leader Afro-américain a dirigé le mouvement des droits civiques aux États-Unis dans les années 1960 ?" size="20"/>
  </stringresponse>

  </problem>


********************************************************
Sensibilité à la casse et exercices avec saisie de texte
********************************************************

Par défaut, les exercices avec saisie de texte ne requièrent pas de réponse sensible à la casse. Vous pouvez modifier cette propriété et activer la sensibilité à la casse.

Pour rendre la réponse d'un exercice avec saisie de texte sensible à la casse, vous devez utiliser l':ref:`Éditeur avancé`.

Dans l'Éditeur avancé, vous constatez que l'attribut **type** de l'élément **stringresponse** est défini sur **ci** (de l'anglais *case insensitive*, soit : insensible à la casse). Par exemple :

::

    <stringresponse answer="Michigan" type="ci">
      <textline size="20"/>
    </stringresponse>

Pour rendre une réponse sensible à la casse, définissez la valeur de l'attribut **type** sur **cs** (de l'anglais case sensitive, soit : sensible à la casse).

::

    <stringresponse answer="Michigan" type="cs">
      <textline size="20"/>
    </stringresponse>

****************************************************************
Longueur des champs de réponse et exercices avec saisie de texte
****************************************************************

Par défaut, dans les exercices avec saisie de texte, le champ de réponse compte 20 caractères. 

Nous vous recommandons de prévisualiser l'unité. Vous pourrez ainsi vous assurer que la longueur du champ de saisie de la réponse sera adaptée à la réponse correcte et qu'un espace supplémentaire sera disponible pour les éventuelles réponses incorrectes.

Si la longueur du champ de réponse par défaut est insuffisante, vous pouvez la modifier en utilisant l':ref:`Éditeur avancé`.

Dans l'Éditeur avancé, dans le bloc XML de la réponse, vous pouvez voir que l'attribut **size** de l'élément **textline** est égal à **20** :

::

    <stringresponse answer="République démocratique du Congo" type="ci">
      <textline size="20"/>
    </stringresponse>

Pour modifier la longueur du champ de réponse, modifiez la valeur de l'attribut **size** :

::

    <stringresponse answer="République démocratique du Congo" type="ci">
      <textline size="40"/>
    </stringresponse>

*************************************************************************
Indices et expressions régulières dans les exercices avec saisie de texte
*************************************************************************

Vous pouvez fournir des indice ; ceux-ci apparaissent alors lorsque les étudiants saisissent des réponses incorrectes courantes dans les exercices avec saisie de texte. Vous pouvez également définir ce type d'exercice pour qu'une expression régulière soit utilisée en tant que réponse. Vous devrez pour cela modifier le code XML de l'exercice dans l'Éditeur avancé. 

L'expression régulière que l'étudiant saisit doit contenir la partie de la réponse spécifiée par l'enseignement. Par exemple, si un enseignant a spécifié ``<answer=".*example answer.*" type="regexp">``, les réponses correctes incluent : ``example answered``, ``two example answers``, voire ``==example answer==``, mais ni ``examples`` ni ``example anser``.

Vous pouvez ajouter ``regexp`` à la valeur de l'attribut ``type``, par exemple : ``type="ci regexp"``, ``type="regexp"`` ou ``type="regexp cs"``. Dans ce cas, toute réponse ou tout indice est traité comme une expression régulière.

.. _Text Input Problem XML:

******************************************
Exercice avec saisie de texte - Format XML
******************************************

======
Modèle
======

.. code-block:: xml

  <problem>
      <p>Texte de l'exercice</p>
      <stringresponse answer="**.Correct answer 1.**" type="ci regexp">
          <additional_answer>Réponse correcte 2</additional_answer>
          <additional_answer>Réponse correcte 3</additional_answer>
          <textline size="20" label="label text"/>
          <hintgroup>
              <stringhint answer="Réponse incorrecte A" type="ci" name="hintA" />
                <hintpart on="hintA">
                    <startouttext />Texte de l'indice pour la réponse incorrecte A<endouttext />
                </hintpart >
              <stringhint answer="Réponse incorrecte B" type="ci" name="hintB" />
                <hintpart on="hintB">
                    <startouttext />Texte de l'indice pour la réponse incorrecte B<endouttext />
                </hintpart >
              <stringhint answer="Réponse incorrecte C" type="ci" name="hintC" />
                <hintpart on="hintC">
                    <startouttext />Texte de l'indice pour la réponse incorrecte C<endouttext />
                </hintpart >
          </hintgroup>
      </stringresponse>
      <solution>
      <div class="detailed-solution">
      <p>Titre de la solution ou de l'explication</p>
      <p>Texte de la solution ou de l'explication</p>
      </div>
    </solution>
  </problem>

=======
Balises
=======

* ``<stringresponse>`` : Indique que cet exercice est un exercice avec saisie de texte. 
* ``<textline>`` : Enfant de ``<stringresponse>``. Crée un champ de réponse dans le LMS. L'étudiant peut y saisir sa réponse.
* ``<additional_answer>`` (facultatif) : Spécifie une réponse correcte supplémentaire pour l'exercice. Un exercice peut contenir un nombre illimité de réponses supplémentaires.
* ``<hintgroup>`` (facultatif) : Indique que l'enseignant a fourni des indices pour certaines réponses incorrectes courantes.
* ``<stringhint />`` (facultatif) : Enfant de ``<hintgroup>``. Spécifie le texte de la réponse incorrecte pour laquelle fournir l'indice. Contient les attributs answer, type, name.
* ``<hintpart>`` : Contient le nom de ``<stringhint>``. Associe la réponse incorrecte avec le texte de l'indice utilisé pour cette réponse incorrecte.
* ``<startouttext />`` : Désigne le début du texte de l'indice.
* ``<endouttext />`` : Désigne la fin du texte de l'indice.

**Balise :** ``<stringresponse>``

Indique que cet exercice est un exercice avec saisie de texte.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - answer (obligatoire)
       - Spécifie une réponse correcte. Pour désigner la réponse en tant qu'expression régulière, ajoutez "regexp" à l'attribut **type**. Si vous n'ajoutez pas "regexp" à l'attribut **type**, la réponse de l'étudiant doit correspondre exactement à la valeur de cet attribut.
     * - type (facultatif)
       - Peut spécifier si l'exercice est sensible à la casse et s'il accepte les expressions régulières. Si la balise ``<stringresponse>`` inclut ``type="ci"``, l'exercice n'est pas sensible à la casse. Si la balise inclut ``type="cs"``, l'exercice est sensible à la casse. Si la balise inclut ``type="regexp"``, l'exercice accepte les expressions régulières. Un attribut **type** dans une balise ``<stringresponse>`` peut également associer ces valeurs. Par exemple, ``<stringresponse type="regexp cs">`` spécifie que l'exercice accepte les expressions régulières et est sensible à la casse.

  Enfants

  * ``<textline />`` (obligatoire)
  * ``<additional_answer>`` (facultatif)
  * ``<hintgroup>`` (facultatif)
    
**Balise :** ``<textline />``
 
Crée un champ de réponse dans le LMS. L'étudiant peut y saisir sa réponse.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - label (obligatoire)
       - Contient le texte de l'exercice.
     * - size (facultatif)
       - Spécifie la taille, en caractères, du champ de réponse dans le LMS.
     * - hidden (facultatif)
       - Si la valeur est définie sur "true", les étudiants ne peuvent pas voir le champ de réponse.
     * - correct_answer (facultatif)
       - Indique la réponse correcte de l'exercice.

  Enfants
  
  (aucun)

**Balise :** ``<additional_answer>``

Spécifie une réponse correcte supplémentaire pour l'exercice. Un exercice peut contenir un nombre illimité de réponses supplémentaires.

  Attributs

  (aucun)

  Enfants

  (aucun)

**Balise :** ``<hintgroup>``

Indique que l'enseignant a fourni des indices pour certaines réponses incorrectes courantes.

  Attributs

  (aucun)

  Enfants
  
  * ``<stringhint>`` (obligatoire)

**Balise :** ``<stringhint>``

Spécifie une réponse incorrecte souvent présentée pour cet exercice.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - answer (obligatoire)
       - Texte de la réponse incorrecte.
     * - name (obligatoire)
       - Nom de l'indice que vous souhaitez présenter.
     * - type
       - Spécifie si le texte de la réponse incorrecte présentée est sensible à la casse. Peut être défini sur "cs" (de l'anglais case sensitive, soit sensible à la casse) ou sur "ci" (de l'anglais case insensitive, soit insensible à la casse).

  Enfants

  * ``<hintpart>`` (obligatoire)

**Balise :** ``<hintpart>``

Associe une réponse incorrecte courante avec l'indice utilisé pour cette réponse incorrecte.

  Attributs

  .. list-table::
     :widths: 20 80

     * - Attribut
       - Description
     * - on
       - Nom de l'indice. Doit être identique à l'attribut **name** de la balise ``<stringhint>``. (La balise ``<stringhint>`` présente le nom de l'indice et la réponse incorrecte à associer à l'indice. La balise ``<hintpart>`` contient le nom et le texte de l'indice.)

  Enfants

  * ``<startouttext />`` (obligatoire)
  * ``<endouttext />`` (obligatoire)

**Balises :** ``<startouttext />`` et ``<endouttext>``

Encadrent le texte de l'indice.

  Attributs
  
  (aucun)

  Enfants
  
  (aucun)
