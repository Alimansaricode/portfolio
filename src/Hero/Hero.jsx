import "./Hero.css";

// Dev-themed floating glyphs — a light nod to "full stack developer"
// without pulling in a 3D engine / video that made the site slow.
const glyphs = ["{ }", "</>", "=>", "const", "npm i", "( )", "git", "#!/"];

export default function Hero() {
  return (
    <div className="hero-bg">
      <div className="hero-grid" />
      <div className="hero-orb hero-orb--cyan" />
      <div className="hero-orb hero-orb--violet" />
      <div className="hero-orb hero-orb--amber" />

      {glyphs.map((g, i) => (
        <span
          key={i}
          className="hero-glyph"
          style={{
            left: `${8 + i * 12}%`,
            fontSize: `${14 + (i % 3) * 6}px`,
            animationDuration: `${18 + i * 3}s`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          {g}
        </span>
      ))}

      <div className="hero-vignette" />
    </div>
  );
}
