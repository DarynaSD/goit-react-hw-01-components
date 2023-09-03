import PropTypes from 'prop-types';

import { ProfileWrap, ProfileImg, InfoWrap, UserName, StatsWrap, StatsInfo } from './Profile.styles';

export default function Profile(props) {
    const { username, tag, location, avatar, stats } = props;

    return (
    <ProfileWrap>
  <InfoWrap>
    <ProfileImg
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <UserName>{username}</UserName>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </InfoWrap>

  <StatsWrap>
    <StatsInfo>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </StatsInfo>
    <StatsInfo>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </StatsInfo>
    <StatsInfo>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
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