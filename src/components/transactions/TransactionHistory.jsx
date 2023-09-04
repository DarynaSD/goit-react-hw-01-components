import PropTypes from 'prop-types';

import { Table, Tbody, Td } from './Transaction.styled';

export default function TransactionHistory({ items }) {
    return (
<Table>
            
<thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
</thead>
        
<Tbody>
    {items.map(one => (
    <tr key={one.id}>
            <Td>{ one.type}</Td>
            <Td>{ one.amount}</Td>
            <Td>{ one.currency}</Td>
    </tr>
    ))}
</Tbody>

</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    })
)
}