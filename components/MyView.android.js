import React from "react";
import { View, Text } from "react-native";

class MyView extends React.Component {
  render() {
    return (
      <View>
        <Text>This is only loaded on Android.</Text>
      </View>
    );
  }
}
export default MyView;
