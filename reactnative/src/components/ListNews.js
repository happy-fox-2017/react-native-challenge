import React  from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  WebView
} from 'react-native';

class ListNews extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const news = this.props.news
    const {height, width} = Dimensions.get('window')
    if(news){
      return(
        <View style={{height:height-(height/5)}}>
          <ScrollView>
            {
              news.map((newInfo, index)=>{
                return(
                  <View key={index} style={{marginBottom:10}}>
                    <Text style={{fontWeight:'bold'}}>{newInfo.title}</Text>
                    <Text style={{fontSize: 10}}>{newInfo.author} || {newInfo.publishedAt}</Text>
                    <Image style={{width:width, height:height/4}} source={{uri:newInfo.urlToImage}}/>
                    <Text style={{fontSize: 12}}>{newInfo.description}</Text>
                    <WebView
                      source={{uri: newInfo.url}}
                      style={{marginTop: 10}}
                    />
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      )
    }
  }
}
export default ListNews;
