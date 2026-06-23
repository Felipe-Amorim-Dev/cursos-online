import { FiArrowRight, FiBarChart2, FiFileText, FiUsers, FiAward } from "react-icons/fi";
import bgB2b from "../../assets/bg-b2b-section-home.jpg";
import styles from "./B2bSectionHome.module.css";

function B2bSectionHome() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <span>PARA EMPRESAS</span>

          <h2>
            Capacite sua equipe com <br />
            trilhas personalizadas em TI
          </h2>

          <p>
            Soluções completas para desenvolver talentos, acompanhar <br />
            resultados e impulsionar a transformação digital da sua empresa.
          </p>

          <button>
            Falar com especialista
            <FiArrowRight />
          </button>
        </div>

        <div className={styles.features}>
          <div>
            <FiBarChart2 />
            <p>Dashboard de evolução em tempo real</p>
          </div>

          <div>
            <FiFileText />
            <p>Relatórios por colaborador e turma</p>
          </div>

          <div>
            <FiUsers />
            <p>Gestão de turmas e permissões</p>
          </div>

          <div>
            <FiAward />
            <p>Certificados corporativos</p>
          </div>
        </div>

        <div className={styles.imageArea}>
          <img src={bgB2b} alt="Dashboard corporativo" />
        </div>
      </div>
    </section>
  );
}

export default B2bSectionHome;