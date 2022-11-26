import { useState } from "react";
import * as C from "./App.Styles";
import relogio from "./assets/cronometro.png";
let timer = null;

const App = () => {
  const [number, setNumber] = useState("00:00:00");
  const [button, setButton] = useState("INICIAR");
  const [lastTime, setLastTime] = useState(null);

  let ss = 0;
  let mm = 0;
  let hh = 0;

  const Start = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumber(format);
      }, 1000);
      setButton("PAUSAR");
    }
  };
  const Clean = () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
    setLastTime(number);
    setNumber("00:00:00");
    ss = 0;
    mm = 0;
    hh = 0;
    setButton("COMEÇAR");
  };
  return (
    <C.Container>
      <C.Clock src={relogio} alt="cronometro" />
      <C.Time>{number}</C.Time>
      <C.Buttons>
        <C.Button onClick={Start}>{button}</C.Button>
        <C.Button onClick={Clean}>LIMPAR</C.Button>
      </C.Buttons>
      <C.LastTime>{lastTime ? `Ultimo tempo: ${lastTime}` : ""}</C.LastTime>
    </C.Container>
  );
};

export default App;
