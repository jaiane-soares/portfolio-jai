import { useState } from 'react';
import '../styles/Navbar.css';

const links = [
  { label: 'Sobre mim',   href: '#about'    },
  { label: 'Projetos',    href: '#projects'  },
  { label: 'Habilidades', href: '#skills'    },
  { label: 'Contato',     href: '#contact'   },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-header" role="banner">
      <div className="nav-container">
        
        <a href="#" className="nav-logo" aria-label="JaiDev – início">
          JaiDev
        </a>

        
        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`} aria-label="Menu principal">
          <ul>
            
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setIsOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}