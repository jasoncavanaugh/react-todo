import React, { useState } from "react";
import "./App.css";

interface Props {
  heading: string;
  items: any[];
}

function getListItem(item, idx) {
  return (
    <li key={idx}>
      <h3>{item.name}</h3>
    </li>
  );
}

export const FoodGroup: React.FC<Props> = ({ heading, items }) => {
  return (
    <div className="text-3xl text-red-400 m-auto border rounded border-green-500 px-16 flex">
      <h2>{heading}</h2>
      <ul>{items.map((item, idx) => getListItem(item, idx))}</ul>
    </div>
  );
};
