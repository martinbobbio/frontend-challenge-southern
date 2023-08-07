// Libreries
import { styled } from 'styled-components';

export const AppStyled = styled.div`
  background: ${({ theme }) => theme.palette.default.background1};
  min-height: 100vh;
  position: relative;
  padding-bottom: 130px;
  .box {
    background: ${({ theme }) => theme.palette.default.background2};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    border-radius: 8px;
    padding: 24px;
  }
  .background-theme {
    background: ${({ theme }) => theme.palette.default.background2};
  }
`;

export const ChildrenStyled = styled.div`
  padding-top: 64px;
`;
