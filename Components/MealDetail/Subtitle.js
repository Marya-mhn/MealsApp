import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitlecontainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e2b497",
    textAlign: "center",
  },
  subtitlecontainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
