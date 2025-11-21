import { useState, useEffect } from "react";
import RecipeList from "../components/create-results/recipe/recipe-list";
import { getBookmark } from "../services/recipes";

export default function SavedRecipes() {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState([]);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const data = await getBookmark({});
        setBookmarkedRecipes(data);
      } catch (error) {
        console.error("Failed to load bookmarks", error);
        throw error;
      }
    };

    fetchBookmarks();
  }, []);

  return (
    <div className="mt-8">
      <RecipeList recipes={bookmarkedRecipes} />
    </div>
  );
}
