'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import HomeScreen from './screens/HomeScreen'
import DetailsSreen from './screens/DetailsScreen'

import { StackNavigator } from 'react-navigation'

const DemoNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailsSreen },
},
{
headerMode: 'screen' ,
});


const styles = StyleSheet.create({

});

export default DemoNavigation