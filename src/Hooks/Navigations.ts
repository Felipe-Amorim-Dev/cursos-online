import { useNavigate } from "react-router-dom";

export function Navigations() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  function goToCursos() {
    navigate("/cursos");
  }

  return {
    goToHome,
    goToCursos,
  };
}