import "./App.css";
import { useState, useEffect } from "react";

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
  const [totalTipAmount, setTotalTipAmount] = useState(0); // Per person
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  useEffect(() => {
    if (infos.numberPeople > 0) {
      const tipAmountPerPerson =
        (infos.bill * (infos.tip / 100)) / infos.numberPeople;

      const totalPerPerson =
        infos.bill / infos.numberPeople + tipAmountPerPerson;

      setTotalTipAmount(tipAmountPerPerson);
      setTotalPerPerson(totalPerPerson);
      setNumberPeopleError(false);
    } else {
      setTotalTipAmount(0);
      setTotalPerPerson(0);
      setNumberPeopleError(true);
    }
  }, [infos]);

  const handle_change = (e) => {
    const { name, value } = e.target;
    setInfos((prevState) => ({
      ...prevState,
      [name]: Number(value),
    }));
  };

  return (
    <main id="wrapper">
      <img src={logo} alt="Logo" style={{ maxWidth: "4rem" }} />

      <div id="main_container">
        <section id="content_section">
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
                  <TipContainer
                    tip={tip}
                    key={index}
                    onClick={() => setInfos((prev) => ({ ...prev, tip }))}
                  />
                ))}
                <input
                  type="number"
                  className=""
                  placeholder="Custom"
                  onChange={(e) =>
                    setInfos((prev) => ({
                      ...prev,
                      tip: Number(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <InputContainer
              label="Number of people"
              img={icon_person}
              name="numberPeople"
              handle_change={handle_change}
            />
          </div>
        </section>

        <section id="results_container">
          <div className="amount_section">
            <Result label="Tip Amount" total={totalTipAmount} />
            <Result label="Total" total={totalPerPerson} />
          </div>

          <button
            onClick={() => {
              setInfos({ bill: 0, tip: 0, numberPeople: 0 });
              setTotalTipAmount(0);
              setTotalPerPerson(0);
              setNumberPeopleError(false);
            }}
          >
            RESET
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
