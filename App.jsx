import { useState, useEffect, useReducer } from "react";
import { CartContext } from"./context/CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/cart";
import Footer from "./components/Footer";
import Loading from "./components/loading";
import Toast from "./components/Toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function cartReducer(state, action) {

  switch (action.type) {

    case "ADD": { 
      const existingItem = state.find(
        item => item.id === action.product.id
      );

      if (existingItem) {

        return state.map(item =>
          item.id === action.product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...state,
        {
          ...action.product,
          quantity: 1
        }
      ];
    }

    case "EDIT":

      return state.map(item =>
        item.id === action.id
          ? {
              ...item,
              quantity: action.quantity
            }
          : item
      );

    case "DELETE":

      return state.filter(
        item => item.id !== action.id
      );

    default:
      return state;
  }
}


function App() {

  const [products, setProducts] = useState([]);

  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      try {
        const savedCart =
          localStorage.getItem("cart");
          
        return savedCart
          ? JSON.parse(savedCart)
          : [];

      } catch {
        return [];
      }
    }
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [showCart, setShowCart] = useState(false);

  const [toasts, setToasts] = useState([]);


  /* =========================
     SAVE CART
  ========================= */

  useEffect(() => {

    try {

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

    } catch (err) {

      console.error(
        "Failed to save cart:",
        err
      );

    }

  }, [cart]);


  /* =========================
     TOAST
  ========================= */

  const showToast = (
    message,
    type = "success"
  ) => {

    const id = Date.now();

    const newToast = {
      id,
      message,
      type
    };

    setToasts(prev => [
      ...prev,
      newToast
    ]);

    setTimeout(() => {

      removeToast(id);

    }, 3000);
  };


  const removeToast = (id) => {

    setToasts(prev =>
      prev.filter(
        toast => toast.id !== id
      )
    );

  };


  /* =========================
     ADD TO CART
  ========================= */

  const onAddToCart = (product) => {

    dispatch({
      type: "ADD",
      product
    });

    showToast(
      `${product.title.substring(0, 30)}...added to cart!`
    );

  };


  /* =========================
     FETCH PRODUCTS
  ========================= */

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        setLoading(true);

        const response = await fetch(
          "https://fakestoreapi.com/products?limit=8"
        );

        if (!response.ok) {

          throw new Error(
            "Failed to fetch products"
          );

        }

        const data =
          await response.json();

        setProducts(data);

        setError(null);

      } catch (err) {

        console.error(
          "Error fetching products:",
          err
        );

        setError(
          "Failed to load products. Please try again later."
        );

        showToast(
          "Failed to load products",
          "error"
        );


        const dummyProducts = [

          {
            id: 1,
            title: "Wireless Headphones",
            description:
              "High-quality wireless headphones with noise cancellation",
            price: 79.99,
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
            category: "electronics"
          },

          {
            id: 2,
            title: "Smart Watch",
            description:
              "Water-resistant smart watch with fitness tracking",
            price: 199.99,
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
            category: "electronics"
          },

          {
            id: 3,
            title: "Gaming Laptop",
            description:
              "High-performance laptop for gaming and work",
            price: 999.99,
            image:
              "https://images.unsplash.com/photo-1588872657840-790ff3bde791?w=300",
            category: "electronics"
          },

          {
            id: 4,
            title: "Smartphone",
            description:
              "Latest model smartphone with advanced camera",
            price: 699.99,
            image:
              "https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=300",
            category: "electronics"
          },

          {
            id: 5,
            title: "Running Shoes",
            description:
              "Comfortable and durable running shoes",
            price: 89.99,
            image:
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300",
            category: "footwear"
          },

          {
            id: 6,
            title: "Backpack",
            description:
              "Spacious and lightweight travel backpack",
            price: 49.99,
            image:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
            category: "bags"
          },

          {
            id: 7,
            title: "Professional Camera",
            description:
              "DSLR camera with 24MP sensor",
            price: 799.99,
            image:
              "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=300",
            category: "electronics"
          },

          {
            id: 8,
            title: "Sunglasses",
            description:
              "UV protection stylish sunglasses",
            price: 129.99,
            image:
              "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300",
            category: "accessories"
          }

        ];

        setProducts(dummyProducts);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);


  /* =========================
     CART COUNT
  ========================= */

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  /* =========================
     GRAND TOTAL
  ========================= */

  const grandTotal = cart.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );


  /* =========================
     RETURN
  ========================= */

  return (

    <CartContext.Provider
      value={{
        onAddToCart,
        cartCount,
        onCartClick: () => setShowCart(!showCart),
        toasts,
        onClose: removeToast
      }}
    >

      <div className="d-flex flex-column min-vh-100">

        {/* Navbar */}

        <Navbar />


        {/* Main */}

        <main className="flex-grow-1">

          {!showCart ? (

            <>

              {/* Loading / Error */}

              {loading ? (

                <Loading />

              ) : error &&
                products.length === 0 ? (

                <div className="container text-center py-5">

                  <p className="text-danger">
                    {error}
                  </p>

                  <p>
                    Showing fallback products instead
                  </p>

                </div>

              ) : null}


              {/* Hero */}

              <Hero />


              {/* Product List */}

              <ProductList
                products={products}
              />


              {/* About */}

              <About />


              {/* Contact */}

              <Contact />

            </>

          ) : (

            /* Cart */

            <Cart
              cartItems={cart}
              dispatch={dispatch}
            />

          )}

        </main>


        {/* Footer */}

        <Footer />


        {/* Toast */}

        <Toast />

      </div>

    </CartContext.Provider>

  );
}


export default App;