export default function Menu({ showMenu }) {
  const menuItems = [
    {
      title: "Order",
      link: "https://site1.storiey.com/wp-admin/edit.php?post_type=shop_order",
    },
    {
      title: "Settings",
      link: "https://site1.storiey.com/wp-admin/admin.php?page=wc-pos-settings",
    },
    { title: "Help & Feedback" },
    { title: "Full Screen" },
  ];

  return showMenu ? (
    <ul className="absolute top-9 right-0 flex flex-col  bg-white w-36 rounded-md border">
      {menuItems.map((item, index, arr) => (
        <li
          key={index}
          className={`p-4  hover:bg-gray-100 ${
            index < arr.length - 1 ? "border-b" : ""
          }`}
        >
          <a href={item.link} target="_blank" className="w-full h-full">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  ) : (
    <div></div>
  );
}
