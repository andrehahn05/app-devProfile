import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.danger};
  margin-bottom: 16px;
`;
