import PropTypes, { arrayOf } from 'prop-types';

import FriendsListItem from './FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map(one => (
          <FriendsListItem key={one.id}
              avatar={one.avatar}
              name={one.name}
              isOnline={ one.isOnline} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
    friends: arrayOf(PropTypes.object)
}