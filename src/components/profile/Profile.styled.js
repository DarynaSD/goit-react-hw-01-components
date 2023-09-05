import { styled } from 'styled-components';

export const ProfileWrap = styled('div')({
    width: 400,
    padding: '20px 50px',
    margin: 50,
    color: "#002020",
    boxShadow: "0px 10px 30px 0px rgba(46, 47, 66, 0.08), 0px 0px 30px 0px rgba(46, 47, 66, 0.08)",
})

export const InfoWrap = styled('div')({
    textAlign: 'center',
})

export const ProfileImg = styled('img')({
    display: "block",
    width: 300,
    margin: "0 auto",
})

export const UserName = styled('p')({
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
})

export const StatsWrap = styled('ul')({
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: "space-between",
    padding: 0,
    marginTop: 40,
    listStyle: 'none',
})

export const StatsInfo = styled('li')({
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
})