function CharacterCounter({ current, limit }) {

  const percentage = (current / limit) * 100;

  let color = "#22c55e"; // Green

  if (percentage > 75) color = "#f59e0b"; // Yellow

  if (percentage >= 100) color = "#ef4444"; // Red

  return (
    <div className="counter-container">

      <div className="counter-text">

        <span>Characters</span>

        <span style={{ color }}>
          {current} / {limit}
        </span>

      </div>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            background: color,
          }}
        ></div>

      </div>

    </div>
  );
}

export default CharacterCounter;