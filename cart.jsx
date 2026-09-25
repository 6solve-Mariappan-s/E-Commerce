import { useState } from "react";

function Cart({ cartItems, dispatch }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Total number of products
  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Grand total
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // View product
  const handleView = (item) => {
    setSelectedProduct(item);
  };

  // Edit quantity
const handleEdit = (item) => {
      const quantity = Number(
    prompt("Enter new quantity:")
  )

    if (quantity > 0) {
      dispatch({
        type: "EDIT",
        id: item.id,
        quantity: quantity
      });
    }
  };

  // Payment
  const handlePayment = (e) => {
    e.preventDefault();

    setPaymentSuccess(true);
    setShowPayment(false);
  };

  return (
    <section className="cart-section">
      <div className="container">

        <h2 className="cart-header">
          🛒 Shopping Cart ({totalProducts})
        </h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h4>Your cart is empty</h4>
          </div>
        ) : (
          <>
            {/* Cart Products */}
            <div className="cart-list">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="cart-item"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />

                  <div className="cart-item-details">

                    <h5>{item.title}</h5>

                    <p>
                      Price: ${item.price.toFixed(2)}
                    </p>

                    <p>
                      Quantity:{" "}
                      <strong>{item.quantity}</strong>
                    </p>

                    <p>
                      Total:{" "}
                      <strong>
                        ${(item.price * item.quantity).toFixed(2)}
                      </strong>
                    </p>

                  </div>

                  {/* Cart Buttons */}
                  <div className="cart-buttons">

                    {/* View */}
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => handleView(item)}
                    >
                      👁️ View
                    </button>

                    {/* Edit */}
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => handleEdit(item)}
                    >
                      ✏️ Edit
                    </button>

                    {/* Delete */}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch({
                          type: "DELETE",
                          id: item.id
                        })
                      }
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Order Summary */}
            <div className="cart-summary">

              <h3>Order Summary</h3>

              <p>
                Total Products:{" "}
                <strong>{totalProducts}</strong>
              </p>

              <h4>
                Grand Total: ${grandTotal.toFixed(2)}
              </h4>

              <button
                type="button"
                className="btn btn-success payment-btn"
                onClick={() => setShowPayment(true)}
              >
                💳 Proceed to Payment
              </button>

            </div>
          </>
        )}

        {/* View Product */}
        {selectedProduct && (
          <div className="product-view-box">

            <h3>Product Details</h3>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />

            <h4>{selectedProduct.title}</h4>

            <p>
              Price: $
              {selectedProduct.price.toFixed(2)}
            </p>

            <p>
              Quantity: {selectedProduct.quantity}
            </p>

            <p>
              Total: $
              {(
                selectedProduct.price *
                selectedProduct.quantity
              ).toFixed(2)}
            </p>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>

          </div>
        )}

        {/* Payment Form */}
        {showPayment && (
          <div className="payment-box">

            <h3>💳 Payment</h3>

            <form onSubmit={handlePayment}>

              <div className="mb-3">
                <label>Card Holder Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Card Number</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>Expiry Date</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="MM/YY"
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>CVV</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="CVV"
                    maxLength="3"
                    required
                  />
                </div>

              </div>

              <h4>
                Amount: ${grandTotal.toFixed(2)}
              </h4>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Pay ${grandTotal.toFixed(2)}
              </button>

              <button
                type="button"
                className="btn btn-secondary w-100 mt-2"
                onClick={() => setShowPayment(false)}
              >
                Cancel
              </button>

            </form>

          </div>
        )}

        {/* Payment Success */}
        {paymentSuccess && (
          <div className="payment-success">

            <h3>✅ Payment Successful!</h3>

            <p>
              Thank you for your purchase.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setPaymentSuccess(false)}
            >
              Continue Shopping
            </button>

          </div>
        )}

      </div>
    </section>

  );
}


export default Cart;