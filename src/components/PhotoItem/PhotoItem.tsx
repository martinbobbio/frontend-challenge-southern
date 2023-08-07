// Styled components
import { PhotoItemStyled } from './PhotoItem.styled';
// Libreries
import LazyLoad from 'react-lazyload';

interface PhotoItemProps {
  src: string;
}

/**
 * Functional component that render component photo item.
 *
 * @return React.ReactElement <PhotoItem/>
 */
const PhotoItem = ({ src }: PhotoItemProps) => {
  return (
    <LazyLoad style={{ height: '100%' }}>
      <PhotoItemStyled className='photo' src={src} loading='lazy' />
    </LazyLoad>
  );
};

export default PhotoItem;
