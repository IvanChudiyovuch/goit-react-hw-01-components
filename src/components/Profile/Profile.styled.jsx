import styled from "@emotion/styled";

export const Container = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
line-height: 1.5;
background-color: #fff;
color: #2f2f37;
text-align: center;
margin: 0;
padding: 8px;
border: 2px dashed black;
border-radius: 4px;
width: 240px;
height: 240px;
`

export const UserImg = styled.img`
margin-bottom: 15px;
`

export const UserName = styled.p`
margin: 0 0 5px 0;
font-weight: 700;
font-size: 28px;
`

export const UserTag = styled.p`
margin: 0 0 5px 0;
font-weight: 400;
font-size: 18px;
`

export const UserLocation = styled.p`
margin: 0 0 5px 0;
font-weight: 400;
font-size: 18px;
`

export const UserStats = styled.ul`
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
gap: 10px;
margin: 0;
background-color: #afb1b8;;
list-style-type: none;
`

export const StatsElement = styled.li`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
padding: 2px;
border-right: 1px dashed black;
`

export const StatsElementInfo = styled.span`
font-weight: 700;
`