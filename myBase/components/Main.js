import React from 'react'
import { View } from 'react-native'
import {
    Button,
    Card,
    ListItem,
    Divider
} from 'react-native-elements'
import { } from 'react-native-elements/dist/list/ListItem'


const userDatas = [
    {
        name: 'kenji',
        desc: 'watashiha aaaa'
    },
    {
        name: 'koji',
        desc: 'watashiha bbb'
    },
    {
        name: 'kanji',
        desc: 'watashiha ccc'
    }
]

export default Main = () => {

    return (
        <View>
            <Card>
                {userDatas.map((user, i) => {
                    return (
                        <ListItem
                            key={i}
                            title={user.name}
                        />
                    )
                })}
            </Card>

            <Divider />
            <Button
                background="red"
                title="button"
            />
        </View>
    )
}