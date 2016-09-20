import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

import HomeViewCell from './homeCell.js'

export default class Home extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{name:'Jacky',source:'../../../imgSrc/jacky.jpg',id:'1'},
                                    {name:'Jasmine',source:'',id:'2'},
                                    {name:'Luna',source:'',id:'3'},
                                    {name:'Hermine',source:'',id:'4'},]),
    };
  }
  render(){
      return(
        <View style ={styles.totalBgView}>
          <ListView style = {styles.listView}
                    dataSource = {this.state.dataSource}
                    renderRow={(rowData) => <HomeViewCell object = {rowData} navigator = {this.props.navigator} />}/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  totalBgView :{
    backgroundColor : 'white',
    flex : 1,
    flexDirection:'column'
  },
  listView : {
    marginTop :44
  }

});
