import userData from '../data/user.json';
import statisticsData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendsList from './friendList/FriendList';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </>
  );
};
