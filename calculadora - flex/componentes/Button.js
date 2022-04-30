import React from 'react'
import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default props=> {
    const styleButton=[styles.btn]

  
    if(props.igual){
        styleButton.push(styles.btnIgual)
    }
    if(props.op){
        styleButton.push(styles.btnOp)
    }
    if(props.ac){
        styleButton.push(styles.btnAc)
    }
    if(props.bs){
        styleButton.push(styles.btnBs)
    }

    return(
        <TouchableHighlight
        onPress={props.aoClicar}
        >
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btn: {
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#A9A9A9',
        color: 'black',
        borderWidth: 1,
        borderColor: '#696969',
        alignItems: 'center'

    },
    btnIgual: {
        backgroundColor: 'orange',
        color: '#fff'
    },
    btnOp: {
        backgroundColor: 'orange',
        color: '#fff'
    },
    btnAc: {
        color: '#ff0'
    },
    btnBs: {
        color: 'blue'
    },
})