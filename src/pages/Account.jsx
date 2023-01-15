import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

import { AccountHeaderNav, Error, Loading } from "../components";
import { GetData } from "../utils/helpers";

const Account = () => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataFetchErr, setDataFetchErr] = useState(false);

  useEffect(() => {
    const item = GetData("/account");
    item
      .then((res) => {
        setData(res?.data);
        setDataLoading(false)
      })
      .catch((err) => {
        setDataFetchErr(true)
      });
  }, []);

  if(dataLoading){
    return <Loading />
  }

  if(dataFetchErr){
    return <Error />
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
