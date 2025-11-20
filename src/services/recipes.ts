import axios from "axios";

async function getRecipes(ingredients: string[]) {
  try {
    const { data } = await axios.get("http://localhost:3000/api/recipes", {
      params: {
        ingredients: ingredients.join(","),
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}

export { getRecipes };
