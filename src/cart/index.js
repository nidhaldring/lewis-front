import Input from "@mui/material/Input";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { updateItem } from "../store/slices/cart";

function CartItem({ name, quantity, price, id }) {
  const [expanded, toggleExpand] = useState(false);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-col w-full overflow-hidden cursor-pointer ${
        expanded ? "h-72" : "h-16"
      } border   transition-all duration-300`}
    >
      <div
        className="h-14 w-full p-8 flex items-center hover:bg-gray-100"
        onClick={() => toggleExpand(!expanded)}
      >
        <img
          width="40px"
          height="40px"
          className="object-contain hidden sm:block sm:mr-4"
          src="https://site1.storiey.com/wp-content/uploads/woocommerce-placeholder.png"
          alt="cart"
        ></img>
        <span className="text-sm text-bleu font-semibold w-1/3">{name}</span>
        {expanded ? (
          <ExpandLessIcon className="mr-4"></ExpandLessIcon>
        ) : (
          <ExpandMoreIcon className="mr-4"></ExpandMoreIcon>
        )}
        <Input
          disabled
          className="border h-10 w-16 rounded-md hidden sm:block p-2 text-sm"
          value={quantity}
        ></Input>
        <span className="ml-auto text-base">
          {(quantity * price).toFixed(2)}$
        </span>
      </div>
      <div
        className="flex-grow w-full px-8 pt-4 flex flex-col gap-2"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="flex gap-2">
          <TextField
            type="number"
            label="Quantity"
            className="bg-white"
            value={quantity || ""}
            onChange={(e) =>
              dispatch(updateItem({ id, quantity: e.target.value }))
            }
          ></TextField>
          <TextField
            type="number"
            label="Discount"
            className="bg-white"
            defaultValue={0}
            InputProps={{ inputProps: { min: 0, max: 100 } }}
            onChange={(e) => {
              dispatch(
                updateItem({
                  id,
                  price: Number(
                    (price - price * (e.target.value / 100)).toFixed(2)
                  ),
                })
              );
            }}
          ></TextField>
          <TextField
            type="number"
            label="Price"
            style={{ backgroundColor: "white" }}
          ></TextField>
        </div>
        <div className="flex w-full">
          <TextField
            type="text"
            label="Note"
            className="flex-grow bg-white"
          ></TextField>
        </div>
        <div className="flex gap-2 w-full">
          <Button
            style={{
              textTransform: "none",
              backgroundColor: "#e0e0e0",
              color: "#646464",
            }}
            className="flex-grow"
          >
            Edit
          </Button>
          <Button
            style={{
              textTransform: "none",
              backgroundColor: "#e0e0e0",
              color: "#646464",
            }}
            className="flex-grow"
          >
            View
          </Button>
          <Button
            style={{
              textTransform: "none",
              color: "white",
              backgroundColor: "#3c3c3c",
            }}
            className="flex-grow"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className="w-full overflow-x-scroll">
      {items.map((item) => (
        <CartItem {...item}></CartItem>
      ))}
    </div>
  );
}
