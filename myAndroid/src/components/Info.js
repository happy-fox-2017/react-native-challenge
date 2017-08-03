import React from 'react'
import { Image } from 'react-native'
import {
    Container,
    Card,
    CardItem,
    Content,
    Text,
    Item,
    Input,
    Button,
    Label,
    Icon,
    Spinner,
    H3
} from 'native-base'
export default class Info extends React.Component {
    constructor () {
        super()
        this.state = {
            name: '',
            url: ''
        }
    }

    actionHandle (name) {
        let api = `https://api.adorable.io/avatar/255/${name}.png`
        return this.setState({url: api})
    }

    render () {
        return (
            <Container>
                <Card>
                    <CardItem>
                        <H3>About Your Avatar</H3>
                    </CardItem>
                    <CardItem>
                        <Item floatingLabel>
                            <Label>
                                Input Your Name
                            </Label>
                            <Input onKeyPress={(name) => this.setState({name})} />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Button full onPress={() => this.actionHandle(this.state.name)}><Text>Create Avatar</Text></Button>
                    </CardItem>
                    <CardItem>
                        {this.state.url !== '' ? (
                        <Image square source={{uri: this.state.url}} style={{height: 200, width: '100%', flex: 1}} />
                        ) : (
                        <Content>    
                            <Spinner />
                        </Content>
                        )}
                    </CardItem>
                </Card>
            </Container>
        )
    }
}