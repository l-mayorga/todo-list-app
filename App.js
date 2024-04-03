import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Task from "./components/Task";
import AddTaskView from "./components/AddTask";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = async (task) => {
    setTaskItems([...taskItems, task]);
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify([...taskItems, task]));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (taskName) => {
    console.log("Task is being deleted");
    const newTasks = taskItems.filter((task) => task !== taskName);
    setTaskItems(newTasks);
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(newTasks));
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleComplete = async (taskName) => {
    const newTasks = taskItems.filter((task) => task !== taskName);
    setTaskItems([...newTasks, taskName]);
    try {
      await AsyncStorage.setItem(
        "tasks",
        JSON.stringify([...newTasks, taskName])
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await AsyncStorage.getItem("tasks");
        if (tasks) {
          setTaskItems(JSON.parse(tasks));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
  }),
    [];

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        {/* add style sectionTitle */}
        <Text style={styles.sectionTitle}> Today's Tasks </Text>
        <View style={styles.itemWrapper}>
          <FlatList
            data={taskItems}
            renderItem={({ item }) => (
              <Task
                name={item}
                onDelete={handleDeleteTask}
                onComplete={handleToggleComplete}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
        </View>
      </View>
      {/* Add task view passing in a function that consol.logs */}
      <AddTaskView onPress={handleAddTask} />
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
