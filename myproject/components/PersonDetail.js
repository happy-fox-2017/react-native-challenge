import React from 'react';
import { Text, View } from 'react-native';

const PersonDetail = ({ person }) => (
  <View>
    <Text>Person : {person.name}</Text>
    <Text>Eye Color : {person.eye_color}</Text>
  </View>
);

export default PersonDetail;
