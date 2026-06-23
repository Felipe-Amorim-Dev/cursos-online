import { FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import styles from "./FooterHome.module.css";

function FooterHome() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>
            &lt;/&gt; Cursos Online
            <span>EDUCAÇÃO EM TI</span>
          </h2>

          <p>
            Transformamos carreiras e empresas por meio da educação em
            tecnologia de forma prática, acessível e relevante.
          </p>

          <div className={styles.socials}>
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
            <FaGithub />
          </div>
        </div>

        <div className={styles.links}>
          <h3>Navegação</h3>
          <a>Cursos</a>
          <a>Trilhas</a>
          <a>Certificações</a>
          <a>Para Empresas</a>
          <a>Depoimentos</a>
          <a>Sobre nós</a>
        </div>

        <div className={styles.links}>
          <h3>Suporte</h3>
          <a>Central de Ajuda</a>
          <a>Fale Conosco</a>
          <a>Política de Privacidade</a>
          <a>Termos de Uso</a>
          <a>Reembolso</a>
        </div>

        <div className={styles.newsletter}>
          <h3>Newsletter</h3>

          <p>
            Receba novidades e conteúdos exclusivos sobre tecnologia.
          </p>

          <form>
            <input type="email" placeholder="Seu melhor e-mail" />
            <button type="button">
              <FiArrowRight />
            </button>
          </form>
        </div>
      </div>

      <p className={styles.copy}>
        © 2024 Cursos Online Educação em TI. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default FooterHome;