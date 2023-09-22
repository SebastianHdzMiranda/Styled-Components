import React from "react";
import { useState } from "react";
import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./globalStyled";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitchTheme from "./Components/SwitchTheme";

function App() {
  let temaStorage = JSON.parse(localStorage.getItem('tema'));

  /* variabl estadoIncial
    el operador || (OR lógico) devuelve el primer valor verdadero que encuentre. si se encuentra en el storage false no respetara ese valor. es necesario una variable
  */
  const estadoInicial = temaStorage !== null ? temaStorage : true;
  const [tema, setTema] = useState(estadoInicial);

  function toggleTema(e) {
    setTema(!tema);
    localStorage.setItem('tema', JSON.stringify(!tema))
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitchTheme tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
