import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function News() {
  const [stories, setStories] = useState([]);
  const url = "/api/v1/collections/top-story";

  useEffect(() => {
    window.onload = () => {
      axios.get(url).then((response) => {
        setStories(response.data.items.slice(0, 7));
      });
    };
  }, []);

  console.log(stories);

  let imgUrl = [];
  if (stories.length > 0) {
    for (let i = 0; i < stories.length; i++) {
      const test =
        "https://gumlet.assettype.com/" + stories[i].story["hero-image-s3-key"];
      imgUrl.push(test);
    }
  }

  return (
    <div className="news-container">
      {stories.length > 0 && (
        <>
          <div className="top-story-container">
            <div className="card top-story-card">
              <img src={imgUrl[0]} className="card-img-top top-story-image" />
              <div className="card-body">
                <div style={{ fontSize: "14px" }}>
                  <b>BY: {stories[0].story["author-name"]}</b>
                </div>
                <h5 style={{ marginTop: "15px" }} className="card-title">
                  {stories[0].story.headline}
                </h5>
                <p className="card-text">{stories[0].story.subheadline}</p>
              </div>
            </div>
            <p className="add-box"></p>
          </div>
          <div className="card-container">
            {stories.slice(1).map((story, index) => (
              <div className="card" key={index}>
                <img src={imgUrl[index + 1]} className="card-img-top" />
                <div className="card-body">
                  <div style={{ fontSize: "14px" }}>
                    <b>By: {story.story["author-name"]}</b>
                  </div>
                  <h5 style={{ marginTop: "15px" }} className="card-title">
                    {story.story.headline}
                  </h5>
                  <p className="card-text">{story.story.subheadline}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default News;
