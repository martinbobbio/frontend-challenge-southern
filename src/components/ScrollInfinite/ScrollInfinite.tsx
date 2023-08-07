// React
import { useEffect } from 'react';
// Styled components
import { ScrollInfiniteStyled } from './ScrollInfinite.styled';

interface ScrollInfiniteProps {
  children: React.ReactNode;
  handler: () => void;
}

/**
 * Functional component that render component scroll infinite.
 *
 * @return React.ReactElement <ScrollInfinite/>
 */
const ScrollInfinite = ({ children, handler }: ScrollInfiniteProps) => {
  const handleInfiniteScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    if (scrolled + windowHeight >= documentHeight - 64) {
      handler();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => {
      window.removeEventListener('scroll', handleInfiniteScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ScrollInfiniteStyled>{children}</ScrollInfiniteStyled>;
};

export default ScrollInfinite;
