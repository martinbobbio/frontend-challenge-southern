// Components
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';
import { Drawer, FormControl, Grid, TextField } from '@mui/material';
import { DateField } from '@mui/x-date-pickers/DateField';

export const InputsContainer = styled(Grid)`
  padding-top: 32px;
`;

export const FiltersContainer = styled.div`
  background: ${({ theme }) => theme.palette.default.background2};
  height: 250px;
  text-align: left;
  padding: 32px 0;
  @media (max-width: ${BREAKPOINTS.small}) {
    height: 400px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 32px;
  text-align: right;
`;

export const FormControlStyled = styled(FormControl)``;

/* TO-DO: Remove important and find the better way to apply this style */
export const FilterDrawerStyled = styled(Drawer)`
  input,
  svg,
  label,
  .MuiSelect-select,
  .MuiInputLabel-formControl,
  .css-2962tf-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
  .css-1yyyg0v-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
  .css-2962tf-MuiFormLabel-root-MuiInputLabel-root.Mui-error,
  .css-1pnmrwp-MuiTypography-root,
  .css-2962tf-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette.default.main};
  }
  fieldset {
    border-color: ${({ theme }) => theme.palette.default.main} !important;
  }
`;

export const TextFieldStyled = styled(TextField)`
  &.css-ekfslj-MuiFormControl-root-MuiTextField-root {
    width: 100%;
    margin: 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DateFieldStyled = styled(DateField)`
  & {
    width: 100%;
  }
`;
