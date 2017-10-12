'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		headerPressColorAndroid : 'red'
	};
  render() {
  	const { navigate } = this.props.navigation;
  	
    return (
      <View style={styles.container}>

      	<Button
      		onPress={() => navigate('Detail',{user: 'Viet'})}
          	title="push me"
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default HomeScreen;