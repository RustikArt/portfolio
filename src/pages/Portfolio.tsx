import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

// Import des sections thématiques
import GraphismeSection from '../components/sections/GraphismeSection';
import RetoucheSection from '../components/sections/RetoucheSection';
import CodageSection from '../components/sections/CodageSection';
import VideoSection from '../components/sections/VideoSection';
import MusiqueSection from '../components/sections/MusiqueSection';
import ModelisationSection from '../components/sections/ModelisationSection';
import AutresSection from '../components/sections/AutresSection';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in">Mon Portfolio</h1>
      <p className="text-lg mb-8 animate-fade-in-delay">
        Découvrez mes projets et réalisations dans différents domaines créatifs.
      </p>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex flex-wrap justify-center mb-8 p-2 bg-muted/80 rounded-lg shadow-sm">
          <TabsTrigger value="all" className="text-sm md:text-base py-3 px-4">Tous les projets</TabsTrigger>
          <TabsTrigger value="graphisme" className="text-sm md:text-base py-3 px-4">Graphisme</TabsTrigger>
          <TabsTrigger value="retouche" className="text-sm md:text-base py-3 px-4">Retouche photo</TabsTrigger>
          <TabsTrigger value="codage" className="text-sm md:text-base py-3 px-4">Développement</TabsTrigger>
          <TabsTrigger value="video" className="text-sm md:text-base py-3 px-4">Montage vidéo</TabsTrigger>
          <TabsTrigger value="musique" className="text-sm md:text-base py-3 px-4">Musique</TabsTrigger>
          <TabsTrigger value="3d" className="text-sm md:text-base py-3 px-4">Modélisation 3D</TabsTrigger>
          <TabsTrigger value="autres" className="text-sm md:text-base py-3 px-4">Autres</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-8 animate-slide-up">
          <p className="text-lg text-center mb-8">
            Explorez l'ensemble de mes projets dans différents domaines créatifs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Projets de toutes les catégories */}
            <ProjectCard 
              title="Identité visuelle Studio Créatif"
              category="Graphisme"
              image="/placeholder-graphisme.jpg"
              link="/portfolio/graphisme/1"
              className="card-hover"
            />
            <ProjectCard 
              title="Retouche portrait professionnel"
              category="Retouche photo"
              image="/placeholder-retouche.jpg"
              link="/portfolio/retouche/1"
              className="card-hover"
            />
            <ProjectCard 
              title="Application web responsive"
              category="Développement"
              image="/placeholder-dev.jpg"
              link="/portfolio/codage/1"
              className="card-hover"
            />
            <ProjectCard 
              title="Court-métrage promotionnel"
              category="Montage vidéo"
              image="/placeholder-video.jpg"
              link="/portfolio/video/1"
              className="card-hover"
            />
            <ProjectCard 
              title="Composition pour publicité"
              category="Musique"
              image="/placeholder-musique.jpg"
              link="/portfolio/musique/1"
              className="card-hover"
            />
            <ProjectCard 
              title="Modèle 3D architectural"
              category="Modélisation 3D"
              image="/placeholder-3d.jpg"
              link="/portfolio/3d/1"
              className="card-hover"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="graphisme" className="space-y-8 animate-slide-up">
          <GraphismeSection />
        </TabsContent>
        
        <TabsContent value="retouche" className="space-y-8 animate-slide-up">
          <RetoucheSection />
        </TabsContent>
        
        <TabsContent value="codage" className="space-y-8 animate-slide-up">
          <CodageSection />
        </TabsContent>
        
        <TabsContent value="video" className="space-y-8 animate-slide-up">
          <VideoSection />
        </TabsContent>
        
        <TabsContent value="musique" className="space-y-8 animate-slide-up">
          <MusiqueSection />
        </TabsContent>
        
        <TabsContent value="3d" className="space-y-8 animate-slide-up">
          <ModelisationSection />
        </TabsContent>
        
        <TabsContent value="autres" className="space-y-8 animate-slide-up">
          <AutresSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Composant réutilisable pour les cartes de projet
interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, link, className }) => {
  return (
    <div className={`bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all ${className}`}>
      <div className="aspect-video bg-muted relative image-placeholder">
        {/* L'image sera remplacée par une vraie image plus tard */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          [Image: {title}]
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-primary font-medium">{category}</span>
        <h3 className="text-xl font-semibold mt-1">{title}</h3>
        <a 
          href={link} 
          className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
        >
          Voir le projet →
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
