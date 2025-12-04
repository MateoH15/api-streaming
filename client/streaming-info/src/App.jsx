import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import Plataforma from "./components/Plataforma.jsx";

function App() {
  const [currentView, setCurrentView] = useState("main");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <>
      <Header theme={theme} onThemeChange={toggleTheme} />
      <div className="flex">
        <Sidebar onSelectPlatform={setCurrentView} currentView={currentView} />
        {currentView === "main" ? (
          <Main />
        ) : (
          <Plataforma platform={currentView} />
        )}
      </div>
    </>
  );
}

export default App;
