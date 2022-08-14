import styled from "@emotion/styled";

export const Container = styled.div`
font-family: ${p => p.theme.fonts.body};
line-height: ${p => p.theme.monospace};
font-size: ${p=> p.theme.fontSizes.m};
font-weight: ${p=> p.theme.fontWeights.normal};
background-color: ${p => p.theme.colors.white};
color: ${p=> p.theme.colors.text};
text-align: center;
margin: 0;
margin: ${p=> p.theme.space[3]}px;
padding: ${p=> p.theme.space[3]}px;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: ${p=> p.theme.radii.normal};
width: 300px;
height: 300px;
`

export const UserImg = styled.img`
margin-bottom: ${p => p.theme.space[3]}px;
border-radius: ${p=> p.theme.radii.round};
`

export const UserName = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
font-size: ${p=> p.theme.fontSizes.l};
font-weight: ${p=> p.theme.fontWeights.bold};

`

export const UserTag = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;

`

export const UserLocation = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
`

export const UserStats = styled.ul`
display: flex;
flex-wrap: wrap;
text-align: center;
justify-content: center;
gap: ${p=>p.theme.space[3]}px;
margin: 0;
padding: 0;
list-style-type: none;
`

export const StatsElement = styled.li`
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
padding: ${p => p.theme.space[1]}px;
`

export const StatsElementInfo = styled.span`
margin-top: ${p => p.theme.space[1]}px;
font-weight: ${p=> p.theme.fontWeights.bold};
`