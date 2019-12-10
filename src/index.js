import React from "react";
import { render } from "react-dom";
import { useSelect } from "downshift";
import { items, menuStyles } from "./utils";
import styled from "@emotion/styled";

const StyledWrap = styled.div`
  position: absolute;
  right: 0;
  top: 40%;
  width: 350px;
  left: 0;
  margin: 0 auto;
`;

const StyledSelect = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  position: relative;
  width: 350px;
  appearance: none;
  -webkit-appearance:none &:after {
    position: absolute;
    top: 18px;
    right: 10px;
    /* Styling the down arrow */
    width: 0;
    height: 0;
    padding: 0;
    content: "";
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.12);
    pointer-events: none;
  }
`;

const StyledSelectText = styled.select`
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 350px;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }

  &:focus ~ .select-bar:before,
  &:focus ~ .select-bar:after {
    width: 50%;
  }

  &:focus ~ .select-label,
  &:valid ~ .select-label {
    color: #2f80ed;
    top: -20px;
    transition: 0.2s ease all;
    font-size: 14px;
  }
`;

const StyledSelectHighlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

const StyledSelectBar = styled.span`
  position: relative;
  display: block;
  width: 350px;

  &:before,
  &:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #2f80ed;
    transition: 0.2s ease all;
  }

  &:before {
    left: 50%;
  }

  &:after {
    right: 50%;
  }
`;

const StyledSelectLabel = styled.label`
  color: rgba(0, 0, 0, 0.26);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
`;

function DropdownSelect() {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({ items });
  return (
    <div>
      <StyledWrap>
        <StyledSelect>
          <StyledSelectText required>
            <option value="" disabled selected />
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </StyledSelectText>
          <StyledSelectHighlight />
          <StyledSelectBar className="select-bar" />
          <StyledSelectLabel className="select-label">Select</StyledSelectLabel>
        </StyledSelect>
      </StyledWrap>

      {/* <label {...getLabelProps()}>Choose an element:</label>
      <button {...getToggleButtonProps()}>{selectedItem || "Elements"}</button>
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
      
      <div tabIndex="0" /> */}
    </div>
  );
}

render(<DropdownSelect />, document.getElementById("root"));
