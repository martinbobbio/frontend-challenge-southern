// Components
import { Text } from '@/components';
// Styled components
import { NotFoundStyled } from './NotFound.styled';

/**
 * Functional component that render component not found.
 *
 * @return React.ReactElement <NotFound/>
 */
const NotFound = () => {
  return (
    <NotFoundStyled>
      <Text>not found</Text>
    </NotFoundStyled>
  );
};

export default NotFound;
