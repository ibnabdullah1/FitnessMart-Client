import { CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
      <div className="rounded-lg max-w-2xl mx-auto py-16 px-10  bg-white ">
        <div>
          <div className=" pb-6">
            <p className=" pb-2 font-semibold text-gray-800 ">Name</p>

            <input
              className="w-[70%]  px-4  py-2.5 text-base text-gray-400 rounded-lg font-normal border border-gray-200"
              type="text"
              defaultValue={"User Name"}
              disabled
            />
          </div>
          <div className=" pb-6">
            <p className="text-gray-800 pb-2 font-semibold ">Email address</p>

            <div className="w-full  md:flex-1">
              <input
                className=" w-[70%] px-4 py-2.5  text-base text-gray-400 rounded-lg font-normal border border-gray-200"
                type="email"
                defaultValue={"user@gmail.com"}
                disabled
              />
            </div>
          </div>
          <div className=" pb-6">
            <p className=" pb-2 font-semibold text-gray-800 ">Card Number</p>

            <div className="px-4 py-3 md:w-2/3 border bg-white rounded-lg">
              <CardElement
                options={{
                  style: {
                    base: {
                      border: "1px solid black",
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>
          </div>

          <p className=" font-semibold text-gray-800 ">Address</p>
          <div className="flex flex-wrap">
            <div className="w-full p-3 md:w-1/2">
              <p className="text-gray-800 text-sm font-semibold ">
                Country <span className="text-xs">(Optional)</span>
              </p>
              <select
                className="appearence-none      w-full py-2.5 px-4 text-gray-700 text-base font-normal border border-gray-200 rounded-lg "
                name=""
                id=""
              >
                <option>Canada</option>
                <option>Nepal</option>
                <option>India</option>
                <option>China</option>
              </select>
            </div>
            <div className="w-full p-3 md:w-1/2">
              <p className="text-gray-800 text-sm font-semibold ">
                City <span className="text-xs">(Optional)</span>
              </p>
              <input
                className="w-full px-4 py-2.5      text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="w-full p-3 md:w-1/2">
              <p className="text-gray-800 text-sm font-semibold ">
                State / Province <span className="text-xs">(Optional)</span>
              </p>
              <input
                className="w-full px-4 py-2.5      text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder=" State / Province"
              />
            </div>
            <div className="w-full p-3 md:w-1/2">
              <p className="text-gray-800 text-sm font-semibold ">
                ZIP / Postal code <span className="text-xs">(Optional)</span>
              </p>
              <input
                className="w-full px-4 py-2.5      text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder=" ZIP / Postal code"
              />
            </div>
            <div className="w-full p-3">
              <p className="text-gray-800 text-sm  font-semibold ">
                Permanent address <span className="text-xs">(Optional)</span>
              </p>
              <input
                className="w-full px-4 py-2.5      text-base text-gray-900 rounded-lg font-normal border border-gray-200"
                type="text"
                placeholder="  Permanent address"
              />
            </div>
          </div>
          <div className="flex items-center justify-between pb-4 mb-4 ">
            <span className="text-gray-800  font-semibold ">Total Price</span>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-400">
              $100010
            </span>
          </div>
          <button
            className="bg-[#ffcc00] mt-3 px-16 py-2 rounded text-white"
            type="submit"
            // disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
