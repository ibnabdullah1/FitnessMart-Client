import { FaRegEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteSingleProductMutation,
  useGetAllProductsQuery,
} from "../../redux/features/productApi/productApi";
import Loading from "../Loading";
const ProductsList = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  const [deleteSingleProduct] = useDeleteSingleProductMutation();

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
        deleteSingleProduct(id);
      }
    });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10">
      <div className="md:flex items-center justify-between py-3">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold"> Product List</h2>

          <p className="text-[14px] text-secondary">
            The product list effectively dictates product presentation and
            provides space <br />
            to list your products and offering in the most appealing way.
          </p>
        </div>
        <Link
          to={"/add-product"}
          className="px-2 py-1.5 w-[120px] mt-3 text-[12px] bg-primary gap-1 text-white rounded-md flex items-center justify-between"
        >
          <FaCirclePlus className="text-[16px]" /> Add Product
        </Link>
      </div>
      <div className="rounded-lg   border max-w-screen-2xl mx-auto  overflow-x-auto overflow-hidden  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary  mt-3  ">
        <div>
          <table className="w-full table-auto">
            <thead className="bg-primary/15">
              <tr className="text-lg  text-left text-primary font-semibold">
                <th className="px-5 py-3 font-medium min-w-[200px] ">
                  Product
                </th>
                <th className="px-5 py-3 font-medium min-w-[130px]  ">
                  {" "}
                  Category
                </th>
                <th className="px-5 py-3 font-medium min-w-[200px]  ">
                  {" "}
                  Price
                </th>
                <th className="px-5 font-medium min-w-[120px] ">Stock</th>
                <th className="px-5 py-3 font-medium min-w-[140px] ">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.data.map((item, i) => (
                <tr key={i} className="border-b text-[15px]">
                  <td className="px-3 md:px-5 py-3">
                    <div className="flex items-center gap-4">
                      <div className="border rounded-full  p-2">
                        <img
                          src={item?.images}
                          className="w-[40px] h-auto"
                          alt="Product"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[15px]">
                          {item.name}
                        </h3>
                        <p className="text-secondary  text-[12px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-secondary">{item.category}</td>
                  <td className="px-5 py-3 text-secondary">${item.price}</td>
                  <td className="px-5 py-3 text-secondary">{item.stock}</td>
                  <td className="px-5 py-3 text-secondary">
                    <div className="flex gap-2 items-center">
                      <Link to={`/products/update/${item._id}`}>
                        <button className="p-1 border rounded">
                          <FaRegEdit className="text-blue-600 text-xl" />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="p-1 border rounded"
                      >
                        <MdDelete className="text-red-500 text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
