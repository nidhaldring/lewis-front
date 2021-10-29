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
import { Fragment, useState, forwardRef } from "react";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import Cart from "../cart";
import { clearCart } from "../store/slices/cart";
import MdiIcon from "@mdi/react";
import { mdiCalculator } from "@mdi/js";

function ConfirmationDialog({ openModal }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col p-4">
      <div className="w-96 h-28 p-8" style={{ backgroundColor: "#f5f5f5" }}>
        <p>
          You have items in the cart. Are you sure you want to clear the cart?{" "}
        </p>
      </div>
      <div
        className="flex p-4 justify-between border-t h-12"
        style={{ backgroundColor: "white" }}
      >
        <Button
          onClick={() => {
            dispatch(clearCart());
            openModal(false);
          }}
        >
          yes
        </Button>
        <Button onClick={() => openModal(false)}>no</Button>
      </div>
    </div>
  );
}

function Icon({ children }) {
  return (
    <div className="flex items-center justify-center w-8 h-8 text-center hover:bg-gray-200 rounded-md cursor-pointer">
      {children}
    </div>
  );
}

function GenericCard({ path, index, bgColor, onClick, title, Icon, classes }) {
  const Wrapper = path ? Link : Fragment;
  return (
    <Wrapper to={path} key={index}>
      <div
        className={classes}
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
      >
        <Icon fontSize="small"></Icon>
        <span className="capitalize font-medium">{title}</span>
      </div>
    </Wrapper>
  );
}

function PayCardDialogStripeTerminal() {
  return <div className="bg-white w-full" style={{ height: "200px" }}></div>;
}

function PayCardDialogChipAndPin({ total }) {
  const [ref, setRef] = useState(Math.floor(Math.random() * 100));

  return (
    <>
      <div className="flex flex-col text-noir p-8">
        <span>REFERENCE NUMBER</span>
        <div className="flex justify-between">
          <div class="small-icon pt-2">
            <RefreshIcon
              onClick={() => setRef(Math.floor(Math.random() * 100))}
            ></RefreshIcon>
          </div>
          <span className="text-2xl">{ref}</span>
        </div>
      </div>
      <div
        className="w-full"
        style={{ height: "100px", backgroundColor: "#f5f5f5" }}
      ></div>
      <div
        className="flex-grow text-white flex justify-between w-full p-8 text-2xl font-medium cursor-pointer bg-greenish hover:bg-green-400"
        style={{ height: "100px" }}
      >
        <span>Tender</span>
        <span>${total}</span>
      </div>
    </>
  );
}

function PayCardDialogCash({ total }) {
  return (
    <div className="flex flex-col gap-3 text-noir">
      <span className="font-medium text-sm px-6 py-4">TENDERED</span>
      <div className="flex justify-between w-full px-8">
        <MdiIcon path={mdiCalculator} size={1}></MdiIcon>
        <span className="text-4xl">{total}</span>
      </div>
      <div
        className="flex flex-col gap-4 py-3 border-t"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="flex px-6 gap-4">
          <Button
            className="flex-grow h-14"
            style={{
              backgroundColor: "#e0e0e0",
              fontSize: "22px",
              color: "#616161",
              fontWeight: "bold",
            }}
          >
            $10.95
          </Button>
          <Button
            className="flex-grow h-14"
            style={{
              backgroundColor: "#e0e0e0",
              fontSize: "22px",
              color: "#616161",
              fontWeight: "bold",
            }}
          >
            ${total}
          </Button>
        </div>
        <div className="flex px-6 gap-4">
          <Button
            className="flex-grow h-14"
            style={{
              backgroundColor: "#e0e0e0",
              fontSize: "22px",
              color: "#616161",
              fontWeight: "bold",
            }}
          >
            $10.95
          </Button>
          <Button
            className="flex-grow h-14"
            style={{
              backgroundColor: "#e0e0e0",
              fontSize: "22px",
              color: "#616161",
              fontWeight: "bold",
            }}
          >
            ${total}
          </Button>
        </div>
      </div>
      <div
        className="flex-grow text-white flex justify-between w-full p-8 text-2xl font-medium cursor-pointer bg-greenish hover:bg-green-400"
        style={{ height: "100px" }}
      >
        <span>Tender</span>
        <span>${total}</span>
      </div>
    </div>
  );
}

function PayCardDialog({ open, setOpen, total }) {
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const navItems = ["Cash", " Stripe Terminal", "Chip & PIN"];

  const [activeComp, setActiveComp] = useState(-1);

  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={() => setOpen(false)}
    >
      <div
        style={{ backgroundColor: "#424242", width: "550px" }}
        className="h-44 px-6 pt-6"
      >
        <div className="flex flex-col gap-4">
          <div className="text-white text-base text-bold flex gap-2 items-center">
            <span
              className="text-2xl cursor-pointer relative -top-1 block w-5"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              x
            </span>
            <span>Amount Due</span>
          </div>
          <div className="w-full flex justify-end">
            <span className="text-6xl text-bold text-white">{total}$</span>
          </div>
        </div>
      </div>
      <ul
        className="flex gap-2 w-full h-14 text-center text-white"
        style={{ backgroundColor: "#3c3c3c" }}
      >
        {navItems.map((navItem, key) => (
          <li
            key={key}
            onClick={() => setActiveComp(key)}
            className="flex-grow hover:bg-gray-500 h-full cursor-pointer flex items-center justify-center"
          >
            {navItem}
          </li>
        ))}
      </ul>
      <div>
        {activeComp === 0 && (
          <PayCardDialogCash total={total}></PayCardDialogCash>
        )}
        {activeComp === 1 && (
          <PayCardDialogStripeTerminal
            total={total}
          ></PayCardDialogStripeTerminal>
        )}
        {activeComp === 2 && (
          <PayCardDialogChipAndPin total={total}></PayCardDialogChipAndPin>
        )}
      </div>
    </Dialog>
  );
}

function PayCard() {
  const [open, setOpen] = useState(false);

  const items = useSelector((state) => state.cart.items);
  const totalToPay = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const openPayDialog = () => {
    if (items.length) {
      setOpen(true);
    }
  };

  return (
    <div
      className={`flex justify-between cursor-pointer ${
        items.length ? "bg-greenish" : "bg-darkGray"
      } text-white mt-2 w-full font-bold p-5 h-28 m-h-28`}
      onClick={openPayDialog}
    >
      <div className="flex flex-col justify-between">
        <span className="text-xl">Pay</span>
        <span>{totalItems} Item</span>
      </div>
      <div className="flex justify-center items-center text-2xl">
        <span>${totalToPay.toFixed(2)}</span>
      </div>
      {open && (
        <PayCardDialog
          open={open}
          setOpen={setOpen}
          total={totalToPay.toFixed(2)}
        ></PayCardDialog>
      )}
    </div>
  );
}

function Cards({ toggleMoreMenu, moreMenuShown }) {
  const [modalIsOpen, openModal] = useState(false);
  const items = useSelector((state) => state.cart.items);

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
    { title: "discount", Icon: LocalShippingIcon, path: "/discounts" },
    { title: "fee", Icon: FiberSmartRecordIcon },
    { title: "refund", Icon: UndoIcon, path: "/refunds" },
    { title: "hold", Icon: PanToolIcon, bgColor: "#616161" },
    { title: "reset", Icon: RefreshIcon, bgColor: "#616161" },
    {
      title: "clear",
      Icon: ClearIcon,
      bgColor: "#616161",
      onClick: () => openModal(true),
    },
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
        <div className="flex justify-between w-full p-4 pt-1 sm:pt-4 text-sm text-gray-500">
          <span>SUBTOTAL</span>
          <span>
            $
            {items
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="flex gap-3 px-2 w-full flex-wrap overflow-x-scroll">
          {visibleCards.map((card, index) => (
            <GenericCard
              {...card}
              index={index}
              classes={`flex flex-col w-28 h-16 ${
                card.bgColor
                  ? "text-white hover:bg-gray-800"
                  : "text-noir bg-gray-200 hover:bg-gray-300"
              } rounded-md p-2 pl-4 text-sm cursor-pointer`}
            ></GenericCard>
          ))}
          <Modal
            open={items.length > 0 && modalIsOpen}
            onClose={() => openModal(false)}
            className="flex items-center justify-center"
          >
            <ConfirmationDialog openModal={openModal}></ConfirmationDialog>
          </Modal>
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-around w-1/2 pt-4 transition-all duration-300 transform  ${
          moreMenuShown ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundColor: "#757575",
        }}
        onClick={() => toggleMoreMenu(false)}
      >
        {hiddenCards.map((card, index) => (
          <GenericCard
            {...card}
            index={index}
            classes={`flex flex-col w-28 h-16 ${
              card.bgColor
                ? "text-white hover:bg-gray-800"
                : "text-noir bg-gray-200 hover:bg-gray-300"
            } rounded-md p-2 pl-4 text-sm cursor-pointer`}
          ></GenericCard>
        ))}
      </div>
    </div>
  );
}

export default function SideBar() {
  const [moreMenuShown, toggleMoreMenu] = useState(false);

  return (
    <div className="flex flex-col w-full h-full border">
      <div className="flex h-14 w-full px-6 items-center border-b hover:bg-gray-100 text-noir">
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
      <div className="overflow-x-scroll h-10 sm:flex-grow">
        <Cart></Cart>
      </div>
      <div
        className={`flex-grow sm:flex-grow-0 flex flex-col mt-auto ${
          moreMenuShown ? "h-1/2" : "h-2/5"
        } w-full border-t`}
      >
        <Cards
          toggleMoreMenu={toggleMoreMenu}
          moreMenuShown={moreMenuShown}
        ></Cards>
        <PayCard></PayCard>
      </div>
    </div>
  );
}
