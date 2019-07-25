import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";
import ImageContent from "./imageContent";
import InforUserPanel from "./inforUserPanel";
import CountReactPanel from "./countReactPanel";
import NavigationBarTop from "./navigationBarTop";
import NavigationBarBottom from "./navigationBarBottom";

export default class HomeScreen extends Component {
  render() {
    const { content, informationUser } = this.props;
    return (
      <View flex center style={styles.mainContainer}>
        <View style={{ flex: 0.5, paddingHorizontal: 30 }}>
          <NavigationBarTop />
        </View>
        <View style={{ flex: 1.5 }}>
          <InforUserPanel informationUser={informationUser} />
        </View>
        <View style={{ flex: 1 }}>
          <CountReactPanel countReaction={informationUser.countReaction} />
        </View>
        <View style={{ flex: 6.5 }}>
          <ImageContent imageData={content} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 30 }}>
          <NavigationBarBottom />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight
  }
});
