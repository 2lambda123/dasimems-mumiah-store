import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "antd";
const { Content } = Layout;

function About(props) {
  return (
    <>
      <Helmet>
        <title>About Us | Mumiah Stores</title>
      </Helmet>
      <Layout className="page-100">
        <Content>
          <div
            className="glassmorphism"
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            <h1>Hello World</h1>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default About;
