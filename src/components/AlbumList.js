import React, { Component } from "react";
import { Text, View } from "react-native";

// const AlbumList = () => {
class AlbumList extends Component {
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
};

export default AlbumList;