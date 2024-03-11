import React from "react";
import Card from "./Card";

const Testimonials = (props) => {
  let reviews = props.reviews;
  return (
    <div>
      <Card review={reviews[1]} />
    </div>
  );
};

export default Testimonials;
