import React from 'react';
import { retoucheProjects, Project } from '../../data/projects';

const RetoucheSection: React.FC = () => {
  return (
    <div>
      <p className="text-lg text-center mb-8">
        Découvrez mes projets et réalisations en retouche photo et photomontage.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {retoucheProjects.map((project: Project) => (
          <div key={project.id} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all card-hover">
            <div className="aspect-video bg-muted relative image-placeholder">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                [Image: {project.title}]
              </div>
            </div>
            <div className="p-4">
              <span className="text-sm text-primary font-medium">{project.category}</span>
              <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={`/portfolio/retouche/${project.id}`} 
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                Voir le projet →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RetoucheSection;
