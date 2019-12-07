import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AppTodo from "./components/appTodo";
import uuid from "uuid";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffe", id: "1" },
    { text: "create an app", id: "2" },
    { text: "play games", id: "3" }
  ]);
  addTaskHandler = task => {
    const newId = uuid();
    if (task.length > 3) {
      setTodos(prevTodos => {
        return [{ text: task, id: newId }, ...prevTodos];
      });
      console.log(todos);
    } else {
      Alert.alert("OOPS", "todosmust be over3 charts long", [
        { text: "Understood", onPress: () => console.log("alert is closed") }
      ]);
    }
  };

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AppTodo addTodo={addTaskHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
