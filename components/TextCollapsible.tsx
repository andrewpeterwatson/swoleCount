import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

interface IProps {
    Children: string;
}
interface IState {}

export default class TextCollapsible extends React.Component<IProps, IState> {

    render() {
        const { children, right, left } = this.props
        console.log('children', children, this.props)
        return (
            <Text style={[styles.fontStyle, right && {marginRight: right}, left && {marginLeft: left}]}>
                { children }
            </Text>
        )
    }
}


const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 20,
        color: 'grey',
    }
})
