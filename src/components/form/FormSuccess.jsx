import React from "react";
import Modal from "../common/Modal";
import { useState } from "react";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

function FormSuccess({text, contentClassName, showMessage, onClose, closeElementType}) {

  //closeElementType can be either icon|| button

  const [contentShown, setContentShown] = useState(true)

  useEffect(() => {

    setContentShown(showMessage);
  
  }, [showMessage])

  if(!onClose){
    onClose=()=>{
      setContentShown(false)
    }
  }

  return (
    <Modal modalOpened={contentShown} className="form-success flex-container align-center justify-center">
      <div className={`form-success-modal-content flex-container column align-center ${contentClassName? contentClassName: ""}`}>

        {closeElementType === "icon" && <button className="close-success-icon" onClick={onClose}>
          <MdClose />
        </button>}

        <h2 className="success-title">{text? text : "Hooray! Your operation was Successful"}</h2>

        <button className="close-success-button" onClick={onClose}>

          Close

        </button>

      </div>
    </Modal>
  );
}

export default FormSuccess;
