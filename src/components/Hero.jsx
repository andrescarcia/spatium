import { motion } from 'framer-motion';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import './Hero.css';

const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const Hero = () => {
  return (
    <section className="hero-section">
      <nav className="top-nav">
        <ul className="nav-links">
          <li style={{cursor: 'pointer'}} onClick={() => document.querySelector('.rooms-section')?.scrollIntoView({ behavior: 'smooth' })}>Quartos</li>
          <li className="nav-separator">/</li>
          <li style={{cursor: 'pointer'}} onClick={() => document.querySelector('.features-section')?.scrollIntoView({ behavior: 'smooth' })}>Serviços</li>
          <li className="nav-separator">/</li>
          <li style={{cursor: 'pointer'}} onClick={() => document.querySelector('.contact-section')?.scrollIntoView({ behavior: 'smooth' })}>Contactos</li>
        </ul>
        <div className="nav-icon">
          <ArrowUpRight size={48} strokeWidth={1} />
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-title-area">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <div style={{ overflow: "hidden" }}>
              <motion.div variants={itemVariants} style={{ display: "inline-block" }}>O melhor da</motion.div>
            </div>
            <div style={{ overflow: "hidden", display: "flex", alignItems: "center" }}>
              <motion.span variants={itemVariants} style={{ display: "inline-block" }}>Uni</motion.span>
              <motion.span 
                className="title-line"
                variants={{
                  hidden: { scaleX: 0, opacity: 0 },
                  visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
                }}
                style={{ transformOrigin: "left" }}
              ></motion.span>
              <motion.span variants={itemVariants} style={{ display: "inline-block" }}>começa aqui</motion.span>
            </div>
          </motion.h1>

          <motion.div 
            className="hero-meta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="meta-text">Residência Universitária</div>
            <div className="meta-text">2026</div>
            <div className="meta-text">Covilhã, Portugal</div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-side-card"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="side-card-title">RESERVA AGORA</p>
          <div className="side-card-image-box">
            <img src="/Conforto.JPG" alt="Comfort Room" />
            <div className="side-card-arrow">
              <MoveRight size={20} strokeWidth={1.5} />
            </div>
          </div>
          <p className="side-card-desc">
            Conforto, Privacidade, Comunidade e Natureza a minutos da tua faculdade.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="hero-main-image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img src="/fachada1.1.png" alt="Spatium Residence Facade" />
      </motion.div>
    </section>
  );
};

export default Hero;
