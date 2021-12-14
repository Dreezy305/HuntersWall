import React from "react";
import Layout from "../layouts";

function CreateAcc() {
  const image = {
    img: "/img/createacc.png",
  };
  return (
    <Layout>
      <section className="createAcc">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6 pt-5 createAcc_rightCol">
              <img
                src={image.img}
                alt="create_account_illustration"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 pt-5 text-center createAcc_leftCol">
              <h2>Create an account</h2>
              <p className="mb-4">
                We have fractionalized alternative assets for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CreateAcc;

// background: white;
// box-shadow: -112px 0px 0px 0px white
