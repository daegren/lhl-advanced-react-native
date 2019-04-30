import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import MyView from "./components/MyView";
import Header from "./components/Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      images: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header onSearch={this._handleSearch} />
        <FlatList
          style={styles.main}
          data={this.state.images}
          renderItem={({ item }) => (
            <Image style={styles.image} source={{ uri: item.url }} />
          )}
        />
      </View>
    );
  }

  _handleSearch = term => {
    const url = `https://www.reddit.com/r/aww/search.json?restrict_sr=true&sort=hot&type=link&q=${term}`;

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        const images = json.data.children.map(child => ({
          key: child.data.permalink,
          url: child.data.thumbnail
        }));

        this.setState({ images });
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 25,
    marginRight: 4,
    marginLeft: 4
  },
  main: {
    flex: 1,
    width: "100%"
  },
  image: {
    width: 140,
    height: 140,
    margin: 20
  }
});
