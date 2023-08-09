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
  DateFieldStyled,
} from './FiltersDrawer.styled';
// Constants
import { CONFIG, FiltersPhotos, SupportedRovers } from '@/constants';
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
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface FilterDrawerProps {
  open: boolean;
  rover: SupportedRovers;
  filters: FiltersPhotos;
  onClose: () => void;
  onSubmit: (filters: FiltersPhotos) => void;
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
  const [earthDate, setEarthDate] = useState<Dayjs | null>(null);

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
  const handleEarthDate = (value: Dayjs) => {
    const isValid = value?.isValid() && value?.isAfter('2003-01-01');
    if (isValid) setEarthDate(value);
  };

  /**
   * Handle on change for camera rover
   *
   */
  const handleSubmit = () => {
    const filters: FiltersPhotos = {};
    if (camera) filters.camera = camera;
    if (sol) filters.sol = sol;
    if (earthDate) filters.date = earthDate;
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
      defaultValue={sol}
      sx={{ width: '100%' }}
      InputProps={{
        startAdornment: <InputAdornment position='start'>Sol</InputAdornment>,
      }}
    />
  );

  /**
   * Render input for eath date
   *
   */
  const _renderInputEarthDate = () => (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateFieldStyled
        label='Earth Date'
        value={earthDate}
        onChange={(date) => handleEarthDate(date as Dayjs)}
        format='DD/MM/YYYY'
      />
    </LocalizationProvider>
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
            <Grid item xs={12} sm={4}>
              {_renderInputEarthDate()}
            </Grid>
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
