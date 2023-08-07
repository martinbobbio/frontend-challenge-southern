// Components
import { Footer, Header } from '@/components';
// Styled components
import { AppStyled, ChildrenStyled } from './App.styled';
import { Container } from '@mui/material';

interface AppProps {
  children: React.ReactNode;
}

/**
 * Functional component that has the main logic of the application.
 *
 * @return React.ReactElement <Main/>
 */
const App = ({ children }: AppProps) => {
  return (
    <AppStyled>
      <Header />
      <Container>
        <ChildrenStyled>{children}</ChildrenStyled>
      </Container>
      <Footer />
    </AppStyled>
  );
};

export default App;
