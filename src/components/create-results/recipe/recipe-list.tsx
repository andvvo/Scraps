import RecipeListCard from "./recipe-list-card";

export default function RecipeList({ recipes }) {
  return (
    <div className="flex flex-col items-center overflow-auto gap-8">
      {recipes.map((recipe, index: number) => (
        <div key={index} className="flex-shrink-0">
          <RecipeListCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
