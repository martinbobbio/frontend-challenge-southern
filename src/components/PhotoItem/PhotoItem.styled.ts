// Libreries
import { styled } from 'styled-components';

export const PhotoItemStyled = styled.img`
  transition: opacity 0.3s ease;
  height: 100%;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
