import { useEffect, useState } from "react";
import { formatToAMPM } from "./DateFormet";

const OrderHistorys = () => {
  const [noData, setNoData] = useState("");
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const orders = localStorage.getItem("orders");
      if (orders) {
        const parsedOrders = JSON.parse(orders);
        setOrderProducts(parsedOrders);
      } else {
        setOrderProducts([]);
      }
      if (!orders || orders.length === 0) {
        setNoData("No orders found");
      } else {
        setNoData("");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 pt-4 pb-16">
      <h1 className="mt-5 mb-8 px-8 text-2xl font-bold text-secondary md:text-4xl text-center ">
        Order History
      </h1>
      <div className="overflow-x-auto  bg-white border rounded ">
        <table className="w-full table-auto ">
          <thead className="bg-primary/15">
            <tr className="text-xs  text-left text-primary font-semibold">
              <th className="px-5 py-3 font-medium min-w-[200px] ">
                Transaction ID
              </th>
              <th className="px-5 py-3 font-medium min-w-[130px]  ">Date</th>
              <th className="px-5 py-3 font-medium min-w-[200px]  ">Items</th>
              <th className="px-5 font-medium min-w-[120px] ">Total Amount</th>
              <th className="px-5 py-3 font-medium min-w-[140px] ">
                Payment Method
              </th>
              <th className="px-5 py-3 font-medium min-w-[60px] ">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderProducts.map((order) => (
              <tr
                key={order.orderId}
                className="text-xs border-b dark:text-gray-400 dark:bg-gray-800"
              >
                <td className="px-5 py-5 font-medium">{order.orderId}</td>
                <td className="px-5 py-5 font-medium">
                  {formatToAMPM(order.orderDate)}
                </td>
                <td className="px-5 py-5 font-medium">
                  {order.items.map((item) => (
                    <div key={item.productId}>
                      {item.name} x{item.quantity}
                    </div>
                  ))}
                </td>
                <td className="px-5 py-5 font-medium">{order.totalAmount}</td>
                <td className="px-5 py-5 font-medium">
                  {order.payment.method}
                </td>
                <td>
                  <span
                    className={`inline-block px-5 py-1 text-center text-[#ffcc00] bg-[rgb(255,204,0,0.2)] rounded-full`}
                  >
                    {order.payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col py-5 justify-center items-center">
          <p className="text-gray-500">{noData}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistorys;
