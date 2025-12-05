function Fetch({ endpoint }) {
  return (
    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
      <code className="text-green-400 text-sm">
        <span className="text-blue-400">fetch</span>(
        <span className="text-yellow-300">
          'https://api-streaming-wbne.onrender.com{endpoint}'
        </span>
        )<br />
        &nbsp;&nbsp;.<span className="text-blue-400">then</span>(response =&gt;
        response.<span className="text-blue-400">json</span>())
        <br />
        &nbsp;&nbsp;.<span className="text-blue-400">then</span>(data =&gt;{" "}
        <span className="text-blue-400">console</span>.
        <span className="text-blue-400">log</span>(data));
      </code>
    </div>
  );
}

export default Fetch;
