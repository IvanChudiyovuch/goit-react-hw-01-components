import PropTypes from 'prop-types';
import { CellTable } from './TransactionHistory.styled';

export const Transaction = ({ items: { id, type, amount, currency } }) => {
  return (
    <tr>
      <CellTable>{type}</CellTable>
      <CellTable>{amount}</CellTable>
      <CellTable>{currency}</CellTable>
    </tr>
  );
};

Transaction.propTypes = {
  items: PropTypes.exact({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
