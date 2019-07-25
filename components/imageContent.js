import React, { Component } from "react";
import { 
  StyleSheet, 
  View, 
  ScrollView
 } from "react-native";
import ImageDetails from "./imageDetails";

export default class ImageContent extends Component {
  renderItems(content) {
    const items = [];
    if (content) {
      content.forEach(element => {
        items.push(<ImageDetails key={element.id} imageElement={element} />);
      });
    }
    return items;
  }

  render() {
    const { imageData } = this.props;
    let arrayMiddleValue = Math.floor(imageData.length / 2);

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View style={[styles.imageItem, { paddingRight: 12.5 }]}>
          {this.renderItems(imageData.slice(0, arrayMiddleValue))}
        </View>
        <View style={[styles.imageItem, { paddingLeft: 12.5 }]}>
          {this.renderItems(imageData.slice(arrayMiddleValue))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageItem: {
    flexDirection: "column"
  }
});
