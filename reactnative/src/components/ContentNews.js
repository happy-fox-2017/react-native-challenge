import React from 'react'
import {
     StyleSheet,
     Text,
     View,
     Picker,
     Item
} from 'react-native'
import axios from 'axios'

import SelectNews from './SelectNews'
import ListNews from './ListNews'

const styles = StyleSheet.create({
     content: {
          margin:5
     }
})

class Content extends React.Component  {
     constructor() {
          super()
          this.state={
               language:'',
               sources:[],
               news:[]
          }
     }

     setSelectNews(sources) {
          this.setState({
               sources
          })
     }

     setDataNews(news) {
          this.setState({
               news
          })
     }
     getSelectNews(){
          axios.get('https://newsapi.org/v1/sources?language=en&apiKey=fabbc131990a4fe48ebea6380db16848')
          .then(response=>{
               this.setSelectNews(response.data.sources)
          })
          .catch((err) => {
               console.log(err);
          })
     }

     getDataNews() {
          axios.get('https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=fabbc131990a4fe48ebea6380db16848')
          .then(response =>{
               this.setDataNews(response.data.articles)
          })
          .catch((err) => {
               console.log(err);
          })
     }

     render(){
          return(
               <View style={styles.content}>
                    <SelectNews sources={this.state.sources} />
                    <ListNews news={this.state.news} />
               </View>
          )
     }

     componentDidMount() {
          this.getSelectNews()
          this.getDataNews()
     }
}

export default Content
