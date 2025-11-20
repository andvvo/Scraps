import { ICON_MAP_LIGHT } from "../../../assets/food";

export default function Ingredient({
  ingredient,
  image,
}: {
  ingredient: string;
  image?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-28 aspect-square flex items-center justify-center">
        <img
          src={
            image === undefined
              ? ICON_MAP_LIGHT[ingredient as keyof typeof ICON_MAP_LIGHT]
              : image
          }
          alt={ingredient}
          className="w-full max-w-[85%] object-contain"
        />
      </div>
      <p>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</p>
    </div>
  );
}
