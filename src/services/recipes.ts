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

// Database
async function getBookmark({ id }: { id?: number }) {
  try {
    const { data } = await axios.get("http://localhost:3000/api/saved", {
      params: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching bookmarked recipes:", error);
    throw error;
  }
}

async function postBookmark(recipe) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/saved",
      recipe
    );
    console.log("Recipe bookmarked:", response.data);
    console.log("Status code:", response.status);
  } catch (error) {
    console.error("Error adding bookmark:", error);
    throw error;
  }
}

async function deleteBookmark({ id }: { id?: number }) {
  try {
    const response = await axios.delete("http://localhost:3000/api/saved", {
      params: {
        id: id,
      },
    });
    console.log(`Recipe at id: ${id} deleted:`, response.data);
    console.log("Status code:", response.data);
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    throw error;
  }
}

export { getRecipes, getBookmark, postBookmark, deleteBookmark };
