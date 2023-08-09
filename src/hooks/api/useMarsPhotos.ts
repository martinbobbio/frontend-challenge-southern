// Constants
import { API, FiltersPhotos, ResponseMarsPhotos } from '@/constants';
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
  filters?: FiltersPhotos
) => {
  const uri = `rovers/${rover}/photos`;
  const fetcher: FetcherFn<Data> = async () => {
    const response = await API.get(uri, {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        sol: filters?.sol,
        camera: filters?.camera?.toLowerCase(),
        earth_date: filters?.date?.format('YYYY-MM-DD'),
        page,
      },
    });
    return response.data;
  };
  return useSWR(
    `${uri}/${page}/${filters?.camera}/${filters?.sol}/${filters?.date}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );
};

export default useMarsPhotos;
