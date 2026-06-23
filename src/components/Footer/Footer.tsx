import styles from "./Footer.module.css";
import {
  FiUser,
  FiTarget,
  FiArrowRight,
} from "react-icons/fi";
import { PiRocketLaunch, PiTrophy } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.textArea}>
          <h2>
            Ainda não sabe
            <br />
            Qual curso escolher?
          </h2>

          <p>
            Responda 4 perguntas e receba recomendações
            <br />
            personalizadas para o seu perfil.
          </p>

          <button>
            Descobrir meu caminho
            <FiArrowRight />
          </button>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.iconCircle}>
              <FiUser />
              <span>1</span>
            </div>

            <strong>Responda Perguntas rápidas</strong>
            <p>Entenda seu nível e objetivos.</p>
          </div>

          <FiArrowRight className={styles.arrow} />

          <div className={styles.step}>
            <div className={styles.iconCircle}>
              <FiTarget />
              <span>2</span>
            </div>

            <strong>Receba recomendações personalizadas</strong>
            <p>Cursos ideais para o seu perfil e carreira.</p>
          </div>

          <FiArrowRight className={styles.arrow} />

          <div className={styles.step}>
            <div className={styles.iconCircle}>
              <PiRocketLaunch />
              <span>3</span>
            </div>

            <strong>Siga sua trilha de aprendizado</strong>
            <p>Com um plano claro e estruturado.</p>
          </div>

          <FiArrowRight className={styles.arrow} />

          <div className={styles.step}>
            <div className={styles.iconCircle}>
              <PiTrophy />
              <span>4</span>
            </div>

            <strong>Alcance seus objetivos</strong>
            <p>E impulsione sua carreira em tecnologia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}