import { useState } from "react";
import { Link, createSearchParams } from "react-router-dom";
import fridge from "../assets/homepage/fridge.svg";
import pantry from "../assets/homepage/pantry.svg";
import logo from "../assets/homepage/logo.svg";
import table from "../assets/homepage/table.svg";
import * as foodIcons from "../assets/food";
import FoodIcon from "../components/food-icon";

export default function Cook() {
  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);

  const toggleFood = (id: string) => {
    setSelectedFoods((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  };

  const isSelected = (id: string) => selectedFoods.includes(id);

  return (
    <div className="flex justify-center items-center h-full w-full gap-6">
      <div className="flex-1 flex-shrink-0 flex justify-end h-full w-full relative aspect-[30/41]">
        <div className="relative w-full aspect-[30/41] -mr-20">
          <img
            src={fridge}
            alt="Fridge"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          />

          <FoodIcon
            defaultSrc={foodIcons.tomatoDark}
            hoverSrc={foodIcons.tomatoLight}
            selectedSrc={foodIcons.tomatoLight}
            selected={isSelected("tomato")}
            onToggle={() => toggleFood("tomato")}
            alt="Tomato"
            className="absolute left-[41%] top-[26%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <FoodIcon
            defaultSrc={foodIcons.onionDark}
            hoverSrc={foodIcons.onionLight}
            selectedSrc={foodIcons.onionLight}
            selected={isSelected("onion")}
            onToggle={() => toggleFood("onion")}
            alt="Onion"
            className="absolute left-[55%] top-[26%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <FoodIcon
            defaultSrc={foodIcons.milkDark}
            hoverSrc={foodIcons.milkLight}
            selectedSrc={foodIcons.milkLight}
            selected={isSelected("milk")}
            onToggle={() => toggleFood("milk")}
            alt="Milk"
            className="absolute left-[69%] top-[26%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />

          <FoodIcon
            defaultSrc={foodIcons.lettuceDark}
            hoverSrc={foodIcons.lettuceLight}
            selectedSrc={foodIcons.lettuceLight}
            selected={isSelected("lettuce")}
            onToggle={() => toggleFood("lettuce")}
            alt="Lettuce"
            className="absolute left-[41%] top-[45%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <FoodIcon
            defaultSrc={foodIcons.garlicDark}
            hoverSrc={foodIcons.garlicLight}
            selectedSrc={foodIcons.garlicLight}
            selected={isSelected("garlic")}
            onToggle={() => toggleFood("garlic")}
            alt="Garlic"
            className="absolute left-[55%] top-[46%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <FoodIcon
            defaultSrc={foodIcons.chickenDark}
            hoverSrc={foodIcons.chickenLight}
            selectedSrc={foodIcons.chickenLight}
            selected={isSelected("chicken")}
            onToggle={() => toggleFood("chicken")}
            alt="Chicken"
            className="absolute left-[69%] top-[46%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />

          <FoodIcon
            defaultSrc={foodIcons.cheeseDark}
            hoverSrc={foodIcons.cheeseLight}
            selectedSrc={foodIcons.cheeseLight}
            selected={isSelected("cheese")}
            onToggle={() => toggleFood("cheese")}
            alt="Cheese"
            className="absolute left-[41%] top-[64%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <FoodIcon
            defaultSrc={foodIcons.breadDark}
            hoverSrc={foodIcons.breadLight}
            selectedSrc={foodIcons.breadLight}
            selected={isSelected("bread")}
            onToggle={() => toggleFood("bread")}
            alt="Bread"
            className="absolute left-[55%] top-[64%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
          <FoodIcon
            defaultSrc={foodIcons.eggDark}
            hoverSrc={foodIcons.eggLight}
            selectedSrc={foodIcons.eggLight}
            selected={isSelected("egg")}
            onToggle={() => toggleFood("egg")}
            alt="Egg"
            className="absolute left-[69%] top-[65%] w-[14%] -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
      <div className="flex-1 flex-shrink-0 flex flex-col justify-around items-start h-full w-full relative">
        <img
          src={pantry}
          alt="Pantry"
          className="w-full max-w-[70%] object-contain -ml-4"
        />

        {/* <FoodIcon
          defaultSrc={foodIcons.riceDark}
          hoverSrc={foodIcons.riceLight}
          selectedSrc={foodIcons.riceLight}
          selected={isSelected("rice")}
          onToggle={() => toggleFood("rice")}
          alt="Rice"
          className="absolute top-0 left-0 translate-x-6 translate-y-29 w-24 h-auto"
        />
        <FoodIcon
          defaultSrc={foodIcons.pastaDark}
          hoverSrc={foodIcons.pastaLight}
          selectedSrc={foodIcons.pastaLight}
          selected={isSelected("pasta")}
          onToggle={() => toggleFood("pasta")}
          alt="Pasta"
          className="absolute top-0 left-0 translate-x-34 translate-y-29 w-24 h-auto"
        /> */}

        <div className="flex flex-col mb-4 w-full">
          <img src={logo} alt="Logo" className="w-full max-w-[45%] -ml-2" />
          <p className="text-xl lg:text-2xl">
            You don’t have a lot of options. Time to <br></br>
            make the best with what you got!
          </p>
        </div>

        <img
          src={table}
          alt="Table"
          className="w-full max-w-[75%] object-contain"
        />

        {/* <Link
          to={{
            pathname: "/cook-results",
            search: createSearchParams({ foods: selectedFoods }).toString(),
          }}
          className="text-white text-lg font-bold px-8 py-2 border-2 border-white rounded-lg hover:text-orange hover:bg-white absolute bottom-0 right-0 -translate-x-21 -translate-y-24 cursor-pointer"
        >
          Let's Cook!
        </Link> */}
      </div>
    </div>
  );
}
