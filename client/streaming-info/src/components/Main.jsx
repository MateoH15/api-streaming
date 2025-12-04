import Todas from "./Todas";
import Fetch from "./Fetch";

function Main() {
  return (
    <main className="flex-1 bg-slate-950 h-[calc(100vh-73px)] overflow-y-auto p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-white text-4xl font-bold mb-4">
          API Precios Streaming
        </h1>
        <p className="text-gray-300 text-lg">
          API pública y gratuita para obtener información actualizada sobre los
          precios de las principales plataformas de streaming.
        </p>
      </div>

      {/* Server Information */}
      <div className="mb-8">
        <h2 className="text-white mt-4 underline font-bold text-2xl mb-4">
          Servidor
        </h2>
        <p className="p-4 bg-white/80 rounded-lg font-semibold hover:underline cursor-pointer transition-all">
          https://localhost:3000
        </p>
      </div>

      <Todas />

      {/* Features Section */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-2xl mb-4 underline">
          Características
        </h2>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          <li>Acceso gratuito y sin necesidad de autenticación</li>
          <li>
            Información actualizada de precios de plataformas de streaming
          </li>
          <li>Respuestas en formato JSON</li>
          <li>Fácil integración con cualquier aplicación</li>
          <li>Documentación completa y ejemplos de uso</li>
        </ul>
      </div>

      {/* Additional Information */}
      <div className="mb-8">
        <h2 className="text-white font-bold text-2xl mb-4 underline">
          Información Adicional
        </h2>
        <div className="text-gray-300 space-y-3">
          <p>
            <strong className="text-white">Versión:</strong> 1.0.0
          </p>
          <p>
            <strong className="text-white">Última actualización:</strong>{" "}
            Noviembre 2025
          </p>
          <p>
            <strong className="text-white">Formato de respuesta:</strong> JSON
          </p>
          <p>
            <strong className="text-white">Métodos soportados:</strong> GET
          </p>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="mb-8 bg-slate-900 p-6 rounded-lg border border-slate-700">
        <h2 className="text-white font-bold text-2xl mb-4 flex items-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Aviso Legal
        </h2>
        <div className="text-gray-300 space-y-3 text-sm">
          <p>
            StreamingApi.com es un proyecto que recopila datos de fuentes
            públicas y las presenta de manera estructurada y accesible.
          </p>
          <p>
            <strong className="text-white">
              Limitación de responsabilidad:
            </strong>{" "}
            Los desarrolladores de esta API no se hacen responsables de ningún
            daño directo, indirecto, incidental, especial o consecuente que
            resulte del uso o la imposibilidad de uso de este servicio.
          </p>
          <p>
            <strong className="text-white">Exactitud de la información:</strong>{" "}
            Aunque nos esforzamos por mantener la información actualizada, no
            garantizamos la exactitud, integridad o actualidad de los precios
            mostrados. Los precios pueden variar según la región y están sujetos
            a cambios por parte de las plataformas.
          </p>
          <p>
            <strong className="text-white">Uso permitido:</strong> Esta API está
            destinada únicamente para fines informativos y educativos. No está
            permitido el uso comercial sin autorización previa.
          </p>
          <p>
            <strong className="text-white">Privacidad:</strong> No recopilamos
            ni almacenamos información personal de los usuarios que acceden a
            esta API.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 pt-6 mt-8">
        <p className="text-gray-400 text-sm text-center">
          © 2025 API Precios Streaming. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-xs text-center mt-2">
          Para consultas o reportar problemas, contacta con el equipo de
          desarrollo.
        </p>
      </div>
    </main>
  );
}

export default Main;
