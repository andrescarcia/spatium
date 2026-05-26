import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contactos">
      <div className="contact-container">
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get in touch<br/>with us
        </motion.h2>
        
        <motion.div 
          className="contact-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          <motion.div 
            className="contact-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-info">
              <h3>Address</h3>
              <p>Estrada do Sineiro 33,<br/>6200-209 Covilhã</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="contact-icon">
              <Phone size={24} />
            </div>
            <div className="contact-info">
              <h3>Phone</h3>
              <p>+351 962 482 044</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-item"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>geral@spatiumresidence.com</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
