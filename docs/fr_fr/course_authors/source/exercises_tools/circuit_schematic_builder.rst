.. _Conception de schéma de circuit:

#########################################################
Exercice avec logiciel de conception de schéma de circuit
#########################################################

Dans les exercices avec logiciel de conception de schéma de circuit, les étudiants peuvent organiser les éléments d'un circuit sur une grille interactive : sources de tension, condensateurs, résistances et MOSFET. Ils soumettent ensuite au système une analyse en courant continu (CC) ou en courant alternatif (CA), ou une analyse transitoire de leur circuit pour évaluation.

.. image:: /Images/CircuitSchematicExample.png
 :alt: Image d'un logiciel de conception de schéma de circuit

*********************************************************************
Créer un exercice avec un logiciel de conception de schéma de circuit
*********************************************************************

#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Circuit Schematic Builder** (Logiciel de conception de schéma de circuit).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, remplacez l'exemple de code par votre propre code.
#. Cliquez sur **Enregistrer**.

**Code d'exercice**

Pour créer l'exercice présenté dans l'image ci-dessus, collez le code ci-après dans l'Éditeur avancé.

.. code-block:: xml

 <problem>
    <p>Créez un diviseur de tension qui divise en parts égales la tension fournie.</p>
      <schematicresponse>
      <center>
      <schematic height="500" width="600" parts="g,r" analyses="dc"
      initial_value="[["v",[168,144,0],{"value":"dc(1)","_json_":0},["1","0"]],["r",[296,120,0],{"r":"1","_json_":1},["1","output"]],["L",[296,168,3],{"label":"output","_json_":2},["output"]],["w",[296,216,168,216]],["w",[168,216,168,192]],["w",[168,144,168,120]],["w",[168,120,296,120]],["g",[168,216,0],{"_json_":7},["0"]],["view",-67.49999999999994,-78.49999999999994,1.6000000000000003,"50","10","1G",null,"100","1","1000"]]"
      />
      </center>
        <answer type="loncapa/python">
      dc_value = "dc analysis not found"
      for response in submission[0]:
        if response[0] == 'dc':
            for node in response[1:]:
                dc_value = node['output']
      if dc_value == .5:
        correct = ['correct']
      else:
        correct = ['incorrect']
      </answer>
      </schematicresponse>
    <schematicresponse>
    <p>Montez un filtre passe-haut.</p>
    <center>
    <schematic height="500" width="600" parts="g,r,s,c" analyses="ac"
    submit_analyses="{"ac":[["NodeA",1,9]]}"
    initial_value="[["v",[160,152,0],{"name":"v1","value":"sin(0,1,1,0,0)","_json_":0},["1","0"]],["w",[160,200,240,200]],["g",[160,200,0],{"_json_":2},["0"]],["L",[240,152,3],{"label":"NodeA","_json_":3},["NodeA"]],["s",[240,152,0],{"color":"cyan","offset":"0","_json_":4},["NodeA"]],["view",64.55878906250004,54.114697265625054,2.5000000000000004,"50","10","1G",null,"100","1","1000"]]"/>
    </center>
    <answer type="loncapa/python">
    ac_values = None
    for response in submission[0]:
      if response[0] == 'ac':
          for node in response[1:]:
              ac_values = node['NodeA']
    print "the ac analysis value:", ac_values
    if ac_values == None:
      correct = ['incorrect']
    elif ac_values[0][1] < ac_values[1][1]:
      correct = ['correct']
    else:
      correct = ['incorrect']
    </answer>
    </schematicresponse>
        <solution>
            <div class="detailed-solution">
                <p>Explication</p>
                <p>Pour obtenir un diviseur de tension qui divise en parts égales la tension d'entrée, utilisez deux résistances de même valeur, la tension échantillonnée étant prise entre les deux résistances.</p>
                <p><img src="/c4x/edX/edX101/asset/images_voltage_divider.png"/></p>
                <p>Pour monter un filtre passe-haut sans d'autres contraintes, placez simplement une résistance en série avec un condensateur. Pour respecter les contraintes de l'exercice, les valeurs réelles des composants importent peu.</p>
                <p><img src="/c4x/edX/edX101/asset/images_high_pass_filter.png"/></p>
            </div>
        </solution>
 </problem>
