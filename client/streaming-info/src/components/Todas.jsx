import { useState } from "react";

function Todas() {
  const [buttonText, setButtonText] = useState("Copiar");
  const endpointUrl = "https://localhost:3000/api/plataformas";

  function copyToClipboard() {
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
    <>
      <div className="mb-8">
        <h2 className="text-white mt-4 underline font-bold text-2xl mb-4">
          Todas las plataformas
        </h2>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
          <div className="flex items-center justify-between gap-3">
            <div>
              <span className="bg-emerald-600/30 px-3 py-1 rounded border border-emerald-800 font-semibold text-emerald-400 text-sm">
                GET
              </span>
              <code id="endpoint" className="text-gray-300 font-mono ml-2">
                https://localhost:3000/api/plataformas
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
    </>
  );
}

export default Todas;
