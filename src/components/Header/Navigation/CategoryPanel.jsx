import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "../Navigation/style.css";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen);
  };

  const openSubmenu = (index) => {
    setSubmenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3! text-[18px] font-[500] flex items-center justify-between">
        Shop by Categories
        <IoCloseSharp
          onClick={toggleDrawer(false)}
          className="cursor-pointer text-[20px]"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full list-none p-0">
          {/* Fashion */}
          <li className="flex flex-col w-full">
            <div className="relative w-full flex items-center">
              <Link to="/" className="flex-grow">
                <Button
                  className="w-full"
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    paddingLeft: "12px",
                    justifyContent: "flex-start",
                  }}
                >
                  Fashion
                </Button>
              </Link>

              <div
                className="absolute right-[10px] z-10 cursor-pointer p-1"
                onClick={() => openSubmenu(0)}
              >
                {submenuIndex === 0 ? (
                  <FiMinusSquare size={18} />
                ) : (
                  <FaRegSquarePlus size={18} />
                )}
              </div>
            </div>

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-4 list-none">
                {/* Men */}
                <li className="flex flex-col w-full">
                  <div className="relative w-full flex items-center">
                    <Link to="/" className="flex-grow">
                      <Button
                        className="w-full"
                        sx={{
                          color: "rgba(0, 0, 0, 0.7)",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          paddingLeft: "25px",
                          justifyContent: "flex-start",
                        }}
                      >
                        Men
                      </Button>
                    </Link>

                    <div
                      className="absolute right-[10px] z-10 cursor-pointer p-1"
                      onClick={() => openInnerSubmenu(0)}
                    >
                      {innerSubmenuIndex === 0 ? (
                        <FiMinusSquare size={18} />
                      ) : (
                        <FaRegSquarePlus size={18} />
                      )}
                    </div>
                  </div>

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-4 list-none mt-1">
                      {[
                        "T-Shirts & Polos",
                        "Shirts",
                        "Jeans & Pants",
                        "Jackets & Hoodies",
                      ].map((item, idx) => (
                        <li key={idx} className="py-1 pl-8">
                          <Link
                            to="/"
                            className="text-[14px] text-gray-600 hover:text-[#ff5252] block w-full transition-all"
                            style={{ paddingLeft: "32px" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Women */}
                <li className="flex flex-col w-full">
                  <div className="relative w-full flex items-center">
                    <Link to="/" className="flex-grow">
                      <Button
                        className="w-full"
                        sx={{
                          color: "rgba(0, 0, 0, 0.7)",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          paddingLeft: "25px",
                          justifyContent: "flex-start",
                        }}
                      >
                        Women
                      </Button>
                    </Link>

                    <div
                      className="absolute right-[10px] z-10 cursor-pointer p-1"
                      onClick={() => openInnerSubmenu(1)}
                    >
                      {innerSubmenuIndex === 1 ? (
                        <FiMinusSquare size={18} />
                      ) : (
                        <FaRegSquarePlus size={18} />
                      )}
                    </div>
                  </div>

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-4 list-none mt-1">
                      {[
                        "T-Shirts & Polos",
                        "Shirts",
                        "Jeans & Pants",
                        "Jackets & Hoodies",
                      ].map((item, idx) => (
                        <li key={idx} className="py-1 pl-8">
                          <Link
                            to="/"
                            className="text-[14px] text-gray-600 hover:text-[#ff5252] block w-full transition-all"
                            style={{ paddingLeft: "32px" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Kids */}
                <li className="flex flex-col w-full">
                  <div className="relative w-full flex items-center">
                    <Link to="/" className="flex-grow">
                      <Button
                        className="w-full"
                        sx={{
                          color: "rgba(0, 0, 0, 0.7)",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          paddingLeft: "25px",
                          justifyContent: "flex-start",
                        }}
                      >
                        Kids
                      </Button>
                    </Link>

                    <div
                      className="absolute right-[10px] z-10 cursor-pointer p-1"
                      onClick={() => openInnerSubmenu(2)}
                    >
                      {innerSubmenuIndex === 2 ? (
                        <FiMinusSquare size={18} />
                      ) : (
                        <FaRegSquarePlus size={18} />
                      )}
                    </div>
                  </div>

                  {innerSubmenuIndex === 2 && (
                    <ul className="inner_submenu w-full pl-4 list-none mt-1">
                      {[
                        "T-Shirts & Polos",
                        "Shirts",
                        "Jeans & Pants",
                        "Jackets & Hoodies",
                      ].map((item, idx) => (
                        <li key={idx} className="py-1 pl-8">
                          <Link
                            to="/"
                            className="text-[14px] text-gray-600 hover:text-[#ff5252] block w-full transition-all"
                            style={{ paddingLeft: "32px" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Electronics */}
          <li className="flex flex-col w-full">
            <div className="relative w-full flex items-center">
              <Link to="/" className="flex-grow">
                <Button
                  className="w-full"
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    paddingLeft: "12px",
                    justifyContent: "flex-start",
                  }}
                >
                  Electronics
                </Button>
              </Link>

              <div
                className="absolute right-[10px] z-10 cursor-pointer p-1"
                onClick={() => openSubmenu(1)}
              >
                {submenuIndex === 1 ? (
                  <FiMinusSquare size={18} />
                ) : (
                  <FaRegSquarePlus size={18} />
                )}
              </div>
            </div>

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-4 list-none">
                {/* Men */}
                <li className="flex flex-col w-full">
                  <div className="relative w-full flex items-center">
                    <Link to="/" className="flex-grow">
                      <Button
                        className="w-full"
                        sx={{
                          color: "rgba(0, 0, 0, 0.7)",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          paddingLeft: "25px",
                          justifyContent: "flex-start",
                        }}
                      >
                        Men
                      </Button>
                    </Link>

                    <div
                      className="absolute right-[10px] z-10 cursor-pointer p-1"
                      onClick={() => openInnerSubmenu(0)}
                    >
                      {innerSubmenuIndex === 0 ? (
                        <FiMinusSquare size={18} />
                      ) : (
                        <FaRegSquarePlus size={18} />
                      )}
                    </div>
                  </div>

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-4 list-none mt-1">
                      {[
                        "T-Shirts & Polos",
                        "Shirts",
                        "Jeans & Pants",
                        "Jackets & Hoodies",
                      ].map((item, idx) => (
                        <li key={idx} className="py-1 pl-8">
                          <Link
                            to="/"
                            className="text-[14px] text-gray-600 hover:text-[#ff5252] block w-full transition-all"
                            style={{ paddingLeft: "32px" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Women */}
                <li className="flex flex-col w-full">
                  <div className="relative w-full flex items-center">
                    <Link to="/" className="flex-grow">
                      <Button
                        className="w-full"
                        sx={{
                          color: "rgba(0, 0, 0, 0.7)",
                          textTransform: "capitalize",
                          fontWeight: "bold",
                          paddingLeft: "25px",
                          justifyContent: "flex-start",
                        }}
                      >
                        Women
                      </Button>
                    </Link>

                    <div
                      className="absolute right-[10px] z-10 cursor-pointer p-1"
                      onClick={() => openInnerSubmenu(1)}
                    >
                      {innerSubmenuIndex === 1 ? (
                        <FiMinusSquare size={18} />
                      ) : (
                        <FaRegSquarePlus size={18} />
                      )}
                    </div>
                  </div>

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-4 list-none mt-1">
                      {[
                        "T-Shirts & Polos",
                        "Shirts",
                        "Jeans & Pants",
                        "Jackets & Hoodies",
                      ].map((item, idx) => (
                        <li key={idx} className="py-1 pl-8">
                          <Link
                            to="/"
                            className="text-[14px] text-gray-600 hover:text-[#ff5252] block w-full transition-all"
                            style={{ paddingLeft: "32px" }}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* end Test */}
        </ul>
      </div>
    </Box>
  );

  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
