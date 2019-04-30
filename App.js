import React from "react";
import { StyleSheet, View, FlatList, Image } from "react-native";
import MyView from "./components/MyView";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

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
        <SearchResults images={this.state.images} />
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
  }
});
