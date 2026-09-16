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

## Remplacer les visuels

Les images de `assets/img/` sont des textures provisoires, pas des photos de
l'atelier. Pour les remplacer, déposer vos photos **avec le même nom de fichier** :
aucune modification du HTML n'est nécessaire.

| Fichier | Emplacement | Format conseillé |
|---|---|---|
| `hero.jpg` | haut de page | portrait 4:5, ~1100 x 1375 px |
| `atelier.jpg` | bande « L'atelier » | paysage 16:10, ~1800 x 1125 px |
| `cours.jpg` | section « Cours » | paysage 4:3, ~1400 x 1050 px |
| `service-patronage.jpg` | tuile « Modélisme » | paysage, ~900 x 700 px, plutôt sombre |
| `service-prototype.jpg` | tuile « Atelier de production » | paysage, ~900 x 700 px, plutôt clair |
| `portfolio.jpg` | fond de la bande « Portfolio » | paysage 3:2, ~1600 x 1067 px |

Pensez à mettre à jour l'attribut `alt` de chaque image dans `index.html` pour
décrire la vraie photo.

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
