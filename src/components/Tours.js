import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="FEATURED" subTitle="TOURS" />

      <div className="section-center featured-center">
        {tours.map((venu) => {
          return <Tour key={venu.id} {...venu}/>
        })}
      </div>
    </section>
  );
};

export default Tours;
