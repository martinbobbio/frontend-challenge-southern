// Libreries
import { styled } from 'styled-components';

export const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  padding: 32px;
  width: 100%;
  font-weight: 500;
  background: ${({ theme }) => theme.palette.primary.main};
`;
