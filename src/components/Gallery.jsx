import { motion } from 'framer-motion';
import './Gallery.css';

const images = [
  "/fachada1.1.png",
  "/Conforto.JPG",
  "/Deluxe.JPG",
  "/CozinhaB1.JPG",
  "/fachada2.png",
  "/jardim.png",
  "/mesaexterior.png",
  "/patioconforto.png",
  "/patiodeluxe.png",
  "/room1.png",
  "/room2.png",
  "/room3.png",
  "/room4.png",
  "/room5.png",
  "/IMG_6535.JPG",
  "/IMG_8446.JPG"
];

// Duplicate images to create a seamless infinite loop
const duplicatedImages = [...images, ...images];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          A Nossa Galeria
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Desliza para explorar a residência
        </motion.p>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {duplicatedImages.map((img, index) => (
            <div className="carousel-item" key={index}>
              <img src={`${import.meta.env.BASE_URL}${img.startsWith('/') ? img.slice(1) : img}`} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
