/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 16 + 'px',
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px',
  },
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};

  border-radius: var(--borderRadius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  // Removes corners when the progress bar is near full
  overflow: hidden;

  border-radius: 4px;
`;

const ProgressStatus = styled.div`
  background-color: ${COLORS.primary};

  height: var(--height);
  width: var(--width);
`;

const ProgressBar = ({ value, size, label }) => {
  if (!value) {
    value = 0;
  }
  if (value > 100) {
    value = 100;
  }

  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        style={styles}
      >
        <VisuallyHidden>{value}</VisuallyHidden>
        <BarWrapper>
          <ProgressStatus
            value={value}
            style={{ '--width': value + '%', ...styles }}
          />
        </BarWrapper>
      </Wrapper>
    </>
  );
};

export default ProgressBar;
