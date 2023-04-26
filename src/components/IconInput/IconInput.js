import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

/*
  Small
    Height: 24
    Padding: 24L 4V *
    Space to icon: 8 * 
    Bottom border: 1 px solid rounder *

    Text:
      14 * 
      gray-500 * 
      Roboto *

      gray700 * 
      weight 700 *
    
  Large
    Height 36 * 
    Padding: 36L 8V *
    Space to icon: 12 *
    Bottom border: 2px solid rounder *

    Text:
      18 * 
      gray-500 * 
      Roboto *
*/

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    borderWidth: 1,
    paddingFromIcon: 8,
    paddingVertical: 4,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    borderWidth: 2,
    paddingFromIcon: 12,
    paddingVertical: 8,
  },
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);

  &:hover {
    color: black;
  }

  &::after {
    content: '';
    background: black;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: var(--borderWidth);
    border-radius: var(--borderWidth);
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;

  padding-top: var(--paddingVertical);
  padding-bottom: var(--paddingVertical);
  padding-left: var(--paddingLeft);

  font-size: var(--fontSize);

  color: ${COLORS.gray700};
  font-weight: 700;

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: black;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;

  color: ${COLORS.gray700};

  width: var(--iconSize);
  height: var(--iconSize);

  margin: auto 0;

  ${Input}:hover + & {
    color: black;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unsupported size for IconInput: ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--width': width + 'px',
        '--borderWidth': style.borderWidth + 'px',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        style={{
          '--paddingLeft': style.paddingFromIcon + style.iconSize + 'px',
          '--paddingVertical': style.paddingVertical + 'px',
          '--fontSize': style.fontSize + 'px',
        }}
        placeholder={placeholder}
      />
      <IconWrapper style={{ '--iconSize': style.iconSize + 'px' }}>
        <Icon id={icon} strokeWidth={1} size={style.iconSize} />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;
