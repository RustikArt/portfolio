import React from 'react';
import { Link } from 'react-router-dom';
// ThemeProvider est déjà utilisé dans App.tsx
import { ModeToggle } from '../components/mode-toggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Portfolio Créatif</span>
        </Link>
        
<nav className="hidden md:flex items-center space-x-6">
  <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
    Accueil
  </Link>
  <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
    À propos
  </Link>
  <Link to="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
    Portfolio
  </Link>
  <Link to="/reviews" className="text-sm font-medium transition-colors hover:text-primary">
    Avis
  </Link>
  <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
    Contact
  </Link>

  {/* 🎯 AJOUT ICI */}
  <Link to="/shop" className="text-sm font-medium transition-colors hover:text-primary">
    Boutique
  </Link>
  <Link to="/cart" className="text-sm font-medium transition-colors hover:text-primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
         viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  </Link>
</nav>
        {/* Fin de la barre de navigation */}

        {/* Bouton de mode sombre et menu mobile */}
        
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <button className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
