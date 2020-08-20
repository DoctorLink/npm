import React, { FC } from 'react';
import { defaultTheme } from '../../Theme';
import styled, { CSSProperties } from 'styled-components';
import { PanelBodyText } from '../../Components';

const ConclusionsTitle = styled.div`
  background-color: ${(p) => p.theme.colors.brand100};
  height: 80px;
  padding-top: 10px;
  line-height: 2;
  margin-top: 1px;
  @media screen and (min-width: 800px) {
    border-radius: 8px 8px 0 0;
  }
`;

ConclusionsTitle.defaultProps = {
  theme: defaultTheme,
};

const Centered = styled(PanelBodyText)`
  text-align: center;
  @media screen and (max-width: 355px) {
    font-size: 0.9rem;
  }
`;

const CheckableConclusionHeader: FC<{ style?: CSSProperties }> = ({
  ...props
}) => {
  return (
    <React.Fragment>
      <ConclusionsTitle {...props}>
        <Centered contrastText>
          <strong>Your recommendations</strong>
        </Centered>
        <article>
          <Centered contrastText>
            Tick the checkboxes to see your results change
          </Centered>
        </article>
      </ConclusionsTitle>
    </React.Fragment>
  );
};

export default CheckableConclusionHeader;
