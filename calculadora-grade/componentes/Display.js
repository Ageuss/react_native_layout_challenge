import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ColorPropType } from 'react-native';


export default props=> {
    return(
        <View style={styles.display}>
            <Text
            style={styles.textDisplayOp}
            numberOfLines={1}
            >{props.valor}
            </Text>
            <Text
            style={styles.textDisplayRes}
            numberOfLines={1}
            >{props.res}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#4F4F4F',
        width: '100%'
    },
    textDisplayRes: {
        fontSize: 50,
        color: '#fff'
    },
    textDisplayOp: {
        fontSize: 25,
        color: '#fff'
    }
})