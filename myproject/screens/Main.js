import React from 'react';
import { Text, View, Button } from 'react-native';

import PeopleList from '../components/PeopleList';

const Main = ({ navigation }) => (
  <View>
    <PeopleList navigation={navigation} />
  </View>
);

export default Main;
