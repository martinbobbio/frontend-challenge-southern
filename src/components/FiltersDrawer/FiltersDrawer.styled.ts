// Libreries
import { styled } from 'styled-components';
import { Drawer, FormControl, Grid, TextField } from '@mui/material';

export const FilterDrawerStyled = styled(Drawer)``;

export const InputsContainer = styled(Grid)`
  padding-top: 32px;
`;

export const FiltersContainer = styled.div`
  background: ${({ theme }) => theme.palette.default.background2};
  height: 250px;
  text-align: left;
  padding: 32px 0;
`;

export const ButtonContainer = styled.div`
  margin-top: 32px;
  text-align: right;
`;

export const FormControlStyled = styled(FormControl)`
  svg,
  label,
  .MuiSelect-select,
  .css-2962tf-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
  .css-1yyyg0v-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette.default.main};
  }
  fieldset {
    /* This important is only for rewrite material ui lot of classes for hover and focus */
    /* TO-DO: Remove important and find the better way to apply this style */
    border-color: ${({ theme }) => theme.palette.default.main} !important;
  }
`;

export const TextFieldStyled = styled(TextField)`
  &.css-ekfslj-MuiFormControl-root-MuiTextField-root {
    width: 100%;
    margin: 0;
  }
  input,
  .MuiInputLabel-formControl,
  .css-1pnmrwp-MuiTypography-root,
  .css-2962tf-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.palette.default.main};
  }
  fieldset {
    /* This important is only for rewrite material ui lot of classes for hover and focus */
    /* TO-DO: Remove important and find the better way to apply this style */
    border-color: ${({ theme }) => theme.palette.default.main} !important;
  }
`;
