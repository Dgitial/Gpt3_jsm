import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

function Blog() {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className=" gpt3__blog-heading">
        <h1 className="gradient__text">Alot is going on in the AI community</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="dd/mm/yy"
            title="the future is just a grab away, only if you choose to embrace it. "
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="dd/mm/yy"
            title="the future is just a grab away, only if you choose to embrace it. "
          />
          <Article
            imgUrl={blog03}
            date="dd/mm/yy"
            title="the future is just a grab away, only if you choose to embrace it. "
          />
          <Article
            imgUrl={blog04}
            date="dd/mm/yy"
            title="the future is just a grab away, only if you choose to embrace it. "
          />
          <Article
            imgUrl={blog05}
            date="dd/mm/yy"
            title="the future is just a grab away, only if you choose to embrace it. "
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
