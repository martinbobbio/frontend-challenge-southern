// React
import { useState } from 'react';
// Contants
import { PhotosMars } from '@/constants';
// Components
import { Icon, Text } from '@/components';
// Styled components
import {
  ButtonContainer,
  ModalContainer,
  ModalStyled,
  PhotoItemStyled,
  PhotoModal,
  TextContent,
} from './PhotoItem.styled';
// Libreries
import LazyLoad from 'react-lazyload';
import { Button, Container, Fade, Grid } from '@mui/material';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useLocalStorage } from 'usehooks-ts';
import { useLocation } from 'react-router-dom';

interface PhotoItemProps {
  photo: PhotosMars;
}

/**
 * Functional component that render component photo item.
 *
 * @return React.ReactElement <PhotoItem/>
 */
const PhotoItem = ({ photo }: PhotoItemProps) => {
  const { pathname } = useLocation();
  const [favorites, setFavorites] = useLocalStorage<PhotosMars[]>(
    'favorites',
    []
  );
  const [showModal, setShowModal] = useState(false);
  const shouldAddFavorites = favorites.find((v) => v.id === photo.id);

  /**
   * Function that add a photo to favorites
   *
   * @return React.ReactElement <PhotoList/>
   */
  const handleAddToFavorites = () => {
    if (!favorites.includes(photo)) {
      const newFavorites = [...favorites, photo];
      setFavorites(newFavorites);
    }
  };

  /**
   * Function that remove photo from favorites
   *
   * @return React.ReactElement <PhotoList/>
   */
  const handleRemoveFromFavorites = () => {
    const newFavorites = favorites.filter((v) => v.id !== photo.id);
    setFavorites(newFavorites);
    if (pathname === '/favorites') setShowModal(false);
  };

  return (
    <>
      <LazyLoad style={{ height: '100%' }}>
        <PhotoItemStyled
          onClick={() => setShowModal(true)}
          className='photo'
          src={photo.img_src}
        />
      </LazyLoad>
      <ModalStyled open={showModal} onClose={() => setShowModal(false)}>
        <Fade in={showModal}>
          <Container>
            <ModalContainer>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <PhotoModal src={photo.img_src} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextContent>
                    <Text className='title' size='lg'>
                      {photo.rover.name} #{photo.id}
                    </Text>
                    <Text>
                      Camera: {photo.camera.full_name} ({photo.camera.name})
                    </Text>
                    <Text>Earth Date: {photo.earth_date}</Text>
                    <Text>Sol Date: {photo.sol}</Text>
                    <ButtonContainer>
                      {!shouldAddFavorites && (
                        <Button
                          variant='contained'
                          endIcon={<Icon size='md' icon={faStar} />}
                          onClick={handleAddToFavorites}
                          fullWidth
                        >
                          <Text>Add Favorites</Text>
                        </Button>
                      )}
                      {shouldAddFavorites && (
                        <Button
                          variant='contained'
                          endIcon={<Icon size='md' icon={faStar} />}
                          onClick={handleRemoveFromFavorites}
                          fullWidth
                        >
                          <Text>Remove Favorites</Text>
                        </Button>
                      )}
                    </ButtonContainer>
                  </TextContent>
                </Grid>
              </Grid>
            </ModalContainer>
          </Container>
        </Fade>
      </ModalStyled>
    </>
  );
};

export default PhotoItem;
