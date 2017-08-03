import React from 'react'
import { connect } from 'react-redux'
import { fetchNewsArticles } from '../redux/actions'
import {
    Image,
    Linking
} from 'react-native'
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Button,
    Text,
    Icon,
    Left,
    Right,
    H3,
    Spinner
} from 'native-base'

class News extends React.Component {
    componentDidMount () {
        this.props.getListNews()
    }

    render () {
        return (
            <Container>
            {this.props.listNews.length !== 0 ? (
                <Content>
                { this.props.listNews.map( (news, index) => {
                   return <Card key={index}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <H3>{ news.author }</H3>
                                    <Text note>{ news.publishedAt }</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                                <Image source={{uri: news.urlToImage }} style={{height: 200, width: '100%', flex: 1}} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{fontSize: 15}}>{ news.title }</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Content>
                                    <Button rounded full info onPress = {() => Linking.openURL(news.url)}>
                                        <Text>Read Now</Text>
                                    </Button>
                                </Content>
                            </Left>
                        </CardItem>
                    </Card>
                    })}
                </Content>
            ) : (
                <Content>
                    <Spinner />
                </Content>
            )}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listNews: state.listNews.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListNews:() => { dispatch(fetchNewsArticles()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)