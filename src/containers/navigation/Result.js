import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import stations from "../../config/stations";
import MetroLine from "../../components/metro/MetroLine";
import { useTranslation } from "react-i18next";

const Result = () => {
  const result = useSelector((state) => state.navigation.result);
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      {result.routes.length > 0 && (
        <>
          <Title>{t("searchResult")}</Title>
          <InnerWrapper>
            {result.routes.map((route, idx) => (
              <Block key={route}>
                <Station>
                  {typeof stations[route].line === "number" ? (
                    <MetroLine line={stations[route].line} />
                  ) : (
                    stations[route].line.map((l) => (
                      <MetroLine line={l} key={`${route}_${l}`} />
                    ))
                  )}
                  <span style={{ marginLeft: 5 }}>
                    {i18n.language === "en"
                      ? stations[route].eng_name
                      : stations[route].name}
                  </span>
                  {idx < result.routes.length - 1 && (
                    <Congestion
                      style={{ width: `${result.congestions[idx]}%` }}
                    >
                      {result.congestions[idx]}%
                    </Congestion>
                  )}
                </Station>
                {idx < result.routes.length - 1 && <Arrow />}
              </Block>
            ))}
          </InnerWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  background-color: white;
  margin-top: 15px;
`;

const Title = styled.div`
  font-size: 18pt;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const InnerWrapper = styled.div`
  max-height: 659px;
  overflow-y: scroll;
`;

const Block = styled.div``;

const Station = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 14pt;
  font-weight: 700;
  border: 1px solid #efefef;
  padding: 15px;
`;

const Congestion = styled.div`
  height: 13px;
  background-color: #f33535;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 9pt;
  font-weight: 700;
  color: white;
  padding-left: 3px;
  padding-right: 3px;
`;

const Arrow = styled.div`
  width: 2px;
  height: 45px;
  background-color: black;
  margin-left: 50%;
  margin-top: 15px;
  margin-bottom: 15px;
`;
