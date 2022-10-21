import React, { useState } from "react";
import Feedback from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  //used this method, so, as my index changes, my people object info changes too.
  const { name, image, text, job } = Feedback[index];

  const checkNumber = (number) => {
    if (number > Feedback.length - 1) {
      return 0;
    }

    if (number < 0) {
      return Feedback.length - 1;
    }

    return;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {};

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className="random-btn" onClick={randomPerson}>
        Random pick
      </button>
    </article>
  );
};

export default Review;
