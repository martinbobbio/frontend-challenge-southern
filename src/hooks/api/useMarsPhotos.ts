// Constants
import { API, ResponseMarsPhotos } from '@/constants';
import { FiltersState } from '@/contexts';
// Libreries
import useSWR from 'swr';

// Types
type FetcherFn<Data> = () => Promise<Data>;

/**
 * Hook fetch data with axios and swr sending request to backend api mars photos of NASA API.
 */
const useMarsPhotos = <Data = ResponseMarsPhotos>(
  rover: string,
  page: number,
  filters?: FiltersState
) => {
  const uri = `rovers/${rover}/photos`;
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get(uri, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        sol: filters?.sol,
        camera: filters?.camera,
        //earth_date: '2023-08-01',
        page,
      },
    });
    return response.data;
  };
  return useSWR(`${uri}/${page}`, fetcher, { revalidateOnFocus: false });
};

export default useMarsPhotos;
