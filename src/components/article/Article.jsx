import React from "react";
import "./article.css";

const Article = ({ image, title, date, cta, href }) => {
  return (
    <div className="gpt3__article-container">
      <img
        className="gpt3__article-container__image"
        src={image}
        alt="article"
      />
      <div className="gpt3__article-container__text">
        <p className="gpt3__article-container__text-date">{date}</p>
        <h3>{title}</h3>
        <a className="gpt3__article-container__text-cta" href={href}>
          {cta}
        </a>
      </div>
    </div>
  );
};

export default Article;
