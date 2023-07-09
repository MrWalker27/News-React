import React, { useState, useEffect } from "react";
import "../css/NewsMain.css";
import { NavLink } from "react-router-dom";
import { fetchNewsMain } from "../api/api";

function NewsMain() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      const data = await fetchNewsMain();
      setStories(data);
    };
    loadStories();
    
  }, []);
  let imgUrl = [];
  if (stories.length > 0) {
    for (let i = 0; i < stories.length; i++) {
      const test =
        "https://gumlet.assettype.com/" + stories[i].story["hero-image-s3-key"];
      imgUrl.push(test);
    }
  }
  let slugUrl = [];
  if (stories.length > 0) {
    for (let i = 0; i < stories.length; i++) {
      const test = stories[i].story.slug.replace("news/", "");
      slugUrl.push(test);
    }
  }
  return (
    <>
      <div className="news-container1">
        <hr className="hr"></hr>
        <h1 className="heading">News</h1>
        <table style={{ marginTop: "20px" }}>
          <tr>
            <td>
              {stories.length > 0 && (
                <>
                  <div className="card-container1">
                    {stories.slice().map((story, index) => (
                      <div className="card1">
                        <NavLink
                          style={{ textDecoration: "none", color: "black" }}
                          to={"/Story/" + slugUrl[index]}
                        >
                          <img src={imgUrl[index]} className="card-img-bot" />
                          <div className="card-body">
                            <div>
                              <label className="author">
                                <b>By</b> {story.story["author-name"]}
                              </label>
                            </div>
                            <h5 className="card-title-bot">
                              {story.story.headline}
                            </h5>
                            <p className="card-text-bot">
                              {story.story.subheadline}
                            </p>
                          </div>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </td>
            <td style={{ verticalAlign: "top" }}>
              {" "}
              <div className="add-box11">
                <div className="add-content"></div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default NewsMain;
