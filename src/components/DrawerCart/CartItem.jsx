import { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { FaStripe } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateProductStockFromOrderMutation } from "../../redux/features/productApi/productApi";
import useCart from "../../utils/useCart";

const CartItem = ({ cartProducts, handleDeleteToCart }) => {
  const { handleCompleteOrder } = useCart();
  const navigate = useNavigate();
  const [updateProductStockFromOrder] =
    useUpdateProductStockFromOrderMutation();
  const [paymentMethod, setPaymentMethod] = useState("");
  const Subtotal = cartProducts?.reduce(
    (acc, product) => acc + product.price * product.itemQuantity,
    0
  );
  const shippingCost = Subtotal >= 1 ? 20 : 0;
  const total = Subtotal + shippingCost;
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
    updateProductStockFromOrder(orderData);
  };
  return (
    <div className=" bg-white">
      {cartProducts?.map(
        ({ itemQuantity, images, name, price, _id }, index) => (
          <div key={index} className="flex justify-between py-3">
            <div className="flex gap-1">
              <div className="shrink-0 relative rounded-full">
                <span className="top-1 absolute right-1 text-white w-[2px] h-[2px] flex justify-center items-center rounded-full text-[8px] p-2 bg-primary">
                  {itemQuantity}
                </span>
                <img
                  className="h-10 w-10 overflow-hidden object-cover"
                  src={images}
                  alt=""
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">{name}</p>
                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                  36EU - 4US
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-base font-semibold text-gray-900">
                ${price}.00
              </p>
              <button
                onClick={() => handleDeleteToCart(_id)}
                className="hover:text-primary ibg-primary"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
        )
      )}

      <div className="mt-6 space-y-3 border-t border-b py-8">
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Subtotal</p>
          <p className=" font-semibold text-gray-900">${Subtotal}.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-400">Shipping</p>
          <p className=" font-semibold text-gray-900">${shippingCost}.00</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-xl font-semibold text-gray-900">
          <span className="text-xs font-normal text-gray-400">USD</span> {total}
          .00
        </p>
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
      {cartProducts?.length > 0 && paymentMethod === "cash" ? (
        <button
          onClick={cashOnDeliveryOrder}
          className="block w-full py-4 font-bold text-center text-gray-100 uppercase bg-primary/80 rounded-md hover:bg-primary/100"
        >
          Place Order
        </button>
      ) : cartProducts?.length > 0 && paymentMethod === "stripe" ? (
        <Link to={"/checkout"}>
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
  );
};

export default CartItem;
