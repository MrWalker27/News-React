import { useParams } from "react-router-dom";
import "../css/Story.css";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { fetchStoryBySlug } from "../api/api";

function Story() {
  const [story, setStory] = useState([]);
  const [text, setText] = useState([]);
  const { slug1, slug2 } = useParams();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const story = await fetchStoryBySlug(slug1, slug2);
      setStory(story);
      setText(story.cards);
    };
    fetchData();
  }, [slug1, slug2]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(true);
    }, 700);
  }, []);

  const mainImgUrl =
    "https://gumlet.assettype.com/" + story["hero-image-s3-key"];

  return (
    <>
      {showError && story.length == 0 && (
        <div className="containerE">
          <div className="error">Error 404 !!! New article not found</div>
        </div>
      )}
      {story.length !== 0 && (
        <>
          <div className="container">
            <div className="story-container">
              <img src={mainImgUrl} className="img"></img>
              <p className="author">
                <b>By </b>
                {story["author-name"]}
              </p>
              <p className="title">{story.headline}</p>
              <p className="summary">{story.subheadline}</p>
              {text.slice(0).map((cards) => (
                <>
                  {cards["story-elements"]
                    .filter((story) => story.type === "text")
                    .slice(0)
                    .map((story) => (
                      <div className="text">{ReactHtmlParser(story.text)}</div>
                    ))}
                </>
              ))}
            </div>
            <div className="add-box1">
              <div className="add-content"></div>
            </div>
            <div className="add-box2">
              <div className="add-content"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Story;
