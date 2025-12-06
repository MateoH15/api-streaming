function Sidebar({ onSelectPlatform, currentView, isOpen, onClose }) {
  return (
    <>
      {/* Overlay - Solo visible en móvil cuando el sidebar está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        w-64 shrink-0 bg-slate-900 border-r border-slate-800 h-[calc(100vh-73px)] p-5 overflow-y-auto
        lg:relative lg:translate-x-0 lg:top-0
        fixed top-[73px] left-0 z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Home Button */}
        <div
          onClick={() => onSelectPlatform("main")}
          className={`mb-6 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out flex items-center gap-2 ${
            currentView === "main"
              ? "bg-slate-800 text-white"
              : "text-slate-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          <span className="font-semibold">Inicio</span>
        </div>

        <h2 className="text-slate-300 text-lg font-bold mb-6 pb-3 border-b border-slate-700">
          Plataformas
        </h2>

        {/* Streaming Section */}
        <div className="mb-6">
          <h3 className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
            Streamings
          </h3>
          <div className="space-y-1">
            <p
              onClick={() => onSelectPlatform("netflix")}
              className={`text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out ${
                currentView === "netflix" ? "bg-slate-800 text-white" : ""
              }`}
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Netflix
            </p>
            <p
              onClick={() => onSelectPlatform("amazon")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Amazon Prime
            </p>
            <p
              onClick={() => onSelectPlatform("max")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Max
            </p>
            <p
              onClick={() => onSelectPlatform("disney")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Disney+
            </p>
            <p
              onClick={() => onSelectPlatform("apple")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Apple TV+
            </p>
          </div>
        </div>

        {/* Music Section */}
        <div className="mb-6">
          <h3 className="text-purple-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M19.952 1.651a.75.75 0 01.298.599V16.303a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.403-4.909l2.311-.66a1.5 1.5 0 001.088-1.442V6.994l-9 2.572v9.737a3 3 0 01-2.176 2.884l-1.32.377a2.553 2.553 0 11-1.402-4.909l2.31-.66a1.5 1.5 0 001.088-1.442V5.25a.75.75 0 01.544-.721l10.5-3a.75.75 0 01.658.122z" />
            </svg>
            Música
          </h3>
          <div className="space-y-1">
            <p
              onClick={() => onSelectPlatform("spotify")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Spotify
            </p>
            <p
              onClick={() => onSelectPlatform("applemusic")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Apple Music
            </p>
            <p
              onClick={() => onSelectPlatform("youtubemusic")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Youtube Music
            </p>
          </div>
        </div>

        {/* Gaming Section */}
        <div className="mb-6">
          <h3 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            Gaming
          </h3>
          <div className="space-y-1">
            <p
              onClick={() => onSelectPlatform("playstationplus")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              PlayStation+
            </p>
            <p
              onClick={() => onSelectPlatform("xbox")}
              className="text-slate-300 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white cursor-pointer transition-all duration-200 ease-in-out"
            >
              <span className="bg-emerald-600/30 p-1 rounded border border-emerald-800 font-semibold mr-2 text-xs">
                GET
              </span>
              Xbox Game Pass
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
