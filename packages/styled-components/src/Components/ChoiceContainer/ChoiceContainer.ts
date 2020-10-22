import styled from 'styled-components';

const ChoiceContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(200, 205, 215);

  &:last-child {
    border-bottom: 1px solid rgb(200, 205, 215);
    margin-bottom: 24px;
  }
`;

export default ChoiceContainer;
