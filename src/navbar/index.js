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
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/slices/sideBar";
import { useDetectClickOutside } from "react-detect-click-outside";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import Menu from "./menu";
import logo from "./logo.png";
import { open } from "../store/slices/sideMenu";

function ProductAttribute({
  label,
  value,
  remove,
  id,
  updateLabel,
  updateValue,
}) {
  return (
    <li className="flex gap-3 items-center">
      <TextField
        className="border"
        label="Label"
        onChange={(e) => updateLabel(id, e.target.value)}
      >
        {label}
      </TextField>
      <TextField
        className="border"
        label="Value"
        onChange={(e) => updateValue(id, e.target.value)}
      >
        {value}
      </TextField>
      <div className="rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
        <CloseIcon
          onClick={() => remove()}
          style={{ color: "gray" }}
        ></CloseIcon>
      </div>
    </li>
  );
}

function AddProduct() {
  const [productAttrs, setProductAttrs] = useState([]);

  const addProdAttr = () =>
    setProductAttrs([...productAttrs, { label: "", value: "", id: uuidv4() }]);

  const removeProdAttr = (id) =>
    setProductAttrs(productAttrs.filter((prod) => prod.id !== id));

  const updateProdLabel = (id, newLabel) => {
    const itemIndex = productAttrs.findIndex((prod) => prod.id === id);
    if (itemIndex > -1) {
      const newProductAttrs = [...productAttrs];
      newProductAttrs[itemIndex].label = newLabel;
      setProductAttrs(newProductAttrs);
    }
  };

  const updateProdValue = (id, newValue) => {
    const itemIndex = productAttrs.findIndex((prod) => prod.id === id);
    if (itemIndex > -1) {
      const newProductAttrs = [...productAttrs];
      newProductAttrs[itemIndex].value = newValue;
      setProductAttrs(newProductAttrs);
    }
  };

  return (
    <div className="bg-bleu max-w-xl w-full text-white rounded-md">
      <div className="px-4 py-2 h-10">
        <ShoppingCartIcon className="w-5"></ShoppingCartIcon>
        <span>Add Product</span>
      </div>
      <div
        className="flex flex-grow gap-2 p-4 border"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <TextField className="border w-1/2" label="Product Name"></TextField>
        <TextField
          className="border w-1/4"
          type="number"
          label="Price"
        ></TextField>
        <TextField
          className="border w-1/4"
          type="number"
          label="Quantity"
        ></TextField>
      </div>
      {productAttrs.length > 0 && (
        <div className="px-4 pt-2 flex flex-col gap-4 bg-white">
          <span className="text-black">Product Attributes</span>
          <ul className="mb-4 flex flex-col gap-4 border-b pb-4">
            {productAttrs.map((prod) => (
              <ProductAttribute
                key={prod.id}
                {...prod}
                remove={() => removeProdAttr(prod.id)}
                updateLabel={updateProdLabel}
                updateValue={updateProdValue}
              ></ProductAttribute>
            ))}
          </ul>
        </div>
      )}
      <div className="flex bg-white px-4 py-2 justify-between">
        <FormControlLabel
          className="text-bleu"
          control={<Switch style={{ textTransform: "none" }}></Switch>}
          label="Publish Product"
        ></FormControlLabel>
        <div>
          <Button style={{ textTransform: "none" }} onClick={addProdAttr}>
            Add Attribute
          </Button>
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
  const totalItems = useSelector((state) => state.cart.items).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const sideBarVisible = useSelector((state) => state.sideBar.isOpen);
  const ref = useDetectClickOutside({ onTriggered: () => showMenu(false) });

  return (
    <nav
      className="flex bg-primary justify-between p-4"
      style={{ height: "72px" }}
    >
      <img
        src={logo}
        alt="logo"
        className="w-9 h-9 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(open());
        }}
      ></img>
      <div className="flex items-center px-2 sm:px-6 w-3/5 sm:w-1/2 h-10  bg-secondary rounded-sm nav-search">
        <SearchIcon width="24px" height="24px"></SearchIcon>
        <input
          placeholder="search products"
          className="h-full flex-grow bg-secondary px-2 sm:px-4 placeholder-white placeholder-opacity-75 outline-none focus:placeholder-black"
          style={{ width: "90%" }}
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

      <div className="flex  w-16 sm:w-36">
        <div
          className="relative flex items-center justify-center w-full sm:w-1/2 hover:bg-blue-500 rounded-md cursor-pointer"
          onClick={() => dispatch(toggle())}
        >
          <ShoppingBasketIcon
            width="24px"
            height="24px"
            sx={{ color: "white" }}
          ></ShoppingBasketIcon>
          {totalItems > 0 && !sideBarVisible && (
            <div className="absolute  px-1 bg-red-500 rounded-sm text-white text-xs top-0 right-2">
              <span>{totalItems}</span>
            </div>
          )}
        </div>
        <div
          className="relative hidden sm:flex items-center justify-center w-1/2 hover:bg-blue-500 rounded-md cursor-pointer"
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
