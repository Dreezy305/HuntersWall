import React from "react";

function Services() {
  const serviceTypes = {
    housing: "/img/housing.png",
  };
  return (
    <section className="services pt-5">
      <h1 className="text-center mb-5">Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-4">
            <div className="card px-3 services_card">
              <img
                src={serviceTypes.housing}
                className="card-img-top py-3"
                alt="real-estate"
              />
              <div className="card-body px-1">
                <h5 className="card-title text-center mb-2">Real Estate</h5>
                <p className="card-text">
                  It has become a norm to believe a landed property is for the
                  rich. HuntersWall makes it possible for everyone irrespective
                  of your financial worth, to have a fraction of a landed
                  property digitally. These digital assets are backed up by real
                  assets but controlled by the subscribers digitally.
                </p>
                <button className="px-3 py-2 float-end">Go somewhere</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
