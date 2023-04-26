import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const Wrapper = styled.div`
  width: max-content;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;

  right: 10px;

  // Center vertically
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;

  opacity: 0;

  // Remove dropdown arrow
  /* -o-appearance: none;
  -ms-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
  appearance: none;

  width: 100%;
  height: 100%;

  border-radius: 8px;
`;

const PresentationalBit = styled.div`
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.17;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log(displayedValue);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeSelect value={value} onChange={onChange} style={{}}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth="2" size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
