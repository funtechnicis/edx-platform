.. _Staff Debug Info:

############################
Info de d�bogage pour l'�quipe p�dagogique
############################

Le syst�me edX permet d'effectuer un suivi de la progression des �tudiants inscrits � un cours. Il enregistre ainsi certaines informations : visualisation de vid�os par l'�tudiant, soumission de r�ponses aux exercices, etc. Si vous appartenez � l'�quipe p�dagogique d'un cours, vous pouvez acc�der � certaines de ces donn�es � des fins de d�bogage. Sous chaque exercice appara�t un bouton **Info de d�bogage pour l'�quipe p�dagogique** : si vous cliquez sur ce bouton, vous ouvrez une fen�tre contextuelle contenant des m�tadonn�es relatives � l'exercice.

A priori, aucune de ces informations ne devrait �tre n�cessaire � une utilisation quotidienne de la plate-forme edX. Toutefois, � titre informatif, certains champs sont pr�sent�s ci-apr�s :

``is_released``
  Indique si l'exercice peut �tre affich� par les �tudiants.
``location``
  Identifiant interne unique qui correspond � cet exercice. Si vous rencontrez des difficult�s avec un exercice et devez solliciter l'intervention de l'�quipe de support edX, la mention de cet identifiant facilitera la t�che de ces techniciens. Ils pourront en effet identifier plus facilement le probl�me associ� � l'exercice.
``markdown``
  Texte de l'exercice en format Markdown. Le code est souvent r�dig� via Studio.
``display_name``
  Nom de l'exercice, tel qu'il appara�t � l'�tudiant.
``max_attempts``
  Nombre maximum d'essais (tentatives de r�ponses � un exercice donn�) autoris�s pour un �tudiant.
``attempts``
  Nombre d'essais effectu�s jusqu'� pr�sent par l'�tudiant actuellement connect�. Chaque fois que cet �tudiant tente de r�pondre � cette question, ce nombre augment jusqu'� atteindre la valeur ``max_attempts``.