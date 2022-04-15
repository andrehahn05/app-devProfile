import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)<propsContainer>`
  width: ${({width}) => (width ? width : '100%')};
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  padding: 18px;
  margin-top: ${RFValue(10)}px;
  margin-bottom: 10%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.dark};
`;

interface propsContainer {
  width: any;
}
