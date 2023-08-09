// Constants
import { FiltersPhotos } from '@/constants';
// Styled components
import { ChipContainer, FilterChipsStyled } from './FilterChips.styled';
import { Chip } from '@mui/material';

interface FilterChipsProps {
  filters: FiltersPhotos;
  onChangeFilters: (filters: FiltersPhotos) => void;
}

/**
 * Functional component that render component filter chips.
 *
 * @return React.ReactElement <FilterChips/>
 */
const FilterChips = ({ filters, onChangeFilters }: FilterChipsProps) => {
  const { sol, camera, date } = filters;
  return (
    <FilterChipsStyled>
      {sol && (
        <ChipContainer>
          <Chip
            color='primary'
            label={`SOL: ${sol}`}
            clickable={false}
            onDelete={() => onChangeFilters({ ...filters, sol: undefined })}
          />
        </ChipContainer>
      )}
      {date && (
        <ChipContainer>
          <Chip
            color='primary'
            onDelete={() => onChangeFilters({ ...filters, date: undefined })}
            label={`Earth Date: ${date.format('DD/MM/YYYY')}`}
          />
        </ChipContainer>
      )}
      {camera && (
        <ChipContainer>
          <Chip
            color='primary'
            label={`CAMERA: ${camera}`}
            onDelete={() => onChangeFilters({ ...filters, camera: undefined })}
          />
        </ChipContainer>
      )}
    </FilterChipsStyled>
  );
};

export default FilterChips;
