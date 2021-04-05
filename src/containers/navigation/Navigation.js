import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { useTranslation } from "react-i18next";
import Result from "./Result";

export const Navigation = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>{t("title")}</Title>
        <Search />
        <Result />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-right: 1px solid #efefef;
  width: 387px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    border-right: none;
  }
`;

const InnerWrapper = styled.div`
  padding: 15px;
`;

const Title = styled.div`
  font-size: 18pt;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 15px;
`;
