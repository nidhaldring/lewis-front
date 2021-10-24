import Icon from "@mdi/react";
import { mdiShape } from "@mdi/js";
import UnfoldIcon from "../unfold";

function Product({ name, availableItems }) {
  return (
    <div className="flex justify-between w-full md:w-5/12 h-32 border-2 rounded-md bg-white cursor-pointer mx-4 mb-2">
      <div className="flex flex-col p-4">
        <span className="font-semibold mb-4">{name}</span>
        <span className="text-sm">{availableItems} Products</span>
      </div>
      <div className="w-1/3">
        <img
          src="https://site1.storiey.com/wp-content/uploads/woocommerce-placeholder.png"
          alt="product"
          className="object-contain w-full h-full"
        ></img>
      </div>
    </div>
  );
}

export default function Products() {
  const categories = [
    { name: "Burgers", availableItems: 5 },
    { name: "Entrees", availableItems: 5 },
    { name: "Kids Menu", availableItems: 5 },
    { name: "Salads", availableItems: 5 },
    { name: "Sandwiches", availableItems: 5 },
  ];

  const unfoldMenuItems = [
    "Sort by product name",
    "Sort by price",
    "Sort by date added",
    "Sort by popularity",
  ];

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex justify-between items-center h-12 border">
        <div className="flex  justify-between w-28 hover:bg-gray-100 ">
          <Icon path={mdiShape} size={1}></Icon>
          <span>Categories</span>
        </div>
        <div className="rounded-full hover:bg-gray-100  w-10">
          <UnfoldIcon items={unfoldMenuItems}></UnfoldIcon>
        </div>
      </div>
      <div className="flex flex-wrap bg-grayish pt-4">
        {categories.map((cat) => (
          <Product
            name={cat.name}
            availableItems={cat.availableItems}
          ></Product>
        ))}
      </div>
    </div>
  );
}
