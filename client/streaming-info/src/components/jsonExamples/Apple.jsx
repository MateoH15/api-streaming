function Apple() {
  return (
    <div className="mb-8">
      <h2 className="text-white font-bold text-2xl mb-4 underline">JSON</h2>
      <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
        <pre className="text-green-400 text-sm overflow-x-auto">
          {`{
  "platforma": "plataforma",
  "logo": "logo_url",
  "ultimaActualizacion": "fecha",
  "planes": [
    {
      "nombre": "nombre_plan",
      "precio": "precio",
      "moneda": "moneda"
    }
  ]
}`}
        </pre>
      </div>
    </div>
  );
}

export default Apple;
