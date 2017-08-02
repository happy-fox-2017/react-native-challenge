import React  from 'react';
import {
  View,
  Picker,
  Item,
  Text
} from 'react-native';

class SelectSources extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected : '' || 'abc-news-au'
    }
  }

  render(){
    const sources = this.props.sources
    if(sources){
      return(
        <View>
          <Picker
            selectedValue={this.state.selected}
            onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
          {
            sources.map((source, index)=>{
              return(
                <Picker.Item label={source.name} value={source.id} key={index}/>
              )
            })
          }
          </Picker>
        </View>
      )
    }
  }
}

export default SelectSources;
