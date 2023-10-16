import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, newsSource } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ width: "18rem" }}>
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {newsSource}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
