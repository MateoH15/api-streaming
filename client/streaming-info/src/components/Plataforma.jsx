import { useState } from "react";
import Netflix from "./jsonExamples/Netflix";
import Disney from "./jsonExamples/Disney";
import Max from "./jsonExamples/Max";
import PrimeVideo from "./jsonExamples/PrimeVideo";
import Apple from "./jsonExamples/Apple";
import Spotify from "./jsonExamples/Spotify";
import AppleMusic from "./jsonExamples/AppleMusic";
import YoutubeMusic from "./jsonExamples/YoutubeMusic";
import PlaystationPlus from "./jsonExamples/PlaystationPlus";
import Xbox from "./jsonExamples/Xbox";
import Fetch from "./Fetch";

function Plataforma({ platform }) {
  const [buttonText, setButtonText] = useState("Copiar");

  // Mapeo de plataformas a sus componentes JSON
  const jsonComponents = {
    netflix: Netflix,
    disney: Disney,
    max: Max,
    amazon: PrimeVideo,
    apple: Apple,
    spotify: Spotify,
    applemusic: AppleMusic,
    youtubemusic: YoutubeMusic,
    playstationplus: PlaystationPlus,
    xbox: Xbox,
  };

  // Datos de las plataformas
  const platformData = {
    netflix: {
      name: "Netflix",
      description:
        "Netflix es una plataforma de streaming líder que ofrece una amplia gama de películas, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/netflix",
      color: "red",
      features: ["Plataforma", "Precios", "Logo"],
    },
    disney: {
      name: "Disney+",
      description:
        "Disney+ es una plataforma de streaming líder que ofrece una amplia gama de películas, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/disneyplus",
      color: "yellow",
      features: ["Plataforma", "Precios", "Logo"],
    },
    max: {
      name: "Max",
      description:
        "Max es una plataforma de streaming líder que ofrece una amplia gama de películas, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/max",
      color: "blue",
      features: ["Plataforma", "Precios", "Logo"],
    },
    amazon: {
      name: "Amazon Prime Video",
      description:
        "Amazon Prime Video es una plataforma de streaming líder que ofrece una amplia gama de películas, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/primevideo",
      color: "green",
      features: ["Plataforma", "Precios", "Logo"],
    },
    apple: {
      name: "Apple TV+",
      description:
        "Apple TV+ es una plataforma de streaming líder que ofrece una amplia gama de películas, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/appletvplus",
      color: "purple",
      features: ["Plataforma", "Precios", "Logo"],
    },
    spotify: {
      name: "Spotify",
      description:
        "Spotify es una plataforma de streaming líder que ofrece una amplia gama de música, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/spotify",
      color: "blue",
      features: ["Plataforma", "Precios", "Logo"],
    },
    applemusic: {
      name: "Apple Music",
      description:
        "Apple Music es una plataforma de streaming líder que ofrece una amplia gama de música, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/applemusic",
      color: "blue",
      features: ["Plataforma", "Precios", "Logo"],
    },
    youtubemusic: {
      name: "YouTube Music",
      description:
        "YouTube Music es una plataforma de streaming líder que ofrece una amplia gama de música, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/youtubemusic",
      color: "blue",
      features: ["Plataforma", "Precios", "Logo"],
    },
    playstationplus: {
      name: "PlayStation Plus",
      description:
        "PlayStation Plus es una plataforma de streaming líder que ofrece una amplia gama de música, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/playstationplus",
      color: "blue",
      features: ["Plataforma", "Precios", "Logo"],
    },
    xbox: {
      name: "Xbox",
      description:
        "Xbox es una plataforma de streaming líder que ofrece una amplia gama de música, series de televisión, documentales y contenido original galardonado.",
      endpoint: "/api/plataformas/xboxgamepass",
      color: "blue",
      features: ["Plataforma", "Precios", "Logo"],
    },
  };

  const data = platformData[platform] || platformData.netflix;

  function copyToClipboard() {
    const endpointUrl = `https://api-streaming-wbne.onrender.com${data.endpoint}`;
    navigator.clipboard
      .writeText(endpointUrl)
      .then(() => {
        setButtonText("Copiado");
        setTimeout(() => {
          setButtonText("Copiar");
        }, 1000);
      })
      .catch((err) => {
        console.error("Error al copiar:", err);
        setButtonText("Error");
        setTimeout(() => {
          setButtonText("Copiar");
        }, 1000);
      });
  }

  return (
    <main className="flex-1 bg-slate-950 h-[calc(100vh-73px)] overflow-y-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-4xl font-bold mb-4">{data.name}</h1>
        <p className="text-gray-300 text-lg">{data.description}</p>
      </div>

      {/* Endpoint Section */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-2xl mb-4 underline">
          Endpoint
        </h2>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="bg-emerald-600/30 px-3 py-1 rounded border border-emerald-800 font-semibold text-emerald-400 text-sm">
                GET
              </span>
              <code id="endpoint" className="text-gray-300 font-mono ml-2">
                https://api-streaming-wbne.onrender.com{data.endpoint}
              </code>
            </div>
            <div>
              <button
                onClick={copyToClipboard}
                id="copy-button"
                className="bg-blue-600/30 px-3 py-1 rounded border border-blue-800 font-semibold text-blue-400 text-sm cursor-pointer hover:bg-blue-600/50 transition-colors"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Example */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-2xl mb-4 underline">
          Ejemplo de Uso
        </h2>
        <Fetch endpoint={data.endpoint} />
      </div>

      {/* Features Section */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-2xl mb-4 underline">
          Características
        </h2>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          {data.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Response Example */}
      {(() => {
        const JsonComponent =
          jsonComponents[platform] || jsonComponents.netflix;
        return <JsonComponent />;
      })()}

      {/* Footer */}
      <div className="border-t border-slate-700 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          <strong className="text-white">Nota:</strong> Los precios mostrados
          son ejemplos y pueden variar según la región y el momento de la
          consulta.
        </p>
      </div>
    </main>
  );
}

export default Plataforma;
