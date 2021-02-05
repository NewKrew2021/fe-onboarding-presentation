import styled from "styled-components";

export const MyHero = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  color: #1e1e1e;
  background-color: #ffd700;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 180%;
  padding: 3rem 8% 5rem 8%;
  text-align: left;
`;

export const MyHeading = styled.h1`
  font-size: 250%;
  margin: 0.2em 0;
  padding-left: 24px;
  border-left: 8px solid #1e1e1e;
`;

export const MyList = styled.ul`
  list-style: square;
`

export const MyListItem = styled.li`
  margin-bottom: 0.7em;
`

export const MyListTag = styled.strong`
  color: white;
  background-color: #1e1e1e;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  font-size: 90%;

  white-space: nowrap;

  margin-right: 0.5em;
`

export const MyListTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.2em;
  line-height: 1.5;
`

export const MyListSubtitle = styled.span`
  font-size: 70%;
  color: #37373F;
  margin: 0;
`