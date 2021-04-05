import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Brand = () => {
  const { t } = useTranslation();
  return <Title>{t("brand")}</Title>;
};

const Title = styled.h3`
  color: white;
`;
