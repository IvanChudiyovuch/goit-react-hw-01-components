import PropTypes from "prop-types";
import { Container, UserImg, UserName, UserTag, UserLocation, UserStats, StatsElement, StatsElementInfo } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return <Container>
    <div>
      <UserImg
        src={avatar}
        alt="User avatar"
        width={50}
        />
      <UserName>{username}</UserName>
      <UserTag>{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </div>

    <UserStats>
      <StatsElement>
        <span>Followers</span>
        <StatsElementInfo>{followers}</StatsElementInfo>
      </StatsElement>
      <StatsElement>
        <span>Views</span>
      <StatsElementInfo>{views}</StatsElementInfo>
      </StatsElement>
      <StatsElement>
        <span>Likes</span>
        <StatsElementInfo>{likes}</StatsElementInfo>
      </StatsElement>
    </UserStats>
  </Container>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired,}).isRequired,
}