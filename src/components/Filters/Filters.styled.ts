// Libreries
import { styled } from 'styled-components';
import { Drawer } from '@mui/material';

export const FiltersStyled = styled(Drawer)``;

export const FiltersContainer = styled.div`
  background: ${({ theme }) => theme.palette.default.background1};
  height: 250px;
  text-align: left;
  padding: 32px 0;
`;
