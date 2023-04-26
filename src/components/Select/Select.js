import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const DummySelectDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.17;

  &:hover {
    color: black;
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;

const IconWrapper = styled.div`
  display: inline-block;
  position: absolute;

  right: 10px;

  // Center vertically
  top: 50%;
  transform: translateY(-50%);
`;

const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;

  color: transparent;
  background-color: transparent;
  opacity: 1;
  z-index: 1;

  // Remove dropdown arrow
  -o-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  height: 100%;

  border: none;
  border-radius: 8px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log(displayedValue);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <DummySelectDiv>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth="2" />
        </IconWrapper>
      </DummySelectDiv>
      <HiddenSelect value={value} onChange={onChange} style={{}}>
        {children}
      </HiddenSelect>
    </Wrapper>
  );
};

export default Select;
