import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { Section } from './Statistics/Section';
import { FriendsList } from 'FriendList/FriendsList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Section title="Upload stats">
        <StatisticsList items={data} />
      </Section>

      <FriendsList items={friends} />
    </div>
  );
};
