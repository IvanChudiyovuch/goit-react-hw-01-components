import PropTypes from 'prop-types';
import { Container } from '../Statistics/Statistics.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title ?? <h2>{title}</h2>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
