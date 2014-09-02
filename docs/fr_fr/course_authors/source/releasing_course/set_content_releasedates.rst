.. _Publishing Your Course:

###########################
Publication de votre cours
###########################

Lorsque vous avez configur� votre cours, �tabli un syst�me d'�valuation et organis� les contenus, vous �tes pr�t � publier votre cours et � le mettre � la disposition des �tudiants.

Le processus peut s'av�rer relativement complexe. Il est notamment important de comprendre ce que les �tudiants peuvent afficher et de savoir comment modifier cet affichage.
Afin de vous y pr�parer, nous vous recommandons de lire attentivement les sections suivantes :

* :ref:`Publication et affichage de contenu : quelques r�gles`
* :ref:`Dates de publication`
* :ref:`Unit�s publiques et priv�es`
* :ref:`Modification des unit�s publiques`


.. _Understanding Content Students Can View:

******************************************
Publication et affichage de contenu : quelques r�gles
******************************************

Lorsque vous cr�ez un cours dans Studio, les �tudiants ne peuvent pas acc�der au contenu du cours avant la date de d�but. 
Une fois la date de d�but pass�e, un �tudiant pourra consulter les ressources p�dagogiques en fonction de la configuration que vous aurez choisie pour les deux param�tres suivants : les dates de publication et la visibilit�.

* La **date de publication**. Les sections et sous-sections ont des dates de publication. Si la date actuelle d'une section ou sous-section pr�c�de la date de publication, le contenu de cet �l�ment de cours n'est pas encore publi�. Les �tudiants n'y ont donc pas acc�s. 
  
  Pour qu'un �tudiant ait acc�s � une sous-section, cette sous-section et la section dont elle d�pend doivent pr�senter une date de publication ant�rieure � la date actuelle. Il est possible qu'une section soit publi�e, mais qu'une sous-section de cette section n'ait pas encore �t� publi�e. Dans ce cas, les �tudiants ne peuvent pas acc�der � cette sous-section.
  
  L'�quipe p�dagogique peut consulter dans le LMS les sections et les sous-sections avant leur date de publication.
  
* L'unit� doit �tre de type **Public**. Toutes les unit�s sont dot�es d'un param�tre **Visibilit�** qui est **Public** ou **Priv�**.
  Lorsque vous cr�ez une unit�, elle est de type **Priv�** par d�faut. 
  
  Les �tudiants ne peuvent pas consulter une unit� de type **Priv�**, m�me si la section et la sous-section dont elle d�pend sont publi�es.
  
  Les �tudiants ne peuvent pas consulter une unit� de type **Public** si la section et la sous-section dont elle d�pend *ne sont pas* publi�es.
  
  L'�quipe p�dagogique *ne peut pas* afficher les unit�s de type Priv� dans le LMS.
  
En bref, pour que les �tudiants aient acc�s � du contenu, l'unit� doit �tre de type **Public**, et les section et sous-section dont elle d�pend doivent �tre publi�es. Si certains de ces crit�res ne sont pas respect�s, les �tudiants n'auront pas acc�s � cette unit�.

Pour plus d'informations, reportez-vous aux sections suivantes de ce chapitre.


.. _Release Dates:

*******************
Dates de publication
*******************

Les dates de publication d�signent les dates auxquelles le contenu est accessible aux �tudiants. 
Ces dates sont d�finies au niveau de la section et de la sous-section. 

Une section et son contenu ne seront accessibles aux �tudiants qu'une fois la date de publication pass�e. 
Toutefois, l'�quipe p�dagogique peut acc�der au contenu dans le LMS, ind�pendamment de la date de publication d�finie.

.. note:: 
  Pour les cours cr��s avant le 14 janvier 2014, lorsque vous cr�ez une nouvelle section ou sous-section, la date de publication par d�faut est le 1er janvier 1970. Par cons�quent, les unit�s publiques sont imm�diatement publi�es et vous devez remplacer cette date par une date future afin d'emp�cher les �tudiants d'acc�der au contenu.  

  Pour les cours cr��s apr�s le 14 janvier 2014, la date de publication par d�faut est le 1er janvier 2030. Vous devrez alors d�finir la date de publication, en d'autres termes indiquer � partir de quel jour vous souhaitez que les �tudiants aient acc�s au contenu.

========================================
D�finir la date de publication d'une section
========================================

Vous pouvez d�finir la date et l'heure de publication de chaque section.
Avant la date et l'heure de publication, les �tudiants ne peuvent pas afficher le contenu de cette section. 

Pour d�finir la date de publication d'une section :

#. Dans le champ **Will Release:** (Date de publication) en regard du titre de la section, cliquez sur **�diter**.
#. Saisissez la date de publication au format MM/JJ/AAAA et l'heure UTC.
#. Cliquez sur **Enregistrer**.


========================================
D�finir la date de publication d'une sous-section
========================================

Les sous-sections h�ritent de la date de publication de la section dont elles d�pendent. Vous pouvez toutefois modifier cette date. Ainsi, des sous-sections diff�rentes seront publi�es � des moments diff�rents.

Notez que si la date de publication d'une sous-section est ant�rieure � la date de publication de la section dont cette sous-section d�pend, les �tudiants ne pourront pas acc�der � la sous-section avant que la date de publication de la *section* ne soit pass�e. Les dates de publication des sections sont prioritaires par rapport aux dates de publication des sous-sections.

Pour d�finir la date de publication d'une sous-section :

#. Ouvrez la sous-section.
#. Localisez la zone **Param�tres de la sous-section** dans le coin sup�rieur droit.
#. Saisissez la date de publication au format MM/JJ/AAAA et l'heure UTC.


================================================
Synchroniser la date de publication d'une sous-section
================================================

Il peut arriver qu'un membre de l'�quipe p�dagogique ou vous-m�me d�finissiez par erreur la date de publication d'une sous-section sur une date ant�rieure � la date de publication de la section dont cette sous-section d�pend. Dans ce cas, la sous-section ne sera publi�e qu'une fois la date de publication de la section pass�e.

Pour faciliter l'organisation de votre cours et permettre l'identification ais�e des dates de publication probl�matiques, Studio signale les sous-sections dont les dates de publication sont ant�rieures � la date de publication de la section correspondante. Dans ce cas de figure, lorsque vous ouvrez la sous-section,
le message suivant appara�t dans la zone Param�tres de la sous-section :

``La date ci-dessus ne correspond pas � la date de publication de <Section Name> - <Section release date and time>. Synchroniser avec <Section Name>.``

Pour que la sous-section h�rite de la date de publication ult�rieure de la section, cliquez sur **Synchroniser avec <Section Name>**.

.. _Public and Private Units:

*************************
Unit�s publiques et priv�es
*************************

Les unit�s sont publi�es � la date de publication de la sous-section � laquelle elles appartiennent.

En outre, les unit�s sont dot�es d'un param�tre **Visibilit�**, que vous pouvez d�finir sur **Public** ou **Priv�**. 

Lorsque vous cr�ez une unit�, elle est de type **Priv�** par d�faut. 
Une unit� de type Priv� n'est jamais accessible aux �tudiants, m�me si elle est incluse dans une sous-section publi�e.

Lorsque vous modifiez le param�tre Visibilit� d'une unit�, d�fini sur Priv�, et que vous le d�finissez sur Public, vous publiez l'unit� et son contenu. 
Vous devez d�finir le param�tre Visibilit� sur Public pour que les �tudiants puissent acc�der � l'unit�.

L'�quipe p�dagogique ne peut pas afficher les unit�s de type Priv� dans le LMS.


.. _Modifying Public Units:

*************************
Modification des unit�s publiques
*************************

Pour effectuer des r�visions sur une unit� publi�e, cr�ez et �ditez un brouillon de cette unit�. 

.. Avertissement : 
 La modification d'une unit� publique peut avoir certaines implications. En effet, cette unit� peut inclure des composants Exercice not�s, que les �tudiants ont peut-�tre d�j� effectu�s.  Voir : ref:`Modification d'un exercice publi�` pour plus d'informations.

Pour cr�er un brouillon, acc�dez � la page de l'unit�, puis cliquez sur le lien **�diter un brouillon** dans le volet droit.

.. image:: ../Images/Viz_Revise_EditDraft.png
 :width: 800
 :alt: Image d'une unit� publique - Le lien �diter un brouillon est entour� d'un cercle

Lorsque vous �ditez le brouillon d'une unit�, vous pouvez afficher le contenu de l'unit� de deux fa�ons.

* Pour afficher le contenu d�j� publi� tel qu'il appara�t dans la version r�elle du cours, cliquez sur **Voir la version r�elle** dans le coin sup�rieur droit de la page.
* Pour afficher le contenu non publi� en cours de r�vision, cliquez sur **Aper�u**.

.. image:: ../Images/Viz_Revise_ViewLiveandPreview.png
 :alt: Image d'un brouillon

Lorsque vous �tes pr�t � publier le brouillon de votre contenu r�vis�, cliquez sur le lien **la remplacer avec ce brouillon** dans le volet droit. 

Si vous d�cidez que vous ne souhaitez pas conserver le contenu r�vis�, cliquez sur **Supprimer le brouillon**.

.. image:: ../Images/Viz_Revise_ReplaceorDelete.png
  :alt: Image d'un panneau Param�tres d'unit� - Le lien la remplacer avec ce brouillon est entour� d'un cercle

.. Avertissement : Les versions historiques des unit�s ne sont pas stock�es par Studio. Apr�s avoir remplac� la version r�elle par un nouveau brouillon, vous ne pouvez pas r�tablir cette version pr�c�dente de l'unit�.