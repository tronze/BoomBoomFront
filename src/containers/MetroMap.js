import React from "react";
import styled from "styled-components";
import stations from "../config/stations";
import { MetroStation } from "../components/metro/MetroStation";
import { lines } from "../config/lines";
import { MetroPath } from "../components/metro/MetroPath";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export const MetroMap = () => {
  const { i18n } = useTranslation();
  const startPosition = useSelector((state) => state.navigation.startPosition);
  const endPosition = useSelector((state) => state.navigation.endPosition);

  return (
    <Wrapper>
      <InnerWrapper>
        <SVG>
          <g>
            {lines.map((line) => (
              <MetroPath
                key={`${line.from}-${line.to}`}
                line={line.line}
                path={line.path}
              />
            ))}
          </g>
          <g>
            {Object.keys(stations).map((stIdx) => {
              const st = stations[stIdx];
              return (
                <MetroStation
                  key={stIdx}
                  line={st.line}
                  name={i18n.language === "ko" ? st.name : st.eng_name}
                  cx={st.cx * 2}
                  cy={st.cy * 2}
                  r={st.r}
                  isStart={stIdx === startPosition.id}
                  isEnd={stIdx === endPosition.id}
                />
              );
            })}
          </g>
        </SVG>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 387px);
  height: 100%;
  overflow: scroll;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
    border-right: none;
  }
`;

const InnerWrapper = styled.div`
  width: 1800px;
  height: 1200px;
  position: absolute;
`;

const SVG = styled.svg`
  width: 100%;
  height: 100%;
`;
