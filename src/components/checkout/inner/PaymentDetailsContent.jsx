import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

const PaymentDetailsContent = ({
  children,
  contentOpen,
  buttonAction,
  buttonActionText,
  icon,
  title,
  subtitleOne,
  subtitleTwo,
}) => {
  const [content, setContent] = useState(false);

 if(!buttonAction){
  buttonAction = () => {
    
  }
 }

  useEffect(() => {
    setContent(contentOpen);
  }, [contentOpen]);

  var elementRef = useRef("");

  return (
    <div className="payment-details-content">
      <div className="payment-details-content-header flex-container space-between">
        <div className="content-one flex-container">
          {icon && (
            <div className="icon flex-container align-start">{icon}</div>
          )}

          <div className="details">
            {title && <h2>{title}</h2>}
            <p>
              {subtitleOne && <span>{subtitleOne}</span>}
              {subtitleTwo && (
                <span className="subtitle-two">{subtitleTwo}</span>
              )}
            </p>
          </div>
        </div>
        <div className="content-one">
          {buttonActionText && <Button
            className="payment-details-change-button"
            onClick={buttonAction}
          >
            {buttonActionText}
          </Button>}
        </div>
      </div>

      {content && (
        <div ref={elementRef} className="payment-details-inner-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default PaymentDetailsContent;
