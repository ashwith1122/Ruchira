import "./SplashScreen.css";

function SplashScreen({ onFinish }) {
  return (
    <div className="splash-screen">

      {/* Orange glowing background */}
      <div className="glow"></div>

      {/* Main Ruchira content */}
      <div className="ruchira-logo">

        <h1>
          <span>R</span>
          <span>u</span>
          <span>c</span>
          <span>h</span>
          <span>i</span>
          <span>r</span>
          <span>a</span>
        </h1>

        <div className="orange-line"></div>

        <p className="tagline">
          Taste <span>•</span> Togetherness <span>•</span> Happiness
        </p>

      </div>

      {/* Light sweep animation */}
      <div className="light"></div>

      {/* Loading line */}
      <div className="loader"></div>

      {/* Skip button */}
      <div className="skip" onClick={onFinish}>
        Skip →
      </div>

    </div>
  );
}

export default SplashScreen;