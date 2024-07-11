import { useEffect, useState } from "react";
import { toast } from "sonner";

const useCart = () => {
  const [cartLength, setCartLength] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const existingCart = localStorage.getItem("shoppingCarts");
  let cartData = existingCart ? JSON.parse(existingCart) : [];
  useEffect(() => {
    const interval = setInterval(() => {
      const shoppingCart = localStorage.getItem("shoppingCarts");
      if (shoppingCart) {
        const parsedCart = JSON.parse(shoppingCart);
        setCartProducts(parsedCart);
        setCartLength(parsedCart?.length || 0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleClearShoppingCart = () => {
    setCartLength(0);
    setCartProducts([]);
    setItemQuantity(0);
    localStorage.removeItem("shoppingCarts");
  };

  const handleDeleteToCart = (id) => {
    const updatedCart = cartProducts.filter((product) => product._id !== id);
    setCartProducts(updatedCart);
    localStorage.setItem("shoppingCarts", JSON.stringify(updatedCart));
    toast.success("Deleted product successfully from cart");
  };

  const handleAddToCart = (data) => {
    if (data.itemQuantity === 0) {
      return toast.error("Please select a quantity greater than zero.");
    }
    const existingItemIndex = cartData?.findIndex(
      (item) => item._id === data._id
    );

    const isExistItem = cartData?.find((item) => item._id === data._id);

    if (isExistItem) {
      const existingItem = cartData[existingItemIndex];
      const updatedQuantity = existingItem.itemQuantity + itemQuantity;
      const updatedSubTotal = existingItem.subtotal + data.price * itemQuantity;
      console.log(updatedQuantity, updatedSubTotal);
      if (updatedQuantity > data.stock) {
        return toast.error("Quantity exceeds stock available");
      }

      cartData[existingItemIndex] = {
        ...existingItem,
        itemQuantity: updatedQuantity,
        subtotal: updatedSubTotal,
      };
      localStorage.setItem("shoppingCarts", JSON.stringify(cartData));
      toast.success("Item quantity updated in cart");
      setItemQuantity(0);
    }
    if (itemQuantity > data.stock) {
      return toast.error("Quantity exceeds stock available");
    }
    if (!isExistItem) {
      cartData.push(data);
      localStorage.setItem("shoppingCarts", JSON.stringify(cartData));
      toast.success("Item added to cart");
      setItemQuantity(0);
    }
  };
  const handleQuantityDown = (increaseQuantity = 0, id = 0) => {
    if (increaseQuantity > 0) {
      const existingItemIndex = cartData?.findIndex((item) => item._id === id);
      const existingItem = cartData[existingItemIndex];
      const isExistItem = cartData?.find((item) => item._id === id);
      cartData[existingItemIndex] = {
        ...existingItem,
        itemQuantity: increaseQuantity,
        subtotal: increaseQuantity * isExistItem.price,
      };
      localStorage.setItem("shoppingCarts", JSON.stringify(cartData));
      toast.success("Item quantity updated in cart");
      setItemQuantity(0);
    }

    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleQuantityUp = (decreaseQuantity = 0, id = 0) => {
    if (decreaseQuantity > 0) {
      const existingItemIndex = cartData?.findIndex((item) => item._id === id);
      const existingItem = cartData[existingItemIndex];
      const isExistItem = cartData?.find((item) => item._id === id);
      cartData[existingItemIndex] = {
        ...existingItem,
        itemQuantity: decreaseQuantity,
        subtotal: decreaseQuantity * isExistItem.price,
      };
      localStorage.setItem("shoppingCarts", JSON.stringify(cartData));
      toast.success("Item quantity updated in cart");
      setItemQuantity(0);
    }
    setItemQuantity(itemQuantity + 1);
  };

  return {
    handleDeleteToCart,
    cartProducts,
    setCartProducts,
    cartLength,
    setCartLength,
    handleAddToCart,
    setItemQuantity,
    itemQuantity,
    handleQuantityDown,
    handleQuantityUp,
    handleClearShoppingCart,
  };
};

export default useCart;
