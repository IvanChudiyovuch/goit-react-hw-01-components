import styled from '@emotion/styled';

export const ItemContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  margin: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  width: 300px;
  height: 50px;
`;

export const ItemText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
  text-align: center;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const SignalsState = styled.span`
  margin: auto 0;
  border-radius: ${p => p.theme.radii.round};
  width: 12px;
  height: 12px;

  background-color: ${({ bool, theme }) => {
    switch (bool) {
      case true:
        return theme.colors.accent;
      case false:
        return theme.colors.primary;
      default:
        return theme.colors.black;
    }
  }};
`;
