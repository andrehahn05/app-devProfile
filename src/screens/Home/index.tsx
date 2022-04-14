import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, color: '#fff'}}>Home</Text>
    </View>
  );
};

export default Home;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#2e2e2e',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
