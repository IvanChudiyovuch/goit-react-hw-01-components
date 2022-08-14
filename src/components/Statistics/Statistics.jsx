import PropTypes from 'prop-types';

export const Statistics = ({ stats: { label, percentage, id } }) => {
  return (
    <div>
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
