import { styled } from 'styled-components';

export const FriendsLi = styled('li')({
    display: 'flex',
    gap: 15,

    width: 250,
    color: "#002020",
    boxShadow: "0px 10px 30px 0px rgba(46, 47, 66, 0.08), 0px 0px 30px 0px rgba(46, 47, 66, 0.08)",
    padding: 20,
    marginBottom: 10,

    listStyle: 'none',
})

export const FriensOnline = styled('span')(({ isOnline }) => {
    return {
        width: 15,
        height: 15,
        borderRadius: 50,

        backgroundColor: isOnline ? 'green' :'red',
    }
})