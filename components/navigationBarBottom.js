import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class NavigationBarBottom extends Component {
  render() {
    return (
      <View style={styles.imageItem}>
        <Feather
          name="wind"
          size={25}
          color="grey"
        />
        <Feather
          name="plus-circle"
          size={25}
          color="grey"
        />
        <Feather
          name="github"
          size={25}
          color="grey"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
