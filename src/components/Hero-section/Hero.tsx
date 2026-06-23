import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.breadcrumb}>
          <span>Início</span> &gt; Cursos
        </p>

        <h1>
          Explore nossos <span>cursos</span>
          <br />
          e de o próximo passo
          <br />
          na sua Carreira em TI.
        </h1>

        <p className={styles.description}>
          Conteúdo prático, atualizado e desenvolvido por especialistas
          <br />
          para impulsionar seu conhecimento e seus resultados.
        </p>
      </div>

      <div className={styles.imageArea}>
        <img src="/Hero_bg.jpg" alt="Notebook com código" />
      </div>
    </section>
  );
}