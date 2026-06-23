import styles from "./Curso-section.module.css";
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CursoCard from "../Curso-cards/Curso-card";
import { cursos } from "../../Data/Curso";

export default function CursoSection() {
  return (
    <section className={styles.cursoSection}>
      <div className={styles.header}>
        <h2>
          Todos os Cursos <span>(128)</span>
        </h2>

        <div className={styles.actions}>
          <select>
            <option>Mais relevantes</option>
            <option>Mais recentes</option>
            <option>Melhor avaliados</option>
          </select>

          <div className={styles.viewButtons}>
            <button className={styles.activeView}>
              <FiGrid />
            </button>

            <button>
              <FiList />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {cursos.map((cursos) => (
          <CursoCard key={cursos.id} cursos={cursos} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button className={styles.activePage}>
          <FiChevronLeft />
        </button>

        <button className={styles.activePage}>1</button>
        <button className={styles.activePage}>2</button>
        <button className={styles.activePage}>3</button>
        <button className={styles.activePage}>4</button>
        <button className={styles.activePage}>...</button>
        <button className={styles.activePage}>10</button>

        <button className={styles.activePage}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}