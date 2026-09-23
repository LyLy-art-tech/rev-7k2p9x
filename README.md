# Mes révisions — site

Site de révision des cartes de Carnet : paquet, frise, jeu et mode « écrire ».
Il fonctionne sur téléphone, s'ajoute à l'écran d'accueil et marche hors connexion.

## Mettre le site en ligne (GitHub Pages)

1. Crée un dépôt, par exemple `rev-7k2p9x` (un nom peu devinable).
2. Dépose tous les fichiers de ce dossier à la racine du dépôt.
3. Settings → Pages → Source : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. L'adresse est `https://<ton-compte>.github.io/rev-7k2p9x/`.

## Mettre tes cartes

1. Dans Carnet, clique sur la flèche en bas de la barre de gauche : ça crée `cartes.json` dans ton dossier de cours.
   (Le menu « ⋯ » d'une matière permet aussi d'exporter cette matière seule.)
2. Copie ce fichier dans le dossier `data/` du dépôt, à la place de l'exemple, et pousse.
3. Sur le téléphone, ouvre le site : tes cartes sont là. Le bouton « Recharger les cartes » force la mise à jour.

Tu peux aussi ne rien mettre dans `data/` et importer `cartes.json` depuis le téléphone
(bouton « Importer un fichier .json ») : dans ce cas, tes cartes ne sont jamais mises en ligne.

## Importer / exporter, sur tous les appareils

- **Importer un fichier .json** : charge un export de Carnet, ou une sauvegarde faite ici.
- **Exporter (.json)** : enregistre `mes-revisions.json` — tes cartes **et** ta progression.
  Pratique pour passer du téléphone à la tablette, ou pour garder une sauvegarde.
  À la réimportation, la progression est fusionnée avec celle de l'appareil.

## Code d'accès

Dans `index.html`, tout en haut du script :

```js
const CODE_ACCES = '1789';
```

Mets le code que tu veux, ou `''` pour l'enlever.
C'est une dissuasion, pas une sécurité : quelqu'un qui connaît l'adresse peut toujours
ouvrir `data/cartes.json` directement. Pour une vraie confidentialité, n'utilise que l'import.

## Thème

Le bouton en bas de l'écran d'accueil change les couleurs : les mêmes thèmes que dans Carnet
(Parchemin, Lavande, Sauge, Océan, Pêche, Menthe, Papier, Nuit), plus « Appareil » qui suit
le mode clair/sombre du téléphone. Le choix est retenu sur l'appareil.

## Vie privée

- `robots.txt` et la balise `noindex` demandent aux moteurs de recherche d'ignorer le site.
- Ne mets jamais ton dossier de cours entier dans le dépôt : uniquement `cartes.json`.
- Ta progression reste dans le navigateur de ton téléphone.
