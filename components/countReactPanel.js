import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class CountReactPanel extends Component {
  _renderReactionType() {
    const { countReaction } = this.props;
    let items = []
    countReaction.forEach(element => {
      items.push(
        <View style={styles.countDetails} key={element.id}>
          <Text style={styles.totalNumber}>{element.total}</Text>
          <Text style={styles.typeCount}>{element.type}</Text>
        </View>
      );
    });
    return items;
  }
  render() {
    return (
      <View style={styles.countGroup}>
        {this._renderReactionType()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  countGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  countDetails: {
    alignItems: "center"
  },
  totalNumber: {
    fontSize: 20,
    fontWeight: "500"
  },
  typeCount: {
    color: "grey",
    paddingTop: 5
  },
  imageGroup: {
    flex: 7.5
  }
});
