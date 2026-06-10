import styles from "./topbar.module.css";
import { FiSearch, FiBell, FiUser, FiChevronDown, FiCode } from "react-icons/fi";

export default function Topbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <FiCode className={styles.logoIcon} />

        <div className={styles.logoText}>
          <span>Cursos</span>
          <span>online</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <a href="#">Início</a>
        <a href="#" className={styles.active}>
          Cursos
        </a>
        <a href="#">Trilhas</a>
        <a href="#">Certificações</a>
        <a href="#">Empresas</a>
        <a href="#">Sobre nós</a>
      </nav>

      <div className={styles.actions}>
        <button className={styles.iconButton}>
          <FiSearch />
        </button>

        <button className={styles.iconButton}>
          <FiBell />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.userArea}>
          <div className={styles.userIcon}>
            <FiUser />
          </div>

          <span>Olá Usuário!</span>
          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}