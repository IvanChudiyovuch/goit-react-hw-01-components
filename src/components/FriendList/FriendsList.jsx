import PropTypes from 'prop-types';
import { Friends } from './Friends';
import { List } from './FriendList.styled';

export const FriendsList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <Friends friends={item} />
        </li>
      ))}
    </List>
  );
};

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
