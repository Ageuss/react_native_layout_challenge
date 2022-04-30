import React,{useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, TextInput } from 'react-native';
import Display from './componentes/Display';
import Btn from './componentes/Button'

let states = {
  screenValue: '',
  result:0,
  operated:false,
  point:false
}

export default function App() {

  const [vcreen,setVscreen]=useState(states.screenValue)
  const [vresult,setVresult]=useState(states.result)

  const addDigit=(d)=>{

    if((d == '+' || d == '-' || d == '*' || d == '/' ) && states.operated){
      states.screenValue=states.result
      states.result=0
    }

    states.screenValue=states.screenValue+d
    setVscreen(states.screenValue)
    setVresult(states.result)
    states.operated=false
  }

  const cleanScreen=()=>{
    states={
      screenValue: '',
      result:0,
      operated:false,
      point:false
    }
    setVscreen(states.screenValue)
    setVresult(states.result)
  }

  const operate=(d)=>{
    if(d == 'AC'){
      cleanScreen()
      return
    }
    if(d == 'BS'){
      states.vcreen = vcreen.substring(0,(vcreen.length-1))
      setVscreen(states.vcreen)
      return
    }
    try{
      states.result=eval(states.screenValue)
      states.operated=true
      setVresult(states.result)
    }catch{
      states.result= "Erro"
      states.operated=true
      setVresult(states.result)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <Display valor={vcreen} res={vresult}/>
        <View style={styles.buttons}>
         <Btn label='AC' ac aoClicar={()=>{operate('AC')}}></Btn>
         <Btn label='(' ac aoClicar={()=>{addDigit('(')}}></Btn>
         <Btn label=')' ac aoClicar={()=>{addDigit(')')}}></Btn>
         <Btn label='/' op aoClicar={()=>{addDigit('/')}}></Btn>
          <Btn label='7' aoClicar={()=>{addDigit('7')}}></Btn>
          <Btn label='8' aoClicar={()=>{addDigit('8')}}></Btn>
          <Btn label='9' aoClicar={()=>{addDigit('9')}}></Btn>
          <Btn label='*' op aoClicar={()=>{addDigit('*')}}></Btn>
          <Btn label='6' aoClicar={()=>{addDigit('6')}}></Btn>
          <Btn label='5' aoClicar={()=>{addDigit('5')}}></Btn>
          <Btn label='4' aoClicar={()=>{addDigit('4')}}></Btn>
          <Btn label='-' op aoClicar={()=>{addDigit('-')}}></Btn>
          <Btn label='1' aoClicar={()=>{addDigit('1')}}></Btn>
          <Btn label='2' aoClicar={()=>{addDigit('2')}}></Btn>
          <Btn label='3' aoClicar={()=>{addDigit('3')}}></Btn>
          <Btn label='+' op aoClicar={()=>{addDigit('+')}}></Btn>
          <Btn label='.' aoClicar={()=>{addDigit('.')}}></Btn>
          <Btn label='0' aoClicar={()=>{addDigit('0')}}></Btn>
          <Btn label='<-' bs aoClicar={()=>{operate('BS')}}></Btn>
          <Btn label='=' igual aoClicar={()=>{operate('=')}}></Btn>
        </View>
    </SafeAreaView>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

});
