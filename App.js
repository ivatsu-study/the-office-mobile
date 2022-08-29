import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>
          Quotes, facts and information on NBC’s beloved mockumentary series The
          Office.
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text>Quotes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Episodes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Crew</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
