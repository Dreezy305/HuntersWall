import React from "react";

function Form() {
  return (
    <section className="form">
      <form
        className="row g-4 py-5"
        onSubmit={(e) => e.preventDefault()}
      ></form>
    </section>
  );
}

export default Form;
