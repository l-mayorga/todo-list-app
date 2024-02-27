import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import Task from "./components/Task";
import AddTaskView from "./components/AddTask";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        {/* add style sectionTitle */}
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <View style={styles.itemWrapper}>
          <Task name="Task 1" />
          <Task name="Task 2" />
          <Task name="Task 3" />
          {/* <Task name="Task 4" />
          <Task name="Task 5" />
          <Task name="Task 6" /> */}
        </View>
      </View>
      {/* Add task view passing in a function that consol.logs */}
      <AddTaskView onPress={() => console.log("Adding")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F1F1",
  },
  taskWrapper: {
    marginTop: 80,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
  },
  itemWrapper: {
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 30,
  },
  itemText: {
    fontSize: 24,
    marginBottom: 17,
  },
});
