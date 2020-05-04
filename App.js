import React, { Component } from 'react';
import { StyleSheet, Text, View, Modal , Button} from 'react-native';

export default class  App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:false
    }
  }
  render() {
  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Text style={{fontSize: 50}}>Screen Text</Text>
    <Button title="Show Modal" onPress={()=> this.setState({show:true})}></Button>
      <Modal
      transparent={true}
      visible={this.state.show}>
      <View style={{backgroundColor: "#000000aa", flex:1}}>
        <View  style={{backgroundColor: "#ffffff", margin:50,padding:20, borderRadius: 10, flex: 1}}>
          <Text style={{fontSize: 30}}>Modal Text</Text>
          <Button title=" Close Modal" onPress={()=> this.setState({show:false})}></Button>
        </View>
      </View>

    </Modal>
    </View>
  );
}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
