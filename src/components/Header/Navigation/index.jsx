import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { LiaShippingFastSolid } from "react-icons/lia";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-20%">
            <Button
              sx={{ color: "#000" }}
              className="gap-2 justify-items-start"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px] ml-auto font-bold" />
              <span className="capitalize">Shop By Categories</span>
              <LiaAngleDownSolid className="text-[18px] cursor-pointer" />
            </Button>
          </div>
          <div className="col_2 w-60%">
            <ul className="flex justify-items-start items-start gap-1 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative group">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:top-[100%] group-hover:visible group-focus-within:opacity-100 group-focus-within:visible group-hover:pointer-events-auto transition-all duration-200 left-[0%] min-w-[150px] bg-white shadow-md">
                  <ul>
                    <li className="list-none w-full relative group/men">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{
                            color: "rgba(0,0,0,0.7)",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            borderRadius: "0",
                            "&:hover": {
                              color: "#ff5252",
                              backgroundColor: "transparent",
                            },
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") {
                              e.currentTarget.blur();
                            }
                          }}
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Men
                        </Button>
                      </Link>
                      {/* Fashion >> Men >> Submenu */}
                      <div className="submenu absolute top-[0] left-[101%] opacity-0 invisible pointer-events-none group-hover/men:opacity-100 group-hover/men:top-[0] group-hover/men:left group-hover/men:visible group-hover/men:pointer-events-auto group-focus-within/men:opacity-100 group-focus-within/men:visible transition-all duration-200 min-w-[200px] bg-white shadow-md">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                T-Shirts & Polos
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Shirts
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Jeans & Pants
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Jackets & Hoodies
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full group/women">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{
                            color: "rgba(0,0,0,0.7)",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            borderRadius: "0",
                            "&:hover": {
                              color: "#ff5252",
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          Women
                        </Button>
                      </Link>
                      {/* Fashion >> Women >> Submenu */}
                      <div className="submenu absolute top-[33%] left-[101%] opacity-0 invisible pointer-events-none group-hover/women:opacity-100 group-hover/women:top-[33%] group-hover/women:left group-hover/women:visible group-hover/women:pointer-events-auto group-focus-within/women:opacity-100 group-focus-within/women:visible transition-all duration-200 min-w-[200px] bg-white shadow-md">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                T-Shirts & Polos
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Shirts
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Jeans & Pants
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Jackets & Hoodies
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full group/kids">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{
                            color: "rgba(0,0,0,0.7)",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            borderRadius: "0",
                            "&:hover": {
                              color: "#ff5252",
                              backgroundColor: "transparent",
                            },
                          }}
                        >
                          Kids
                        </Button>
                      </Link>
                      {/* Fashion >> Kids >> Submenu */}
                      <div className="submenu absolute top-[66%] left-[101%] opacity-0 invisible pointer-events-none group-hover/kids:opacity-100 group-hover/kids:top-[66%] group-hover/kids:left group-hover/kids:visible group-hover/kids:pointer-events-auto group-focus-within/kids:opacity-100 group-focus-within/kids:visible transition-all duration-200 min-w-[200px] bg-white shadow-md">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                T-Shirts & Polos
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Shirts
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Jeans & Pants
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button
                                sx={{
                                  color: "rgba(0,0,0,0.7)",
                                  textTransform: "capitalize",
                                  fontWeight: "bold",
                                  width: "100%",
                                  textAlign: "left",
                                  justifyContent: "flex-start",
                                  borderRadius: "0",
                                  "&:hover": {
                                    color: "#ff5252",
                                    backgroundColor: "transparent",
                                  },
                                }}
                              >
                                Jackets & Hoodies
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="link transition capitalize"
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    Jewelry
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_2 flex justify-end items-center gap-3 w-[20%] ml-[10px]!">
            <LiaShippingFastSolid className="font-[500]" />
            <p className="text-[14px] font-[500]">
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
