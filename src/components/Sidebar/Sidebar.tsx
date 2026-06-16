import styles from "./Sidebar.module.css";
import { FiMenu, FiSearch, FiChevronUp, FiBookOpen, FiCloud, FiDatabase, FiShield, FiCpu, FiServer, FiHeadphones, FiChevronRight } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <FiMenu />
          <h2>Filtros</h2>
        </div>

        <button className={styles.active}>Limpar filtro</button>
      </div>

      <div className={styles.searchBox}>
        <h3>Buscar Curso</h3>

        <div className={styles.inputArea}>
          <input type="text" placeholder="Digite o nome do curso" />
          <FiSearch />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3>Categorias</h3>
          <FiChevronUp />
        </div>

        <ul className={styles.categoryList}>
          <li className={styles.active}>
            <div>
              <FiBookOpen />
              <span>Todos</span>
            </div>
            <strong>128</strong>
          </li>

          <li className={styles.active}>
            <div>
              <FiBookOpen />
              <span>Desenvolvimento</span>
            </div>
            <strong>45</strong>
          </li>

          <li className={styles.active}>
            <div>
              <FiCloud />
              <span>Desenvolvimento</span>
            </div>
            <strong>18</strong>
          </li>

          <li className={styles.active}>
            <div>
              <FiDatabase />
              <span>Dados</span>
            </div>
            <strong>16</strong>
          </li>

          <li className={styles.active}>
            <div>
              <FiShield />
              <span>Segurança</span>
            </div>
            <strong>15</strong>
          </li>

          <li className={styles.active}>
            <div>
              <FiCpu />
              <span>IA & Machine learning</span>
            </div>
            <strong>12</strong>
          </li>

          <li className={styles.active}>
            <div>
              <FiServer />
              <span>Infraestrutura</span>
            </div>
            <strong>8</strong>
          </li>

          <li className={styles.active} >
            <div>
              <FiHeadphones />
              <span>Soft Skills</span>
            </div>
            <strong>8</strong>
          </li>
        </ul>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3>Modalidade</h3>
          <FiChevronUp />
        </div>

        <div className={styles.checkboxGroup}>
          <label>
            <input type="checkbox" defaultChecked />
            <span>Todos</span>
          </label>

          <label>
            <input type="checkbox" />
            <span>Aulas gravadas</span>
          </label>

          <label>
            <input type="checkbox" />
            <span>Aulas ao vivo</span>
          </label>
        </div>
      </div>

      <button className={styles.levelButton}>
        <FiCpu />
        <div>
          <span>Não sabe por onde começar?</span>
          <strong>Faça um teste de nível</strong>
        </div>
        <FiChevronRight />
      </button>
    </aside>
  );
}