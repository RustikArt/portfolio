import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8">À propos de moi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-4">
            Je suis un créateur polyvalent passionné par l'art numérique sous toutes ses formes. 
            Mon parcours m'a permis d'acquérir des compétences variées dans plusieurs domaines créatifs.
          </p>
          <p className="text-lg mb-4">
            Que ce soit à travers le graphisme, la retouche photo, le développement web, 
            le montage vidéo, la musique ou la modélisation 3D, j'aime donner vie à des idées 
            et créer des expériences immersives.
          </p>
          <p className="text-lg mb-4">
            Ma philosophie est de combiner créativité et technicité pour produire des œuvres 
            qui se démarquent et qui racontent une histoire unique.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Mes valeurs</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Innovation et créativité dans chaque projet</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Attention méticuleuse aux détails</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Communication claire et transparente</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Apprentissage continu et perfectionnement</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Parcours</h2>
          
          <div className="space-y-6">
            <div className="border-l-2 border-primary pl-4 pb-6">
              <h3 className="text-xl font-medium">Début</h3>
              <p className="text-muted-foreground">Entrainement solo + aide de professionnels</p>
              <p className="text-sm text-muted-foreground">2018 - 2022</p>
            </div>
            
            <div className="border-l-2 border-primary pl-4 pb-6">
              <h3 className="text-xl font-medium">Expérience professionnelle</h3>
              <p className="text-muted-foreground">Artiste sous diverses formes freelance</p>
              <p className="text-sm text-muted-foreground">2022 - Présent</p>
            </div>
            
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-medium">Compétences techniques</h3>
              <p className="text-muted-foreground">Suite Affinity, Développement web, Modélisation 3D, Production musicale</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              to="/portfolio" 
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Voir mon portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
