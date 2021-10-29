import Icon from "@mdi/react";
import { mdiReload } from "@mdi/js";
import UnfoldIcon from "../unfold";

export default function Orders() {
  const unfoldMenuItems = [
    "Sort by order number",
    "Sort by price",
    "Sort by date placed",
  ];

  return (
    <div className="flex flex-col flex-grow" style={{ height: "75%" }}>
      <div className="flex justify-end px-4 items-center h-12 border">
        <div className="w-16 flex justify-between">
          <div className="small-icon text-noir">
            <Icon path={mdiReload} size={1}></Icon>
          </div>
          <div className="small-icon text-noir">
            <UnfoldIcon items={unfoldMenuItems}></UnfoldIcon>
          </div>
        </div>
      </div>
      <div className="flex-grow p-8">
        <h2 className="text-2xl text-blue-600">Orders</h2>
        <p className="text-base pt-4 text-gray-500">
          Orders that are placed by this register will appear here. If there are
          no orders, please check the status loading options are correctly set
          by your shop manager.
        </p>
      </div>
    </div>
  );
}
