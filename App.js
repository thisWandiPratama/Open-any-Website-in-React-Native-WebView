import React, { Component } from 'react';
import { Image, View, WebView, StyleSheet, TouchableOpacity, Linking, YellowBox } from 'react-native';

const Reload = require('../../image/beranda/absensi/refresh_page.png')

export default class Quiz extends Component {
  static navigationOptions =
  {
     title: 'Halaman Guru  ',
   
  };
  constructor(props) {
    super(props);
    this.reload = this.reload.bind(this);
  }
  
  reload() {
    this.webview.reload();
  }
  render() {
    YellowBox.ignoreWarnings(['WebView']);
      
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <WebView
          ref={ref => (this.webview = ref)}
          source={{ uri: 'http://smandaprabumulih.com/latihansoal/admin.php' }}
          onError={console.error.bind(console, 'error')}
          bounces={false}
          onShouldStartLoadWithRequest={() => true}
          javaScriptEnabledAndroid={true}
          startInLoadingState={true}
          style={{ flex: 1 }}
        />
          <View style={{flexDirection:'row', margin:5,justifyContent:'center', backgroundColor:'white'}}>
                <TouchableOpacity onPress={this.reload}>
                      <Image source={Reload} style={{height:30,width:30}}/>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => {Linking.openURL('https://www.drive.google.com/drive/folders/1ipKTetDPVRAe6lo4XAxY8EhGq8V1Gfh4?usp=sharing');}}>
                    <Image source={Download} style={{height:30,width:30}}/>
                </TouchableOpacity> */}
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 fab: { 
    width: 40, 
    height: 40, 
    justifyContent: 'center', 
    },

});
