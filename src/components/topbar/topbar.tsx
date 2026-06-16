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
        <a href="#" className={styles.active}>Início</a>
        <a href="#" className={styles.active}>Cursos</a>
        <a href="#" className={styles.active}>Trilhas</a>
        <a href="#" className={styles.active}>Certificações</a>
        <a href="#" className={styles.active}>Empresas</a>
        <a href="#" className={styles.active}>Sobre nós</a>
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

          {/* <span>Olá Usuário!</span> */}          
          <select className="dropdown">
            <option disabled selected hidden>Olá Usuário!</option>
            <option>Perfil</option>
            <option>Meus cursos</option>
            <option>Sair</option>
          </select>
        </div>
      </div>
    </header>
  );
}

