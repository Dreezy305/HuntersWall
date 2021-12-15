import React from "react";
import Layout from "../layouts";
import { Faqs } from "../data/faq";

function Faq() {
  return (
    <Layout>
      <section className="pt-4 py-3 FAQ">
        <h1 className="text-center mx-auto py-3 pb-5">FAQ Page</h1>

        {/* FAQ cards */}
        {Faqs.map((item) => (
          <>
            <div className="FAQ_container py-3 my-4">
              <div className="container">
                <div className="row">
                  <h5 className="pb-2">{item.title}</h5>
                  <p className="pt-1" style={{ whiteSpace: `${item.space}` }}>
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </Layout>
  );
}

export default Faq;
