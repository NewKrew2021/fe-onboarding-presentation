import styled from "styled-components";

export const MyHero = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: relative;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  color: #1e1e1e;
  background-color: #ffffff;
  padding: 3rem 8% 5rem 8%;
  text-align: left;
`;

export const MyHeading = styled.h1`
  font-size: 220%;
  margin: 0.1em 0 0.45em 0;
  padding-left: 24px;
  border-left: 8px solid #1e1e1e;
`;

export const MySubHeading = styled.h1`
  font-size: 100%;
  font-weight: normal;
  margin: 0 0 0.5em 0;
`;

export const CenterItalic = styled.p`
  font-size: 80%;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  padding: 1em 0;
  width: 100%;
`

export const Slide = styled.div`
  width: 750px;
  margin: auto;
  position: relative;
`

export const LargeSlide = styled.div`
  width: 900px;
  margin: auto;
  position: relative;
`

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

export const YoutubeWrapper = styled.div`
  flex: 1;
  position: relative;
  width: auto;
  height: 100%;
  padding-bottom: 56.25%;
  border-radius: 1.5em;
  border: 6px solid #1e1e1e;
  overflow: hidden;
`

export const Youtube = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
`