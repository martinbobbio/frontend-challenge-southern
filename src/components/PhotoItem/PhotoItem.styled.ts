// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { Box, Modal } from '@mui/material';
import { styled } from 'styled-components';

export const PhotoItemStyled = styled.img`
  transition: opacity 0.3s ease;
  height: 100%;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
  @media (max-width: ${BREAKPOINTS.small}) {
    width: 200px;
  }
`;

export const PhotoModal = styled.img`
  height: 100%;
  @media (max-width: ${BREAKPOINTS.small}) {
    width: 200px;
  }
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
  button svg {
    margin-bottom: 3px;
    color: red;
  }
`;

export const ModalContainer = styled(Box)`
  background: ${({ theme }) => theme.palette.default.background2};
  border: 2px solid ${({ theme }) => theme.palette.default.background1};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
`;

export const TextContent = styled.div`
  position: relative;
  text-align: left;
  margin: 16px;
  .title {
    margin-bottom: 8px;
  }
`;
