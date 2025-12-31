import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Navigation from "./Navigation";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxLoop } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
    background: "#ff5252",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-banner pb-[20px] border-b border-black/10">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-medium">
                Get up to 15% off, limited time only!
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[13px] link font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="track-order"
                    className="text-[13px] link font-medium transition"
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 pb-[20px] border-b border-black/10">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[15%]">
            <Link to={"/"}>
              <img src="/logo.png" alt="Merka Logo" className="w-32 h-auto" />
            </Link>
          </div>

          <div className="col2 w-[55%]">
            <Search />
          </div>

          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center gap-3 justify-end w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
                &nbsp; | &nbsp;
                <Link
                  to="/register"
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={0} color="secondary">
                      <RxLoop />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={0} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={0} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
