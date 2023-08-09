// React
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import {
  Breadcrumbs,
  EmptyState,
  FilterChips,
  FiltersDrawer,
  Icon,
  PhotoList,
  Text,
} from '@/components';
// Constants
import {
  CONFIG,
  FiltersPhotos,
  PhotosMars,
  SupportedPages,
  SupportedRovers,
} from '@/constants';
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
  const [shouldPaginate, setShouldPaginate] = useState(false);
  const [photosMars, setPhotoMars] = useState<PhotosMars[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FiltersPhotos>(
    CONFIG.forms.defaultFilters
  );
  const { data, isLoading, error } = useMarsPhotos(rover, page, filters);

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
    if (!isLoading && shouldPaginate) {
      setShouldPaginate(false);
      setPage((prev) => prev + 1);
    }
  };
  console.log(shouldPaginate);

  /**
   * Function that get handle getter for more photos.
   *
   * @param filters for update filters
   * @return void
   */
  const _onSubmitFilters = (filters: FiltersPhotos) => {
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
      setShouldPaginate(true);
    } else {
      setShouldPaginate(false);
    }
  }, [data]);

  return (
    <RoverStyled>
      <LayoutTwoColumns container spacing={2}>
        <LeftColumn item xs={7}>
          <Breadcrumbs {...breadcrumbs} />
        </LeftColumn>
        <RightColumn item xs={5}>
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
      {!error && (
        <PhotoList
          photosMars={photosMars}
          isLoading={isLoading}
          onNextPage={_onNextPage}
        />
      )}
      {error && <EmptyState {...CONFIG.emptyStates.error} />}
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
