.. _Module conditionnel:

###################
Module conditionnel
###################

*********************
Description de format
*********************

La principale balise de l'entrée du module conditionnel est :

.. code-block:: xml

    <conditional> ... </conditional>

``conditional`` peut inclure un nombre illimité de balises xmodule (``html``, ``video``, ``poll``, etc.) ou de balises ``show``.

==================
Balise conditional
==================

Conteneur principal d'une seule instance de module conditionnel. Les attributs suivants peuvent être spécifiés pour cette balise :

.. code-block:: xml

    sources - ID d'emplacement des modules requis, séparés par ';'
    [message | ""] - message en cas d'échec. Ici, vous pouvez utiliser une variable {link}, qui génère un lien vers le module requis.

    [submitted] - mappage vers la méthode de module `is_submitted`.
    (Si vous appuyez sur le bouton RESET [Réinitialiser], la fonction repasse à la valeur False.)

    [correct] - mappage vers la méthode de module `is_correct`
    [attempted] - mappage vers la méthode de module `is_attempted`
    [poll_answer] - mappage vers l'attribut de module `poll_answer`
    [voted] - mappage vers l'attribut de module `voted`

===========
Balise show
===========

Symlink vers un ensemble donné de xmodules. Les attributs suivants peuvent être spécifiés pour cette balise :

.. code-block:: xml

    sources - ID d'emplacement de modules, séparés par ';'

*******
Exemple
*******

=====================================================
Exemples de balise conditional dépendant d'un sondage
=====================================================

.. code-block:: xml

    <conditional sources="i4x://MITx/0.000x/poll_question/first_real_poll_seq_with_reset" poll_answer="man"
    message="{link} must be answered for this to become visible.">
        <html>
            <h2>Vous lisez ceci car votre valeur de vote pour la "première question" était "homme"</h2>
        </html>
    </conditional>

=================================================================================
Exemples de balise conditional dépendant d'un sondage (utiliser la balise <show>)
=================================================================================

.. code-block:: xml

    <conditional sources="i4x://MITx/0.000x/poll_question/first_real_poll_seq_with_reset" poll_answer="man"
    message="{link} must be answered for this to become visible.">
        <html>
            <show sources="i4x://MITx/0.000x/problem/test_1; i4x://MITx/0.000x/Video/Avi_resources; i4x://MITx/0.000x/problem/test_1"/>
        </html>
    </conditional>

======================================================
Exemples de balise conditional dépendant d'un exercice
======================================================

.. code-block:: xml

    <conditional sources="i4x://MITx/0.000x/problem/Conditional:lec27_Q1" attempted="True">
        <html display_name="HTML for attempted problem">You see this, cause "lec27_Q1" is attempted.</html>
    </conditional>
    <conditional sources="i4x://MITx/0.000x/problem/Conditional:lec27_Q1" attempted="False">
        <html display_name="HTML for not attempted problem">You see this because "lec27_Q1" is not attempted.</html>
    </conditional>
