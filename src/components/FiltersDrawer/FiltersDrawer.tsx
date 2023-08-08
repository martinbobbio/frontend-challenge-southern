// React
import { useState } from 'react';
// Components
import { Text } from '@/components';
// Styled components
import {
  ButtonContainer,
  FiltersContainer,
  FilterDrawerStyled,
  FormControlStyled,
  InputsContainer,
  TextFieldStyled,
} from './FiltersDrawer.styled';
// Constants
import { CONFIG, SupportedRovers } from '@/constants';
// Libreries
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { FiltersState } from '@/contexts';

interface FilterDrawerProps {
  open: boolean;
  rover: SupportedRovers;
  filters: FiltersState;
  onClose: () => void;
  onSubmit: (filters: FiltersState) => void;
}

/**
 * Functional component that render component filter drawer.
 *
 * @return React.ReactElement <FilterDrawer/>
 */
const FilterDrawer = ({
  filters,
  open,
  rover,
  onClose,
  onSubmit,
}: FilterDrawerProps) => {
  const [camera, setCamera] = useState('');
  const [sol, setSol] = useState(filters?.sol as number);

  /**
   * Handle on change for camera rover
   *
   */
  const handleChangeCamera = (value: string) => {
    setCamera(value);
  };

  /**
   * Handle on change for camera rover
   *
   */
  const handleChangeSol = (value: string) => {
    setSol(Number(value));
  };

  /**
   * Handle on change for camera rover
   *
   */
  const handleSubmit = () => {
    const filters: FiltersState = {};
    if (camera) filters.camera = camera;
    if (sol) filters.sol = sol;
    onClose();
    onSubmit(filters);
  };

  /**
   * Render select for camera rover
   *
   */
  const _renderInputCamera = () => (
    <FormControlStyled fullWidth>
      <InputLabel id='demo-simple-select-label'>Camera</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={camera}
        label='Camera'
        onChange={(e) => handleChangeCamera(e.target.value)}
      >
        {CONFIG.forms.cameras[rover].map((value, i) => (
          <MenuItem key={i} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );

  /**
   * Render input for sol date
   *
   */
  const _renderInputSol = () => (
    <TextFieldStyled
      label='Sol Date'
      id='outlined-start-adornment'
      type='number'
      onChange={(e) => handleChangeSol(e.target.value)}
      value={sol}
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position='start'>Sol</InputAdornment>,
      }}
    />
  );

  return (
    <FilterDrawerStyled open={open} anchor='bottom' onClose={onClose}>
      <FiltersContainer>
        <Container>
          <Text size='xl'>Filters</Text>
          <InputsContainer container spacing={2}>
            <Grid item xs={12} sm={4}>
              {_renderInputCamera()}
            </Grid>
            <Grid item xs={12} sm={4}>
              {_renderInputSol()}
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
          </InputsContainer>
          <ButtonContainer>
            <Button size='large' className='cancel' onClick={onClose}>
              Cancel
            </Button>
            <Button size='large' className='submit' onClick={handleSubmit}>
              Filter
            </Button>
          </ButtonContainer>
        </Container>
      </FiltersContainer>
    </FilterDrawerStyled>
  );
};

export default FilterDrawer;
