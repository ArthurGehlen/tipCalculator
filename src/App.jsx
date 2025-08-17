import "./App.css";

import { useState } from "react";

// Components
import InputContainer from "./components/InputContainer";
import TipContainer from "./components/TipContainer";
import Result from "./components/Result";

// Images
import logo from "./images/logo.svg";
import icon_dollar from "./images/icon-dollar.svg";
import icon_person from "./images/icon-person.svg";

const tip_options = [5, 10, 15, 25, 50];

function App() {
  const [infos, setInfos] = useState({
    bill: 0,
    tip: 0,
    numberPeople: 0,
  });
  const [numberPeopleError, setNumberPeopleError] = useState(false);

  const check_number_people = (num) => {
    return num >= 0 ? true : false;
  };

  const handle_change = (e) => {
    setInfos((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(infos);
  };

  const handle_submit = (e) => {
    e.preventDefault();

    check_number_people(infos[numberPeople]);
  };

  return (
    <>
      <main id="wrapper">
        <img src={logo} alt="Logo" style={{ maxWidth: "4rem" }} />

        <div id="main_container">
          <form onSubmit={handle_submit} id="content_section">
            <div className="info_section">
              <InputContainer
                label="Bill"
                name="bill"
                img={icon_dollar}
                handle_change={handle_change}
              />

              <div className="tip_container">
                <p className="tip_title">Select Tip %</p>
                <div className="tips">
                  {tip_options.map((tip, index) => (
                    <TipContainer tip={tip} key={index} />
                  ))}
                  <input type="number" className="" placeholder="Custom" />
                </div>
              </div>

              <InputContainer
                label="Number of people"
                img={icon_person}
                name="numberPeople"
                handle_change={handle_change}
              />
            </div>
          </form>

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
