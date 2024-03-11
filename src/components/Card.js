import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-25"
          src={review.image}
          alt=""
        />
      </div>

      <div>
        <p>{review.name}</p>
      </div>

      <div>
        <p>{review.job}</p>
      </div>

      <div>
        <FaQuoteLeft />
      </div>

      <div>{review.text}</div>

      <div>
        <FaQuoteRight />
      </div>

      <div>
        <button>btn</button>
        <button>btn</button>
      </div>

      <div>
        <button>Suprise Me</button>
      </div>
    </div>
  );
};

export default Card;
