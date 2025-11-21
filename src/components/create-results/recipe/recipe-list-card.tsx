import { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import IngredientList from "../ingredient/ingredient-list";
import {
  getBookmark,
  postBookmark,
  deleteBookmark,
} from "../../../services/recipes";

export default function RecipeListCard({ recipe }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmark = async () => {
      try {
        const data = await getBookmark({ id: recipe.id });
        setBookmarked(data.length !== 0);
      } catch (error) {
        console.error("Failed to set bookmarks", error);
        throw error;
      }
    };
    checkBookmark();
  }, []);

  const ingredientsUsed: string[] = [];
  const images: string[] = [];
  recipe.usedIngredients.map((usedIngredient) => {
    ingredientsUsed.push(usedIngredient.name);
    images.push(usedIngredient.image);
  });

  return (
    <div className="flex gap-12 bg-white rounded-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full max-w-[28%] h-auto object-cover"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex gap-2 pt-4">
          <h2>{recipe.title}</h2>
          <button
            className="cursor-pointer"
            onClick={() => {
              if (bookmarked) {
                setBookmarked(false);
                deleteBookmark({ id: recipe.id });
              } else {
                setBookmarked(true);
                postBookmark(recipe);
              }
            }}
          >
            {bookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
        <div className="pb-4">
          <p>Ingredients needed:</p>
          <IngredientList ingredients={ingredientsUsed} images={images} />
        </div>
      </div>
    </div>
  );
}
