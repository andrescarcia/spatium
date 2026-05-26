import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import './Room.css';

// Mock data matching the TerraForma structure
const roomsDatabase = {
  "1": {
    title: "Quarto Conforto",
    area: "15m²",
    desc: "Quarto totalmente mobilado com WC privado, internet, acesso às áreas comuns e pátio privativo. O design foca na funcionalidade e conforto, maximizando o uso de luz natural e materiais sustentáveis.",
    price: "Consultar",
    features: [
      "WC Privado",
      "Cama 2x1 metros",
      "Secretária e Cadeira",
      "Roupeiro embutido",
      "Muita luz natural",
      "Pátio privativo"
    ],
    image: "/Conforto.JPG"
  },
  "2": {
    title: "Quarto Deluxe",
    area: "18m²",
    desc: "Quarto espaçoso, totalmente mobilado, com WC privado, internet, acesso às áreas comuns. Desenhado para oferecer muito espaço, inclui uma zona de leitura e uma excelente vista.",
    price: "Consultar",
    features: [
      "WC Privado",
      "Cama 2x1 metros",
      "Mesa de televisão",
      "Secretária executiva",
      "Roupeiro amplo",
      "Acabamentos premium"
    ],
    image: "/Deluxe.JPG"
  },
  "3": {
    title: "Estúdio Premium",
    area: "40m²",
    desc: "Estúdio T0 totalmente mobilado, com cozinha, casa de banho, internet e pátio exterior privado. O teu próprio espaço completo, ideal para quem procura total independência.",
    price: "Consultar",
    features: [
      "Cozinha equipada",
      "Cama King Size",
      "WC Privado completo",
      "Sala de estar com sofá",
      "Bancada para refeições",
      "Pátio privativo largo"
    ],
    image: "/CozinhaB1.JPG"
  }
};

const Room = () => {
  const { id } = useParams();
  const room = roomsDatabase[id] || roomsDatabase["1"]; // Default to 1 if not found

  return (
    <div className="room-page">
      <nav className="room-nav">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Voltar à Home</span>
        </Link>
      </nav>

      <div className="room-hero">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="room-title-giant"
        >
          {room.title}
        </motion.h1>
        
        <div className="room-meta-bar">
          <div className="room-meta-item">Spatium Residence</div>
          <div className="room-meta-item">{room.area}</div>
          <div className="room-meta-item">{room.price}</div>
        </div>
      </div>

      <motion.div 
        className="room-main-image-container"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={room.image} alt={room.title} className="room-main-image" />
      </motion.div>

      <div className="room-content-grid">
        <div className="room-description-col">
          <h3>Sobre o Espaço</h3>
          <p>{room.desc}</p>
          <button className="book-btn">Reservar Agora</button>
        </div>
        
        <div className="room-features-col">
          <h3>Comodidades</h3>
          <ul className="room-features-list">
            {room.features.map((feature, idx) => (
              <li key={idx}>
                <Check size={18} className="feature-check" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Room;
