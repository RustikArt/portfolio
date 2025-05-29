import React, { useState } from 'react';
import StarRating from '../components/StarRating';

// Types pour les évaluations
interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

// Données fictives d'évaluations
const initialReviews: Review[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    rating: 5,
    comment: 'Travail exceptionnel ! J\'ai été impressionnée par la qualité et la créativité des designs. La communication était excellente tout au long du projet.',
    date: '15/04/2025'
  },
  {
    id: '2',
    name: 'Thomas Dubois',
    rating: 4,
    comment: 'Très bon travail sur mon site e-commerce. Réactif et professionnel. Je recommande vivement pour tout projet de développement web.',
    date: '02/03/2025'
  },
  {
    id: '3',
    name: 'Julie Leroy',
    rating: 5,
    comment: 'La modélisation 3D réalisée pour notre projet architectural était parfaite. Attention aux détails remarquable et rendu final de grande qualité.',
    date: '18/02/2025'
  }
];

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newReview, setNewReview] = useState<Omit<Review, 'id' | 'date'>>({
    name: '',
    rating: 0,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Calcul de la note moyenne
  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length 
    : 0;

  // Gestion des changements dans le formulaire
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  // Gestion du changement de note
  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Vérification des champs requis
    if (!newReview.name || !newReview.comment || newReview.rating === 0) {
      setSubmitStatus('error');
      setStatusMessage('Veuillez remplir tous les champs et attribuer une note.');
      setIsSubmitting(false);
      return;
    }
    
    // Simulation d'un délai d'envoi (pour l'expérience utilisateur)
    setTimeout(() => {
      try {
        // Création d'une nouvelle évaluation
        const today = new Date();
        const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;
        
        const newReviewWithId: Review = {
          ...newReview,
          id: `review-${Date.now()}`,
          date: formattedDate
        };
        
        // Ajout de la nouvelle évaluation à la liste
        setReviews(prev => [newReviewWithId, ...prev]);
        
        // Réinitialisation du formulaire
        setNewReview({
          name: '',
          rating: 0,
          comment: ''
        });
        
        setSubmitStatus('success');
        setStatusMessage('Merci pour votre évaluation !');
      } catch (error) {
        setSubmitStatus('error');
        setStatusMessage('Une erreur est survenue lors de l\'envoi de votre évaluation. Veuillez réessayer.');
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">Évaluations</h1>
      
      <div className="flex items-center mb-8">
        <div className="flex items-center">
          <StarRating initialRating={Math.round(averageRating)} readOnly size="lg" />
          <span className="ml-2 text-2xl font-bold">{averageRating.toFixed(1)}</span>
        </div>
        <span className="ml-4 text-muted-foreground">
          Basé sur {reviews.length} évaluation{reviews.length !== 1 ? 's' : ''}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Avis de clients</h2>
          
          {reviews.length > 0 ? (
            <div className="space-y-6">
              {reviews.map(review => (
                <div key={review.id} className="bg-card rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{review.name}</h3>
                      <StarRating initialRating={review.rating} readOnly size="sm" />
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Aucune évaluation pour le moment.</p>
          )}
        </div>
        
        <div>
          <div className="bg-card rounded-lg p-6 shadow-sm sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Laisser un avis</h2>
            
            {submitStatus === 'success' ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md mb-6">
                {statusMessage}
              </div>
            ) : submitStatus === 'error' ? (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-md mb-6">
                {statusMessage}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md border border-input bg-background"
                  placeholder="Entrez votre nom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Votre note
                </label>
                <StarRating 
                  initialRating={newReview.rating} 
                  onChange={handleRatingChange} 
                  size="md" 
                />
              </div>
              
              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-1">
                  Votre commentaire
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 rounded-md border border-input bg-background"
                  placeholder="Partagez votre expérience..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon avis'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
