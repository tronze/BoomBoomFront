import React from "react";
import { NavBar, Navigation, MetroMap } from "../containers";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <Wrapper>
      <NavBar />
      <InnerWrapper>
        <Navigation />
        <MetroMap />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media only screen and (max-width: 768px) {
    flex: none;
    flex-direction: column;
    height: 100%;
  }
`;
