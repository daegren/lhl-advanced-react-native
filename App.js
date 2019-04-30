import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  Image
} from "react-native";
import MyView from "./components/MyView";

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
        <View style={styles.header}>
          <TextInput
            style={styles.searchBar}
            returnKeyType="search"
            placeholder="Enter a search term"
            onChangeText={this._handleTextChange}
            value={this.state.searchTerm}
          />
          <Button title="🤯" onPress={this._handleSearchButton} />
        </View>
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

  _handleTextChange = searchTerm => {
    this.setState({ searchTerm });
  };

  _handleSearchButton = () => {
    const { searchTerm } = this.state;
    this.setState({ searchTerm: "" });
    this._handleSearch(searchTerm);
  };

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
  header: {
    flexDirection: "row",
    flex: 0
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "grey",
    padding: 4
  },
  search: {
    flex: 0
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
