// Définition des types pour les projets
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

// Projets de graphisme
export const graphismeProjects: Project[] = [
  {
    id: 'g1',
    title: 'Identité visuelle Éco-Habitat',
    category: 'Graphisme',
    description: 'Création complète de l\'identité visuelle pour une entreprise d\'architecture écologique, incluant logo, charte graphique et supports de communication.',
    tags: ['Logo', 'Identité de marque', 'Écologie']
  },
  {
    id: 'g2',
    title: 'Affiche Festival Électro-Lumière',
    category: 'Graphisme',
    description: 'Conception d\'une affiche vibrante et moderne pour un festival de musique électronique, mettant en avant les effets lumineux et l\'ambiance nocturne.',
    tags: ['Affiche', 'Festival', 'Illustration']
  },
  {
    id: 'g3',
    title: 'Magazine culturel Perspectives',
    category: 'Graphisme',
    description: 'Design éditorial complet pour un magazine culturel, incluant mise en page, typographie personnalisée et illustrations de couverture.',
    tags: ['Éditorial', 'Mise en page', 'Typographie']
  }
];

// Projets de retouche photo
export const retoucheProjects: Project[] = [
  {
    id: 'r1',
    title: 'Série portraits corporate',
    category: 'Retouche photo',
    description: 'Retouche professionnelle d\'une série de portraits pour une entreprise tech, avec correction de peau naturelle et harmonisation des couleurs.',
    tags: ['Portrait', 'Corporate', 'Retouche beauté']
  },
  {
    id: 'r2',
    title: 'Restauration photos anciennes',
    category: 'Retouche photo',
    description: 'Restauration minutieuse de photographies familiales des années 1950, incluant réparation de déchirures, correction de couleurs délavées et amélioration de la netteté.',
    tags: ['Restauration', 'Patrimoine', 'Noir et blanc']
  },
  {
    id: 'r3',
    title: 'Photomontage surréaliste',
    category: 'Retouche photo',
    description: 'Création d\'une série de photomontages surréalistes combinant paysages urbains et éléments naturels pour une exposition artistique.',
    tags: ['Photomontage', 'Art', 'Surréalisme']
  }
];

// Projets de développement
export const codageProjects: Project[] = [
  {
    id: 'c1',
    title: 'Application web e-commerce',
    category: 'Développement',
    description: 'Développement d\'une plateforme e-commerce responsive avec panier d\'achat, paiement sécurisé et gestion des stocks en temps réel.',
    tags: ['React', 'Node.js', 'E-commerce']
  },
  {
    id: 'c2',
    title: 'Portfolio interactif d\'artiste',
    category: 'Développement',
    description: 'Création d\'un site portfolio avec animations personnalisées, galerie interactive et système de filtrage des projets.',
    tags: ['JavaScript', 'CSS', 'Animation']
  },
  {
    id: 'c3',
    title: 'Application mobile fitness',
    category: 'Développement',
    description: 'Conception d\'une application mobile de suivi fitness avec programmes personnalisés, suivi des progrès et synchronisation cloud.',
    tags: ['React Native', 'Mobile', 'UX/UI']
  }
];

// Projets de montage vidéo
export const videoProjects: Project[] = [
  {
    id: 'v1',
    title: 'Court-métrage "Échos"',
    category: 'Montage vidéo',
    description: 'Montage et post-production d\'un court-métrage narratif explorant les thèmes de la mémoire et du temps, avec étalonnage des couleurs et sound design.',
    tags: ['Court-métrage', 'Narration', 'Étalonnage']
  },
  {
    id: 'v2',
    title: 'Animation logo dynamique',
    category: 'Montage vidéo',
    description: 'Création d\'une animation de logo pour une startup tech, avec effets de particules et transitions fluides pour utilisation sur le web.',
    tags: ['Motion design', 'Logo', 'Animation']
  },
  {
    id: 'v3',
    title: 'Vidéo promotionnelle produit',
    category: 'Montage vidéo',
    description: 'Réalisation d\'une vidéo promotionnelle pour le lancement d\'un produit innovant, incluant tournage, montage dynamique et voix off professionnelle.',
    tags: ['Publicité', 'Produit', 'Marketing']
  }
];

// Projets de musique
export const musiqueProjects: Project[] = [
  {
    id: 'm1',
    title: 'Composition pour jeu vidéo',
    category: 'Musique',
    description: 'Création d\'une bande sonore complète pour un jeu vidéo indépendant, incluant thème principal, ambiances et effets sonores.',
    tags: ['Jeu vidéo', 'Orchestration', 'Sound design']
  },
  {
    id: 'm2',
    title: 'EP électronique "Horizons"',
    category: 'Musique',
    description: 'Production d\'un EP de 5 titres électroniques, de la composition à la masterisation, explorant des sonorités ambient et techno.',
    tags: ['Électronique', 'Production', 'Ambient']
  },
  {
    id: 'm3',
    title: 'Habillage sonore podcast',
    category: 'Musique',
    description: 'Création de l\'identité sonore complète pour une série de podcasts culturels, incluant générique, transitions et ambiances.',
    tags: ['Podcast', 'Identité sonore', 'Jingles']
  }
];

// Projets de modélisation 3D
export const modelisationProjects: Project[] = [
  {
    id: '3d1',
    title: 'Visualisation architecturale',
    category: 'Modélisation 3D',
    description: 'Modélisation et rendu photoréaliste d\'un projet d\'architecture contemporaine, avec éclairage naturel et matériaux détaillés.',
    tags: ['Architecture', 'Rendu', 'Photoréalisme']
  },
  {
    id: '3d2',
    title: 'Personnage pour animation',
    category: 'Modélisation 3D',
    description: 'Création d\'un personnage 3D stylisé avec rigging complet et textures peintes à la main pour un court-métrage d\'animation.',
    tags: ['Character design', 'Rigging', 'Animation']
  },
  {
    id: '3d3',
    title: 'Prototype produit industriel',
    category: 'Modélisation 3D',
    description: 'Modélisation précise d\'un prototype de produit industriel pour visualisation et tests avant production, incluant animation de fonctionnement.',
    tags: ['Produit', 'Prototype', 'CAO']
  }
];

// Autres projets
export const autresProjects: Project[] = [
  {
    id: 'a1',
    title: 'Série photographique urbaine',
    category: 'Photographie',
    description: 'Série de photographies urbaines explorant l\'architecture moderne et les contrastes de lumière dans différentes métropoles.',
    tags: ['Photographie', 'Urbain', 'Architecture']
  },
  {
    id: 'a2',
    title: 'Rédaction contenu de marque',
    category: 'Rédaction',
    description: 'Création d\'une stratégie de contenu et rédaction pour une marque lifestyle, incluant articles de blog, descriptions produits et manifeste de marque.',
    tags: ['Copywriting', 'Marque', 'Storytelling']
  },
  {
    id: 'a3',
    title: 'Direction artistique campagne',
    category: 'Direction artistique',
    description: 'Direction artistique complète pour une campagne publicitaire multi-supports, définissant l\'univers visuel, les choix typographiques et la palette de couleurs.',
    tags: ['Direction artistique', 'Campagne', 'Publicité']
  }
];

// Tous les projets combinés
export const allProjects: Project[] = [
  ...graphismeProjects,
  ...retoucheProjects,
  ...codageProjects,
  ...videoProjects,
  ...musiqueProjects,
  ...modelisationProjects,
  ...autresProjects
];
