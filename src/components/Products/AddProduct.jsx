import { useState } from "react";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../redux/features/productApi/productApi";
import InputDropdown from "./inputDropdown";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [addProduct, { isSuccess, data, isLoading }] = useAddProductMutation();
  if (isLoading) {
    ("Loading.....");
  }
  if (data?.success) {
    toast.success(data.message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const images = from.image.value;
    const price = Number(from.price.value);
    const stock = Number(from.stock.value);
    const description = from.description.value;
    const formData = {
      name,
      images,
      category,
      price,
      stock,
      rating: 5,
      description,
      isDeleted: false,
    };
    addProduct(formData);
  };

  return (
    <div className=" max-w-7xl px-5 lg:px-10 mx-auto  py-10 ">
      <div className="flex items-center px-3 border-b py-3">
        <h1 className="mt-5 mb-8 text-2xl font-bold text-secondary md:text-4xl text-center ">
          Add Product
        </h1>
      </div>
      <div className="border py-2 rounded-lg ">
        <form className="w-full px-3 mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3 py-2">
            <div>
              <label htmlFor="name" className="block text-[15px] ">
                Name <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="mt-1 rounded-md">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  required
                  className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div>
              <InputDropdown
                placeholder={"Select Category"}
                name={"Category"}
                options={[
                  "Elliptical Trainer",
                  "Hex Dumbbells",
                  "Walking Pad",
                  "Treadmills",
                  "Rowing Machine",
                  "Massage Chair",
                  "Jump Rope",
                  "GYM Equipment",
                  "Exercise Cycle",
                ]}
                selectedOption={category}
                setSelectedOption={setCategory}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 py-2">
            <div>
              <label htmlFor="name" className="block text-[15px] ">
                Stock <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="mt-1 rounded-md">
                <input
                  id="stock"
                  name="stock"
                  type="number"
                  placeholder="Enter Stock"
                  required
                  className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="block text-[15px] ">
                Price <span className="text-red-500 font-bold">*</span>
              </label>
              <div className="mt-1 rounded-md">
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Enter Price"
                  required
                  className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="py-2">
            <label htmlFor="cost" className="block text-[15px] ">
              Image <span className="text-red-500 font-bold">*</span>
            </label>
            <div className="mt-1 rounded-md">
              <input
                id="image"
                name="image"
                type="text"
                placeholder="Enter Image Link"
                required
                className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <div className="py-2">
            <label htmlFor="details" className="block text-[15px] py-1">
              Description/Product Details{" "}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <textarea
              id="product-details"
              name="description"
              rows="6"
              className="appearance-none block w-full px-3 text-[15px] py-2 border rounded-md placeholder-secondary/50 focus:outline-none focus:border-primary transition duration-150 ease-in-out"
              placeholder="Details"
            ></textarea>
          </div>

          <button
            type="submit"
            className=" bg-primary px-3 text-white py-2 rounded-md text-[15px]  font-medium"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
