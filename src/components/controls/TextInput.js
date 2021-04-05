import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const TextInput = ({
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <Input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const Input = styled.input`
  padding: 15px 20px;
  border: 1px solid #efefef;
  border-radius: 0;
  font-size: 12pt;

  &:focus {
    outline: none;
  }
`;

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
