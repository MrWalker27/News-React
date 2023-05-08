import { useParams } from "react-router-dom";
import "../css/Story.css";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { fetchStoryBySlug } from "../api/api";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

function Story() {
  const [story, setStory] = useState([]);
  const [text, setText] = useState([]);
  const { slug1, slug2 } = useParams();
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const savedStories = useSelector((state) => state.savedStoryReducer.myArray);

  const mainImgUrl =
    "https://gumlet.assettype.com/" + story["hero-image-s3-key"];

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
    return () => clearTimeout(timer); 
  }, []);

  
  const type = savedStories.some((item) => item.headline === story.headline)
    ? "same"
    : "nsame";

  const saveStory = () => {
    dispatch({ type: "ADD_ELEMENT", payload: story });
    setTimeout(() => {
      navigate("/SavedStories");
    }, 1000);
  };

  const unsaveStory = () => {
    dispatch({ type: "REMOVE_ELEMENT", payload: story });
    navigate("/SavedStories");
  };

  return (
    <>
      {showError && story.length === 0 && (
        <div className="containerE">
          <div className="error">Error 404 !!! New article not found</div>
        </div>
      )}
      {story.length !== 0 && (
        <div className="container">
          <div className="story-container">
            <img src={mainImgUrl} className="img" alt={story.headline} />
            <p className="author">
              <b>By </b>
              {story["author-name"]}
              <button
                className="saveStoryButton"
                onClick={saveStory}
                style={{ display: type === "same" ? "none" : "inline-block" }}
              >
                Save Story
              </button>
              <button
                className="unsaveStoryButton"
                onClick={unsaveStory}
                style={{ display: type === "same" ? "inline-block" : "none" }}
              >
                UnSave Story
              </button>
            </p>
            <p className="title">{story.headline}</p>
            <p className="summary">{story.subheadline}</p>
            {text.slice(0).map((cards) =>
              cards["story-elements"]
                .filter((story) => story.type === "text")
                .slice(0)
                .map((story, index) => (
                  <div key={index} className="text">
                    {ReactHtmlParser(story.text)}
                  </div>
                ))
            )}
          </div>
          <div className="add-box1">
            <div className="add-content"></div>
          </div>
          <div className="add-box2">
            <div className="add-content"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Story;
