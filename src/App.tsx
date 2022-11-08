import React, { useState } from "react";
import { FoodGroup } from "./pages/Home/FoodGroup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import { Navbar } from "./components/Navbar";
//Pages
import { Home } from "./pages/Home/Home";
import { KitchenContents } from "./pages/KitchenContents";
import { Recipes } from "./pages/Recipes";
import { ShoppingListsMenu } from "./pages/ShoppingLists/ShoppingListsMenu";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Phone Wrapper */}
      <div className="w-[428px] h-[926px] m-auto border rounded border-green-800 flex flex-col">
        {/* Battery  */}
        <div className="h-12 border rounded"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<KitchenContents />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/shoppinglists" element={<ShoppingListsMenu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
