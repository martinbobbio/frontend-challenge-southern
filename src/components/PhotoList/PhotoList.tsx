// Components
import { PhotoItem, Text } from '@/components';
// Hooks
import { useMarsPhotos } from '@/hooks';
// Styled components
import {
  PhotoMainColumn,
  PhotoListStyled,
  PhotoMainGrid,
  PhotoSkeleton,
} from './PhotoList.styled';
// Libreries
import { useElementSize } from 'usehooks-ts';

interface PhotoListProps {
  rover: string;
}

/**
 * Functional component that render component photo list.
 *
 * @return React.ReactElement <PhotoList/>
 */
const PhotoList = ({ rover }: PhotoListProps) => {
  const { data, isLoading, error } = useMarsPhotos(rover);
  const [photoElement, { width }] = useElementSize();

  const shouldRender = {
    main: !!data?.photos?.length && !isLoading && !error,
    emptyState: !data?.photos?.length && !isLoading && !error,
    skeletons: isLoading && !error,
    error: error,
  };

  return (
    <PhotoListStyled>
      <PhotoMainGrid container spacing={0}>
        {shouldRender.main &&
          data?.photos.map((marsPhoto, i) => (
            <PhotoMainColumn
              ref={photoElement}
              key={i}
              item
              xs={12}
              sm={4}
              size={width}
            >
              <PhotoItem src={marsPhoto.img_src} />
            </PhotoMainColumn>
          ))}
        {shouldRender.skeletons &&
          Array.from({ length: 9 }, (_, i) => (
            <PhotoMainColumn
              ref={photoElement}
              key={i}
              item
              xs={12}
              sm={4}
              size={width}
            >
              <PhotoSkeleton
                variant='rectangular'
                width={width}
                height={width}
              />
            </PhotoMainColumn>
          ))}
      </PhotoMainGrid>
      {shouldRender.emptyState && <Text>empty state</Text>}
      {shouldRender.error && <Text>error</Text>}
    </PhotoListStyled>
  );
};

export default PhotoList;
