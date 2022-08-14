import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { StatsList } from './Statistics.styled';

export const StatisticsList = ({ items }) => {
  return (
    <StatsList>
      {items.map(item => (
        <li key={item.id}>
          <Statistics stats={item} />
        </li>
      ))}
    </StatsList>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
