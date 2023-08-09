// Components
import { EmptyState, Icon, PhotoItem, ScrollInfinite } from '@/components';
// Constants
import { CONFIG, PhotosMars } from '@/constants';
// Styled components
import { PhotoListStyled, IconContainer } from './PhotoList.styled';
// Libreries
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ImageList, ImageListItem } from '@mui/material';

interface PhotoListProps {
  photosMars?: PhotosMars[];
  isLoading: boolean;
  onNextPage?: () => void;
}

/**
 * Functional component that render component photo list.
 *
 * @return React.ReactElement <PhotoList/>
 */
const PhotoList = ({ photosMars, isLoading, onNextPage }: PhotoListProps) => {
  const shouldRender = {
    main: !!photosMars?.length,
    emptyState: !photosMars?.length && !isLoading,
    loading: isLoading,
  };

  return (
    <PhotoListStyled>
      {shouldRender.main && photosMars && (
        <ScrollInfinite onNextPage={onNextPage}>
          <ImageList variant='quilted' cols={3} gap={4} className='image-list'>
            {photosMars?.map((marsPhoto, i) => (
              <ImageListItem key={i}>
                <PhotoItem photo={marsPhoto} />
              </ImageListItem>
            ))}
          </ImageList>
        </ScrollInfinite>
      )}
      {shouldRender.loading && (
        <IconContainer>
          <Icon size='xxl' animation='spin' icon={faCircleNotch} />
        </IconContainer>
      )}
      {shouldRender.emptyState && <EmptyState {...CONFIG.emptyStates.rover} />}
    </PhotoListStyled>
  );
};

export default PhotoList;
