// React
import { useContext } from 'react';
// Hooks
import { FiltersState, GlobalContext } from '@/contexts';

/**
 * Hook that facility global contexts calls.
 *
 * @return useGlobalContextResponse
 */
const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const { filters } = state;

  const setFilters = (payload: FiltersState) => {
    dispatch({ type: 'SET_FILTER', payload });
  };

  return { filters, setFilters };
};

export default useGlobalContext;
