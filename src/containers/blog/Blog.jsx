import React from "react";
import { Article } from "../../components";
import "./blog.css";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const articleData = [
  //image url, title, and content
  {
    image: blog01,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    cta: "Read Full Article",
    href: "www.google.com",
  },
  {
    image: blog02,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    cta: "Read Full Article",
    href: "www.google.com",
  },
  {
    image: blog03,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    cta: "Read Full Article",
    href: "www.google.com",
  },
  {
    image: blog04,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    cta: "Read Full Article",
    href: "www.google.com",
  },
  {
    image: blog05,
    title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    date: "Sep 26, 2021",
    cta: "Read Full Article",
    href: "www.google.com",
  },
];

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-content">
        {articleData.map((items, index) => (
          <Article
            className="theArticle"
            image={items.image}
            title={items.title}
            date={items.date}
            cta={items.cta}
            href={items.href}
            key={items + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
