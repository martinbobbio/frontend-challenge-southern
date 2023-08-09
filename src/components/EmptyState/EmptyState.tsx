// Components
import { Icon, Text } from '@/components';
// Styled components
import { EmptyStateStyled } from './EmptyState.styled';
// Libreries
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface EmptyStateProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

/**
 * Functional component that render component empty state.
 *
 * @return React.ReactElement <EmptyState/>
 */
const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <EmptyStateStyled>
      <Icon icon={icon} size='xxxl' />
      <Text className='title' size='xl'>
        {title}
      </Text>
      <Text className='description'>{description}</Text>
    </EmptyStateStyled>
  );
};

export default EmptyState;
