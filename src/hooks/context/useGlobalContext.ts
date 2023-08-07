// React
import { useContext } from 'react';
// Hooks
import { GlobalContext } from '@/contexts';

/**
 * Hook that facility global contexts calls.
 *
 * @return useGlobalContextResponse
 */
const useGlobalContext = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const { loading } = state;

  const setLoading = (payload: boolean) => {
    dispatch({ type: 'SET_LOADING', payload });
  };

  return { loading, setLoading };
};

export default useGlobalContext;
