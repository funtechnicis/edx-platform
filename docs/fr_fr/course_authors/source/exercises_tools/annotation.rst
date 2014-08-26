.. _Annotation:

###################
Exercice avec annotations
###################


Dans un exercice avec annotations, l'enseignant met en surbrillance un texte sp�cifique au sein d'un bloc de texte, puis pose des questions sur le texte mis en �vidence. Les questions apparaissent lorsque les �tudiants passent la souris sur le texte en surbrillance. Les questions apparaissent �galement dans une section situ�e sous le bloc de texte. Sous cette section, une zone est r�serv�e aux r�ponses des �tudiants.

Dans les exercices avec annotations, les �tudiants doivent r�pondre � des questions portant sur un bloc de texte sp�cifique. Les questions apparaissent au-dessus du texte lorsque les �tudiants font passer la souris sur le texte en surbrillance. Ils peuvent ainsi r�fl�chir � la question tout en prenant connaissance du texte.

.. image:: /Images/AnnotationExample.png
  :alt: Exercice avec annotations

****************************
Cr�er un exercice avec annotations
****************************

Pour cr�er un exercice avec annotations, vous devez ajouter le composant avanc� Annotation � votre cours. Ajoutez ensuite les segments **Instructions** et **Discussion dirig�e** de l'exercice, puis le segment **Annotation problem** (Exercice avec annotations) de l'exercice.

#. Ajoutez le composant avanc� Annotation. 

    #. Dans le menu **Param�tres**, s�lectionnez **Param�tres avanc�s**.

    #. Dans le champ de la cl� de r�gle **Liste des modules avanc�s**, placez le curseur entre les parenth�ses.

    #. Saisissez la valeur suivante. Assurez-vous d'inclure les guillemets.

       ``"annotatable"``

    4. Au bas de la page, cliquez sur **Enregistrer les modifications**.

       La page est actualis�e automatiquement. En haut de la page, une notification appara�t, confirmant que vos modifications ont �t� enregistr�es.

    5. Retournez � l'unit� � laquelle vous souhaitez ajouter l'exercice sp�cialis�. La liste des composants disponibles contient d�sormais un composant avanc�.

       .. image:: /Images/AdvancedComponent.png
          :alt: Image du panneau Ajouter un nouveau composant avec l'option relative au composant avanc�

2. Ajoutez les segments **Instructions** et **Discussion dirig�e** de l'exercice.

    #. Dans l'unit� dans laquelle vous souhaitez cr�er l'exercice, sous **Ajouter un nouveau composant**, cliquez sur **Avanc�**.
    #. Dans la liste des types d'exercices, cliquez sur **Annotation**.
    #. Dans le composant qui appara�t, cliquez sur **�diter**.
    #. Dans l'�diteur de composant, remplacez l'exemple de code par votre propre code.
    #. Cliquez sur **Enregistrer**.

3. Ajoutez le segment **Annotation problem** (Exercice avec annotations) de l'exercice.

    #. Sous le composant Annotation, cr�ez un nouveau composant Blank Advanced Problem (Exercice avanc� vide).
       
    #. Collez le code indiqu� ci-apr�s dans le composant Advanced Problem (Exercice avanc�), en rempla�ant les espaces r�serv�s par vos propres donn�es.

        .. code-block:: xml

          <problem>
              <annotationresponse>
                  <annotationinput>
                    <text>ESPACE R�SERV� : Texte de l'annotation</text>
                      <comment>ESPACE R�SERV� : Texte de la question</comment>
                      <comment_prompt>ESPACE R�SERV� : Saisissez votre r�ponse ci-dessous:</comment_prompt>
                      <tag_prompt>ESPACE R�SERV� : En r�ponse � cette question, quelle balise ci-apr�s choisissez-vous ?</tag_prompt>
                    <options>
                      <option choice="incorrect">ESPACE R�SERV� : R�ponse incorrecte (pour que cette option devienne une r�ponse correcte ou partiellement correcte, remplacez choice="incorrect" par choice="correct" ou choice="partially-correct")</option>
                      <option choice="correct">ESPACE R�SERV� : R�ponse correcte (pour que cette option devienne une r�ponse incorrecte ou partiellement correcte, remplacez choice="correct" par choice="incorrect" ou choice="partially-correct")</option>
                      <option choice="partially-correct">ESPACE R�SERV� : R�ponse partiellement correcte (pour que cette option devienne une r�ponse correcte ou incorrecte, remplacez choice="partially-correct" par choice="correct" ou choice="incorrect")
                      </option>
                    </options>
                  </annotationinput>
              </annotationresponse>
              <solution>
                <p>ESPACE R�SERV� : Explication d�taill�e de la solution</p>
              </solution>
            </problem>

#. Cliquez sur **Enregistrer**.