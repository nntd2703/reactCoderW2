import React, { Component } from "react";
import { 
    StyleSheet, 
    View, 
    Image, 
    ImageBackground } from "react-native";

export default class ImageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { imageElement } = this.props;
    return (
      <View style={{ paddingBottom: 25 }}>
        <ImageBackground
          fadeDuration={0}
          style={styles.image}
          imageStyle={{ borderRadius: 10 }}
          onLoadEnd={() => {
            this.setState({
              isLoading: false
            });
          }}
          source={{
            uri: imageElement.download_url
          }}
        >
          {this.state.isLoading && (
            <Image
              style={styles.image}
              source={{
                uri:
                  "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
              }}
            />
          )}
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: { width: 150, height: 150 }
});
