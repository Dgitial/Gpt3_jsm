import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          The Amazing Capabilities of Generative Pre-trained Transformer-3
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea
          quo assumenda autem ullam officia cum sequi quasi blanditiis. Maxime,
          porro explicabo recusandae sed nihil vel deserunt alias tenetur nisi!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email here" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="jpg" />
          <p>Our community of developer</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
