// Constants
import { SupportedColors, SupportedSizes } from '@/constants';
// Libreries
import { styled } from 'styled-components';

interface IconStyledProps {
  _size: `${SupportedSizes}`;
  _color: `${SupportedColors}`;
}

export const IconStyled = styled.div<IconStyledProps>`
  &.icon {
    display: inline-block;
    svg {
      color: ${({ theme, _color }) => theme.palette[_color].main};
      width: ${({ theme, _size }) => theme.fontSize[_size]};
      height: ${({ theme, _size }) => theme.fontSize[_size]};
    }
  }
`;
