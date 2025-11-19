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
    <div className="flex flex-col justify-start w-full max-w-[75%]">
      <div className="my-16">
        <h1 className="text-2xl mb-6">Your Ingredients:</h1>
        <IngredientList ingredients={ingredients} />
      </div>

      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Recipes</h1>
        <ul className="flex items-center gap-4">
          <li>
            <button onClick={() => setViewMode("list")}>
              {viewMode === "list" ? (
                <BsListUl size={24} />
              ) : (
                <BsList size={24} />
              )}
            </button>
          </li>
          <li>
            <button onClick={() => setViewMode("grid")}>
              {viewMode === "grid" ? (
                <BsGridFill size={28} />
              ) : (
                <BsGrid size={28} />
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
