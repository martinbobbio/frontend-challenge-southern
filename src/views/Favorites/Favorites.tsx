// React
import { EmptyState, PhotoList, Text } from '@/components';
// Constants
import { CONFIG, PhotosMars } from '@/constants';
// Libreries
import { FavoritesStyled } from './Favorites.styled';
import { useLocalStorage } from 'usehooks-ts';

/**
 * Functional component that render component favorites.
 *
 * @return React.ReactElement <Favorites/>
 */
const Favorites = () => {
  const [favorites] = useLocalStorage<PhotosMars[]>('favorites', []);

  const shouldRender = {
    main: !!favorites.length,
    emptyState: !favorites.length,
  };

  return (
    <FavoritesStyled>
      <Text className='title' size='xl'>
        Favorites
      </Text>
      {shouldRender.main && (
        <PhotoList photosMars={favorites} isLoading={false} />
      )}
      {shouldRender.emptyState && <EmptyState {...CONFIG.emptyStates.rover} />}
    </FavoritesStyled>
  );
};

export default Favorites;
