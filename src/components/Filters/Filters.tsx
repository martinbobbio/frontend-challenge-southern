// Components
import { Text } from '@/components';
// Styled components
import { FiltersContainer, FiltersStyled } from './Filters.styled';
// Libreries
import { Container } from '@mui/material';

interface FilterProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Functional component that render component filters.
 *
 * @return React.ReactElement <Filters/>
 */
const Filters = ({ open, onClose }: FilterProps) => {
  return (
    <FiltersStyled open={open} anchor='bottom' onClose={onClose}>
      <FiltersContainer>
        <Container>
          <Text size='xl'>Filters</Text>
        </Container>
      </FiltersContainer>
    </FiltersStyled>
  );
};

export default Filters;
