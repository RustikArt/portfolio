// Hook personnalisé pour l'authentification

// Ce fichier est optionnel car nous avons déjà exporté useAuth depuis AuthContext
// Mais pour maintenir la cohérence avec votre structure de projet, vous pouvez créer ce fichier
import { useAuth as useAuthFromContext } from '../context/AuthContext';
export const useAuth = useAuthFromContext;