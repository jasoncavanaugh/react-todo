import { useEffect, useState } from "react";

interface IFoodItem {
  category: string;
  name: string;
  amount: number;
  amountUnit: string;
  expiration: string;
  location: string;
}
const foodItems: { [key: string]: IFoodItem[] } = {
  Dairy: [
    {
      category: "Dairy",
      name: "Chicken",
      amount: 40,
      amountUnit: "lbs",
      expiration: "02/02/2023",
      location: "Cabinet pantry",
    },
  ],
  Protein: [],
  Fruits: [],
  Snacks: [],
};

function handleAddItem() {}
export function KitchenContents() {
  const [food, setFood] = useState(foodItems);

  const getFoodItems = () => {
    if (Object.keys(food).length === 0) {
      return (
        <div className="border overflow-auto rounded h-[630px] bg-slate-50 flex flex-col justify-center items-center px-4">
          <p className="text-slate-500 italic text-center">
            No items yet! Click the '+' icon to start adding to your kitchen!
          </p>
        </div>
      );
    }
    return (
      <div className="border overflow-auto rounded h-[630px] bg-slate-50 px-4">
        {Object.keys(food).map((category, i) => {
          return (
            <>
              <h2
                key={i}
                className="text-xl font-semibold text-teal-500 border"
              >
                {category}
              </h2>
              <ul>
                {food[category].map((foodItem, i) => {
                  return (
                    <li key={i} className="border p-2 rounded text-">
                      <h3 className="font-semibold text-base">
                        {foodItem.name}
                      </h3>
                      {foodItem.location}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </div>
    );
  };

  // useEffect(() => {
  //   const users = localStorage.getItem("users");
  //   let items = users ? JSON.parse(users) : [];
  //   setExpiring(items);
  // }, []);
  return (
    // <div className="grow flex flex-col r ">
    <>
      <h1 className="text-teal-600 text-3xl font-bold h-16 flex justify-center items-center">
        Kitchen Contents
      </h1>
      <div className="px-4 grow">
        <input
          className="border bg-slate-100 border-slate-400 rounded-full px-4 py-1 w-full focus:border-slate-700 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <div className="h-6" />
        {/* <div className="border overflow-auto rounded h-[630px] bg-slate-50 flex flex-col justify-center items-center px-4"> */}
        {getFoodItems()}
        {/* </div> */}
        <button
          type="button"
          className="absolute bottom-28 right-6 rounded-full shadow-teal-800 shadow-md bg-violet-600 px-4 py-2.5 text-3xl text-white font-bold hover:brightness-110"
        >
          +
        </button>
      </div>
    </>
    // </div>
  );
}
