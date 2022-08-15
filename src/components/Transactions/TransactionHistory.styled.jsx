import styled from '@emotion/styled';

export const HeadTable = styled.th`
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal};
  width: 100px;
  height: 50px;
`;

export const CellTable = styled.th`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};

  background-color: ${p => p.theme.colors.colorcell};
  border: ${p => p.theme.borders.normal};
  width: 100px;
  height: 50px;
`;
