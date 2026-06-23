import styles from "./Curso-card.module.css";
import { FiClock, FiBookmark } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import type { Cursos } from "../../Data/Curso";

type CursoCardProps = {
  cursos: Cursos;
};

export default function CursoCard({ cursos }: CursoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageArea}>
        <img src={cursos.image} alt={cursos.title} />

        {cursos.tag && <span className={styles.tag}>{cursos.tag}</span>}

        <span className={styles.level}>{cursos.level}</span>
      </div>

      <div className={styles.content}>
        <h3>{cursos.title}</h3>

        <p>{cursos.description}</p>

        <div className={styles.footer}>
          <div className={styles.info}>
            <span>
              <FiClock />
              {cursos.hours}
            </span>

            <span>
              <FaStar className={styles.star} />
              {cursos.rating}
            </span>
          </div>

          <FiBookmark className={styles.bookmark} />
        </div>
      </div>
    </article>
  );
}