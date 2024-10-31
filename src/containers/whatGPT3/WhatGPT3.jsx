import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed dicta necessitatibus, laboriosam in laborum eius maxime pariatur assumenda dolores, ipsum corrupti asperiores obcaecati quas velit est vel voluptatibus optio!."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor, sit amet consectetur.
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title=" Chatbots"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed dicta necessitatibus, laboriosam in laborum eius maxime pariatur assumenda dolores, ipsum corrupti asperiores obcaecati quas velit est vel voluptatibus optio!."
        />
        <Feature
          title="Knowledge"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed dicta necessitatibus, laboriosam in laborum eius maxime pariatur assumenda dolores, ipsum corrupti asperiores obcaecati quas velit est vel voluptatibus optio!."
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed dicta necessitatibus, laboriosam in laborum eius maxime pariatur assumenda dolores, ipsum corrupti asperiores obcaecati quas velit est vel voluptatibus optio!."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
