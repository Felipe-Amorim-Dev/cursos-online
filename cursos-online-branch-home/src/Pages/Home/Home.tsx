import Topbar from "../../components/topbar/topbar";
import HeroSectionHome from "../../components/Hero-section-home/HeroSectionHome";
import InfoSectionHome from "../../components/Info-section-home/InfoSectionHome";
import IntroductionSectionHome from "../../components/Introduction-section-home/IntroductionSectionHome";
import B2bSectionHome from "../../components/b2b-section-home/B2bSectionHome";
import FooterHome from "../../components/Footer-home/FooterHome";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.home}>
            <Topbar />
            <div className={styles.header}>
                <HeroSectionHome />
            </div>

            <div className={styles.content}>
                <InfoSectionHome />
            </div>
            <main className={styles.main}>
                <IntroductionSectionHome />
                <div className={styles.b2bSection}>
                    <B2bSectionHome />
                </div>
            </main>
            <FooterHome />
        </div>
    );
}

export default Home;