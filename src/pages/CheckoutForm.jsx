import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useUpdateProductStockFromOrderMutation } from "../redux/features/productApi/productApi";
import useAxiosPublic from "../utils/useAxiosPublic";
import useCart from "../utils/useCart";

const CheckoutForm = () => {
  const { cartProducts, handleClearShoppingCart, handleCompleteOrder } =
    useCart();
  const subTotal = Number(
    cartProducts.reduce((acc, item) => acc + item?.subtotal, 0).toFixed(0)
  );
  const [updateProductStockFromOrder] =
    useUpdateProductStockFromOrderMutation();
  const navigate = useNavigate();
  const shippingCost = subTotal >= 1 ? 20 : 0;
  const totalCost = subTotal + shippingCost;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState(
    "pi_3PbNuUC1pZIWKl2d1K3E1CmH"
  );

  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    if (totalCost > 0) {
      axiosPublic
        .post("/payments/create-payment-intent", { price: totalCost })
        .then((res) => {
          setClientSecret(res?.data?.data?.clientSecret);
        });
    }
  }, [axiosPublic, totalCost]);

  const orderData = {
    orderId: transactionId,
    items: cartProducts.map((product) => ({
      productId: product._id,
      name: product.name,
      quantity: product.itemQuantity,
      price: product.price,
      total: product.itemQuantity * product.price,
    })),
    payment: {
      method: "stripe",
      status: "Pending",
    },
    orderStatus: "Processing",
    orderDate: new Date().toISOString(),
    totalAmount: cartProducts.reduce(
      (acc, product) => acc + product.itemQuantity * product.price,
      0
    ),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setLoading(false);
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      setLoading(false);
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setLoading(false);
      setError(error.message);
    } else {
      setError("");
      setLoading(true);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });
    setLoading(true);
    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent?.id);
      handleCompleteOrder(orderData);
      handleClearShoppingCart();
      navigate("/order-history");
      toast.success("Payment successful");
      updateProductStockFromOrder(orderData);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-10">
      <div className="rounded-lg max-w-xl mx-auto py-16 px-10  bg-white border ">
        <div>
          <div className=" pb-6">
            <p disabled className=" pb-2 font-semibold text-gray-400 ">
              Name
            </p>

            <input
              className="w-full  px-4  py-2.5 text-base text-gray-400 rounded-lg font-normal border border-gray-200"
              type="text"
              defaultValue={"Jack Joy"}
              disabled
            />
          </div>
          <div className=" pb-6">
            <p disabled className="text-gray-400 font-semibold pb-2  ">
              Email address
            </p>

            <div className="w-full  md:flex-1">
              <input
                className=" w-full px-4 py-2.5  text-base text-gray-400 rounded-lg font-normal border border-gray-200"
                type="email"
                defaultValue={"joy12@gmail.com"}
                disabled
              />
            </div>
          </div>
          <div className=" pb-6">
            <p className=" pb-2 font-semibold text-gray-800 ">Card Number</p>

            <div className="px-4 py-3 w-full border bg-white rounded-lg">
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

          <div className="flex items-center justify-between pb-4 mb-4 ">
            <span className="text-gray-800  font-semibold ">Total Price</span>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-400">
              ${totalCost}
            </span>
          </div>

          <button
            className="bg-primary w-full mt-3 flex justify-center items-center px-16 py-2 rounded text-white"
            type="submit"
          >
            {loading ? (
              <FaSpinner className="animate-spin text-white " />
            ) : (
              "Pay"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
