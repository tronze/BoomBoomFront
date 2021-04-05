import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const onLanguageSelected = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <Select onChange={onLanguageSelected}>
      <Option value="en">English</Option>
      <Option value="ko">한국어</Option>
    </Select>
  );
};

const Select = styled.select`
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-weight: 700;

  :after {
    border-color: white;
  }
`;

const Option = styled.option``;
