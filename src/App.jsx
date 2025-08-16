import "./App.css";

import { useState } from "react";

// Components
import InputContainer from "./components/InputContainer";
import TipContainer from "./components/TipContainer";
import Result from "./components/Result";

// Images
import logo from "./images/logo.svg";
import icon_dollar from "./images/icon-dollar.svg";
import icon_person from "./images/icon-person.svg"

const tip_options = [5, 10, 15, 25, 50];

function App() {
  return (
    <>
      <main id="wrapper">
        <img src={logo} alt="Logo" style={{ maxWidth: "4rem" }} />

        <div id="main_container">
          <section id="content_section">
            <div className="info_section">
              <InputContainer label="Bill" img={icon_dollar} />

              <div className="tip_container">
                <p className="tip_title">Select Tip %</p>
                <div className="tips">
                  {tip_options.map((tip, index) => (
                    <TipContainer tip={tip} key={index} />
                  ))}
                </div>
              </div>

              <InputContainer label="Number of people" img={icon_person} />
            </div>
          </section>

          <section id="results_container">
            <div className="amount_section">
              <Result label="Tip Amount" />
              <Result label="Total" />
            </div>

            <button>RESET</button>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
