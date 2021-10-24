import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Switch, Route, NavLink, withRouter } from "react-router-dom";
import Products from "../products";
import Orders from "../orders";
import Coupon from "../coupon";
import Note from "../note";
import Shipping from "../shipping";
import Footer from "../footer";

function MenuItem({ title, Icon, path, key }) {
  return (
    <li className="h-full w-28 cursor-pointer" key={key}>
      <NavLink exact to={path} activeClassName="active-nav-link">
        <div className="flex justify-evenly h-full w-full items-center px-2">
          <Icon fontSize="small" className="text-white"></Icon>
          <span className="text-sm text-white font-semibold">{title}</span>
        </div>
      </NavLink>
    </li>
  );
}

function Home({ location }) {
  const hiddenMenuItems = [
    { Icon: LocalOfferIcon, title: "Coupon", path: "/coupons" },
    { Icon: AssignmentIcon, title: "Note", path: "/notes" },
    { Icon: LocalShippingIcon, title: "Shipping", path: "/shippings" },
  ];

  const chosenMenuItem = hiddenMenuItems.find(
    (item) => item.path === location.pathname
  );

  const visibleMenuItems = [
    { Icon: ShoppingCartIcon, title: "Products", path: "/" },
    chosenMenuItem,
    { Icon: ShoppingBagIcon, title: "orders", path: "/orders" },
  ].filter(Boolean);

  return (
    <div className="flex flex-col w-full h-full">
      <ul className="flex w-full bg-bleu h-14">
        {visibleMenuItems.map((menu, index) => (
          <MenuItem {...menu} key={index}></MenuItem>
        ))}
      </ul>
      <Switch>
        <Route path="/orders">
          <Orders></Orders>
        </Route>
        <Route path="/coupons">
          <Coupon></Coupon>
        </Route>
        <Route path="/notes">
          <Note></Note>
        </Route>
        <Route path="/shippings">
          <Shipping></Shipping>
        </Route>
        <Route path="/">
          <Products></Products>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(Home);
