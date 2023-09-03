import { styled } from 'styled-components';

export const StatSection = styled('section')({
    boxSizing: 'border-box',
    minWidth: 250,
    width: 400,
    margin: 50,
    paddingTop: 30,
    color: "#002020",
    boxShadow: "0px 10px 30px 0px rgba(46, 47, 66, 0.08), 0px 0px 30px 0px rgba(46, 47, 66, 0.08)",
})

export const StatTitle = styled('h2')({
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 0,
})

export const StatList = styled('ul')({
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',

    margin: 0,
    padding: 0,
    listStyle: 'none',
})

export const StatItem = styled('li')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: 50,
    height: 50,
    padding: 15,

    backgroundColor: getRandomHexColor(),
})

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}