import React from "react";

function Modal({
  open = true || false,
  onClose = () => {},
  title = "Modal Header",
  size = "xl" || "lg" || "md" || "sm" || "xs",
  smallTitle = true || false,
  largeTitle = true || false,
  children = <></>,
  // gradient = true || false,
}) {
  return (
    <>
      <div
        className={`modal ${open ? "block" : "hidden"} `}
        // role="modal"
        id="modal"
        aria-labelledby="modal"
        aria-modal="true"
      >
        {/* xtralarge size modal */}
        {size === "xl" && (
          <div className={`modal-content`} style={{ width: "60%" }}>
            <div className="modal-header relative">
              <span
                className="close-btn absolute cursor-pointer"
                onClick={onClose}
              >
                &times;
              </span>
              <h2
                className={`font-bold opacity-100 ${largeTitle && "text-2xl"}`}
              >
                {title}
              </h2>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        )}

        {/* large size modal */}
        {size === "lg" && (
          <div className={`modal-content `} style={{ width: "40%" }}>
            <div className="modal-header relative">
              <span
                className="close-btn absolute cursor-pointer"
                onClick={onClose}
              >
                &times;
              </span>
              <h2
                className={`font-bold opacity-100 ${largeTitle && "text-2xl"}`}
              >
                {title}
              </h2>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        )}

        {/* medium size modal */}
        {size === "md" && (
          <div className={`modal-content`} style={{ width: "30%" }}>
            <div className="modal-header relative">
              <span
                className="close-btn absolute cursor-pointer"
                onClick={onClose}
              >
                &times;
              </span>
              <h2
                className={`font-bold opacity-100 ${largeTitle && "text-2xl"}`}
              >
                {title}
              </h2>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        )}

        {/* small size modal */}
        {size === "sm" && (
          <div className={`modal-content`} style={{ width: "20%" }}>
            <div className="modal-header relative">
              <span
                className="close-btn absolute cursor-pointer"
                onClick={onClose}
              >
                &times;
              </span>
              <h2
                className={`font-bold opacity-100 ${largeTitle && "text-2xl"}`}
              >
                {title}
              </h2>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        )}

        {/* xtra small size modal */}
        {size === "xs" && (
          <div className={`modal-content`} style={{ width: "15%" }}>
            <div className="modal-header relative">
              <span
                className="close-btn absolute cursor-pointer"
                onClick={onClose}
              >
                &times;
              </span>
              <h2
                className={`font-bold opacity-100 ${largeTitle && "text-2xl"}`}
              >
                {title}
              </h2>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;

/** lg = true || false,
  md = true || false,
  sm = true || false,
  xs = true || false, */

/**
 * size variations
 * size == string --> either lg, sm, md , xs
 * w --> 60% --> xl
 * w --> 40% --> lg
 * w --> 30% --> md
 * w --> 20% --> sm
 * w --> 15% --> xs
 */
