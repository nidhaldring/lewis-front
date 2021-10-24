import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../store/slices/sideBar";
import { useDetectClickOutside } from "react-detect-click-outside";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import Menu from "./menu";
import logo from "./logo.png";

function AddProduct() {
  return (
    <div className="bg-bleu max-w-xl w-full text-white rounded-md">
      <div className="px-4 py-1 h-8">
        <ShoppingCartIcon className="w-5"></ShoppingCartIcon>
        <span>Add Product</span>
      </div>
      <div className="flex flex-grow bg-white">
        <Input></Input>
        <Input></Input>
        <Input></Input>
      </div>
      <div className="flex bg-white px-4 py-2 justify-between">
        <FormControlLabel
          className="text-bleu"
          control={<Switch style={{ textTransform: "none" }}></Switch>}
          label="Publish Product"
        ></FormControlLabel>
        <div>
          <Button style={{ textTransform: "none" }}>Add Attribute</Button>
          <Button style={{ textTransform: "none" }}>Add Product</Button>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [menuShown, showMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const ref = useDetectClickOutside({ onTriggered: () => showMenu(false) });

  return (
    <nav
      className="flex bg-primary justify-between p-4"
      style={{ height: "72px" }}
    >
      <img src={logo} alt="logo" className="w-9 h-9 cursor-pointer"></img>
      <div className="flex items-center px-6 w-1/2 h-10  bg-secondary rounded-sm nav-search">
        <SearchIcon width="24px" height="24px"></SearchIcon>
        <input
          placeholder="search products"
          className="h-full flex-grow bg-secondary px-4 placeholder-white placeholder-opacity-75 outline-none focus:placeholder-black"
        ></input>
        <div className="cursor-pointer w-8 rounded-md flex items-center justify-center h-4/5">
          <AddIcon
            width="24px"
            height="24px"
            onClick={() => setModalOpen(true)}
          ></AddIcon>
          <Modal
            className="flex justify-center items-center"
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          >
            <AddProduct></AddProduct>
          </Modal>
        </div>
      </div>

      <div className="flex w-36">
        <div
          className="flex items-center justify-center w-1/2 hover:bg-blue-500 rounded-md cursor-pointer"
          onClick={() => dispatch(toggle())}
        >
          <ShoppingBasketIcon
            width="24px"
            height="24px"
            sx={{ color: "white" }}
          ></ShoppingBasketIcon>
        </div>
        <div
          className="relative flex items-center justify-center w-1/2 hover:bg-blue-500 rounded-md cursor-pointer"
          onClick={() => showMenu(!menuShown)}
          ref={ref}
        >
          <MoreVertIcon
            width="24px"
            height="24px"
            sx={{ color: "white" }}
          ></MoreVertIcon>
          <Menu showMenu={menuShown}></Menu>
        </div>
      </div>
    </nav>
  );
}
