import PropTypes from "prop-types";

export const Statistics = ({ stats: { label, percentage } }) => {
  return (<div>
    <span>{label}</span>
    <span>{percentage}%</span>
  </div>)
};

Statistics.propTypes = {
  stats: PropTypes.exact({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }).isRequired,
};

