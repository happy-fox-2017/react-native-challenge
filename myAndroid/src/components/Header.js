import React from 'react'
import { connect } from 'react-redux'
import {
    Header,
    Left,
    Button,
    Right,
    Body,
    Title,
    Icon,
    Container
} from 'native-base'

import TabInfo from './TapHome'
import { fetchNewsArticles } from '../redux/actions'

class HeaderComponent extends React.Component {
    hendleClick () {
        this.props.getListNews()
    }

    render () {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>AvatarNews</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={ () => this.hendleClick() }>
                            <Icon name="refresh" />
                        </Button>
                    </Right>
                </Header>
                <TabInfo />
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListNews: () => { dispatch(fetchNewsArticles()) }
    }
}

export default connect(null, mapDispatchToProps)(HeaderComponent)