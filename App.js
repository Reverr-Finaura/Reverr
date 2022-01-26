import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import StackNav from './Navigations/StackNav';
import AppColors from './Constaint/AppColors';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' backgroundColor={AppColors.primarycolor} />
      <StackNav />
    </View>
  );
};

export default App;
