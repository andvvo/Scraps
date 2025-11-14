import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsList, BsGrid, BsListUl, BsGridFill } from "react-icons/bs";
import RecipeList from "../components/create-results/recipe/recipe-list";
import RecipeGrid from "../components/create-results/recipe/recipe-grid";
import IngredientList from "../components/create-results/ingredient/ingredient-list";

export default function CookResults() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchParams] = useSearchParams();

  const ingredients = searchParams.getAll("foods");
  const recipes = useMemo(() => [], []);

  return (
    <div>
      <h2>Your Ingredients:</h2>

      <IngredientList ingredients={ingredients} />

      <div className="flex justify-between">
        <h1>Recipes</h1>
        <ul>
          <li>
            <button onClick={() => setViewMode("list")}>
              {viewMode === "list" ? (
                <BsListUl size={24} />
              ) : (
                <BsList size={24} />
              )}
            </button>
            <button onClick={() => setViewMode("grid")}>
              {viewMode === "grid" ? (
                <BsGridFill size={24} />
              ) : (
                <BsGrid size={24} />
              )}
            </button>
          </li>
        </ul>
      </div>

      {viewMode === "list" && <RecipeList recipes={recipes} />}
      {viewMode === "grid" && <RecipeGrid recipes={recipes} />}
    </div>
  );
}
