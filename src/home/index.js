import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import UndoIcon from "@mui/icons-material/Undo";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Switch, Route, NavLink, withRouter, Redirect } from "react-router-dom";
import ProductsCategories from "../products-categories";
import Orders from "../orders";
import Coupon from "../coupon";
import Note from "../note";
import Shipping from "../shipping";
import Refund from "../refund";
import Products from "../products";
import Footer from "../footer";
import Calculator from "../calculator";

function MenuItem({ title, Icon, path, key }) {
  return (
    <li className="h-full w-28 cursor-pointer" key={key}>
      <NavLink to={path} activeClassName="active-nav-link">
        <div className="flex justify-evenly h-full w-full items-center px-2">
          <Icon fontSize="small" className="text-white"></Icon>
          <span className="text-sm text-white font-semibold capitalize">
            {title}
          </span>
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
    { Icon: UndoIcon, title: "Refunds", path: "/refunds" },
    { Icon: UndoIcon, title: "Discounts", path: "/discounts" },
  ];

  const chosenMenuItem = hiddenMenuItems.find(
    (item) => item.path === location.pathname
  );

  const visibleMenuItems = [
    { Icon: ShoppingCartIcon, title: "Products", path: "/products" },
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
        <Route path="/refunds">
          <Refund></Refund>
        </Route>
        <Route path="/products/:category">
          <Products></Products>
        </Route>
        <Route path="/products">
          <ProductsCategories></ProductsCategories>
        </Route>
        <Route path="/discounts">
          <Calculator></Calculator>
        </Route>
        <Route>
          <Redirect to="/products"></Redirect>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(Home);
