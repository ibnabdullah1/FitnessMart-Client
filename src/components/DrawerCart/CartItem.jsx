import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CartItem = ({ cartProducts, handleDeleteToCart }) => {
  const Subtotal = cartProducts?.reduce(
    (acc, product) => acc + product.price * product.itemQuantity,
    0
  );
  console.log(cartProducts);
  const shippingCost = Subtotal >= 1 ? 20 : 0;
  const total = Subtotal + shippingCost;

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
      <Link to={"/checkout"}>
        <button className="inline-block w-full px-5 mt-4 py-3 text-sm font-medium text-white  border border-primary bg-primary transform duration-200 rounded active:text-primary  hover:bg-transparent hover:text-primary focus:outline-none focus:ring">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartItem;
