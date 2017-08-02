import React  from 'react';
import { View } from 'react-native';

import Content from '../components/ContentNews';

class NewsScreen extends React.Component {
  render(){
    return(
      <View>
        <Content />
      </View>
    )
  }
}

export default NewsScreen;
