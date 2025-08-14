import "./App.css";

import { useState } from "react";

// Components
import InputContainer from "./components/InputContainer";
import TipContainer from "./components/TipContainer";
import Result from "./components/Result";

// Images
import logo from "./images/logo.svg";

const tip_options = [5, 10, 15, 25, 50];

function App() {
  return (
    <>
      <main>
        <img src={logo} alt="Logo" style={{ maxWidth: "4rem" }} />

        <section id="content_section">
          <div className="info_section">
            <InputContainer label="Bill" />

            <div className="tip_container">
              {tip_options.map((tip, index) => (
                <TipContainer tip={tip} key={index} />
              ))}
            </div>

            <InputContainer label="Number of people" />
          </div>
        </section>

        <section id="results_container">
          <div className="amount_section">
            <Result label="Tip Amount" />
            <Result label="Total" />
          </div>

          <button>RESET</button>
        </section>
      </main>
    </>
  );
}

export default App;
