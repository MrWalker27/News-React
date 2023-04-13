import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import "../Nav.css";
import { NavLink } from "react-router-dom";

function Home() {
  const [stories, setStories] = useState([]);
  const url = "/api/v1/collections/top-story";

  useEffect(() => {
      axios.get(url).then((response) => {
        setStories(response.data.items.slice(0, 7));
      });
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
      <nav>
      <ul>
        <li className="item"><NavLink to="/">Home</NavLink></li>
        <li className="item"><NavLink to="/news">News</NavLink></li>
        <li className="item"><NavLink to="/articles">Articles</NavLink></li>
        <li className="item"><NavLink to="/media">Media</NavLink></li>
        <li className="item"><NavLink to="/events">Events</NavLink></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle,item">More</a>
          <ul className="dropdown-menu">
            <li className="item"><NavLink to="/about">Subscribe</NavLink></li>
            <li className="item"><NavLink to="/contact">Creative Showcase</NavLink></li>
              <li className="item"><NavLink to="/faq">Careers</NavLink></li>
              <li className="item"><NavLink to="/faq">Contact US</NavLink></li>
          </ul>
        </li>
          <li style={{marginLeft: '30px'}}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19"><path fill="#FFF" d="M17.894 16.738a.38.38 0 0 1 .106.282.514.514 0 0 1-.106.316l-.808.773a.437.437 0 0 1-.317.141.334.334 0 0 1-.28-.14l-4.29-4.255a.468.468 0 0 1-.105-.28v-.493A7.552 7.552 0 0 1 9.879 14.4a7.07 7.07 0 0 1-2.567.475c-1.335 0-2.56-.328-3.673-.984a7.388 7.388 0 0 1-2.655-2.655C.328 10.123 0 8.898 0 7.563c0-1.336.328-2.561.984-3.674A7.388 7.388 0 0 1 3.64 1.234C4.752.578 5.977.25 7.312.25c1.336 0 2.561.328 3.674.984a7.388 7.388 0 0 1 2.655 2.655c.656 1.113.984 2.338.984 3.674a7.07 7.07 0 0 1-.475 2.566 7.552 7.552 0 0 1-1.318 2.215h.492a.38.38 0 0 1 .281.105l4.29 4.29zm-10.582-3.55a5.502 5.502 0 0 0 2.813-.756 5.585 5.585 0 0 0 2.057-2.057 5.502 5.502 0 0 0 .755-2.812 5.502 5.502 0 0 0-.755-2.813 5.585 5.585 0 0 0-2.057-2.057 5.502 5.502 0 0 0-2.813-.755 5.502 5.502 0 0 0-2.812.755A5.585 5.585 0 0 0 2.443 4.75a5.502 5.502 0 0 0-.756 2.813c0 1.007.252 1.945.756 2.812A5.585 5.585 0 0 0 4.5 12.432a5.502 5.502 0 0 0 2.812.756z"></path></svg></li>
      </ul>
      </nav>
      <div className="test"></div>
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
          
          
          <div className="add-box">
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
