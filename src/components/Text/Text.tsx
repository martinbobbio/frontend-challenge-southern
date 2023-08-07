// Constants
import { SupportedColors, SupportedSizes, SupportedWeights } from '@/constants';
// Styled components
import { TextStyled } from './Text.styled';

// Component props
interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: `${SupportedSizes}`;
  fontWeight?: `${SupportedWeights}`;
  color?: `${SupportedColors}`;
}

/**
 * Functional component that render component text.
 *
 * @return React.ReactElement <Text/>
 */
const Text = ({
  children,
  className,
  size = 'md',
  fontWeight = 'medium',
  color = 'default',
}: TextProps) => {
  return (
    <TextStyled
      className={`text ${className ? className : ''}`}
      _color={color}
      _size={size}
      _weight={fontWeight}
    >
      {children}
    </TextStyled>
  );
};

export default Text;
