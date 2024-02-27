import React from "react";
import { View, Text, StyleSheet, ShadowStyleIOS } from "react-native";

const Task = ({ name }) => {
  return (
    <View style={styles.item}>
      <View style={styles.rectangle}></View>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  itemText: {
    fontSize: 24,
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 16,
    // backgroundColor: "white",
  },
  item: {
    borderRadius: 10,
    shadowRadius: 14,
    shadowOpacity: 0.1,
    shadowColor: "black",
    backgroundColor: "white",
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  rectangle: {
    borderRadius: 5,
    width: 24,
    height: 24,
    backgroundColor: "#8DDFDA",
    opacity: 0.4,
    marginLeft: 16,
  },
});
