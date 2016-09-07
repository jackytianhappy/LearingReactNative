import React,{Component} from 'React';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ListView,
  ScrollView,
  Image
}from 'react-native';


export default class MinePageRoot extends React.Component{
  constructor(props){
    super(props);

    this.state={

    }
  };


  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>我的界面</Text>
        </TouchableOpacity>


        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Image source={require('../../img/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>

      </View>
    );
  }
}

var  styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:64,
    flexDirection:'column',
    backgroundColor:'white'
  },
  button:{
    width:Dimensions.get('window').width,
    height:44,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent:'center',
  },
  scrollView:{
    marginTop:0,
    backgroundColor:'white'
  }

});