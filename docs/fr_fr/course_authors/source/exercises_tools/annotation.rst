.. _Annotation:

###################
Exercice avec annotations
###################


Dans un exercice avec annotations, l'enseignant met en surbrillance un texte spécifique au sein d'un bloc de texte, puis pose des questions sur le texte mis en évidence. Les questions apparaissent lorsque les étudiants passent la souris sur le texte en surbrillance. Les questions apparaissent également dans une section située sous le bloc de texte. Sous cette section, une zone est réservée aux réponses des étudiants.

Dans les exercices avec annotations, les étudiants doivent répondre à des questions portant sur un bloc de texte spécifique. Les questions apparaissent au-dessus du texte lorsque les étudiants font passer la souris sur le texte en surbrillance. Ils peuvent ainsi réfléchir à la question tout en prenant connaissance du texte.

.. image:: /Images/AnnotationExample.png
  :alt: Exercice avec annotations

****************************
Créer un exercice avec annotations
****************************

Pour créer un exercice avec annotations, vous devez ajouter le composant avancé Annotation à votre cours. Ajoutez ensuite les segments **Instructions** et **Discussion dirigée** de l'exercice, puis le segment **Annotation problem** (Exercice avec annotations) de l'exercice.

#. Ajoutez le composant avancé Annotation. 

    #. Dans le menu **Paramètres**, sélectionnez **Paramètres avancés**.

    #. Dans le champ de la clé de règle **Liste des modules avancés**, placez le curseur entre les parenthèses.

    #. Saisissez la valeur suivante. Assurez-vous d'inclure les guillemets.

       ``"annotatable"``

    4. Au bas de la page, cliquez sur **Enregistrer les modifications**.

       La page est actualisée automatiquement. En haut de la page, une notification apparaît, confirmant que vos modifications ont été enregistrées.

    5. Retournez à l'unité à laquelle vous souhaitez ajouter l'exercice spécialisé. La liste des composants disponibles contient désormais un composant avancé.

       .. image:: /Images/AdvancedComponent.png
          :alt: Image du panneau Ajouter un nouveau composant avec l'option relative au composant avancé

2. Ajoutez les segments **Instructions** et **Discussion dirigée** de l'exercice.

    #. Dans l'unité dans laquelle vous souhaitez créer l'exercice, sous **Ajouter un nouveau composant**, cliquez sur **Avancé**.
    #. Dans la liste des types d'exercices, cliquez sur **Annotation**.
    #. Dans le composant qui apparaît, cliquez sur **Éditer**.
    #. Dans l'éditeur de composant, remplacez l'exemple de code par votre propre code.
    #. Cliquez sur **Enregistrer**.

3. Ajoutez le segment **Annotation problem** (Exercice avec annotations) de l'exercice.

    #. Sous le composant Annotation, créez un nouveau composant Blank Advanced Problem (Exercice avancé vide).
       
    #. Collez le code indiqué ci-après dans le composant Advanced Problem (Exercice avancé), en remplaçant les espaces réservés par vos propres données.

        .. code-block:: xml

          <problem>
              <annotationresponse>
                  <annotationinput>
                    <text>ESPACE RÉSERVÉ : Texte de l'annotation</text>
                      <comment>ESPACE RÉSERVÉ : Texte de la question</comment>
                      <comment_prompt>ESPACE RÉSERVÉ : Saisissez votre réponse ci-dessous:</comment_prompt>
                      <tag_prompt>ESPACE RÉSERVÉ : En réponse à cette question, quelle balise ci-après choisissez-vous ?</tag_prompt>
                    <options>
                      <option choice="incorrect">ESPACE RÉSERVÉ : Réponse incorrecte (pour que cette option devienne une réponse correcte ou partiellement correcte, remplacez choice="incorrect" par choice="correct" ou choice="partially-correct")</option>
                      <option choice="correct">ESPACE RÉSERVÉ : Réponse correcte (pour que cette option devienne une réponse incorrecte ou partiellement correcte, remplacez choice="correct" par choice="incorrect" ou choice="partially-correct")</option>
                      <option choice="partially-correct">ESPACE RÉSERVÉ : Réponse partiellement correcte (pour que cette option devienne une réponse correcte ou incorrecte, remplacez choice="partially-correct" par choice="correct" ou choice="incorrect")
                      </option>
                    </options>
                  </annotationinput>
              </annotationresponse>
              <solution>
                <p>ESPACE RÉSERVÉ : Explication détaillée de la solution</p>
              </solution>
            </problem>

#. Cliquez sur **Enregistrer**.