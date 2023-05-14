import { View, Text, StyleSheet } from "react-native";

import { Meals } from "../data/DummyData";

function MealsOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals overview screen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
