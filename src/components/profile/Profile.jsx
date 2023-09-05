import PropTypes from 'prop-types';

import { ProfileWrap, ProfileImg, InfoWrap, UserName, StatsWrap, StatsInfo } from './Profile.styled';

export default function Profile(props) {
    const { username, tag, location, avatar, stats } = props;

    return (
    <ProfileWrap>
  <InfoWrap>
    <ProfileImg
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <p>@{tag}</p>
    <p>{location}</p>
  </InfoWrap>

  <StatsWrap>
    <StatsInfo>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </StatsInfo>
    <StatsInfo>
      <span>Views</span>
      <span>{stats.views}</span>
    </StatsInfo>
    <StatsInfo>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </StatsInfo>
  </StatsWrap>
</ProfileWrap>
    )
}


Profile.propTypes = {
  username: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
}