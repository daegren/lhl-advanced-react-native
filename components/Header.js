import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  render() {
    return (
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
    );
  }

  _handleTextChange = searchTerm => {
    this.setState({ searchTerm });
  };

  _handleSearchButton = () => {
    const { searchTerm } = this.state;
    const { onSearch } = this.props;
    this.setState({ searchTerm: "" });
    onSearch(searchTerm);
  };
}
export default Header;

const styles = StyleSheet.create({
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
  }
});
