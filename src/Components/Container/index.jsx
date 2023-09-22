// import React from "react";
import Title from "../Title";
import Account from "../Account";
import styled from "styled-components";
import List from "../List";
import { fondoClaro } from "../UI/variables";


const StyleContainer = styled.div`
  background-color: ${({theme})=> theme.body};
  min-height: 90vh;
  padding: 0px 5vw;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding: 0px 15vw;
  }
`;

const StyleContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 800px) {
    flex-direction: column;
  }

`;

const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StyleContent>
        <Account />
        <List />
      </StyleContent>
    </StyleContainer>
  );
};

export default Container;
