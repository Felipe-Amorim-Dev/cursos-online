import { FiArrowRight, FiClock, FiAward } from "react-icons/fi";
import { PiGraduationCap } from "react-icons/pi";
import { FiCode, FiCloud, FiShield } from "react-icons/fi";
import { PiDatabase, PiChartBar, PiBrain } from "react-icons/pi";
import bgIntroduction from "../../assets/bg-introduction-section-home.jpg";

import styles from "./IntroductionSectionHome.module.css";

function IntroductionSectionHome() {
  const trilhas = [
    {
      title: "Desenvolvimento Full Stack",
      description:
        "Do front-end ao back-end. Crie aplicações completas e escaláveis.",
      icon: <FiCode />,
    },
    {
      title: "Cloud & DevOps",
      description:
        "Aprenda AWS, Azure, Docker, Kubernetes e muito mais.",
      icon: <FiCloud />,
    },
    {
      title: "Banco de Dados",
      description:
        "Modelagem SQL, NoSQL e administração de bancos de dados.",
      icon: <PiDatabase />,
    },
    {
      title: "Segurança da Informação",
      description:
        "Proteja sistemas e dados. Aprenda ethical hacking e LGPD.",
      icon: <FiShield />,
    },
    {
      title: "Análise de Dados",
      description:
        "Transforme dados em decisões com SQL, Power BI e Python.",
      icon: <PiChartBar />,
    },
    {
      title: "Inteligência Artificial",
      description:
        "Machine Learning, Deep Learning e IA aplicada ao mundo real.",
      icon: <PiBrain />,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>TRILHAS DE APRENDIZADO</span>

          <h2>
            Escolha sua área e acelere sua carreira
          </h2>
        </div>

        <div className={styles.cards}>
          {trilhas.map((trilha, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                {trilha.icon}
              </div>

              <h3>{trilha.title}</h3>

              <p>{trilha.description}</p>

              <button className={styles.btn}>
                Ver trilha
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.highlight}>
          <div className={styles.content}>
            <span>EM DESTAQUE</span>

            <h3>Trilha Full Stack Developer</h3>

            <p>
              Aprenda as principais tecnologias para se tornar
              um desenvolvedor completo e preparado para o mercado.
            </p>

            <div className={styles.info}>
              <div>
                <FiClock />
                <span>120 horas</span>
              </div>

              <div>
                <PiGraduationCap />
                <span>Iniciante ao Avançado</span>
              </div>

              <div>
                <FiAward />
                <span>Certificado Incluso</span>
              </div>
            </div>

            <button className={styles.primaryButton}>
              Inscrever-se agora
              <FiArrowRight />
            </button>
          </div>

          <div className={styles.image}>
            <img
              src={bgIntroduction}
              alt="Trilha Full Stack"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroductionSectionHome;