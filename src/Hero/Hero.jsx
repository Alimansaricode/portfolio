export default function Hero() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">

      {/* Blue Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl animate-pulse" />

      {/* Cyan Glow */}
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

      {/* Purple Glow */}
      <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-3xl animate-pulse" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />

    </div>
  );
}