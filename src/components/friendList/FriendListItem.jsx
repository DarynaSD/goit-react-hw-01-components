import PropTypes from 'prop-types';

import { FriendsLi, FriensOnline } from './Friends.styled';

export default function FriendsListItem(props) {
    const { avatar, name, isOnline } = props;
    return (
<FriendsLi>
  <FriensOnline isOnline={isOnline} />
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
  <p class="name">{ name }</p>
</FriendsLi>
    )
}


FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
