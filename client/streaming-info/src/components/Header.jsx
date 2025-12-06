function Header({ onToggleSidebar }) {
  return (
    <header className="flex justify-between p-5 bg-slate-900 border-b border-slate-800 items-center">
      {/* Hamburger Button - Solo visible en pantallas pequeñas */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden text-white hover:bg-slate-700 p-2 rounded-lg transition-all duration-200"
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div className="flex gap-2 items-center lg:flex-1">
        <img src="logoStreamingApi.png" alt="" className="size-15" />
        <h1 className="text-white text-xl">StreamingApi</h1>
      </div>
    </header>
  );
}

export default Header;
