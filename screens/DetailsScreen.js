'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class DetailsScreen extends Component {
	static navigationOptions = ({ navigation }) => {
  const {state, setParams} = navigation;
  const isInfo = state.params.mode === 'info';
  const {user} = state.params;
  return {
    title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
    headerRight: (
      <Button
        title={isInfo ? 'Done' : `${user}'s info`}
        onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
      />
    ),
  };
};
  render() {

  	const { params } = this.props.navigation.state;
  	const {goBack} = this.props.navigation;
    return (
      <View style={ styles.container }>
      	<Text> {params.username}</Text>
      	<Button
          onPress={() => goBack()}
          title="Go back from this detailsScreen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default DetailsScreen;