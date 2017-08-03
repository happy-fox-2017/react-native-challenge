import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native'
// import moment from 'moment'

import Axios from 'axios'

const TOTAL_NEWS_ITEMS = 10
const white = '#FFF'
const brokenWhite = '#F6F6EF'
const gray = '#F0F0F0'
const black = '#575757'
const orange = '#FF6600'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: orange,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  body: {
    flex: 9,
    backgroundColor: brokenWhite
  },
  header_item: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center'
  },
  header_text: {
    color: white,
    fontWeight: 'bold',
    fontSize: 15
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  news_item: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 5
  },
  news_item_text: {
    color: black,
    fontSize: 18
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Unordinary Reader',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      news: {},
      loaded: false
    }
  }

  componentDidMount() {
    // AsyncStorage.getItem('news_items').then((news_items_str) => {
    //   let news_items = JSON.parse(news_items_str)
    //     if(news_items !== null) {
    //
    //       AsyncStorage.getItem('time').then((time_str) => {
    //         let time = JSON.parse(time_str)
    //         let last_cache = time.last_cache
    //         let current_datetime = moment()
    //
    //         let diff_days = current_datetime.diff(last_cache, 'days')
    //
    //         if(diff_days > 0) {
    //           this.getNews()
    //         } else {
    //           this.updateNewsItemsUI(news_items)
    //         }
    //       });
    //
    //     } else {
    //       this.getNews()
    //     }
    // }).done()
    this.getNews()
  }

  renderNews(news) {
    return (
      <TouchableHighlight onPress={news.url} underlayColor={"#E8E8E8"} style={styles.button}>
        <View style={styles.news_item}>
          <Text style={styles.news_item_text}>{news.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  // {this.viewPage.bind(this, news.url)}

  // viewPage(url) {
  //     this.props.navigator.push({name: 'web_page', url: url});
  // }

  getNews() {
    const TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json'
    // story_url = []

    // AsyncStorage.setItem('time', JSON.stringify({'last_cache': moment()}))

    Axios(TOP_STORIES_URL)
    .then((res) => {
      console.log(res)
      console.log(res.data)
      this.getDetail(res.data)
    }).catch((error) => console.log('Uh oh! Top Stories error..', error) )
  }

  getDetail(data) {
    let news_items = []

    for(let x = 0; x <= TOTAL_NEWS_ITEMS; x++) {
      let story_url = "https://hacker-news.firebaseio.com/v0/item/" + data[x] + ".json"
      Axios(story_url)
      .then((res) => {
        console.log(news_items)
        console.log(res.status, "STATUUUUUS")
        if (res.status === 200) news_items.push(res.data)
        console.log(news_items.length)

        this.updateNewsItemsUI(news_items)
        // this.updateNewsItemDB(news_items)

      }).catch((error) => console.log('Uh oh! Story error..', error) )
    }

  }

  updateNewsItemsUI(news_items) {
    //if(news_items.length === TOTAL_NEWS_ITEMS) {
      let ds = this.state.dataSource.cloneWithRows(news_items)
      this.setState({
        'news': ds,
        'loaded': true
      })
      console.log(this.state);
    //}
  }

  // updateNewsItemDB(news_items) {
  //   //if(news_items.length === TOTAL_NEWS_ITEMS) {
  //     AsyncStorage.setItem('news_items', JSON.stringify(news_items))
  //   //}
  // }

  render() {
    console.log("Oh yeah..")
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_text}>{this.state.title}</Text>
          </View>
          <View style={styles.header_item}>
            {  !this.state.loaded &&
              <Text>Loading, Please wait..
              </Text>
            }
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView ref="scrollView">
            {
              this.state.loaded &&
              <ListView initialListSize={1} dataSource={this.state.news} style={styles.news} renderRow={this.renderNews}></ListView>
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
