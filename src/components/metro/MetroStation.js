import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const MetroStation = ({ name, cx, cy, r, isStart, isEnd }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useTranslation();
  const style = {
    stroke: isStart || isEnd ? "#f33535" : "#1f1f1f",
    strokeWidth: 3,
    fill: isStart || isEnd ? "#f33535" : "#ffffff",
  };

  return (
    <>
      <Circle
        style={style}
        cx={cx}
        cy={cy}
        r={r}
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
      />
      <Text
        x={cx - 10}
        y={cy + 20}
        style={{
          fontSize: name.length < 3 ? "9pt" : "7pt",
          fontWeight: 700,
        }}
        // textAnchor={"middle"}
        onMouseEnter={() => {
          setShowTooltip(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false);
        }}
      >
        {name}
      </Text>
      {showTooltip && (
        <foreignObject x={cx} y={cy - 45} width={151} height={46}>
          <ToolTip>{name}</ToolTip>
        </foreignObject>
      )}
      {isStart && (
        <foreignObject x={cx} y={cy - 45} width={131} height={46}>
          <ToolTip>{t("from")}</ToolTip>
        </foreignObject>
      )}
      {isEnd && (
        <foreignObject x={cx} y={cy - 45} width={131} height={46}>
          <ToolTip>{t("to")}</ToolTip>
        </foreignObject>
      )}
    </>
  );
};

const Circle = styled.circle`
  cursor: pointer;
`;

const Text = styled.text`
  white-space: nowrap;
`;

const ToolTip = styled.div`
  position: absolute;
  padding: 10px;
  font-size: 10pt;
  font-weight: 700;
  background-color: white;
  border: 1px solid #efefef;
`;

MetroStation.propTypes = {
  name: PropTypes.string,
  cx: PropTypes.number,
  cy: PropTypes.number,
  r: PropTypes.number,
  isStart: PropTypes.bool,
  isEnd: PropTypes.bool,
};
