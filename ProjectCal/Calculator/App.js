import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonsInput from './Button'

const buttons = [
  ['DEL'],
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['.', '0', '=', '/'],
]

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '0',
      ans: '0',
      Checkdot: 'Not Dot',
      Operator: null
    }
    this.handleOnpress = this.handleOnpress.bind(this)
  }

  handleOnpress = (inputvalue) => {
    const {value, Checkdot, Operator} = this.state

    switch(inputvalue){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (Operator !== null){
          this.setState({
            Operator: null
          })
        }
        this.setState({
          value: (value === '0') ? inputvalue : value + inputvalue
        })
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          Operator: inputvalue,
          value: (Operator !== null ? value.substring(0, value.length-1): value) + inputvalue,
          Checkdot: 'Not Dot'
        })
        break;
      case '=':
        this.setState({
          ans: eval(value)
        })
        break;
      case 'DEL':
        let number = value.toString();
        let deletenum = number.substring(0, number.length-1);
        let lengthnumber = number.length;
        this.setState({
          value: lengthnumber == 1 ? '0' : deletenum
        })
        break;
      case '.':
        let lastnum = value.toString().slice(-1)
        let checkdot = Checkdot
        if (checkdot == 'Not Dot'){
          this.setState({
            value: lastnum === '.' ? value:value+inputvalue,
            Checkdot: 'Has Dot'
          })
          break;
        }
    }
  }

  Buttons(){
    let layout = buttons.map((buttonRow, indexButtonRow) => {
      let buttonItem = buttonRow.map((rowItem, rowIndex) => {
        return <ButtonsInput key={rowIndex} value={rowItem} handleOnpress={() => {this.handleOnpress(rowItem)}}/>
      });
      return <View key={indexButtonRow} style={styles.inputRow}>{buttonItem}</View>
    })
    return layout
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.OperationalScreen}>
          <Text style={styles.TextOperational}>{this.state.value}</Text>
        </View>
        <View style={styles.ResultScreen}>
          <Text style={styles.TextResult}>{this.state.ans}</Text>
        </View>
        <View style={styles.InputScreen}>{this.Buttons()}</View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  OperationalScreen:{
    flex: 2,
    backgroundColor: 'black'
  },
  ResultScreen:{
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  InputScreen:{
    flex: 6,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },
  TextOperational: {
    color: 'white',
    textAlign: 'right',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  },
  TextResult: {
    color: 'white',
    textAlign: 'right',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
  }
});
