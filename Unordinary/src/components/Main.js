import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'
import moment from 'moment'

import Axios from 'axios'

const TOTAL_NEWS_ITEMS = 20
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

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      title: 'Unordinary Reader',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      news: {},
      loaded: false,
      animating: true
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('news_items').then((news_items_str) => {
      const news_items = JSON.parse(news_items_str)
        if(news_items !== null) {

          AsyncStorage.getItem('time').then((time_str) => {
            const time = JSON.parse(time_str)
            const last_cache = time.last_cache
            const current_datetime = moment()

            const diff_hours = current_datetime.diff(last_cache, 'hours')

            if(diff_hours > 0) {
              this.getNews()
            } else {
              this.updateNewsItemsUI(news_items)
            }
          });

        } else {
          this.getNews()
        }
    }).done()
  }

  getNews() {
    const TOP_STORIES_URL = 'https://hacker-news.firebaseio.com/v0/topstories.json'

    AsyncStorage.setItem('time', JSON.stringify({'last_cache': moment()}))

    Axios(TOP_STORIES_URL)
    .then((res) => {
      console.log(res)
      console.log(res.data)
      this.getDetail(res.data)
    }).catch((error) => console.log('Uh oh! Top Stories error..', error) )
  }

  getDetail(data) {
    const news_items = []

    for(let x = 0; x <= 30; x++) {
      const story_url = "https://hacker-news.firebaseio.com/v0/item/" + data[x] + ".json"
      Axios(story_url)
      .then((res) => {
        console.log(news_items)
        console.log(res.status, "STATUUUUUS")
        if (res.status === 200) news_items.push(res.data)
        console.log(news_items.length)

        this.updateNewsItemsUI(news_items)
        this.updateNewsItemDB(news_items)

      }).catch((error) => console.log('Uh oh! Story error..', error) )
    }

  }

  updateNewsItemsUI(news_items) {
    if(news_items.length === TOTAL_NEWS_ITEMS) {
      const ds = this.state.dataSource.cloneWithRows(news_items)
      this.setState({
        'news': ds,
        'loaded': true,
        'animating': false
      })
    }
  }

  updateNewsItemDB(news_items) {
    if(news_items.length === TOTAL_NEWS_ITEMS) {
      AsyncStorage.setItem('news_items', JSON.stringify(news_items))
    }
  }

  renderNews(news) {
    const { navigate } = this.props.navigation

    return (
      <TouchableHighlight onPress={() => navigate('News', { url: news.url })} underlayColor={"#E8E8E8"} style={styles.button}>
        <View style={styles.news_item}>
          <Text style={styles.news_item_text}>{news.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  // viewPage() {
  //   this.props.navigation.navigate('News')
  // }

  // {this.viewPage.bind(this, news.url)}

  // viewPage(url) {
  //   //this.props.navigator.push({name: 'web_page', url: url});
  //   console.log(this.props.navigation, "navigation renderNews")
  // }


  render() {
    console.log("Oh yeah..")

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.header_item}>
            <Text style={styles.header_text}>{this.state.title}</Text>
          </View>
          <View style={styles.header_item}>
            {  !this.state.loaded &&
              <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="large"
                color={brokenWhite}
              />
            }
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView>
            {
              !this.state.animating && this.state.loaded &&
              <ListView initialListSize={1} dataSource={this.state.news} style={styles.news} renderRow={this.renderNews.bind(this)}></ListView>
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}
