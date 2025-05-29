import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center text-center p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Portfolio Créatif
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
          Bienvenue dans mon univers créatif où se rencontrent graphisme, développement, 
          montage vidéo, musique et modélisation 3D.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild className="text-lg px-6 py-6">
            <Link to="/portfolio">Voir mes projets</Link>
          </Button>
          <Button asChild variant="outline" className="text-lg px-6 py-6">
            <Link to="/about">À propos de moi</Link>
          </Button>
        </div>
      </section>
      
      <section className="py-12 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Mes domaines d'expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Graphisme', icon: '🎨', path: '/portfolio/graphisme' },
              { title: 'Retouche photo', icon: '📸', path: '/portfolio/retouche' },
              { title: 'Développement', icon: '💻', path: '/portfolio/codage' },
              { title: 'Montage vidéo', icon: '🎬', path: '/portfolio/video' },
              { title: 'Musique', icon: '🎵', path: '/portfolio/musique' },
              { title: 'Modélisation 3D', icon: '🧊', path: '/portfolio/3d' },
            ].map((skill, index) => (
              <Link 
                key={index} 
                to={skill.path}
                className="bg-card hover:bg-card/80 p-6 rounded-lg shadow-sm transition-all hover:shadow-md"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">
                  Découvrez mes projets et réalisations en {skill.title.toLowerCase()}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
