import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import UndoIcon from "@mui/icons-material/Undo";
import PanToolIcon from "@mui/icons-material/PanTool";
import RefreshIcon from "@mui/icons-material/Refresh";
import ClearIcon from "@mui/icons-material/Clear";
import PrintIcon from "@mui/icons-material/Print";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Icon({ children }) {
  return (
    <div className="flex items-center justify-center w-8 h-8 text-center hover:bg-gray-200 rounded-md cursor-pointer">
      {children}
    </div>
  );
}

function GenericCard({ path, key, bgColor, onClick, title, Icon }) {
  const Wrapper = path ? Link : Fragment;
  return (
    <Wrapper to={path}>
      <div
        key={key}
        className={`flex flex-col w-28 h-16 ${
          bgColor
            ? "text-white hover:bg-gray-800"
            : "bg-gray-200 hover:bg-gray-300"
        } rounded-md p-2 pl-4 text-sm cursor-pointer`}
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
      >
        <Icon fontSize="small"></Icon>
        <span className="capitalize">{title}</span>
      </div>
    </Wrapper>
  );
}

function Cards({ toggleMoreMenu, moreMenuShown }) {
  const visibleCards = [
    { title: "shipping", Icon: LocalShippingIcon, path: "/shippings" },
    {
      title: "coupon",
      Icon: LocalOfferIcon,
      path: "/coupons",
    },
    { title: "note", Icon: AssignmentIcon, path: "/notes" },
    {
      title: "more",
      Icon: MoreHorizIcon,
      bgColor: "#757575",
      onClick: () => toggleMoreMenu(true),
    },
  ];

  const hiddenCards = [
    { title: "discount", Icon: LocalShippingIcon },
    { title: "fee", Icon: FiberSmartRecordIcon },
    { title: "refund", Icon: UndoIcon },
    { title: "hold", Icon: PanToolIcon, bgColor: "#616161" },
    { title: "reset", Icon: RefreshIcon, bgColor: "#616161" },
    { title: "clear", Icon: ClearIcon, bgColor: "#616161" },
    { title: "print", Icon: PrintIcon, bgColor: "#616161" },
    {
      title: "less",
      Icon: MoreHorizIcon,
      bgColor: "#616161",
      onClick: () => toggleMoreMenu(false),
    },
  ];

  return (
    <div style={{ width: "200%" }} className="overflow-hidden flex flex-grow">
      <div
        className={`w-1/2 transform  transition-all duration-300 ${
          moreMenuShown ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex justify-between w-full p-4 text-sm text-gray-500">
          <span>SUBTOTAL</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-around w-full">
          {visibleCards.map((card, index) => (
            <GenericCard {...card} key={index}></GenericCard>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-around w-1/2 pt-4 transition-all duration-300 transform  ${
          moreMenuShown ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundColor: "#757575",
        }}
      >
        {hiddenCards.map(({ Icon, title, bgColor, onClick }, index) => (
          <div
            key={index}
            className={`flex flex-col w-28 h-16 ${
              bgColor
                ? "text-white hover:bg-gray-800"
                : "bg-gray-200 hover:bg-gray-300"
            } rounded-md p-2 pl-4 text-sm cursor-pointer`}
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
          >
            <Icon fontSize="small"></Icon>
            <span className="capitalize">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SideBar() {
  const [moreMenuShown, toggleMoreMenu] = useState(false);

  return (
    <div className="flex flex-col w-full h-full border justify-between">
      <div className="flex h-14 w-full px-6 items-center border-b hover:bg-gray-100">
        <Icon>
          <PersonIcon width="24px" height="24px"></PersonIcon>
        </Icon>
        <input
          className="flex-grow h-full px-4 outline-none hover:bg-gray-100"
          placeholder="Search customer"
        ></input>
        <Icon>
          <AddIcon width="24px" height="24px"></AddIcon>
        </Icon>
      </div>
      <div
        className={`flex flex-col ${
          moreMenuShown ? "h-1/2" : "h-2/5"
        } w-full border-t`}
      >
        <Cards
          toggleMoreMenu={toggleMoreMenu}
          moreMenuShown={moreMenuShown}
        ></Cards>
        <div className="flex justify-between bg-darkGray text-white mt-2 w-full font-bold p-5 h-28 m-h-28">
          <div className="flex flex-col justify-between">
            <span className="text-xl">Pay</span>
            <span>0 Item</span>
          </div>
          <div className="flex justify-center items-center text-2xl">
            <span>$0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
