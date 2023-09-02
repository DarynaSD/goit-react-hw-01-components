import userData from './profile/user';

import Profile from './profile/Profile';

export const App = () => {
  return (
    <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
  );
};
