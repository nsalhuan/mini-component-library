/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
    '--innerBorderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
    '--innerBorderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 8 + 'px',
    '--innerBorderRadius': 4 + 'px',
    '--padding': 4 + 'px',
  },
};

// We need to figure out how to make small numbers fit inside
// We could use a padding-left so that it always looks at least 10% done
// Round as necessary
const Progress = styled.progress`
  height: var(--height);

  // Reset appearance
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Get rid of default border in Firefox. */
  border: none;
  // End reset appearance

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--borderRadius);
    padding: var(--padding, 0);
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: var(--innerBorderRadius) 0 0 var(--innerBorderRadius);
    padding-left: 16px;

    // Round as necessary
    ${(p) =>
      p.value > 98 &&
      css`
        border-radius: var(--innerBorderRadius);
      `}
  }
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;

  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;

  height: var(--height);
  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const ProgressStatus = styled.div`
  margin: 0;
  padding: 0;

  background-color: ${COLORS.primary};
  height: 100%;

  width: ${(p) => p.value + '%'};
  border-radius: var(--innerBorderRadius) 0 0 var(--innerBorderRadius);
`;

const ProgressBar = ({ value, size, label }) => {
  if (!value) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }

  const styles = SIZES[size];

  console.log(styles);

  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Progress max="100" value={value} style={styles} />
      <div style={{ height: 20 }}></div>
      <Wrapper style={styles}>
        <ProgressStatus value={value} style={styles}></ProgressStatus>
      </Wrapper>
    </>
  );
};

export default ProgressBar;
