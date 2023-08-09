// React
import { useEffect } from 'react';
// Styled components
import { ScrollInfiniteStyled } from './ScrollInfinite.styled';

interface ScrollInfiniteProps {
  children: React.ReactNode;
  onNextPage?: () => void;
}

/**
 * Functional component that render component scroll infinite.
 *
 * @return React.ReactElement <ScrollInfinite/>
 */
const ScrollInfinite = ({ children, onNextPage }: ScrollInfiniteProps) => {
  /**
   * Function that watch when is neccessary to call next page.
   *
   * @return void
   */
  const handleInfiniteScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    if (scrolled + windowHeight >= documentHeight - 64) {
      if (onNextPage) onNextPage();
    }
  };

  /**
   * Function that avoid multiple calls.
   *
   * @return void
   */
  const debounce = (func: () => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleInfiniteScroll, 300);
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ScrollInfiniteStyled>{children}</ScrollInfiniteStyled>;
};

export default ScrollInfinite;
