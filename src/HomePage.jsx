import React, { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <section className="page">
        <h1>CCS-112 React Project!</h1>

        <p>Welcome to my Homepage.</p>

        <h2>Counter: {count}</h2>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </main>
  );
}

export default HomePage;