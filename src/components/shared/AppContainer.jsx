import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

function AppContainer({ children, withStatusBar = false }) {
  return (
    <View style={styles.container}>
      {withStatusBar && (<StatusBar style="auto" />)}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppContainer;
