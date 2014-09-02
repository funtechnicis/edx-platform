.. _Staff Debug Info:

############################
Info de débogage pour l'équipe pédagogique
############################

Le système edX permet d'effectuer un suivi de la progression des étudiants inscrits à un cours. Il enregistre ainsi certaines informations : visualisation de vidéos par l'étudiant, soumission de réponses aux exercices, etc. Si vous appartenez à l'équipe pédagogique d'un cours, vous pouvez accéder à certaines de ces données à des fins de débogage. Sous chaque exercice apparaît un bouton **Info de débogage pour l'équipe pédagogique** : si vous cliquez sur ce bouton, vous ouvrez une fenêtre contextuelle contenant des métadonnées relatives à l'exercice.

A priori, aucune de ces informations ne devrait être nécessaire à une utilisation quotidienne de la plate-forme edX. Toutefois, à titre informatif, certains champs sont présentés ci-après :

``is_released``
  Indique si l'exercice peut être affiché par les étudiants.
``location``
  Identifiant interne unique qui correspond à cet exercice. Si vous rencontrez des difficultés avec un exercice et devez solliciter l'intervention de l'équipe de support edX, la mention de cet identifiant facilitera la tâche de ces techniciens. Ils pourront en effet identifier plus facilement le problème associé à l'exercice.
``markdown``
  Texte de l'exercice en format Markdown. Le code est souvent rédigé via Studio.
``display_name``
  Nom de l'exercice, tel qu'il apparaît à l'étudiant.
``max_attempts``
  Nombre maximum d'essais (tentatives de réponses à un exercice donné) autorisés pour un étudiant.
``attempts``
  Nombre d'essais effectués jusqu'à présent par l'étudiant actuellement connecté. Chaque fois que cet étudiant tente de répondre à cette question, ce nombre augment jusqu'à atteindre la valeur ``max_attempts``.