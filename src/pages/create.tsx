import fridge from "../assets/fridge.svg";
import pantry from "../assets/pantry.svg";
import logo from "../assets/logo.svg";
import table from "../assets/table.svg";

export default function Create() {
  return (
    <div className="flex justify-center items-center h-full gap-6">
      <div className="flex-shrink-0 h-full ml-14">
        <img src={fridge} alt="Fridge" className="h-full object-contain" />
      </div>
      <div className="flex flex-col justify-between flex-shrink-0 h-full py-13">
        <img
          src={pantry}
          alt="Pantry"
          className="max-h-[35%] object-contain -ml-12"
        />
        <div className="flex flex-col mb-4">
          <img src={logo} alt="Logo" className="w-42 h-auto" />
          <p className="text-base">
            You don’t have a lot of options. Time to <br></br>
            make the best with what you got!
          </p>
        </div>
        <img
          src={table}
          alt="Table"
          className="max-h-[30%] object-contain -ml-6"
        />
      </div>
    </div>
  );
}
