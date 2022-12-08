import { useEffect, useState } from "react";

function handleAddItem() {}
export function KitchenContents() {
  const [expiring, setExpiring] = useState([]);
  const [dairy, setDairy] = useState([]);
  const [protein, setProtein] = useState([]);
  const [veggies, setVeggies] = useState([]);
  const [grains, setGrains] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const users = localStorage.getItem("users");
    let items = users ? JSON.parse(users) : [];
    setExpiring(items);
  }, []);
  return (
    // <div className="grow flex flex-col r ">
    <>
      <h1 className="text-teal-600 text-3xl font-bold h-16 flex justify-center items-center">
        Kitchen Contents
      </h1>
      <div className="px-4 grow ">
        <input
          className="border bg-slate-100 border-slate-400 rounded-full px-4 py-1 w-full focus:border-slate-700 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <div className="h-6" />
        <div className="border rounded h-[630px] bg-slate-50 flex justify-center items-center px-4">
          <p className="text-slate-500 italic text-center">
            No items yet! Click the '+' icon to start adding to your kitchen!
          </p>
        </div>
        {/* <h2 className="border rounded px-4 text-2xl font-semibold text-cyan-900">
          Expiring soon!
        </h2> */}
        <ul>
          {expiring.map((e, i) => {
            return (
              <li key={i}>
                <div></div>
                <div></div>
                <div></div>
              </li>
            );
          })}
        </ul>
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
