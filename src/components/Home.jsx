import React, { useState, useEffect } from "react";
import "../css/App.css";
import { NavLink } from "react-router-dom";
import { fetchTopStories } from "../api/api";



function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const loadStories = async () => {
      const data = await fetchTopStories();
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
      const test = stories[i].story.slug.replace('news/','');
          slugUrl.push(test);
    }
    } 
  return (
    <>
    <div className="news-container">
      {stories.length > 0 && (
        <>
        <NavLink to={'/Story/'+slugUrl[0]} style={{textDecoration:'none',color:'black'}}>
        <div className="top-story-container">
            <div className="card top-story-card">
              <img src={imgUrl[0]} className="card-img-top top-story-image" />
              <div className="card-body">
                <div >
                  <label className="author"><b>By</b> {stories[0].story["author-name"]}</label>
                </div>
                <h5 className="card-title">
                  {stories[0].story.headline}
                </h5>
                <p className="card-text">{stories[0].story.subheadline}</p>
              </div>
            </div>
          </div>
        </NavLink>
          
          
          <div className="add-box1">
          <div className="add-content" >
          </div>
            </div>
            <div className="add-box2">
          <div className="add-content" >
          </div>
          </div>
          <div className="card-container">
            {stories.slice(1).map((story, index) => (
              
                <div className="card" >
                    <NavLink style={{textDecoration:'none',color:'black'}} to={'/Story/'+slugUrl[index+1]}>
                <img src={imgUrl[index + 1]} className="card-img-bot" />
                <div className="card-body">
                  <div >
                    <label className="author"><b>By</b> {story.story["author-name"]}</label>
                  </div>
                  <h5  className="card-title-bot">
                    {story.story.headline}
                  </h5>
                  <p className="card-text-bot">{story.story.subheadline}</p>
                </div>
                </NavLink>
              </div>
              
                
            ))}
          </div>
        </>
      )}
      </div>
      </>
  );
}

export default Home;
