import Icon from "@mdi/react";
import { mdiShape } from "@mdi/js";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useParams } from "react-router-dom";
import UnfoldIcon from "../unfold";
import { addItem } from "../store/slices/cart";
import { useDispatch } from "react-redux";

function Product(product) {
  const dispatch = useDispatch();
  const { name, price, id } = product;

  return (
    <div
      key={id}
      className="flex flex-col w-1/3 sm:w-3/12 h-56 border-2 rounded-md bg-white cursor-pointer overflow-scroll"
      onClick={() => dispatch(addItem(product))}
    >
      <div className="w-full h-3/5 border-b">
        <img
          src="https://site1.storiey.com/wp-content/uploads/woocommerce-placeholder.png"
          alt="product"
          className="object-contain w-full h-full"
        ></img>
      </div>
      <div className="h-2/5 flex flex-col pt-2 px-6 text-noir">
        <span className="">{name}</span>
        <span className="font-semibold text-sm">${price} </span>
      </div>
    </div>
  );
}

export default function Products() {
  const { category } = useParams();

  const unfoldMenuItems = [
    "Sort by product name",
    "Sort by price",
    "Sort by date added",
    "Sort by popularity",
  ];

  // mock products
  const products = [
    { id: 1, name: "Black Angues", price: 9.6 },
    { id: 2, name: "Black bruger", price: 9.6 },
    { id: 3, name: "Food", price: 9.6 },
    { id: 4, name: "Black Angues", price: 9.6 },
    { id: 5, name: "Black Angues", price: 9.6 },
  ];

  return (
    <div className="flex flex-col flex-grow overflow-scroll">
      <div className="flex justify-between items-center h-12 border">
        <div className="flex  justify-between w-16 hover:bg-gray-100 ">
          <Icon path={mdiShape} size={1}></Icon>
          <ChevronRightIcon></ChevronRightIcon>
          <span>{category}</span>
        </div>
        <div className="rounded-full hover:bg-gray-100  w-10">
          <UnfoldIcon items={unfoldMenuItems}></UnfoldIcon>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap bg-grayish pt-4 px-4">
        {products.map((prod) => (
          <Product {...prod}></Product>
        ))}
      </div>
    </div>
  );
}
