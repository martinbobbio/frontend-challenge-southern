// React
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import {
  Breadcrumbs,
  FilterChips,
  FiltersDrawer,
  Icon,
  PhotoList,
  Text,
} from '@/components';
// Constants
import { PhotosMars, SupportedPages, SupportedRovers } from '@/constants';
// Hooks
import { useMarsPhotos } from '@/hooks';
// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import {
  FilterChipsContainer,
  LayoutTwoColumns,
  LeftColumn,
  RightColumn,
  RoverStyled,
} from './Rover.styled';
// Libreries
import { faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';
import { FiltersState } from '@/contexts';

interface RoverProps {
  rover: SupportedRovers;
}

/**
 * Functional component that render component rover.
 *
 * @return React.ReactElement <Rover/>
 */
const Rover = ({ rover }: RoverProps) => {
  const [page, setPage] = useState(1);
  const [photosMars, setPhotoMars] = useState<PhotosMars[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersState>({ sol: 1000 });
  const { data, isLoading } = useMarsPhotos(rover, page, filters);

  const breadcrumbs = {
    separator: <Icon size='sm' icon={faChevronRight} />,
    elements: [
      <Link key={0} to={SupportedPages.Home}>
        <Text>Home</Text>
      </Link>,
      <Text key={1}>{firstLetterUppercase(rover)}</Text>,
    ],
  };

  /**
   * Function that get handle getter for more photos.
   *
   * @return void
   */
  const _onNextPage = () => {
    if (!isLoading) {
      setPage(page + 1);
    }
  };

  /**
   * Function that get handle getter for more photos.
   *
   * @return void
   */
  const _onSubmitFilters = (filters: FiltersState) => {
    setPhotoMars([]);
    setPage(1);
    setFilters(filters);
  };

  useEffect(() => {
    setPhotoMars([]);
    setPage(1);
  }, []);

  useEffect(() => {
    if (data?.photos) {
      setPhotoMars((prevPhotos) => [...prevPhotos, ...data.photos]);
    }
  }, [data]);

  return (
    <RoverStyled>
      <LayoutTwoColumns container spacing={2}>
        <LeftColumn item xs={8}>
          <Breadcrumbs {...breadcrumbs} />
        </LeftColumn>
        <RightColumn item xs={4}>
          <Button
            size='small'
            variant='contained'
            onClick={() => setShowFilters(true)}
            endIcon={<Icon icon={faFilter} size='sm' />}
          >
            <Text>Filter</Text>
          </Button>
        </RightColumn>
      </LayoutTwoColumns>
      <FilterChipsContainer>
        <FilterChips filters={filters} onChangeFilters={_onSubmitFilters} />
      </FilterChipsContainer>
      <PhotoList
        photosMars={photosMars}
        isLoading={isLoading}
        onNextPage={_onNextPage}
      />
      <FiltersDrawer
        rover={rover}
        open={showFilters}
        filters={filters}
        onSubmit={_onSubmitFilters}
        onClose={() => setShowFilters(false)}
      />
    </RoverStyled>
  );
};

export default Rover;
