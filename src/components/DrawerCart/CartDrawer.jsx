import { Drawer, IconButton, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../utils/useCart";
import "./CartDrawer.css";
import CartItem from "./CartItem";
export function CartDrawer() {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const { cartLength } = useCart();

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={openDrawerRight}
          className="hover:bg-primary transform duration-200 flex justify-center items-center relative border w-[40px] h-[40px] hover:border hover:border-primary bg-white text-xl text-primary  rounded-full hover:text-white"
        >
          <span className=" top-0 absolute right-0 text-white w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-[#070707]">
            {cartLength}
          </span>
          <FaCartShopping />
        </button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="px-4 z-50 bg-white mt-[71px] overflow-y-auto pt-5 pb-20"
      >
        <div className="mb-6  flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Shopping Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
            className="hover:bg-primary/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <CartItem />
      </Drawer>
    </React.Fragment>
  );
}
