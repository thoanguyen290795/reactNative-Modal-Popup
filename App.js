import React, {Component} from 'react';
import { Text, View, StyleSheet,Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modal from 'react-native-modal';


export default class ModalTester extends Component {
  render() {
    return (
     <View style={styles.content}> 
<Modal isVisible={true}>
        <Animatable.View animation="fadeIn" style={styles.messageBox}>
           <Text>Hello Thoa Nguyen</Text>
           <Animatable.View style={{ flexDirection:"row" }}>
           <Button title="Learn More" style={styles.btn} color="#841584"/>
           <Button title="Press me" style={styles.btn}  color="blue" />
           </Animatable.View>
        </Animatable.View>

 </Modal>
        </View>
 
     
    );
  }
}
let styles = StyleSheet.create({
  content:{
    backgroundColor:'#ebeef0',
    flex:1,
    alignItems:'center',
    flexDirection:"column",
    justifyContent:'center'
},
   messageBox:{
     backgroundColor:'orange',
       width:350,
       paddingTop:20,
       paddingBottom:30,
       paddingLeft:10,
       paddingRight:10, 
       borderRadius:10,
       alignItems:'center',
       justifyContent:'center'
   },

});