import PropTypes from 'prop-types';

export const Friends = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <div>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </div>
  );
};

Friends.prototype = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
