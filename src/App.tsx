import { useState } from "react";
import "./App.css";
import { CalculatorContainer } from "./Style";

function App() {
  const [sum, setSum] = useState<string>("");

  const handleButtonClick = (value: string | number) => {
    if (value === "DEL") {
      setSum((prevSum) => prevSum.slice(0, -1));
    } else if (value === "RESET") {
      setSum("");
    } else if (value === "=") {
      try {
        setSum(eval(sum.replace("x", "*").replace("/", "/")).toString());
      } catch (error) {
        setSum("Error");
      }
    } else {
      setSum((prevSum) => prevSum + value);
    }
  };

  const buttonArray: (string | number)[] = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
  ];

  return (
    <>
      <CalculatorContainer>
        <h2>calc</h2>
        <div className="screen">{sum}</div>
        <div className="calculate">
          {buttonArray.map((buttonValue) => (
            <button
              className="buttons"
              key={buttonValue}
              onClick={() => handleButtonClick(buttonValue)}
            >
              {buttonValue}
            </button>
          ))}
          <div className="button">
            <button
              className="reset"
              onClick={() => handleButtonClick("RESET")}
            >
              RESET
            </button>
            <button className="equal" onClick={() => handleButtonClick("=")}>
              =
            </button>
          </div>
        </div>
      </CalculatorContainer>
    </>
  );
}

export default App;
