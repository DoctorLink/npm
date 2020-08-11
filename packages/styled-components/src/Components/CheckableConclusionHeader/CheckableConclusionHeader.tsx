import React, { FC } from 'react';
import { defaultTheme } from '../../Theme';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { PanelBodyText } from '../../Components';

const ConclusionsTitle = styled.div`
  background-color: ${(p) => p.theme.colors.brand100};
  height: 80px;
  padding-top: 10px;
  line-height: 2;
  margin-top: 1px;
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

const CheckableConclusionHeader: FC = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 799px)',
  });
  return (
    <React.Fragment>
      {isTabletOrMobileDevice && (
        <ConclusionsTitle>
          <Centered contrastText>
            <strong>Your recommendations</strong>
          </Centered>
          <article>
            <Centered contrastText>
              Tick the checkboxes to see your results change
            </Centered>
          </article>
        </ConclusionsTitle>
      )}
    </React.Fragment>
  );
};

export default CheckableConclusionHeader;
