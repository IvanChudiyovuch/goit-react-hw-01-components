import PropTypes from 'prop-types';
import { ItemContainer, ItemText, SignalsState } from './FriendList.styled';

export const Friends = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <ItemContainer>
      <SignalsState bool={isOnline}>{isOnline}</SignalsState>
      <img src={avatar} alt="User avatar" width="48" />
      <ItemText>{name}</ItemText>
    </ItemContainer>
  );
};

Friends.prototype = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
