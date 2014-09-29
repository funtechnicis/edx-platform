.. _Élaboration de protéines:

#########################################
Système d'élaboration de protéines Protex
#########################################

Le système d'élaboration de protéines Protex invite les étudiants à créer des formes protéiques spécifiées en associant différents acides aminés. Dans l'exemple ci-après, la forme protéique cible est une simple ligne. 


.. image:: /Images/ProteinBuilder.png
  :alt: Image d'un système d'élaboration de protéines

.. _Create the Protein Builder:

*******************************************
Créer un système d'élaboration de protéines
*******************************************

Pour créer un système d'élaboration de protéines :

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**, puis sur **Blank Advanced Problem** (Exercice avancé vide).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, collez le code du composant Exercice présenté ci-après.
#. Effectuez les modifications souhaitées, puis cliquez sur **Enregistrer**.

.. _Protein Builder Code:

******************************************
Code du système d'élaboration de protéines
******************************************

.. code-block:: xml

  <problem>
      <p>Le système d'élaboration de protéines vous permet de rassembler en une chaîne les éléments constitutifs des protéines, les acides aminés. Vous pourrez ainsi visualiser comment cette chaîne se constitue et devient une structure. Le système vous présente une forme protéique cible. Votre tâche consiste à la recréer. Dans l'exemple ci-dessous, la forme que vous êtes invité à constituer est une simple ligne.</p> 
     <p>Cliquez sur "Fold" (Plier) afin de plier votre protéine. Cliquez ensuite sur "Valider".</p>

  <script type="loncapa/python">

  def protex_grader(expect,ans):
    import json
    ans=json.loads(ans)
    if "ERROR" in ans["protex_answer"]:
      raise ValueError("Protex n'a pas compris votre réponse. Tentez de plier la protéine.")
    return ans["protex_answer"]=="CORRECT"

  </script>
 
    <text>
      <customresponse cfn="protex_grader">
        <designprotein2dinput width="855" height="500" target_shape="W;W;W;W;W;W;W"/>
      </customresponse>
    </text>
    <solution>
      <p>
        De nombreuses séquences de protéines, comme la séquence présentée dans l'exemple suivant, sont pliées selon une ligne droite. Vous pouvez, si vous le souhaitez, vous exercer à manipuler le système d'élaboration de protéines.
      </p>
      <ul>
        <li>
            Forme en bâton : RRRRRRR
        </li>
      </ul>
    </solution>
  </problem>

Dans ce code :
 
* **width** et **height** spécifient les dimensions de l'application (en pixels).
* **target_shape** répertorie les acides aminés qui, rassemblés dans l'ordre spécifié, créent la forme que vous avez demandé aux étudiants de créer. La liste ne peut inclure que les lettres suivantes, qui correspondent au code à une lettre de chaque acide aminé. (Cette liste apparaît dans le coin supérieur gauche du système d'élaboration de protéines.)

  .. list-table::
     :widths: 15 15 15 15
     :header-rows: 0

     * - A
       - R
       - N
       - D
     * - C
       - Q
       - E
       - G
     * - H
       - I
       - L
       - K
     * - M
       - F
       - P
       - S
     * - T
       - W
       - Y
       - V
