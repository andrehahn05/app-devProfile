import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: '#fff'}}>SignIn</Text>
    </View>
  );
};

export default SignIn;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
