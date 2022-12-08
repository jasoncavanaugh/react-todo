import React, { useState } from "react";
import { FoodGroup } from "./pages/Home/FoodGroup";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//Components
import { Navbar } from "./components/Navbar";
//Pages
import { Home } from "./pages/Home/Home";
import { KitchenContents } from "./pages/KitchenContents";
import { Recipes } from "./pages/Recipes";
import { ShoppingListsMenu } from "./pages/ShoppingLists/ShoppingListsMenu";

import "./App.css";

function App() {
  const [selectedPage, setSelectedPage] = useState<
    "home" | "kitchen" | "recipes" | "shoppingLists"
  >("home");

  return (
    <BrowserRouter>
      {/* Phone Wrapper */}
      <div className=" relative w-[428px] h-[926px] m-auto border rounded border-slate-900 flex flex-col">
        {/* Battery  */}
        <div className="h-12 border rounded" />
        <div className="flex flex-col grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contents" element={<KitchenContents />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/shoppinglists" element={<ShoppingListsMenu />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Navbar page={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
