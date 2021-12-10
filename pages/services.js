import React from "react";
import { serviceData } from "../data/services";

function Services() {
  const serviceTypes = {
    housing: "/img/housing.png",
  };
  return (
    <section className="services pt-5">
      <h1 className="text-center mb-5 mt-4">Services</h1>
      <div className="container pb-5 services_container">
        <div className="row pb-5">
          {serviceData.map((item) => (
            <>
              <div className={`col-lg-6 pt-4 ${item.space}`}>
                <div className="card px-3 services_card">
                  <img
                    src={item.image}
                    className="card-img-top py-3"
                    alt={item.title}
                  />
                  <div className="card-body px-1">
                    <h5 className="card-title text-center mb-2">
                      {item.title}
                    </h5>
                    <p className="card-text">{item.content}</p>
                    <button className="px-3 py-2 float-end">Read more</button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
