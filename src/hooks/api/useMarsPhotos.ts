// Constants
import { API, ResponseMarsPhotos } from '@/constants';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api mars photos of NASA API.
 */
const useMarsPhotos = <Data = ResponseMarsPhotos>(rover: string) => {
  const uri = `rovers/${rover}/photos`;
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get(uri, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        sol: 1000,
        page: 1,
      },
    });
    return response.data;
  };
  return useSWR(uri, fetcher);
};

export default useMarsPhotos;
