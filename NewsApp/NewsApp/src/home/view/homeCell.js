import React , {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

export default class HomeViewCell extends Component {
  constructor(props) {
      super(props);
  }

  render(){
    return(
      <View style = {styles.cellView} >
        <View style = {styles.cellTopView}>
          <Image style = {styles.cellImage}></Image>
          <Text style = {styles.cellNameText}>{this.props.object.name}</Text>
        </View>
        <View style = {styles.bottomLineView}></View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  cellView : {
    flex : 1,
    flexDirection : 'column',
    height : 44
  },
  cellTopView : {
    height:40,
    flex: 1,
    flexDirection : 'row'
  },
  cellImage : {
    marginTop : 5,
    marginLeft : 5,
    width: 34,
    height: 34,
    backgroundColor : 'red'
  },
  cellNameText : {
    fontSize : 13,
    color : 'black',
    marginTop : 5,
    marginLeft :10

  },
  bottomLineView : {
    height:1,
    marginLeft : 5,
    marginRight :5,
    marginTop:4,
    opacity:0.5,
    backgroundColor : 'darkslateblue'
  }
});
