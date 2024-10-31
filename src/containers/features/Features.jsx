import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end distrusts instance",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quis doloribus eveniet ducimus quisquam nemo, tempore, quod magnam hic perferendis cumque fuga ad! Ut voluptatibus nisi quas quibusdam cumque aspernatur",
  },
  {
    title: "Improving end distrusts halogenic",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quis doloribus eveniet ducimus quisquam nemo, tempore, quod magnam hic perferendis cumque fuga ad! Ut voluptatibus nisi quas quibusdam cumque aspernatur",
  },
  {
    title: "Improving end distrusts nothing",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quis doloribus eveniet ducimus quisquam nemo, tempore, quod magnam hic perferendis cumque fuga ad! Ut voluptatibus nisi quas quibusdam cumque aspernatur",
  },
  {
    title: "Improving end distrusts being",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quis doloribus eveniet ducimus quisquam nemo, tempore, quod magnam hic perferendis cumque fuga ad! Ut voluptatibus nisi quas quibusdam cumque aspernatur",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          repellendus est? Dignissimos cupiditate tempore.
        </h1>
        <p>Request Early to Access Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
