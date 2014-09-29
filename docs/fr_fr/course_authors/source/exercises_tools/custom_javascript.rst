.. _Exercice JavaScript personnalisé:

################################
Exercice JavaScript personnalisé
################################

Les exercices d'évaluation et d'affichage en code JavaScript personnalisé (également appelés *exercices en JavaScript personnalisé* ou *exercices en JS*) vous permettent de créer un exercice ou un outil personnalisé qui utilise JavaScript. Vous pourrez alors ajouter directement l'exercice ou l'outil dans Studio. Lorsque vous créez un exercice en JS, Studio intègre l'exercice dans un cadre en ligne (IFrame) afin que vos étudiants puissent l'effectuer dans le LMS. Vous pouvez noter les travaux de vos étudiants en utilisant JavaScript et les bases du langage Python. La note est intégrée dans le système d'évaluation edX.

L'exercice en JS que vous créez doit utiliser les langages HTML, JavaScript et les feuilles de style en cascade (CSS). Pour créer votre exercice en JS, vous pouvez utiliser n'importe quel outil de création d'application, comme Google Web Toolkit (GWT).

.. image:: /Images/JavaScriptInputExample.png
 :alt: Image d'un exercice en JavaScript

*****************************************************************************
Créer un exercice d'évaluation et d'affichage en code JavaScript personnalisé
*****************************************************************************

#. Créez votre application JavaScript, puis chargez tous les fichiers associés à cette application sur la page **Fichiers et uploads**.
#. Dans l'unité dans laquelle vous souhaitez créer l'exercice, cliquez sur **Exercice** sous **Ajouter un nouveau composant**, puis cliquez sur l'onglet **Avancé**.
#. Cliquez sur **Custom JavaScript Display and Grading** (Évaluation et affichage en code Javascript personnalisé).
#. Dans le composant qui apparaît, cliquez sur **Éditer**.
#. Dans l'éditeur de composant, modifiez le code présenté dans l'exemple afin de l'adapter à votre exercice.

   - Tous les exercices sont associés à plus d'un élément. La plupart des exercices sont conformes au mécanisme de la règle d'origine commune (SOP ou same-origin policy), ce qui signifie que tous les éléments ont les mêmes protocole, hôte et port.
     Par exemple, **http**://**store.company.com**:**81**/subdirectory_1/JSInputElement.html et **http**://**store.company.com**:**81**/subdirectory_2/JSInputElement.js sont associés aux mêmes protocole (http), hôte (store.company.com) et port (81).

     Si un ou plusieurs éléments de votre exercice utilisent un protocole, un hôte ou un port différent, vous devrez contourner le SOP. Par exemple, **https**://**info.company.com**/JSInputElement2.html utilise un protocole, un hôte et un port différents. Pour contourner le SOP, remplacez **sop="false"** à la ligne 8 de l'exemple de code par **sop="true"**. Pour plus d'informations, reportez-vous à la page relative au mécanisme SOP, intitulée Same-Origin Policy, sur le `Mozilla Developer Network <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Same_origin_policy_for_JavaScript>`_ ou consultez la page `Wikipedia <http://en.wikipedia.org/wiki/Same_origin_policy>`_ consacrée à ce thème.
#. Si vous souhaitez que votre exercice soit doté d'un bouton **Enregistrer**, cliquez sur l'onglet **Paramètres**, puis définissez **Nombre d'essais maximum** comme étant supérieur à zéro.
#. Cliquez sur **Enregistrer**.

==================
Recréer l'exercice
==================

Pour recréer l'exercice donné en exemple ci-dessus, vous aurez besoin des fichiers suivants.

   - webGLDemo.html
   - webGLDemo.js
   - webGLDemo.css
   - three.min.js

Pour télécharger ces fichiers dans une archive .zip, rendez-vous sur le site http://files.edx.org/JSInput.zip.

.. note:: Si vous avez besoin de contourner le mécanisme SOP, vous aurez également besoin du fichier **jschannel.js**. Votre fichier webGLDemo.html sera légèrement différent. Pour télécharger tous ces fichiers dans une archive .zip, rendez-vous sur le site http://files.edx.org/JSInput_BypassSOP.zip.

#. Téléchargez le fichier JSInput.zip ou JSInput_BypassSOP.zip, puis décompressez ses fichiers.
#. Dans la page **Fichiers et uploads**, chargez tous les fichiers du fichier .zip.
#. Créez un nouveau composant pour un exercice d'évaluation et d'affichage JavaScript personnalisé.
#. Dans l'onglet **Paramètres**, définissez le **Nombre d'essais maximum** comme supérieur à zéro.
#. Dans l'éditeur de composant Exercice, remplacez l'exemple de code par le code ci-après.
#. Cliquez sur **Enregistrer**.

================================
Code d'un exercice en JavaScript
================================

.. code-block:: xml

    <problem display_name="webGLDemo">
    Dans l'image ci-après, cliquez sur le cône.

    <script type="loncapa/python">
    import json
    def vglcfn(e, ans):
        '''
        par est un dictionnaire contenant deux clés, "answer" et "state"
        La valeur de la clé answer est la chaîne JSON renvoyée par getGrade
        La valeur de la clé state est la chaîne JSON renvoyée par getState
        '''
        par = json.loads(ans)
        # Nous pouvons utiliser soit la valeur de la clé answer pour noter answer = json.loads(par["answer"]) return answer["cylinder"]  and not answer["cube"]
        # soit la valeur de la clé state
        '''
        state = json.loads(par["state"])
        selectedObjects = state["selectedObjects"]
        return selectedObjects["cylinder"] and not selectedObjects["cube"]
        '''
    </script>
    <customresponse cfn="vglcfn">
        <jsinput
            gradefn="WebGLDemo.getGrade"
            get_statefn="WebGLDemo.getState"
            set_statefn="WebGLDemo.setState"
            width="400"
            height="400"
            html_file="/static/webGLDemo.html"
        />
    </customresponse>
    </problem>


.. note::    Lorsque vous créez cet exercice, gardez à l'esprit les éléments suivants.

 - Le fichier webGLDemo.js définit les trois fonctions JavaScript (**WebGLDemo.getGrade**, **WebGLDemo.getState** et **WebGLDemo.setState**).

 - Le code de l'exercice en JavaScript utilise **WebGLDemo.getGrade**, **WebGLDemo.getState** et **WebGLDemo.setState** pour noter, enregistrer ou restaurer un exercice. Ces fonctions doivent avoir une portée globale.

 - **WebGLDemo.getState** et **WebGLDemo.setState** sont facultatives. Vous ne devez définir ces fonctions que si vous souhaitez conserver l'état de l'exercice.

 - **Width** et **height** représentent les dimensions du cadre IFrame qui contient l'application.

 - Lorsque l'exercice s'ouvre, le cône et le cube sont tous les deux bleus ("non sélectionnés"). Lorsque vous cliquez une fois sur l'une ou l'autre forme, la forme sélectionnée devient jaune (elle est "sélectionnée"). Pour désélectionner la forme, cliquez dessus une nouvelle fois. Pour sélectionner et désélectionner la forme, continuez de cliquer dessus.

 - La réponse est définie comme étant correcte si le cône est sélectionné (jaune) lorsque l'utilisateur clique sur **Valider**.

 - Si vous cliquez sur **Valider** ou **Enregistrer**, vous enregistrez l'état actuel de l'exercice.


.. _JS Input Problem XML:

***********************************
Exercice en JavaScript - Format XML 
***********************************

JSInput permet aux auteurs d'exercices de transformer des fichiers HTML autonomes en exercices qui peuvent être intégrés à la plate-forme edX. Étant donné que JSInput a pour objectif d'améliorer la flexibilité, il peut être considéré comme l'équivalent côté client et entrée de **CustomResponse**.

Un exercice JSInput crée un cadre IFrame sur une page HTML statique et transmet la valeur renvoyée des fonctions spécifiées par l'auteur au type de réponse englobante (généralement **CustomResponse**). JSInput peut également stocker et récupérer les données relatives à l'état.

======
Modèle
======

Le format présenté ci-après est le format de base d'un exercice JSInput :

.. code-block:: xml

 <problem>
        <script type="loncapa/python">
 def all_true(exp, ans): return ans == "hi"
        </script>
        <customresponse cfn="all_true">
            <jsinput gradefn="gradefn" 
                height="500"
                get_statefn="getstate"
                set_statefn="setstate"
                html_file="/static/jsinput.html"/>
        </customresponse>
 </problem>

Les attributs acceptés sont :

=================  ===============  ===========  =================
Nom de l'attribut  Type de valeur   Obligatoire  Valeur par défaut
=================  ===============  ===========  =================
html_file          Chaîne URL       Oui          Aucune
gradefn            Nom de fonction  Oui          `gradefn`
set_statefn        Nom de fonction  Non          Aucune
get_statefn        Nom de fonction  Non          Aucune
height             Nombre entier    Non          `500`
width              Nombre entier    Non          `400`
=================  ===============  ===========  =================

======================
Attributs obligatoires
======================

* **html_file**

  L'attribut **html_file** spécifie le fichier HTML auquel renverra IFrame. Le fichier HTML doit être situé dans le répertoire de contenu.

  Le cadre IFrame est créé avec l'attribut sandbox. Bien que les fenêtres contextuelles, les scripts et le verrouillage de pointeur soient autorisés, le cadre IFrame ne peut accéder à ses attributs parent.

  Le fichier HTML doit contenir une fonction **gradefn** à laquelle le fichier JSInput peut accéder. Afin de déterminer si la fonction **gradefn** est accessible, dans la console, assurez-vous que **gradefn** renvoie la valeur correcte. Lorsque JSInput utilise la fonction **gradefn**, `gradefn` est appelée avec `gradefn`.call(`obj`), **obj** étant la partie Objet de **gradefn**. Par exemple, si **gradefn** est égale à **myprog.myfn**, JSInput appelle **myprog.myfun.call(myprog)**. (Cela permet de garantir que "`cela`" continue de faire référence à ce que `gradefn` attend.)

  Ceci mis à part, toute valeur peut être utilisée. Notez qu'il n'existe actuellement aucune prise en charge permettant d'hériter des propriétés CSS ou JavaScript de son parent (mis à part l'attribut **seamless** pris en charge par Chrome uniquement, qui est par défaut défini sur True).

* **gradefn**

  L'attribut **gradefn** spécifie le nom de la fonction appelée lorsqu'un utilisateur clique sur **Valider**, ce qui permet de renvoyer la réponse de l'étudiant. À moins que les attributs **get_statefn** et **set_statefn** ne soient également utilisés, cette réponse est transférée en tant que chaîne au type de réponse englobante. Dans l'exemple **customresponse** ci-dessus, cela signifie que la réponse sera transmise à **cfn** en tant que ``ans``.

  Si la fonction **gradefn** renvoie une exception lorsqu'un étudiant tente de soumettre un exercice, cette soumission est abandonnée et l'étudiant reçoit une alerte générique. L'alerte peut être personnalisée en nommant l'exception ``Waitfor Exception`` ; dans ce cas, le message de l'exception constituera le message d'alerte.

  Important : Afin d'être sur que la dernière réponse de l'étudiant a été transmise correctement, assurez-vous que la fonction **gradefn** n'est pas asynchrone. En outre, assurez-vous que la fonction renvoie rapidement une réponse. Actuellement, l'étudiant ne dispose d'aucune information lui indiquant que sa réponse est traitée ou notée.

=====================
Attributs facultatifs
=====================

* **set_statefn**

  Parfois, l'auteur d'un exercice souhaitera que les informations relatives aux réponses précédentes d'un étudiant ("state") soient enregistrées et rechargées. Si l'attribut **set_statefn** est utilisé, l'état (s'il existe) sera transmis en tant qu'argument string à la fonction considérée comme sa valeur et l'étudiant sera orienté vers un autre exercice. La fonction a alors la responsabilité d'utiliser cet état de manière adéquate.

  L'état transféré est :

  * Le résultat précédent de **gradefn** (c'est-à-dire, la réponse précédente) si **get_statefn** n'est pas définie.
  * Le résultat précédent de **get_statefn** (voir ci-dessous).

  C'est à iframe d'effectuer une vérification correcte de l'argument reçu via **set_statefn**.

* **get_statefn**

  Parfois, les attributs state et answer sont très différents. Par exemple, un exercice qui utilise un programme javascript permettant à l'étudiant d'altérer une molécule peut être noté, en fonction de l'hydrophobie de la molécule. Toutefois, l'état peut ne pas être restauré à partir de l'hydrophobie. Dans ce cas, un état *separate* peut être stocké et chargé par **set_statefn**. Notez que si **get_statefn** est définie, la réponse (answer) (c'est-à-dire, les données transmises au type de réponse englobante) sera une chaîne json présentée au format suivant :

  .. code-block:: xml

      {
          answer: `[answer string]`
          state: `[state string]`
      }


  Le type de réponse englobante doit alors analyser cela en tant que json.

* **height** et **width**

  Les attributs **height** et **width** sont explicites : ils indiquent la hauteur (height) et la largeur (width) du cadre IFrame. Ces deux attributs sont limités par les éléments DOM englobants. Ainsi, la largeur maximale implicite est approximativement de 900. 

  À l'avenir, JSInput pourra tenter de faire correspondre ces dimensions aux dimensions du fichier HTML (en fonction des limites mentionnées ci-dessus). Actuellement, les valeurs par défaut sont respectivement de `500` et `400` pour les attributs **height** (hauteur) et **width** (largeur).
