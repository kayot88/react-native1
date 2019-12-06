import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AppTodo from "./components/appTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffe", id: "1" },
    { text: "create an app", id: "2" },
    { text: "play games", id: "3" }
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AppTodo />
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
