import { FiAward } from "react-icons/fi";
import { PiGraduationCap, PiCode, PiRoadHorizon } from "react-icons/pi";
import styles from "./InfoSectionHome.module.css";

function InfoSectionHome() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <PiGraduationCap />
          </div>

          <div>
            <strong>+120</strong>
            <p>cursos disponíveis</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <FiAward />
          </div>

          <div>
            <strong>Certificado</strong>
            <p>incluso em todos os cursos</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <PiCode />
          </div>

          <div>
            <strong>Aulas práticas</strong>
            <p>e projetos reais</p>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconBox}>
            <PiRoadHorizon />
          </div>

          <div>
            <strong>Trilhas por</strong>
            <p>carreira e nível</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSectionHome;