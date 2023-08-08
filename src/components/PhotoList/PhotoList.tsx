// React
import { useEffect, useState } from 'react';
// Components
import { Icon, PhotoItem, ScrollInfinite } from '@/components';
// Hooks
import { useGlobalContext, useMarsPhotos } from '@/hooks';
// Constants
import { PhotosMars, SupportedRovers } from '@/constants';
// Styled components
import { PhotoListStyled, IconContainer } from './PhotoList.styled';
// Libreries
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ImageList, ImageListItem } from '@mui/material';

interface PhotoListProps {
  rover: SupportedRovers;
}

/**
 * Functional component that render component photo list.
 *
 * @return React.ReactElement <PhotoList/>
 */
const PhotoList = ({ rover }: PhotoListProps) => {
  const [page, setPage] = useState(1);
  const [photosMars, setPhotoMars] = useState<PhotosMars[]>([]);
  const { filters } = useGlobalContext();
  const { data, isLoading, error } = useMarsPhotos(rover, page, filters);

  const shouldRender = {
    main: !!photosMars?.length && !error,
    loading: isLoading && !error,
  };

  /**
   * Function that get handle getter for more photos.
   *
   * @return void
   */
  const _handleNextPage = () => {
    if (!isLoading && !error) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (data?.photos) {
      setPhotoMars((prevPhotos) => [...prevPhotos, ...data.photos]);
    }
  }, [data]);

  return (
    <PhotoListStyled>
      {shouldRender.main && (
        <ScrollInfinite handler={_handleNextPage}>
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
