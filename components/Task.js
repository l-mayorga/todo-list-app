import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const Task = ({ name, onDelete, onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    console.log("Task has been completed");
    setIsComplete(!isComplete);
    if (!isComplete) {
      onComplete(name);
    }
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handleComplete}>
        <View style={styles.rectangle}>
          {isComplete && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </TouchableOpacity>
      <Text style={isComplete ? styles.completedText : styles.itemText}>
        {name}
      </Text>
      <TouchableOpacity>
        <Text
          style={[styles.deleteButton, { marginLeft: "auto" }]}
          onPress={onDelete.bind(this, name)}
        >
          {/* VERY jank just adding tabs before the  X */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌
        </Text>
      </TouchableOpacity>
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
  checkmark: {
    color: "black",
    fontSize: 20,
    marginLeft: 3,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "grey",
    fontSize: 24,
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 16,
  },
  deleteButton: {
    fontSize: 24,
  },
});
