import { RxMinus, RxPlus } from "react-icons/rx";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import AdsProducts from "../../components/Featured Products/AdsProducts";
import ReviewDetails from "../../components/Products/ReviewDetails";
import useCart from "../../utils/useCart";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const {
    handleAddToCart,
    itemQuantity,
    handleQuantityDown,
    handleQuantityUp,
  } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-10 py-10">
      <div className="lg:flex  justify-between items-start">
        <div className="lg:w-[55%] mb-4 lg:mb-0 px-10">
          <img src={data.images} alt="" className="w-full" />
        </div>
        <div className="text-left lg:w-[45%]">
          <h2 className="uppercase font-medium tracking-[3px]">
            {data.category}
          </h2>

          <h1 className="font-bold text-2xl mb-3">{data.name}</h1>
          <p className=" text-primary flex items-center mb-1 gap-1 text-xs ">
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              }
              fullSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={data.rating}
              readonly
            />
            <span className="text-secondary/70">123 Reviews</span>
          </p>
          <h2 className="font-medium text-lg  ">Stock:{data.stock}</h2>
          <p className="flex gap-2 text-xl  font-medium text-primary">
            <s className="text-secondary ">${data.price * 2}.00</s>${data.price}
            .00
          </p>
          <p className="text-secondary my-2">
            Starting at $13/mo with affirm. Learn more
          </p>
          <div className="w-[70%] h-[1px] bg-secondary/20 my-6"></div>
          <div>
            <h2 className="uppercase mb-1 text-sm font-medium tracking-[1px]">
              Quantity
            </h2>
            <div className="border w-[100px] h-8 flex items-center justify-between">
              <div className="border-r h-full px-1 flex items-center justify-center">
                <RxMinus onClick={handleQuantityDown} />{" "}
              </div>
              {itemQuantity}
              <div className="border-l h-full px-1 flex items-center justify-center">
                <RxPlus onClick={handleQuantityUp} />{" "}
              </div>
            </div>
          </div>
          <button
            onClick={() =>
              handleAddToCart({
                ...data,
                itemQuantity,
                subtotal: data.price * itemQuantity,
              })
            }
            className="bg-[#000000] font-semibold my-6 text-white w-full py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div>
        <ReviewDetails rating={data.rating} />
        <AdsProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
