// Context
import { FiltersState } from '@/contexts';
// Styled components
import { ChipStyled, FilterChipsStyled } from './FilterChips.styled';

interface FilterChipsProps {
  filters: FiltersState;
  onChangeFilters: (filters: FiltersState) => void;
}

/**
 * Functional component that render component filter chips.
 *
 * @return React.ReactElement <FilterChips/>
 */
const FilterChips = ({ filters, onChangeFilters }: FilterChipsProps) => {
  const sol = filters?.sol;
  const camera = filters?.camera;
  return (
    <FilterChipsStyled>
      <ChipStyled color='primary' label={`SOL: ${sol}`} />
      {camera && (
        <ChipStyled
          color='primary'
          label={`CAMERA: ${camera}`}
          onDelete={() => onChangeFilters({ ...filters, camera: undefined })}
        />
      )}
    </FilterChipsStyled>
  );
};

export default FilterChips;
