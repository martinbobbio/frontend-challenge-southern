// Constants
import {
  SupportedColors,
  SupportedIconsAnimations,
  SupportedSizes,
} from '@/constants';
// Styled components
import { IconStyled } from './Icon.styled';
// Libreries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

// Component props
interface IconProps {
  icon: IconDefinition;
  animation?: `${SupportedIconsAnimations}`;
  size?: `${SupportedSizes}`;
  color?: `${SupportedColors}`;
}

/**
 * Functional component that render component font awesome icon.
 *
 * @return React.ReactElement <Icon/>
 */
const Icon = ({
  icon,
  animation,
  size = 'md',
  color = 'default',
}: IconProps) => {
  return (
    <IconStyled className='icon' _color={color} _size={size}>
      <FontAwesomeIcon icon={icon} className={`fa-${animation}`} />
    </IconStyled>
  );
};

export default Icon;
