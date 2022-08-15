import styled from '@emotion/styled';

export const Container = styled.section`
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text};
  text-align: center;
  margin: 0;
  margin: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  width: 300px;
  height: 120px;
`;

export const TitleText = styled.h2`
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const StatsElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: ${p => p.theme.space[1]}px;
`;

export const StatsText = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  margin-top: ${p => p.theme.space[2]}px;
`;
