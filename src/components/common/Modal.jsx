import React, { useEffect, useState } from "react";

const Modal = ({ modalOpened, children, className, style }) => {
  const [modalOpacity, setModalOpacity] = useState(0);
  const [modalDisplay, setModalDisplay] = useState("none");

  useEffect(() => {
    if (modalOpened) {
      setModalDisplay("block");

      setTimeout(() => {
        setModalOpacity(1);
      }, 40);
    } else {
      setModalOpacity(0);

      setTimeout(() => {
        setModalDisplay("none");
      }, 1000);
    }
  }, [modalOpened]);
  return (
    <>
      <div
        className={`modal-container`}
        style={{
          ...style,
          background: "rgba(0, 0, 0, .3)",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 999,
          top: "0px",
          left: "0px",
          transition: "0.5s ease all",
          opacity: modalOpacity,
          display: modalDisplay,
          backdropFilter: "blur(2px)"
        }}
      >

        <div style={{
          width: "100%",
          height: "100%"
        }} className={`modal-content ${className? className : ""}`}>

          {children}

        </div>
      </div>
    </>
  );
};

export default Modal;
