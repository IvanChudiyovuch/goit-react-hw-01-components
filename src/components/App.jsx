import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { Section } from './Statistics/Section';
import { FriendsList } from 'components/FriendList/FriendsList';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

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

      <TransactionHistory items={transactions} />
    </div>
  );
};
