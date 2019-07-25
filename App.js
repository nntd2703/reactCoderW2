import React, { Component } from "react";
import { AppRegistry, View, StyleSheet, Platform } from "react-native";
import HomeScreen from "./components/homeScreen";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      informationUser: {
        userName: "Dat Nguyen",
        currentJob: "Developer",
        countReaction: [{
            id: "1",
            type: "Photos",
            total: "210",
          }, {
            id: "2",
            type: "Follower",
            total: "15k",
          }, {
            id: "3",
            type: "Following",
            total: "605",
          }
        ]
      },
      content: "",
    };
  }

  componentDidMount() {
    fetch(`https://picsum.photos/v2/list`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      timeout: 10000
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ content: responseJson });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { content, informationUser,  } = this.state;
    return (
      <HomeScreen content={content} informationUser={informationUser} />
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});

AppRegistry.registerComponent("App", () => App);
