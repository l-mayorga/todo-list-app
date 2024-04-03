import { React, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";

const AddTaskView = ({ onPress }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task) {
      // task is empty, do nothing
      return;
    }
    onPress(task);
    Keyboard.dismiss();
    setTask("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.inputWrapper}
    >
      <TextInput
        value={task}
        style={styles.input}
        placeholder="Add a new task"
        onChangeText={setTask}
        onSubmitEditing={handleAddTask}
      />
      <TouchableOpacity style={styles.touchableOpacity}>
        <Text style={styles.touchableOpacityText} onPress={handleAddTask}>
          Add
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // add your styles
  input: {
    padding: 15,
    width: "%100",
    backgroundColor: "white",
    borderRadius: 10,
    flex: 1,
    marginLeft: 15,
  },
  inputWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 30,
    flexDirection: "row",
  },
  touchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  touchableOpacityText: {
    color: "#558CF6",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 16,
  },
});

export default AddTaskView;
