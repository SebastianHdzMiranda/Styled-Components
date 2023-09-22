import React from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";

const StyledHeader = styled.header`
  background-color: ${colorPrimario};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15vw;
  /* height: 10vh; */
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnHEader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 0 20px;
  /* margin: 0 10px; */
  font-weight: 600;
  border: 2px solid white;
  /* PROPS */
  color: ${ (props)=> (props.primary ? colorPrimario : 'white')};
  background-color: ${ (props) => (props.primary ? 'white' : 'transparent')};
`;

const DivBtns = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
    margin-top: unset;

  }
`


const Header = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo Smart Bank" />

      <DivBtns>
        <BtnHEader primary href="https://google.com">
          Ayuda
        </BtnHEader>
        <BtnHEader href="https://google.com">
          Salir
        </BtnHEader>
        
      </DivBtns>

    </StyledHeader>
  );
};

export default Header;
