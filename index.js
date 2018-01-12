// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () =>  (
  <View>
    <Header headerText={'First App by Tossaphol'} />
    <AlbumList />
  </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);