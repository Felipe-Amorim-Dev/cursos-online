import Topbar from "./components/topbar/topbar";
import Hero from "./components/Hero-section/Hero";
import InfoSection from "./components/Info-section/Info-section";
import Sidebar from "./components/Sidebar/Sidebar";
import CursoSection from "./components/Curso-section/Curso-section";
import "./index.css";

function App() {
  return (
    <div>
      <Topbar />
      <Hero />
      <InfoSection />

      <main className="main-section">
        <div className="container">
          <Sidebar />
          <CursoSection />
        </div>
      </main>
    </div>
  );
}

export default App;