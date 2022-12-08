import "material-icons/iconfont/material-icons.css";
import { Link, useLocation } from "react-router-dom";

function NavIcon({
  icon,
  selected,
  path,
  label,
  onClick,
}: {
  icon: string;
  selected: boolean;
  path: string;
  label: string;
  onClick: () => void;
}) {
  let classes =
    "material-icons grow p-3 text-teal-500 cursor-pointer hover:bg-teal-200 rounded-3xl hover:p-3 transition-all";
  if (selected) {
    classes += " bg-teal-200 rounded-3xl p-3";
  }

  return (
    // This kinda stinks
    <li className="flex flex-col items-center w-24 justify-center">
      <Link to={path} onClick={onClick}>
        <i className={classes}>{icon}</i>
      </Link>
      <p className="text-xs">{label}</p>
    </li>
  );
}

interface Props {
  page: "home" | "kitchen" | "recipes" | "shoppingLists";
  setSelectedPage: (
    page: "home" | "kitchen" | "recipes" | "shoppingLists"
  ) => void;
}
export const Navbar: React.FC<Props> = ({ page, setSelectedPage }: Props) => {
  return (
    <ul className="border bg-white border-slate-300 h-24 flex justify-around">
      <NavIcon
        icon="dashboard"
        selected={page === "home"}
        onClick={() => setSelectedPage("home")}
        path="/"
        label="Home"
      />
      <NavIcon
        icon="kitchen"
        selected={page === "kitchen"}
        onClick={() => setSelectedPage("kitchen")}
        path="/contents"
        label="Kitchen"
      />
      <NavIcon
        icon="menu_book"
        selected={page === "recipes"}
        onClick={() => setSelectedPage("recipes")}
        path="/recipes"
        label="Recipes"
      />
      <NavIcon
        icon="shopping_bag"
        selected={page === "shoppingLists"}
        onClick={() => setSelectedPage("shoppingLists")}
        path="/shoppinglists"
        label="Shopping Lists"
      />
    </ul>
  );
};
