import { useState } from "react";
import toast from "react-hot-toast";
import { BsCashCoin } from "react-icons/bs";
import { FaStripe } from "react-icons/fa6";
import { RxCross2, RxMinus, RxPlus } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../utils/useCart";
import SectionBanner from "./SectionBanner";

const ShoppingCart = () => {
  const {
    cartProducts,
    handleQuantityDown,
    handleQuantityUp,
    setCartProducts,
    handleCompleteOrder,
  } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();
  const total = Number(
    cartProducts.reduce((acc, item) => acc + item?.subtotal, 0).toFixed(0)
  );

  const shippingCost = total >= 1 ? 20 : 0;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#79C044",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        const updatedCart = cartProducts.filter(
          (product) => product._id !== id
        );
        setCartProducts(updatedCart);
        localStorage.setItem("shoppingCarts", JSON.stringify(updatedCart));
        toast.success("Deleted product successfully from cart");
      }
    });
  };
  const cashOnDeliveryOrder = () => {
    const orderData = {
      orderId: "Unpaid",
      items: cartProducts.map((product) => ({
        productId: product._id,
        name: product.name,
        quantity: product.itemQuantity,
        price: product.price,
        total: product.itemQuantity * product.price,
      })),
      payment: {
        method: "Cash on Delivery",
        status: "Pending",
      },
      orderStatus: "Processing",
      orderDate: new Date().toISOString(),
      totalAmount: cartProducts.reduce(
        (acc, product) => acc + product.itemQuantity * product.price,
        0
      ),
    };
    handleCompleteOrder(orderData);
    navigate("/order-history");
  };

  return (
    <div>
      <SectionBanner title={"Shopping Cart"} />

      <div className="justify-center flex-1 ">
        <div className="p-8 bg-white ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-8 xl:w-8/12 xl:mb-0">
              <div className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8">
                <div className="w-full md:block hidden px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                  <h2 className="font-bold text-secondary ">Product name</h2>
                </div>
                <div className="hidden px-4 lg:block lg:w-2/12">
                  <h2 className="font-bold text-secondary ">Price</h2>
                </div>
                <div className="hidden md:block px-4 md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-secondary ">Quantity</h2>
                </div>
                <div className="hidden md:block px-4 text-right md:w-1/6 lg:w-2/12 ">
                  <h2 className="font-bold text-secondary ">Subtotal</h2>
                </div>
              </div>
              <div className="py-4 mb-8  border-t border-b border-gray-200 ">
                {cartProducts &&
                  cartProducts.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-wrap items-center mb-6 -mx-4 md:mb-8"
                    >
                      <div className="w-full px-4 mb-6 md:w-4/6 lg:w-6/12 md:mb-0">
                        <div className="flex flex-wrap items-center -mx-4">
                          <div className="w-full px-4 mb-3 md:w-1/3">
                            <div className="w-full  md:h-24 md:w-24 p-3">
                              <img
                                src={item?.images}
                                alt=""
                                className="object-cover w-full h-full"
                              />
                            </div>
                          </div>
                          <div className="w-2/3 px-4">
                            <h2 className="mb-1 text-lg font-bold ">
                              {item?.name}
                            </h2>
                            <p className="text-gray-500  ">{item?.category}</p>
                          </div>
                        </div>
                      </div>
                      <div className="hidden px-4 lg:block lg:w-2/12">
                        <p className="text-lg font-bold text-pribg-primary ">
                          ${item?.price}.00
                        </p>
                        <span className="text-xs text-gray-500 line-through ">
                          ${item?.price ? item.price * 2 : "00"}.00
                        </span>
                      </div>
                      <div className="border w-[100px] h-8 flex items-center justify-between">
                        <div className="border-r h-full px-1 flex items-center justify-center">
                          <RxMinus
                            onClick={() =>
                              handleQuantityDown(
                                item?.itemQuantity - 1,
                                item._id
                              )
                            }
                          />{" "}
                        </div>
                        {item?.itemQuantity}
                        <div className="border-l h-full px-1 flex items-center justify-center">
                          <RxPlus
                            onClick={() =>
                              handleQuantityUp(item?.itemQuantity + 1, item._id)
                            }
                          />{" "}
                        </div>
                      </div>
                      <div className="w-auto px-4 text-right md:w-1/6 lg:w-2/12 ">
                        <p className="text-lg font-bold text-pribg-primary ">
                          {item?.price * item.itemQuantity}.00
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="text-primary hover:text-white bg-primary/10 hover:bg-primary/50 hover p-1 rounded-full"
                      >
                        <RxCross2 className="text-xl" />
                      </button>
                    </div>
                  ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-gray-700 ">Apply Coupon</span>
                <input
                  type="text"
                  className="flex-1 px-8 py-4 font-normal placeholder-gray-300 border  0 md:flex-none md:mr-6  "
                  placeholder="x304k45"
                  disabled
                />
                <button
                  disabled
                  className="flex-1 inline-block px-8 py-4 font-semibold text-center text-gray-400 bg-gray-300 rounded-md md:flex-none"
                >
                  Apply
                </button>
              </div>
            </div>
            <div className="w-full px-4 xl:w-4/12">
              <div className="p-6 border rounded border-primary  bg-primary/10 md:p-8">
                <h2 className="mb-8 text-xl font-bold text-gray-700 ">
                  Order Summary
                </h2>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-300  ">
                  <span className="text-gray-700 ">Subtotal</span>
                  <span className="text-xl font-bold text-gray-700  ">
                    ${total}.00
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700  ">Shipping</span>
                  <span className="text-xl font-semibold text-gray-700  ">
                    ${shippingCost}.00
                  </span>
                </div>
                <div className="flex items-center justify-between pb-4 mb-4 ">
                  <span className="text-gray-700 ">Order Total</span>
                  <span className="text-xl font-bold text-gray-700 ">
                    ${total + shippingCost}.00
                  </span>
                </div>
                <h2 className="text-lg text-gray-500 ">We offer:</h2>
                <div className="flex items-center mb-4 ">
                  <a>
                    <img
                      src="https://i.postimg.cc/g22HQhX0/70599-visa-curved-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                  <a>
                    <img
                      src="https://i.postimg.cc/HW38JkkG/38602-mastercard-curved-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                  <a>
                    <img
                      src="https://i.postimg.cc/HL57j0V3/38605-paypal-straight-icon.png"
                      alt=""
                      className="object-cover h-16 mr-2 w-26"
                    />
                  </a>
                </div>

                <div className="space-y-2 py-4">
                  <label className="has-[:checked]:bg-white/30 border border-secondary/10 has-[:checked]:text-primary has-[:checked]:ring-none has-[:checked]:ring-1 has-[:checked]:ring-primary cursor-pointer py-2 px-4 rounded-md flex gap-3 items-center">
                    <input
                      type="radio"
                      name="payment"
                      onClick={() => setPaymentMethod("cash")}
                      className="checked:border-primary h-5 w-5"
                    />
                    <div className="flex items-center gap-3">
                      <BsCashCoin />
                      <h2 className="text-lg">Cash On Delivery</h2>
                    </div>
                  </label>
                  <label className="has-[:checked]:bg-white/30 border border-secondary/10 has-[:checked]:text-primary has-[:checked]:ring-none has-[:checked]:ring-1 has-[:checked]:ring-primary cursor-pointer py-2 px-4 rounded-md flex gap-3 items-center">
                    <input
                      type="radio"
                      name="payment"
                      onClick={() => setPaymentMethod("stripe")}
                      className="checked:border-primary h-5 w-5"
                    />
                    <div className="flex items-center gap-3">
                      <FaStripe className="text-3xl" />
                    </div>
                  </label>
                </div>
                {cartProducts.length > 0 && paymentMethod === "cash" ? (
                  <button
                    onClick={cashOnDeliveryOrder}
                    className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-primary/80 rounded-md hover:bg-primary/100"
                  >
                    Place Order
                  </button>
                ) : cartProducts.length > 0 && paymentMethod === "stripe" ? (
                  <Link to={"/orders"}>
                    <button className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-primary/80 rounded-md hover:bg-primary/100">
                      Checkout
                    </button>
                  </Link>
                ) : (
                  <button className="block w-full py-4 font-bold text-center text-gray-400 uppercase bg-gray-300 rounded-md">
                    Checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
