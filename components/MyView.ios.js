import React from "react";
import { View, Text } from "react-native";

class MyView extends React.Component {
  render() {
    return (
      <View>
        <Text>This is only loaded on iOS.</Text>
      </View>
    );
  }
}
export default MyView;
