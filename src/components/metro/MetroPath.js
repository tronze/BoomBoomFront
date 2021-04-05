import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lineColors } from "../../config/lines";

export const MetroPath = ({ line, path }) => {
  return (
    <Path
      stroke={lineColors[line]}
      strokeWidth={6}
      d={path.reduce((acc, cmd) => {
        const coordinates = cmd.coords.map((x) => x * 2).join(",");
        return `${acc} ${cmd.command}${coordinates}`;
      }, "")}
    />
  );
};

const Path = styled.path``;

MetroPath.propTypes = {
  line: PropTypes.number,
  path: PropTypes.array,
};
