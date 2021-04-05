import React from "react";
import { Brand } from "../components/navbar";
import styled from "styled-components";
import { LanguageSelect } from "../languages";

export const NavBar = () => {
  return (
    <Wrapper>
      <Brand />
      <LanguageSelect />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 15px;
  background-color: rgb(0, 127, 255);
`;
