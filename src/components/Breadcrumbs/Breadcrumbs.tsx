// Styled components
import { BreadcrumbsStyled } from './Breadcrumbs.styled';
// Libreries
import { Breadcrumbs } from '@mui/material';

interface BreadCrumbsProps {
  separator: React.ReactNode;
  elements: React.ReactNode[];
}

/**
 * Functional component that render component breadcrumbs.
 *
 * @return React.ReactElement <Breadcrumbs/>
 */
const _Breadcrumbs = ({ separator, elements }: BreadCrumbsProps) => {
  return (
    <BreadcrumbsStyled>
      <Breadcrumbs separator={separator} aria-label='breadcrumb'>
        {elements}
      </Breadcrumbs>
    </BreadcrumbsStyled>
  );
};

export default _Breadcrumbs;
