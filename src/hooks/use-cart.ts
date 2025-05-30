// Hook personnalisé pour le panier

// Ce fichier est optionnel car nous avons déjà exporté useCart depuis CartContext
// Mais pour maintenir la cohérence avec votre structure de projet, vous pouvez créer ce fichier
import { useCart as useCartFromContext } from '../context/CartContext';
export const useCart = useCartFromContext;