import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import { AccountHeaderNav, Error, Loading } from "../components";
import { useProductsContext } from "../contexts/products_context";

const Account = () => {
  const {
    user_details: data,
    user_details_loading: loading,
    user_details_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Row justify="center" className="account">
        <Col span={21} className="account-container">
          <h1 className="title">Account</h1>

          <p className="subtitle">
            <span className="bold">{data.name},</span>
            <span className="light">{data.email}</span>
            <span className="dot">.</span>
          </p>

          <AccountHeaderNav />

          <div className="account-contents">
            <Outlet />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Account;
