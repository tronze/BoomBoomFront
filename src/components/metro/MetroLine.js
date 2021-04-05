import React from "react";
import styled from "styled-components";
import { lineColors } from "../../config/lines";
import PropTypes from "prop-types";

const MetroLine = ({ line }) => {
  return (
    <Wrapper
      style={{
        borderColor: lineColors[line],
      }}
    >
      {line}
    </Wrapper>
  );
};

export default MetroLine;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border-width: 3px;
  border-style: solid;
  font-size: 12pt;
  margin: 3px;
  background-color: white;
`;

MetroLine.propTypes = {
  line: PropTypes.number,
};
