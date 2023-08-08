// Components
import { Icon, PhotoItem, ScrollInfinite } from '@/components';
// Constants
import { PhotosMars } from '@/constants';
// Styled components
import { PhotoListStyled, IconContainer } from './PhotoList.styled';
// Libreries
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ImageList, ImageListItem } from '@mui/material';

interface PhotoListProps {
  photosMars?: PhotosMars[];
  isLoading: boolean;
  onNextPage: () => void;
}

/**
 * Functional component that render component photo list.
 *
 * @return React.ReactElement <PhotoList/>
 */
const PhotoList = ({ photosMars, isLoading, onNextPage }: PhotoListProps) => {
  const shouldRender = {
    main: !!photosMars?.length,
    loading: isLoading,
  };

  return (
    <PhotoListStyled>
      {shouldRender.main && photosMars && (
        <ScrollInfinite onNextPage={onNextPage}>
          <ImageList variant='quilted' cols={3} gap={4} className='image-list'>
            {photosMars?.map((marsPhoto, i) => (
              <ImageListItem key={i}>
                <PhotoItem src={marsPhoto.img_src} />
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
    </PhotoListStyled>
  );
};

export default PhotoList;
