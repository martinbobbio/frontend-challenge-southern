// Libreries
import { styled } from 'styled-components';

export const PhotoItemStyled = styled.img`
  height: 100%;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
