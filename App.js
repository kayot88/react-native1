import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";

export default function App() {
  const [person, setPerson] = useState([
    { name: "Roman", id: "1" },
    { name: "Toman", id: "2" },
    { name: "Goman", id: "3" },
    { name: "Homan", id: "4" },
    { name: "Joman", id: "5" },
    { name: "Koman", id: "6" },
    { name: "Loman", id: "7" }
  ]);
  const pressItem = id => {
    setPerson(prevState => {
      return prevState.filter(person => person.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={person}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressItem(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {person.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // marginHorizontal:10,
    marginLeft: 10
    // alignItems: "center",
    // justifyContent: "center"
  }
});
