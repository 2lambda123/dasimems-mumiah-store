import React from "react";
import { Row, Col } from "antd";
import { AccountHeaderNav } from "../components";
import { Outlet } from "react-router-dom";

const Account = () => {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

  return (
    <>
      <Row justify="center" className="account">
        <Col span={21} className="account-container">
          <h1 className="title">Account</h1>

          <p className="subtitle">
            <span className="bold">{name},</span>
            <span className="light">{email}</span>
            <span className="dot">.</span>
            <span className="light">Los Angeles, CA</span>
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
