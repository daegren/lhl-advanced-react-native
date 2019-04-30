import React from "react";
import { FlatList, Image, StyleSheet } from "react-native";

const SearchResults = ({ images }) => (
  <FlatList
    style={styles.main}
    data={images}
    renderItem={({ item }) => <SearchResult item={item} />}
  />
);
export default SearchResults;

const SearchResult = ({ item }) => (
  <Image style={styles.image} source={{ uri: item.url }} />
);

const styles = StyleSheet.create({
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
