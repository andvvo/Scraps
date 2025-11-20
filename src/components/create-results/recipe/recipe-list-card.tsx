import { useState } from "react";
import IngredientList from "../ingredient/ingredient-list";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export default function RecipeListCard({ recipe }) {
  const [bookmarked, setBookmarked] = useState(false);

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
            onClick={() => setBookmarked(bookmarked ? false : true)}
            className="cursor-pointer"
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
