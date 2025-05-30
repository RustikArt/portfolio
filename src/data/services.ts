// src/data/services.ts

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "graphisme-logo",
    title: "Création de Logo",
    description: "Logo professionnel et moderne pour votre marque",
    price: 150,
    category: "graphisme",
    features: [
      "3 propositions de design",
      "Fichiers source inclus",
      "Révisions illimitées",
      "Livraison sous 7 jours"
    ]
  },
  {
    id: "graphisme-identite",
    title: "Identité visuelle complète",
    description: "Ensemble cohérent d'éléments visuels pour votre marque",
    price: 450,
    category: "graphisme",
    features: [
      "Logo + Charte graphique",
      "Cartes de visite et papeterie",
      "Modèles de médias sociaux",
      "Guide d'utilisation de la marque"
    ]
  },
  {
    id: "retouche-portrait",
    title: "Retouche portrait professionnelle",
    description: "Retouche photo de haute qualité pour portraits",
    price: 75,
    category: "retouche",
    features: [
      "Correction de la peau",
      "Ajustement des couleurs",
      "Retouche des yeux et dents",
      "Livraison sous 48h"
    ]
  }
  // ➕ Tu peux en ajouter d'autres selon tes catégories : dev, musique, 3D, etc.
];

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};
