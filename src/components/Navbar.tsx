import "material-icons/iconfont/material-icons.css";
import { Link, useLocation } from "react-router-dom";

function NavIcon({
  icon,
  selected,
  path,
}: {
  icon: string;
  selected: boolean;
  path: string;
}) {
  let classes =
    "material-icons text-teal-500 cursor-pointer hover:bg-teal-200 rounded-3xl hover:p-3 transition-all";
  if (selected) {
    classes += " bg-teal-200 rounded-3xl p-3";
  }

  return (
    // This kinda stinks
    <li className="flex items-center w-24 justify-center">
      <Link className="flex items-center justify-center" to={path}>
        <i className={classes}>{icon}</i>
      </Link>
    </li>
  );
}

interface Props {
  selected: "dashboard" | "kitchen" | "menu_book" | "shopping_bag";
}
export const Navbar: React.FC<Props> = ({ selected }: Props) => {
  return (
    <ul className="border h-16 flex justify-around">
      <NavIcon icon="dashboard" selected={selected === "dashboard"} path="/" />
      <NavIcon
        icon="kitchen"
        selected={selected === "kitchen"}
        path="/contents"
      />
      <NavIcon
        icon="menu_book"
        selected={selected === "menu_book"}
        path="/recipes"
      />
      <NavIcon
        icon="shopping_bag"
        selected={selected === "shopping_bag"}
        path="/shoppinglists"
      />
    </ul>
  );
};
