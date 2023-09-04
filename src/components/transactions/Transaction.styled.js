import { styled } from 'styled-components';

export const Table = styled('table')({
    color: "#002020",
    boxShadow: "0px 10px 30px 0px rgba(46, 47, 66, 0.08), 0px 0px 30px 0px rgba(46, 47, 66, 0.08)",
    margin: 50,
    width: 450,
})

export const Tbody = styled('tbody')({
    backgroundColor: 'silver',
})

// export const Tr = styled('tr' )({
//     backgroundColor: '&:nthChild(even)' ? 'gold' : 'silver',
// })

export const Td = styled('td')({
    padding: '10px 15px',
})

