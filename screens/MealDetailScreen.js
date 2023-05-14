import { Text, Image, View } from "react-native";

import { MEALS } from "../data/DummyData";

import MealDetails from "./MealDetails";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />
      <View></View>
      <Text>Ingredients</Text>

      <Text>Seps</Text>
    </View>
  );
}

export default MealDetailScreen;
