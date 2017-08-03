import React from 'react'
import {
    Tabs,
    Tab,
    Text,
    Icon,
    TabHeading
} from 'native-base'

import News from './News'
import Info from './Info'

export default class TabHome extends React.Component {
    render () {
        return (
            <Tabs>
                <Tab heading={ <TabHeading><Icon name="people" /><Text>News</Text></TabHeading>}>
                    <News />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="information-circle" /><Text>Info</Text></TabHeading>}>
                    <Info />
                </Tab>
            </Tabs>
        )
    }
}