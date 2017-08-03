import React from 'react'
import {
    Container,
    Text,
    Content
} from 'native-base'

import { View } from 'react-native'
import HeaderComponent from './components/Header'

export default class App extends React.Component {

    render () {
        return (
        <Container>
            <HeaderComponent />
        </Container>
        )
    }
}