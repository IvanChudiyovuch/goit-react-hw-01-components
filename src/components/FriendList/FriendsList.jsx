import PropTypes from 'prop-types';
import { Friends } from './Friends';

export const FriendsList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Friends friends={item} />
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
