import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";
import ImageContent from "./imageContent";
import InforUserPanel from "./inforUserPanel";
import CountReactPanel from "./countReactPanel";

export default class HomeScreen extends Component {
  render() {
    const { content, informationUser } = this.props;
    return (
      <View  flex center style={styles.mainContainer}>
        <View style={{ flex: 1.5 }}>
          <InforUserPanel informationUser={informationUser} />
        </View>
        <View style={{ flex: 1 }}>
          <CountReactPanel countReaction={informationUser.countReaction}/>
        </View>
        <View style={{ flex: 7.5 }}>
          <ImageContent imageData={content} />
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
