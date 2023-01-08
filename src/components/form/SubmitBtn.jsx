import { Button } from "antd";
import React from "react";

const SubmitBtn = ({ text, loading, className, onClick, ...props }) => {
  return (
    <Button
      {...props}
      loading={loading ? loading : false}
      className={`submit-form-btn ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default SubmitBtn;
