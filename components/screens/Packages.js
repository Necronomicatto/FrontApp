import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { List } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Packages({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={40}
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />

        <Text style={styles.tit2}>Encomendas</Text>
      </View>

      {/* Wrap List.Item inside a ScrollView or View with width */}
      <ScrollView style={{ width: "80%", marginTop: '40' }}>
        <List.Item
          title="item 1"
          titleStyle={{ color: "#333333", fontWeight: "bold" }}
          right={(props) => (
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color="#333333"
            />
          )}
          style={styles.listItem} // Added styling for better layout
        />
        <List.Item
          title="item 2"
          titleStyle={{ color: "#333333", fontWeight: "bold" }}
          right={(props) => (
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color="#333333"
            />
          )}
          style={styles.listItem} // Added styling for better layout
        />
        <List.Item
          title="item 3"
          titleStyle={{ color: "#333333", fontWeight: "bold" }}
          right={(props) => (
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color="#333333"
            />
          )}
          style={styles.listItem} // Added styling for better layout
        />
        <List.Item
          title="item 4"
          titleStyle={{ color: "#333333", fontWeight: "bold" }}
          right={(props) => (
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color="#333333"
            />
          )}
          style={styles.listItem} // Added styling for better layout
        />
        <List.Item
          title="item 5"
          titleStyle={{ color: "#333333", fontWeight: "bold" }}
          right={(props) => (
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color="#333333"
            />
          )}
          style={styles.listItem} // Added styling for better layout
        />
        <List.Item
          title="item 6"
          titleStyle={{ color: "#333333", fontWeight: "bold" }}
          right={(props) => (
            <MaterialCommunityIcons
              name="check-bold"
              size={24}
              color="#333333"
            />
          )}
          style={styles.listItem} // Added styling for better layout
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 24,
    flex: 1,
  },

  title: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },

  tit2: {
    fontSize: 24,
    //fontWeight: "bold",
    marginLeft: 10,
  },

  icon: {
    margin: 8,
  },

  listItem: {
    backgroundColor: "white", // Ensures it’s visible
    borderBottomWidth: 1,
    borderBottomColor: "#ddd", // Adds a separator line
  },
});
