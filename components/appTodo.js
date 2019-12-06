import React, { Component, useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
const AppTodo = () => {
  const [text, setText] = useState("");
  const changeTextHandler = val => {
    setText(val);
  };
  // console.log(text);

  return (
    <View>
      <TextInput
        placeholder={"...new todo"}
        onChangeText={changeTextHandler}
        style={styles.input}
      />
      <Button
      title={'add item'}
      color={'coral'}
      onPress={() =>  console.log('click') }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});

export default AppTodo;
