import PropTypes from 'prop-types';

import { SectionContainer, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <Title>{title}</Title>}
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};