import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Storefront from "@mui/icons-material/Storefront";
import ShoppingCartCheckout from "@mui/icons-material/ShoppingCartCheckout";
import { styled } from "@mui/material/styles";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-flexContainer": {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default function IconLabelTabs({ value, handleChange }) {
  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      aria-label="nav icon label tabs"
    >
      <Tab icon={<Storefront />} label="Home" />
      <Tab icon={<ShoppingCartCheckout />} label="Carrinho" />
    </StyledTabs>
  );
}
