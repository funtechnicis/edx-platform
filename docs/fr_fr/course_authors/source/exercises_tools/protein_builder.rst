.. _Protein Builder:

############################
Syst�me d'�laboration de prot�ines Protex
############################

Le syst�me d'�laboration de prot�ines Protex invite les �tudiants � cr�er des formes prot�iques sp�cifi�es en associant diff�rents acides amin�s. Dans l'exemple ci-apr�s, la forme prot�ique cible est une simple ligne. 


.. image:: /Images/ProteinBuilder.png
  :alt: Image d'un syst�me d'�laboration de prot�ines

.. _Create the Protein Builder:

********************************
Cr�er un syst�me d'�laboration de prot�ines
********************************

Pour cr�er un syst�me d'�laboration de prot�ines :

#. Sous **Ajouter un nouveau composant**, cliquez sur **Exercice**, puis sur **Blank Advanced Problem** (Exercice avanc� vide).
#. Dans le composant qui appara�t, cliquez sur **�diter**.
#. Dans l'�diteur de composant, collez le code du composant Exercice pr�sent� ci-apr�s.
#. Effectuez les modifications souhait�es, puis cliquez sur **Enregistrer**.

.. _Protein Builder Code:

*************************
Code du syst�me d'�laboration de prot�ines
*************************

.. code-block:: xml

  <problem>
      <p>Le syst�me d'�laboration de prot�ines vous permet de rassembler en une cha�ne les �l�ments constitutifs des prot�ines, les acides amin�s. Vous pourrez ainsi visualiser comment cette cha�ne se constitue et devient une structure. Le syst�me vous pr�sente une forme prot�ique cible. Votre t�che consiste � la recr�er. Dans l'exemple ci-dessous, la forme que vous �tes invit� � constituer est une simple ligne.</p> 
     <p>Cliquez sur "Fold" (Plier) afin de plier votre prot�ine. Cliquez ensuite sur "Valider".</p>

  <script type="loncapa/python">

  def protex_grader(expect,ans):
    import json
    ans=json.loads(ans)
    if "ERROR" in ans["protex_answer"]:
      raise ValueError("Protex n'a pas compris votre r�ponse. Tentez de plier la prot�ine.")
    return ans["protex_answer"]=="CORRECT"

  </script>
 
    <text>
      <customresponse cfn="protex_grader">
        <designprotein2dinput width="855" height="500" target_shape="W;W;W;W;W;W;W"/>
      </customresponse>
    </text>
    <solution>
      <p>
        De nombreuses s�quences de prot�ines, comme la s�quence pr�sent�e dans l'exemple suivant, sont pli�es selon une ligne droite. Vous pouvez, si vous le souhaitez, vous exercer � manipuler le syst�me d'�laboration de prot�ines.
      </p>
      <ul>
        <li>
            Forme en b�ton : RRRRRRR
        </li>
      </ul>
    </solution>
  </problem>

Dans ce code :
 
* **width** et **height** sp�cifient les dimensions de l'application (en pixels).
* **target_shape** r�pertorie les acides amin�s qui, rassembl�s dans l'ordre sp�cifi�, cr�ent la forme que vous avez demand� aux �tudiants de cr�er. La liste ne peut inclure que les lettres suivantes, qui correspondent au code � une lettre de chaque acide amin�. (Cette liste appara�t dans le coin sup�rieur gauche du syst�me d'�laboration de prot�ines.)

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