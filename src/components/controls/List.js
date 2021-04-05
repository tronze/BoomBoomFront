import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const List = ({ items, onSelect }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Row key={item.id} onClick={() => onSelect(item)}>
          {item.title}
        </Row>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  background-color: white;
  outline: 1px solid #efefef;
  list-style: none;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  max-height: 156px;
  overflow-y: auto;
`;

const Row = styled.li`
  padding: 15px;
  font-size: 10pt;

  &:hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;

List.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
};
