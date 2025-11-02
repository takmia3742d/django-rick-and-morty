import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Personajes', page: 'list' },
    { name: 'Contacto', page: 'contact' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={() => onNavigate('home')}>
            <span>Rick & Morty</span>
          </div>

          <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setIsOpen(false);
                }}
                className={`navbar-button ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};