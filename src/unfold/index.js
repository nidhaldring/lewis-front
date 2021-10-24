import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

export default function UnfoldIcon({ items }) {
  const [menuShown, showMenu] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => showMenu(false) });

  return (
    <div
      className="small-icon relative"
      onClick={() => showMenu(!menuShown)}
      ref={ref}
    >
      <UnfoldMoreSharpIcon></UnfoldMoreSharpIcon>
      {menuShown && (
        <ul className="absolute top-8 right-0 bg-white border rounded-md w-44 flex flex-col">
          {items.map((item, index) => (
            <li
              className={`flex p-4 text-sm w-full h-12 hover:bg-gray-100 ${
                index < items.length - 1 ? "border-b" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
