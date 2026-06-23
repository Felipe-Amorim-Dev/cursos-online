import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import bgHero from "../../assets/bg-hero-section-home.jpg";
import styles from "./HeroSectionHome.module.css";

function HeroSectionHome() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1>
                            Formação em <br />
                            <span>Tecnologia</span> para <br />
                            quem quer crescer <br />
                            profissionalmente
                        </h1>

                        <p>
                            Cursos online em programação, cloud, dados, <br />
                            segurança e infraestrutura, com conteúdo prático, <br />
                            certificado e trilhas orientadas ao mercado.
                        </p>

                        <div className={styles.actions}>
                            <button className={styles.primaryButton}>
                                Ver cursos
                                <FiArrowRight />
                            </button>

                            <button className={styles.secondaryButton}>
                                Falar com consultor
                                <FiMessageCircle />
                            </button>
                        </div>
                    </div>
                    <div className={styles.BgImg}>
                        <img src={bgHero} alt="Hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSectionHome;