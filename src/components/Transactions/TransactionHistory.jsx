import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { HeadTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <HeadTable>Type</HeadTable>
          <HeadTable>Amount</HeadTable>
          <HeadTable>Currency</HeadTable>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <Transaction items={item} />
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
