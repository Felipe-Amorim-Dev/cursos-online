import Topbar from "../../components/topbar/topbar";
import Hero from "../../components/Hero-section/Hero";
import InfoSection from "../../components/Info-section/Info-section";
import Sidebar from "../../components/Sidebar/Sidebar";
import CursoSection from "../../components/Curso-section/Curso-section";
import Footer from "../../components/Footer/Footer";
import "./Catalogo.module.css";

function Catalogo() {
  return (
    <div>
      <Topbar />
      <div className="main">
        <div className="main-section">
          <Hero />
          <InfoSection />
          <div>
            <main className="main-subsection">
              <div className="container">
                <Sidebar />
                <CursoSection />
              </div>
            </main>
            <Footer />
          </div>

        </div>

      </div>


    </div>
  );
}

export default Catalogo;