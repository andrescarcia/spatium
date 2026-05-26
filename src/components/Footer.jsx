import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <h2 className="footer-giant-title">Reserva o teu<br/>Espaço Sustentável</h2>
        <div className="footer-arrow">
          <ArrowUpRight size={64} strokeWidth={1} />
        </div>
      </div>
      
      <div className="footer-bottom-block">
        <div className="footer-block-content">
          <div className="footer-brand">
            <h3>Spatium</h3>
            <p>Acreditamos num futuro melhor planeando o teu conforto com práticas eficientes.</p>
          </div>
          
          <div className="footer-nav">
            <ul>
              <li style={{cursor: 'pointer'}} onClick={() => {
                if(window.location.pathname !== '/') window.location.href = '/';
                else window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>Home</li>
              <li className="nav-separator">/</li>
              <li style={{cursor: 'pointer'}} onClick={() => document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' })}>Contactos</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
