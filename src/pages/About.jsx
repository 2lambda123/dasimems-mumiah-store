import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/hero-right-3.png";
// import { Layout } from "antd";
// const { Content } = Layout;

function About(props) {
  return (
    <>
      <main className="section">
        <div>
          <Helmet>
            <title>About Us | Mumiah Stores</title>
          </Helmet>
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-6 py-md-5 pb-md-5">
                <div className="mb-4 mt-md-5">
                  <div className="ml-md-0">
                    <h1 className="mb-4">👋 About Us.</h1>
                  </div>
                </div>
                <div
                  className="mt-3"
                  style={{
                    lineHeight: "2.2rem",
                    fontSize: "1.2rem",
                  }}
                >
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few insidious Copy Writers ambushed
                    her, made her drunk with Longe and Parole and dragged her
                    into their agency, where they abused her for their. But
                    nothing the copy said could convince her and so it didn’t
                    take long until a few insidious Copy Writers ambushed her.
                  </p>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few insidious Copy Writers ambushed
                    her.
                  </p>

                  <p>
                    <Link to="/" className="btn px-5 py-3 btn-dark">
                      Shop now
                    </Link>
                  </p>
                </div>
              </div>
              {/* image */}
              <div className="col-lg-6">
                <img width={"100%"} src={aboutImg} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
