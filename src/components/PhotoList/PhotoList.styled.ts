// Libreries
import { styled } from 'styled-components';
import { Grid, Skeleton } from '@mui/material';

export const PhotoListStyled = styled.div``;

export const PhotoMainGrid = styled(Grid)`
  display: flex;
  padding-top: 32px;
`;

export const PhotoMainColumn = styled(Grid)<{ size: number }>`
  flex: 1;
  .photo {
    width: ${({ size }) => `${size}px`};
    border: ${({ size }) => (size ? '0' : '1px')} solid #000000;
  }
`;

export const PhotoSkeleton = styled(Skeleton)``;
