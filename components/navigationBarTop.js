import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class NavigationBarTop extends Component {
  render() {
    return (
      <View style={styles.imageItem}>
        <Feather
          name="arrow-left"
          size={25}
          color="grey"
          style={{marginRight:'auto'}}
        />
        <Feather
          name="maximize"
          size={20}
          color="grey"
          style={{marginLeft:'auto'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageItem: {
    flex:1,
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});
