import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Rooms.css';

const roomsData = [
  {
    id: 1,
    title: "Quarto Conforto",
    desc: "Quarto totalmente mobilado com WC privado, internet, acesso às áreas comuns e pátio privativo. Funcionalidade e conforto."
  },
  {
    id: 2,
    title: "Quarto Deluxe",
    desc: "Quarto espaçoso, totalmente mobilado, com WC privado, internet, acesso às áreas comuns. Muito espaço e luz natural."
  },
  {
    id: 3,
    title: "Estúdio Premium",
    desc: "Estúdio T0 totalmente mobilado, com cozinha, casa de banho, internet e pátio exterior privado. O teu próprio espaço completo."
  }
];

const Rooms = () => {
  return (
    <section className="rooms-section">
      <div className="rooms-header-row">
        <motion.h2 
          className="rooms-main-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Encontra o Teu<br/>Espaço Ideal
        </motion.h2>
        <div className="rooms-view-all">VER TODOS</div>
      </div>

      <motion.div 
        className="rooms-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {roomsData.map((room) => (
          <motion.div 
            className="room-grid-item" 
            key={room.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <h3 className="room-title">{room.title}</h3>
            <p className="room-desc">{room.desc}</p>
            <Link to={`/room/${room.id}`} className="room-action-btn">
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="rooms-parallax-image">
        <motion.div 
          className="rooms-parallax-overlay"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Constrói o teu<br/>Espaço Sustentável</h2>
        </motion.div>
        <img src="/mesaexterior.png" alt="Outdoor Table" />
      </div>
    </section>
  );
};

export default Rooms;
