import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import Plataforma from "./components/Plataforma.jsx";

function App() {
  const [currentView, setCurrentView] = useState("main");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSelectPlatform = (platform) => {
    setCurrentView(platform);
    setIsSidebarOpen(false); // Cerrar sidebar al seleccionar una plataforma en móvil
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar
          onSelectPlatform={handleSelectPlatform}
          currentView={currentView}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
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
