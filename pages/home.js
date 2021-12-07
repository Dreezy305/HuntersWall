import React from "react";

function Home() {
  const images = {
    hunter: "/img/hunterswall.png",
  };
  return (
    <section className="home p-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="">
              <span>We have</span>
              <span className=""> fractionalized alternative assets</span>
              <span> for you.</span>
            </h1>
            <p>With small amount, equity stake in big assets is now possible</p>
            <button type="button" className="">
              Create an account
            </button>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
