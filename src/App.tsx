import { useState } from "react";
// import viteLogo from "./vite.svg";
import { Header } from "@/components";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <Header />
      {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
      <button
        type="button"
        onClick={() => setCount((newCount) => newCount + 1)}
      >
        count is {count}
      </button>
    </section>
  );
}

export default App;
