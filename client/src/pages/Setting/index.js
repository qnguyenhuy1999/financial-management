import React, { useState } from "react";
import classNames from "classnames";

import { SettingContainer, Sidebar, SidebarItem, Content } from "./styles";
import WalletSetting from "../../components/WalletSetting";
import ProfileSetting from "../../components/ProfileSetting";

function Setting() {
  const [switchRoute, setSwitchRoute] = useState("profile");

  return (
    <SettingContainer>
      <Sidebar>
        <SidebarItem
          className={classNames({
            "sidebaritem-active": switchRoute === "profile",
          })}
          onClick={() => setSwitchRoute("profile")}
        >
          Profile Setting
        </SidebarItem>
        <SidebarItem
          className={classNames({
            "sidebaritem-active": switchRoute === "wallet",
          })}
          onClick={() => setSwitchRoute("wallet")}
        >
          Wallet Setting
        </SidebarItem>
      </Sidebar>

      <Content>
        {switchRoute === "wallet" ? <WalletSetting /> : <ProfileSetting />}
      </Content>
    </SettingContainer>
  );
}

export default Setting;
