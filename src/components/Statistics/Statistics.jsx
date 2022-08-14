import PropTypes from 'prop-types';
import { StatsElement, StatsText } from './Statistics.styled';

export const Statistics = ({ stats: { label, percentage, id } }) => {
  return (
    <StatsElement>
      <StatsText>{label}</StatsText>
      <span>{percentage}%</span>
    </StatsElement>
  );
};

Statistics.propTypes = {
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
