import styles from "./info-section.module.css";
import { FiStar, FiUsers } from "react-icons/fi";
import { PiGraduationCap, PiChartLineUp } from "react-icons/pi";

export default function InfoSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.item}>
          <PiGraduationCap className={styles.icon} />
          <div>
            <strong>120</strong>
            <span>Cursos Disponíveis</span>
          </div>
        </div>

        <div className={styles.item}>
          <PiChartLineUp className={styles.icon} />
          <div>
            <strong>25</strong>
            <span>Trilhas completas</span>
          </div>
        </div>

        <div className={styles.item}>
          <FiUsers className={styles.icon} />
          <div>
            <strong>8.900+</strong>
            <span>Alunos ativos</span>
          </div>
        </div>

        <div className={styles.item}>
          <FiStar className={styles.icon} />
          <div>
            <strong>98%</strong>
            <span>Satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
}