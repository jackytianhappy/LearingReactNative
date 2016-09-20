import React , {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

export default class HomeViewCell extends Component {
  constructor(props) {
      super(props);
  }

  _onPressButton = ()=>{
     const { navigator } = this.props;
     if (navigator) {
       alert(this.props.object.source);
     }
  }

  render(){
    return(
      <TouchableOpacity style = {styles.cellView} onPress={this._onPressButton}>
        <View style = {styles.cellTopView}>
          <Image style = {styles.cellImage}
                 source = {require('')}></Image>
          <Text style = {styles.cellNameText}>{this.props.object.name}</Text>
        </View>
        <View style = {styles.bottomLineView}></View>
      </TouchableOpacity>
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
