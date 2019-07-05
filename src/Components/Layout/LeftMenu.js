import React, { useState } from "react";
import { Link } from "react-router-dom";

//material ui
import {
  List,
  Collapse,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

//material ui icons
import UserIcon from "@material-ui/icons/AccountBox";
import OrderIcon from "@material-ui/icons/AddShoppingCart";
//import StationsIcon from '@material-ui/icons/AccountBalance';
import ProductIcon from "@material-ui/icons/DirectionsBike";
import OrganizationIcon from "@material-ui/icons/Store";
import DashboardIcon from "@material-ui/icons/Dashboard";
//import PromoteIcon from '@material-ui/icons/VolumeUp';
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Apps from "@material-ui/icons/Apps";
import AttributeIcon from "@material-ui/icons/Assessment";

function LeftMenu(props) {
  //hooks
  const [openMerchant, setOpenMerchant] = useState(false);
  const [openAttribute, setOpenAttribute] = useState(false);

  let menuArray = [];
  const SuperAdmin = props.roles.indexOf("SuperAdmin") > -1;
  const OrganizationAdmin =
    props.roles.indexOf("OrganizationAdmin") > -1 && props.status === "Active";
  const NonUser = props.status === "Processing" ? true : false;

  if (OrganizationAdmin) {
    menuArray = [
      { link: "/", name: "Dashboard", icon: DashboardIcon },
      { link: "/users", name: "User Management", icon: UserIcon },
      { link: "/products", name: "Product Management", icon: ProductIcon },
      {
        link: "/inventories",
        name: "Inventory Management",
        icon: OrganizationIcon
      },
      { link: "/orders", name: "Order Management", icon: OrderIcon }
    ];
  }
  if (SuperAdmin) {
    menuArray = [
      { link: "/", name: "Dashboard", icon: DashboardIcon },
      { link: "/users", name: "User Management", icon: UserIcon },
      { link: "/products", name: "Product Management", icon: ProductIcon },
      {
        link: "/inventories",
        name: "Inventory Management",
        icon: OrganizationIcon
      },
      { link: "/orders", name: "Order Management", icon: OrderIcon }
    ];
  }

  if (NonUser) {
    menuArray = [{ link: "/partners", name: "Partner", icon: DashboardIcon }];
  }
  const handleSubListChange = () => {
    setOpenAttribute(!openAttribute);
  };

  let attributeArray = [];
  if (OrganizationAdmin) {
    attributeArray = [{ link: "/brands", name: "Brands", icon: Apps },
    { link: "/dealers", name: "Dealers", icon: Apps }];
  }
  if (SuperAdmin) {
    attributeArray = [
      { link: "/producttypes", name: "Product Types", icon: Apps },
      { link: "/categories", name: "Categories", icon: Apps },
      { link: "/categories/sublist", name: " Sub Categories", icon: Apps },
      { link: "/brands", name: "Brands", icon: Apps },
      { link: "/dealers", name: "Dealers", icon: Apps }
    ];
  }

  let AttributeMenu = () => {
    return (
      <List>
        <ListItem button onClick={handleSubListChange}>
          <ListItemIcon>
            <AttributeIcon />
          </ListItemIcon>
          <ListItemText inset primary="Attribute" />
          {openAttribute ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openAttribute} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {attributeArray.map((menu, index) => (
              <Link to={menu.link} key={menu.name}>
                <ListItem button>
                  <ListItemIcon>{<menu.icon />}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      </List>
    );
  };

  let organizationsArray = [
    // {link: "/enquiries", name: "Enquiries", icon: OrganizationIcon},
    {
      link: "/merchants/processedList",
      name: "Registrations",
      icon: OrganizationIcon
    },
    {
      link: "/merchants/registeredList",
      name: "Merchants",
      icon: OrganizationIcon
    },
    // {
    //   link: "/merchants/query",
    //   name: "Queries",
    //   icon: OrganizationIcon
    // }
  ];
  const handleMerchantChange = () => {
    setOpenMerchant(!openMerchant);
  };

  let OrganizationsMenu = () => {
    return (
      <List>
        <ListItem button onClick={handleMerchantChange}>
          <ListItemIcon>
            <AttributeIcon />
          </ListItemIcon>
          <ListItemText inset primary="Merchant Management" />
          {openMerchant ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMerchant} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {organizationsArray.map((menu, index) => (
              <Link to={menu.link} key={menu.name}>
                <ListItem button>
                  <ListItemIcon>{<menu.icon />}</ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      </List>
    );
  };

  let mainListItems = (
    <div>
      {menuArray.map((menu, index) => (
        <Link to={menu.link} key={menu.name}>
          <ListItem button>
            <ListItemIcon>{<menu.icon />}</ListItemIcon>
            <ListItemText primary={menu.name} />
          </ListItem>
        </Link>
      ))}
      {SuperAdmin && <OrganizationsMenu />}
      <AttributeMenu />
    </div>
  );
  return mainListItems;
}

export default LeftMenu;
