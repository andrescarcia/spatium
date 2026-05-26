import { motion } from 'framer-motion';
import './Features.css';

const featuresData = [
  { label: "Limpeza Diária", value: "As zonas comuns são limpas diariamente." },
  { label: "Segurança 24h", value: "Código pessoal e câmaras nas áreas comuns." },
  { label: "WIFI Rápido", value: "Internet de alta velocidade em toda a residência." },
  { label: "Despesas Fixas", value: "Água, luz e gás com valor fixo sem surpresas." },
  { label: "Kitchenette", value: "Estúdios com frigorífico, fogão, forno e microondas." },
  { label: "Cama de Casal", value: "Todos os estúdios estão equipados com camas de casal." }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-layout">
        <div className="features-left">
          <p className="features-intro">
            Acreditamos num futuro melhor planeando o teu conforto com práticas eficientes e sustentáveis. Cada projeto nosso garante a melhor experiência e comunidade.
          </p>
          <img src="/Deluxe.JPG" alt="Deluxe Room" className="features-side-img" />
        </div>
        
        <motion.div 
          className="features-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          <motion.h2 
            className="features-title"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
            }}
          >
            Inovação e Conforto,<br/>Desenhado para Ti
          </motion.h2>
          
          <div className="features-table">
            {featuresData.map((feature, i) => (
              <motion.div 
                className="feature-row" 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <div className="feature-label">{feature.label}</div>
                <div className="feature-value">{feature.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
