import PropTypes from 'prop-types';

import { StatSection, StatTitle, StatList, StatItem } from './Statistics.styled'

export default function Statistics(props) {
    const { title, stats } = props;

    return (
<StatSection>
  <StatTitle>{title}</StatTitle>

    <StatList>
    {
    stats.map(item => {
    return <StatItem key={ item.id }>
        <span>{ item.label }</span>
        <span>{ item.percentage }%</span>
    </StatItem>
        })
    }      
  </StatList>
</StatSection>
    )
}


Statistics.propTypes = {
  title: PropTypes.string, 
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
  })),
}