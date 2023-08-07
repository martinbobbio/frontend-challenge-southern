// React
import { Link, useLocation } from 'react-router-dom';
// Components
import { Breadcrumbs, Icon, PhotoList, Text } from '@/components';
// Constants
import { SupportedPages } from '@/constants';
// Utils
import { firstLetterUppercase } from '@/utils';
// Styled components
import {
  LayoutTwoColumns,
  LeftColumn,
  RightColumn,
  RoverStyled,
} from './Rover.styled';
// Libreries
import { faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';

/**
 * Functional component that render component rover.
 *
 * @return React.ReactElement <Rover/>
 */
const Rover = () => {
  const location = useLocation();
  const rover = location.pathname.replace('/', '');
  const breadcrumbs = {
    separator: <Icon size='sm' icon={faChevronRight} />,
    elements: [
      <Link key={0} to={SupportedPages.Home}>
        <Text>Home</Text>
      </Link>,
      <Text key={1}>{firstLetterUppercase(rover)}</Text>,
    ],
  };
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
            endIcon={<Icon icon={faFilter} size='sm' />}
          >
            <Text>Filter</Text>
          </Button>
        </RightColumn>
      </LayoutTwoColumns>
      <PhotoList rover={rover} />
    </RoverStyled>
  );
};

export default Rover;