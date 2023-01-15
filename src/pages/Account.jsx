import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import { AccountHeaderNav } from "../components";
import { GetData } from "../utils/helpers";

const Account = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const item = GetData("/account");
    item
      .then((res) => {
        setData(res?.data);
      })
      .catch((err) => {});
  }, []);

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
