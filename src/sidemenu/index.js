import { useSelector } from "react-redux";

export default function SideMenu() {
  const isOpen = useSelector((state) => state.sideMenu.isOpen);
  return (
    <div id="mySidebar" class={`${isOpen ? "w-80" : "w-0"}sidebar}`}>
      <div class="headerSideBar">
        <div class="contentHeaderSideBar">
          <div class="contentIcon">
            <i
              aria-hidden="true"
              role="img"
              class="iconStyle material-icons q-icon"
            >
              store
            </i>
          </div>
          <div class="contentTextHeader">
            <span class="smallText">Outlet</span>
            <span class="textBigger">Default Outlet</span>
          </div>
          <div class="contentIcon">
            <i
              aria-hidden="true"
              role="img"
              class="iconStyle mdi mdi-account-switch q-icon"
            ></i>
          </div>
        </div>
      </div>
      <div class="secondDivSideBarContent">
        <div class="avatarContent">
          <img
            class="avatarIcon"
            src="https://secure.gravatar.com/avatar/5f18d23e7909e831cbbf085bfcb513d8?s=96&amp;d=mm&amp;r=g"
          />
        </div>
        <div class="columnTwoAvatarContent">
          <span class="textBigger"> Demo Account </span>
          <span class="smallTextAvatar"> demo@storiey.com</span>
        </div>
      </div>
      <div class="thiredRowHeader">
        <div class="colOne">
          <div class="textInCol">Orders</div>
          <div class="textTwo">0</div>
        </div>
        <div class="colOne">
          <div class="textInCol">Opened</div>
          <div class="textTwo">a day ago</div>
        </div>
      </div>
      <div class="rowFour">
        <div class="rowFourColOne">
          <span class="rowForColOneText">Sales</span>
          <span class="rowForColOneTextTwo">$0.00</span>
        </div>
        <div class="exitIconContent">
          <i
            aria-hidden="true"
            role="img"
            class="exitIconStyle mdi mdi-logout q-icon notranslate"
          ></i>
        </div>
      </div>
    </div>
  );
}
