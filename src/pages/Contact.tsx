import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuration pour EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'rustiksbaz@gmail.com'
      };
      
      // Envoi du message via EmailJS
      await emailjs.send(
        'service_portfolio', // Remplacer par votre Service ID
        'template_contact', // Remplacer par votre Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Remplacer par votre Public Key
      );
      
      setSubmitStatus('success');
      setStatusMessage('Votre message a été envoyé avec succès !');
      reset(); // Réinitialiser le formulaire
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSubmitStatus('error');
      setStatusMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Parlons de votre projet</h2>
          <p className="text-lg mb-6">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter.
            Je suis disponible pour des collaborations dans tous les domaines créatifs.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-primary">✉️</span>
              </div>
              <div>
                <p className="font-medium">Discord</p>
                <a href="https://discord.gg/XKepxunwdv" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rejoindre le serveur
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-primary">📱</span>
              </div>
              <div>
                <p className="font-medium">Nom Discord</p>
                <p className="text-muted-foreground">rustiklevrai</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <span className="text-primary">📍</span>
              </div>
              <div>
                <p className="font-medium">Localisation</p>
                <p className="text-muted-foreground">Paris, France</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">Réseaux sociaux</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span>🐦</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span>💼</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <span>🎨</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h2>
          
          {submitStatus === 'success' ? (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-md mb-6">
              {statusMessage}
            </div>
          ) : submitStatus === 'error' ? (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-md mb-6">
              {statusMessage}
            </div>
          ) : null}
          
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className={`w-full p-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-input'} bg-background`}
                placeholder="Votre nom"
                {...register('name', { required: 'Le nom est requis' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full p-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-input'} bg-background`}
                placeholder="votre.email@exemple.com"
                {...register('email', { 
                  required: 'L\'email est requis',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Adresse email invalide'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full p-3 rounded-md border ${errors.subject ? 'border-red-500' : 'border-input'} bg-background`}
                placeholder="Sujet de votre message"
                {...register('subject', { required: 'Le sujet est requis' })}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full p-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-input'} bg-background`}
                placeholder="Votre message..."
                {...register('message', { required: 'Le message est requis' })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
