import Topbar from "./components/topbar/topbar";
import Hero from "./components/Hero-section/Hero";
import InfoSection from "./components/Info-section/Info-section";
import Sidebar from "./components/Sidebar/Sidebar";
import CursoSection from "./components/Curso-section/Curso-section";
import "./index.css";

function App() {
  return (
    <div className="main">
      <Topbar />
      <div className="main-section">
        <div className="banner-section">
          <Hero />
          <InfoSection />
        </div>

        <main className="main-subsection">
          <div className="container">
            <Sidebar />
            <CursoSection />
          </div>
        </main>
      </div>

    </div>
  );
}

export default App;