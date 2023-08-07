// React
import { Link } from 'react-router-dom';
// Components
import { Text } from '@/components';
// Constants
import { SupportedPages } from '@/constants';
// Styled components
import { CardWithImageStyled } from './CardWithImage.styled';
// Libreries
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';

interface CardWithImageProps {
  title: string;
  image: string;
  redirect: SupportedPages;
}

/**
 * Functional component that render component card rover.
 *
 * @return React.ReactElement <Footer/>
 */
const CardWithImage = ({ title, image, redirect }: CardWithImageProps) => {
  return (
    <CardWithImageStyled>
      <Link to={redirect}>
        <Card className='background-theme'>
          <CardActionArea>
            <CardMedia
              component='img'
              className='image'
              height='140'
              image={image}
              alt='green iguana'
            />
            <CardContent>
              <Text className='title' size='lg'>
                {title}
              </Text>
              <Text fontWeight='low' size='md'>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Text>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </CardWithImageStyled>
  );
};

export default CardWithImage;
