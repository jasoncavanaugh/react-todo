import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

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
    <>
      <div className="grow flex flex-col">
        <h1 className="text-3xl font-bold h-16 flex justify-center items-center">
          Kitchen Contents
        </h1>
        <div className="px-4 grow ">
          <input
            className="border rounded-full px-4 py-1 w-full focus:border-slate-500 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          {/* <div className="h-6 border rounded border-purple-600"></div> */}
          <div className="h-6"></div>
          <h2 className="border rounded px-4 text-2xl text-slate-500">
            Expiring soon!
          </h2>
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
        </div>
      </div>
      <Navbar selected="kitchen" />
    </>
  );
}
