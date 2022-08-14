import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export const StatisticsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Statistics stats={item} />
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
