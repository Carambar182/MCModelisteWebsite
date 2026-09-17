# MCModelisteWebsite

Site vitrine de MC Modéliste-Couture. Site statique, sans dépendance ni étape de
compilation : il suffit de servir les fichiers tels quels.

```
index.html              page unique (hero, services, atelier, portfolio, cours, contact)
mentions-legales.html   modèle à compléter
assets/css/style.css    système visuel (couleurs, typographie, mode sombre)
assets/js/main.js       menu mobile, apparition au défilement
assets/fonts/           Bodoni Moda + Jost, auto-hébergées
assets/img/             visuels des sections
logo mc.png             logo d'origine, non modifié
```

## Mettre le site en ligne

Sur GitHub : **Settings → Pages → Source : Deploy from a branch**, puis brancher
`main` et le dossier `/ (root)`. L'adresse sera
`https://carambar182.github.io/MCModelisteWebsite/`.

Pour un nom de domaine personnalisé, l'ajouter dans le même écran et créer un
fichier `CNAME` à la racine.

## Les visuels

| Fichier | Emplacement | Source | Format |
|---|---|---|---|
| `hero.jpg` | haut de page | Evi Kalemi | portrait 4:5, 1400 x 1750 px |
| `service-patronage.jpg` | tuile « Modélisme » | Caroline Badran | paysage 7:5, 1400 x 1000 px |
| `service-atelier.jpg` | tuile « Atelier de production » | J. Williams | paysage 7:5, 1400 x 1000 px |
| `cours.jpg` | section « Cours » | Darling Arias | paysage 4:3, 1400 x 1050 px |
| `atelier.jpg` | bande « L'atelier » | **texture provisoire** | paysage 16:10, ~1800 x 1125 px |

Seule `atelier.jpg` reste une texture calculée, faute de photo pour cet
emplacement. Pour la remplacer, déposer une photo **sous le même nom** : aucune
modification du HTML n'est nécessaire, le CSS recadre automatiquement.

Les originaux non recadrés sont à la racine du dépôt (`*-unsplash.jpg`). Ils ne
sont pas utilisés par le site et peuvent être déplacés ou supprimés ; ils servent
seulement à refaire un recadrage. Le script de recadrage est décrit dans
l'historique Git.

Après tout changement d'image, mettre à jour son attribut `alt` dans
`index.html` pour décrire la nouvelle photo.

### Traitement des tuiles de services

Les deux tuiles à photo posent leur texte sur l'image. Chacune porte donc une
classe de traitement, à choisir selon la photo :

- `bento__cell--patronage` : voile clair et encre brune, pour une photo claire
- `bento__cell--machine` : voile sombre et encre crème, pour une photo sombre

Un dégradé s'ajoute au bas de chaque tuile, sous le texte : un simple voile
uniforme ne suffit pas quand un reflet clair de la photo passe sous une ligne.

## Photos du portfolio

`assets/img/portfolio/` contient les modèles découpés depuis la planche
`MCmodéliste-Portfolio.jpg`, recadrés au contenu : les aplats de la mise en page
imprimée ne sont pas repris. Les fichiers sont nommés par domaine
(`sport-`, `pap-`, `med-`).

Ce sont de vraies photos, mais en basse définition : la planche d'origine ne fait
que 4322 x 775 px, donc chaque modèle mesure environ 100 à 240 px de large. Elles
sont affichées à leur taille native et ne doivent pas être agrandies. Si vous
disposez des fichiers d'origine, remplacez-les pour un rendu net sur écran retina.

Pour ajouter un modèle : déposer l'image dans ce dossier, puis l'ajouter dans le
bloc `.pf-photos` du domaine concerné, dans `index.html`.

## Coordonnées

E-mail et téléphone apparaissent à trois endroits : la section `contact` de
`index.html`, le bloc `application/ld+json` en haut de ce même fichier, et
`mentions-legales.html`. Les trois doivent rester cohérents.

## Mentions légales

`mentions-legales.html` est un modèle. Les informations entre crochets sont
obligatoires pour un site professionnel français et doivent être complétées avant
la mise en ligne.

## Points techniques

- Les polices sont servies depuis le site, sans appel à Google Fonts : rien n'est
  envoyé à un tiers, et la page reste conforme au RGPD sans bandeau cookies.
- Le mode sombre suit le réglage du système, dans les mêmes couleurs de marque.
- Les animations se coupent si le visiteur a activé « réduire les animations ».
- Le site reste lisible si JavaScript est désactivé.
