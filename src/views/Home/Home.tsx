// Components
import { CardWithImage } from '@/components';
// Constants
import { CONFIG } from '@/constants';
// Styled components
import { HomeStyled } from './Home.styled';
// Libreries
import { Grid } from '@mui/material';

/**
 * Functional component that render component home.
 *
 * @return React.ReactElement <Home/>
 */
const Home = () => {
  return (
    <HomeStyled>
      <Grid container spacing={4}>
        {CONFIG.cards.map((card, i) => (
          <Grid key={i} item xs={12} sm={4}>
            <CardWithImage {...card} />
          </Grid>
        ))}
      </Grid>
    </HomeStyled>
  );
};

export default Home;
