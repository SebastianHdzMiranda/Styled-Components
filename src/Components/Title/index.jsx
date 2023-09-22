import React from "react";
// importando 
import styled from 'styled-components';

// Ahora este es nuestro componente Title que almacena una etiqueta h1 con estos estilos:
const Title = styled.h1`
  /* color: grey; */
  padding: 25px 0;
`;


// const Title = ({ children }) => {
//   return <h1 className="title">{children}</h1>;
// };
export default Title;
