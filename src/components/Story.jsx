import { useParams } from "react-router-dom";
import axios from "axios";
import "../Story.css";
import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";

function Story() {
  const [story, setStory] = useState([]);
  const [text, setText] = useState([]);
  const { slug1, slug2 } = useParams();
  const url = `/api/v1/stories-by-slug?slug=news/${slug1}/${slug2}`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setStory(response.data.story);
    });
    axios.get(url).then((response) => {
      setText(response.data.story.cards[0]["story-elements"]);
    });
  }, []);
  const mainImgUrl =
    "https://gumlet.assettype.com/" + story["hero-image-s3-key"];

  return (
    <>
     
      {story.length != "" && (
        <>
          <div className="container">
            <div className="story-container">
              <img src={mainImgUrl} className="img"></img>
              <p className="author"><b>By </b>{story["author-name"]}</p>
              <p className="title">{story.headline}</p>
              <p className="summary">{story.seo["meta-description"]}</p>
          {text.slice(1).map((text) => (
            <>
              {(text.type === "text") &&  (
                <div className="text">
                  {ReactHtmlParser(text.text)}
                  </div>
              )}
            </>
          ))}
            </div>
            <div className="add-box">
          <div className="add-content" >
          </div>
          </div>
          </div>
          
        </>
      )}
      
    </>
  );
}
export default Story;
