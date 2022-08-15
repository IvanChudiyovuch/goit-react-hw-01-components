import PropTypes from 'prop-types';
import { Container, TitleText } from './Statistics.styled';
export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <TitleText>{title}</TitleText>}
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
