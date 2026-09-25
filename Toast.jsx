import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Toast() {

  const { toasts, onClose } = useContext(CartContext);

  const [closingToasts, setClosingToasts] =
    useState(new Set());

  /* Close Toast */

  const handleCloseToast = (id) => {

    setClosingToasts(
      prev =>
        new Set([
          ...prev,
          id
        ])
    );

    setTimeout(() => {

      onClose(id);

      setClosingToasts(prev => {

        const newSet =
          new Set(prev);

        newSet.delete(id);

        return newSet;

      });

    }, 400);

  };

  return (

    <div className="custom-toast-container">

      {toasts.map(toast => (

        <div
          key={toast.id}
          className={`custom-toast ${toast.type} ${
            closingToasts.has(toast.id)
              ? "closing"
              : ""
          }`}
        >

          {/* Icon */}

          <div className="toast-icon">

            {toast.type === "success" && (
              <i className="bi bi-check-circle"></i>
            )}

            {toast.type === "error" && (
              <i className="bi bi-exclamation-circle"></i>
            )}

            {toast.type === "info" && (
              <i className="bi bi-info-circle"></i>
            )}

          </div>

          {/* Message */}

          <div className="toast-message">
            {toast.message}
          </div>

          {/* Close Button */}

          <button
            type="button"
            className="toast-close"
            onClick={() =>
              handleCloseToast(toast.id)
            }
            aria-label="Close notification"
          >
            <i className="bi bi-x-circle"></i>
          </button>

        </div>

      ))}

    </div>

  );
}

export default Toast;