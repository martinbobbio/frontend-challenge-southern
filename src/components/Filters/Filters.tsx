// React
import { useState } from 'react';
// Components
import { Text } from '@/components';
// Styled components
import {
  ButtonContainer,
  FiltersContainer,
  FiltersStyled,
  FormControlStyled,
  InputsContainer,
  TextFieldStyled,
} from './Filters.styled';
// Constants
import { CONFIG, SupportedRovers } from '@/constants';
// Hooks
import { useGlobalContext } from '@/hooks';
// Libreries
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FiltersState } from '@/contexts';

interface FilterProps {
  open: boolean;
  rover: SupportedRovers;
  onClose: () => void;
}

/**
 * Functional component that render component filters.
 *
 * @return React.ReactElement <Filters/>
 */
const Filters = ({ open, rover, onClose }: FilterProps) => {
  const { setFilters } = useGlobalContext();
  const [camera, setCamera] = useState('');

  /**
   * Handle on change for camera rover
   *
   */
  const handleChange = (event: SelectChangeEvent) => {
    setCamera(event.target.value as string);
  };

  /**
   * Handle on change for camera rover
   *
   */
  const handleSubmit = () => {
    const filters: FiltersState = {};
    if (camera) filters.camera = camera;
    setFilters(filters);
    onClose();
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
        onChange={handleChange}
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
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position='start'>Sol</InputAdornment>,
      }}
    />
  );

  return (
    <FiltersStyled open={open} anchor='bottom' onClose={onClose}>
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
    </FiltersStyled>
  );
};

export default Filters;
