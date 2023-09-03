import userData from './profile/user';
import statisticsData from './statistics/data';
import friendsData from './friendList/friends'

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendsList from './friendList/FriendList';

export const App = () => {
  return (
    <>
    <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendsList friends={ friendsData } />
    </>
  );
};
