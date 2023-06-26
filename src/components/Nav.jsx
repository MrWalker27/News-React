import { NavLink } from "react-router-dom";
import "../css/Nav.css";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CryptoJS from "crypto-js";

function Nav() {
  const userLogin = useSelector((state) => state.userDataReducer.userData);
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const [newsState, setNewsState] = useState(false);
  const [articlesState, setArticlesState] = useState(false);
  const [mediaState, setMediaState] = useState(false);
  const [moreState, setMoreState] = useState(false);
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState(true);
  const [signup, setSignup] = useState(false);
  const [logedin, setLogedin] = useState(false);
  const [loginm, setLoginm] = useState(false);
  const [signinm, setSigninm] = useState(true);
  const [signupm, setSignupm] = useState(false);
  const [emailerror, setEmailerror] = useState(false);
  const [emailDuperror, setEmailDuperror] = useState(false);
  const [passerror, setPasserror] = useState(false);
  const [cpasserror, setCpasserror] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      userLogin.some(
        (item) =>
          item.email === email &&
          CryptoJS.AES.decrypt(item.encryptedMessage, "XkhZG4fW2t2W", {
            padding: CryptoJS.pad.Pkcs7,
          }).toString(CryptoJS.enc.Utf8) === password
      )
    ) {
      setCpasserror(false);
      setConfirmationMsg(true);

      setTimeout(() => {
        setLogedin(true);
        setLogin(false);
        setLoginm(false);
        setConfirmationMsg(false);
      }, 1000);
    } else {
      setCpasserror(true);
    }
  };
  const loginf = (email0, pass0) => {
    if (email0 == "") {
      setEmailerror(true);
    } else {
      setEmailerror(false);
      if (pass0 == "") {
        setPasserror(true);
      } else {
        setPasserror(false);
        handleLogin();
      }
    }
  };
  const clearStates = () => {
    setNewsState(false);
    setArticlesState(false);
    setMediaState(false);
    setMediaState(false);
  };
  const navigate = useNavigate();

  const searchnews = (text) => {
    setSearchState(false);
    document.getElementById("searchInput").value = "";
    navigate(`/Search/${text}`);
  };
  useEffect(() => {
    setSearchState(false);
  }, [window.location.href]);

  const handleButtonClick = () => {
    if (userLogin.some((item) => item.email === email)) {
      setEmailDuperror(true);
    } else {
      setEmailDuperror(false);
      const encryptedMessage = CryptoJS.AES.encrypt(password, "XkhZG4fW2t2W", {
        padding: CryptoJS.pad.Pkcs7,
      }).toString();
      const credentials = { email, encryptedMessage };
      dispatch({ type: "SAVE_CREDENTIALS", payload: credentials });
      setConfirmationMsg(true);
      setTimeout(() => {
        setLogedin(true);
        setLogin(false);
        setLoginm(false);
        setConfirmationMsg(false);
      }, 1000);
    }
  };

  const signupf = (email, pass, cpass) => {
    const emailregex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    const passregex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    if (!emailregex.test(email)) {
      setEmailerror(true);
    } else {
      setEmailerror(false);
      if (!passregex.test(pass)) {
        setPasserror(true);
      } else {
        setPasserror(false);
        if (pass != cpass) {
          setCpasserror(true);
        } else {
          setCpasserror(false);

          handleButtonClick();
        }
      }
    }
  };

  return (
    <>
      <nav>
        <ul>
          <li className="item">
            <NavLink to="/News-React-api">Home</NavLink>
          </li>
          <li className="dropdown">
            <a href="/News" className="dropdown-toggle,item">
              News
            </a>
            <ul className="dropdown-menu">
              <li className="itemd">
                <NavLink to="/News">Advertising</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Marketing</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Influencer Marketing</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Branded Content</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Brands</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">People Spotting</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Companies</NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle,item">
              Articles
            </a>
            <ul className="dropdown-menu">
              <li className="itemd">
                <NavLink to="/News-React-api">Interview</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Point of View</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Profile</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Guest Articles</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Marketing Intiative</NavLink>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle,item">
              Media
            </a>
            <ul className="dropdown-menu">
              <li className="itemd">
                <NavLink to="/News-React-api">Television</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Digital</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">OTT Streaming</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Social Media</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Print</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">OOH</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Radio</NavLink>
              </li>
            </ul>
          </li>

          <li className="dropdown">
            <a href="#" className="dropdown-toggle,item">
              More
            </a>
            <ul className="dropdown-menu">
              <li className="itemd">
                <NavLink to="/SavedStories">Saved Stories</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Creative Showcase</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Careers</NavLink>
              </li>
              <li className="itemd">
                <NavLink to="/News-React-api">Contact Us</NavLink>
              </li>
            </ul>
          </li>
          <li className={!logedin ? "item" : "hide"}>
            <NavLink to="#" onClick={() => setLogin(true)}>
              Login
            </NavLink>
          </li>
          <li className={logedin ? "item" : "hide"}>
            <NavLink to="#" onClick={() => setLogedin(false)}>
              Logout
            </NavLink>
          </li>
          <a onClick={() => setSearchState(!searchState)}>
            <li className="search" style={{ marginLeft: "40px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                <path
                  fill="#FFF"
                  d="M17.894 16.738a.38.38 0 0 1 .106.282.514.514 0 0 1-.106.316l-.808.773a.437.437 0 0 1-.317.141.334.334 0 0 1-.28-.14l-4.29-4.255a.468.468 0 0 1-.105-.28v-.493A7.552 7.552 0 0 1 9.879 14.4a7.07 7.07 0 0 1-2.567.475c-1.335 0-2.56-.328-3.673-.984a7.388 7.388 0 0 1-2.655-2.655C.328 10.123 0 8.898 0 7.563c0-1.336.328-2.561.984-3.674A7.388 7.388 0 0 1 3.64 1.234C4.752.578 5.977.25 7.312.25c1.336 0 2.561.328 3.674.984a7.388 7.388 0 0 1 2.655 2.655c.656 1.113.984 2.338.984 3.674a7.07 7.07 0 0 1-.475 2.566 7.552 7.552 0 0 1-1.318 2.215h.492a.38.38 0 0 1 .281.105l4.29 4.29zm-10.582-3.55a5.502 5.502 0 0 0 2.813-.756 5.585 5.585 0 0 0 2.057-2.057 5.502 5.502 0 0 0 .755-2.812 5.502 5.502 0 0 0-.755-2.813 5.585 5.585 0 0 0-2.057-2.057 5.502 5.502 0 0 0-2.813-.755 5.502 5.502 0 0 0-2.812.755A5.585 5.585 0 0 0 2.443 4.75a5.502 5.502 0 0 0-.756 2.813c0 1.007.252 1.945.756 2.812A5.585 5.585 0 0 0 4.5 12.432a5.502 5.502 0 0 0 2.812.756z"
                ></path>
              </svg>
            </li>
          </a>
        </ul>

        <a href="#" onClick={() => setState(!state)}>
          <span className="hamburger">
            <Hamburger color="#ffffff"></Hamburger>
          </span>
        </a>
      </nav>
      <nav className={state ? "navMobileShow" : "navMobileHide"}>
        <div className="itemMobileS">
          <input
            id="searchInputM"
            className="searchBar"
            placeholder="Search"
          ></input>
          <button
            onClick={() =>
              document.getElementById("searchInputM").value != ""
                ? searchnews(document.getElementById("searchInputM").value)
                : null
            }
            className="searchButton"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
              <path
                fill="#FFF"
                d="M17.894 16.738a.38.38 0 0 1 .106.282.514.514 0 0 1-.106.316l-.808.773a.437.437 0 0 1-.317.141.334.334 0 0 1-.28-.14l-4.29-4.255a.468.468 0 0 1-.105-.28v-.493A7.552 7.552 0 0 1 9.879 14.4a7.07 7.07 0 0 1-2.567.475c-1.335 0-2.56-.328-3.673-.984a7.388 7.388 0 0 1-2.655-2.655C.328 10.123 0 8.898 0 7.563c0-1.336.328-2.561.984-3.674A7.388 7.388 0 0 1 3.64 1.234C4.752.578 5.977.25 7.312.25c1.336 0 2.561.328 3.674.984a7.388 7.388 0 0 1 2.655 2.655c.656 1.113.984 2.338.984 3.674a7.07 7.07 0 0 1-.475 2.566 7.552 7.552 0 0 1-1.318 2.215h.492a.38.38 0 0 1 .281.105l4.29 4.29zm-10.582-3.55a5.502 5.502 0 0 0 2.813-.756 5.585 5.585 0 0 0 2.057-2.057 5.502 5.502 0 0 0 .755-2.812 5.502 5.502 0 0 0-.755-2.813 5.585 5.585 0 0 0-2.057-2.057 5.502 5.502 0 0 0-2.813-.755 5.502 5.502 0 0 0-2.812.755A5.585 5.585 0 0 0 2.443 4.75a5.502 5.502 0 0 0-.756 2.813c0 1.007.252 1.945.756 2.812A5.585 5.585 0 0 0 4.5 12.432a5.502 5.502 0 0 0 2.812.756z"
              ></path>
            </svg>
          </button>
        </div>
        <li className="itemMobile">
          <NavLink to="/News-React-api">Home</NavLink>
        </li>
        <a href="#" onClick={() => (clearStates(), setNewsState(!newsState))}>
          <span className="itemMobile">News</span>
        </a>
        <ul className={newsState ? "mobileItemShow" : "mobileItemHide"}>
          <li className="itemMd" style={{ marginTop: "10px" }}>
            <NavLink to="/News">Advertising</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Marketing</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Influencer Marketing</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Branded Content</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Brands</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Print</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">OOH</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Radio</NavLink>
          </li>
        </ul>
        <a
          href="#"
          onClick={() => (clearStates(), setArticlesState(!articlesState))}
        >
          <span className="itemMobile">Articles</span>
        </a>
        <ul className={articlesState ? "mobileItemShow" : "mobileItemHide"}>
          <li className="itemMd" style={{ marginTop: "10px" }}>
            <NavLink to="/News-React-api">Advertising</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Marketing</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Influencer Marketing</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Branded Content</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Brands</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">People Spotting</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Companies</NavLink>
          </li>
        </ul>
        <a href="#" onClick={() => (clearStates(), setMediaState(!mediaState))}>
          <span className="itemMobile">Media</span>
        </a>
        <ul className={mediaState ? "mobileItemShow" : "mobileItemHide"}>
          <li className="itemMd" style={{ marginTop: "10px" }}>
            <NavLink to="/News-React-api">Advertising</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Television</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Digital</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">OTT Streaming</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Social Media</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">People Spotting</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/News-React-api">Companies</NavLink>
          </li>
        </ul>

        <a href="#" onClick={() => (clearStates(), setMoreState(!moreState))}>
          <span className="itemMobile">More</span>
        </a>
        <ul className={moreState ? "mobileItemShow" : "mobileItemHide"}>
          <li className="itemMd" style={{ marginTop: "10px" }}>
            <NavLink to="/SavedStories">Saved Stories</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/contact">Creative Showcase</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/faq">Careers</NavLink>
          </li>
          <li className="itemMd">
            <NavLink to="/faq">Contact Us</NavLink>
          </li>
        </ul>
        <li
          className={!logedin ? "itemMobile" : "hide"}
          onClick={() => setLoginm(true)}
        >
          <NavLink to="#">Login</NavLink>
        </li>
        <li className={logedin ? "itemMobile" : "hide"}>
          <NavLink to="#" onClick={() => setLogedin(false)}>
            Logout
          </NavLink>
        </li>
      </nav>
      <div className={searchState ? "searchCont" : "searchContH"}>
        <hr className="searchHr"></hr>
        <div>
          <input
            id="searchInput"
            className="searchBar"
            placeholder="Search"
          ></input>
          <button
            className="searchButton"
            onClick={() =>
              document.getElementById("searchInput").value != ""
                ? searchnews(document.getElementById("searchInput").value)
                : null
            }
          >
            SEARCH
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "110%",
          backgroundColor: "black",
          opacity: "0.8",
          zIndex: "15",
          position: "fixed",
          marginTop: "-50px",
          display: login ? "block" : "none",
        }}
      ></div>
      <div
        className="loginBox"
        style={{ display: login && signin ? "flex" : "none" }}
      >
        <label
          style={{
            display: "inline",
            position: "relative",
            left: "90%",
            marginTop: "-60px",
            fontSize: "23px",
            cursor: "pointer",
          }}
          onClick={() => setLogin(false)}
        >
          X
        </label>

        <h1
          style={{
            margin: "50px auto 40px auto",
            fontSize: "40px",
            color: "#021f3e",
          }}
        >
          Login
        </h1>
        <input
          placeholder="Email"
          id="lemail"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "0px auto",
            width: "300px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <input
          placeholder="Password "
          id="lpass"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          style={{
            margin: "30px auto",
            width: "300px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: emailerror ? "block" : "none",
          }}
        >
          Email cant be left empty!!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: passerror ? "block" : "none",
          }}
        >
          password cant be left empty!!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: cpasserror ? "block" : "none",
          }}
        >
          Email and Password doesn't match !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "green",
            display: confirmationMsg ? "block" : "none",
          }}
        >
          LogIn successful !!
        </label>
        <button
          className="loginBtn"
          onClick={() =>
            loginf(
              document.getElementById("lemail").value,
              document.getElementById("lpass").value
            )
          }
        >
          Login
        </button>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "#021f3e",
          }}
          onClick={() => (setSignin(false), setSignup(true))}
        >
          Dont have an account?
        </label>
      </div>

      <div
        className="loginBox"
        style={{ display: login && signup ? "flex" : "none" }}
      >
        <label
          style={{
            display: "inline",
            position: "relative",
            left: "90%",
            marginTop: "-60px",
            fontSize: "23px",
            cursor: "pointer",
          }}
          onClick={() => setLogin(false)}
        >
          X
        </label>

        <h1
          style={{
            margin: "50px auto 40px auto",
            fontSize: "40px",
            color: "#021f3e",
          }}
        >
          Register
        </h1>
        <input
          placeholder="Email"
          id="semail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "0px auto",
            width: "300px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <input
          placeholder="Password (min 6 digit and 1 number)"
          id="spass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            margin: "30px auto",
            width: "300px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <input
          placeholder="Confirm Password"
          id="scpass"
          type="password"
          style={{
            margin: "30px auto",
            width: "300px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
            marginTop: "0px",
          }}
        ></input>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: emailerror ? "block" : "none",
          }}
        >
          Please enter a valid email !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: passerror ? "block" : "none",
          }}
        >
          Please make a stronger password !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: cpasserror ? "block" : "none",
          }}
        >
          Password and Confirm password doesn't match !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: emailDuperror ? "block" : "none",
          }}
        >
          Email already registered !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "green",
            display: confirmationMsg ? "block" : "none",
          }}
        >
          Succesfully Registered !!
        </label>
        <button
          className="loginBtn"
          onClick={() =>
            signupf(
              document.getElementById("semail").value,
              document.getElementById("spass").value,
              document.getElementById("scpass").value
            )
          }
        >
          Register
        </button>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "#021f3e",
          }}
          onClick={() => (setSignin(true), setSignup(false))}
        >
          Alreday got an account?
        </label>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: "0.8",
          zIndex: "15",
          position: "fixed",
          // marginTop: "-305px",
          top: "0%",
          display: loginm ? "block" : "none",
        }}
      ></div>
      <div
        className="loginMobile"
        style={{ display: loginm && signinm ? "flex" : "none" }}
      >
        <label
          style={{
            display: "inline",
            position: "relative",
            left: "90%",
            marginTop: "-60px",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => setLoginm(false)}
        >
          X
        </label>

        <h1
          style={{
            margin: "42px auto 32px auto",
            fontSize: "32px",
            color: "#021f3e",
          }}
        >
          Login
        </h1>
        <input
          placeholder="Email"
          id="lemailm"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "0px auto",
            width: "200px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <input
          placeholder="Password"
          id="lpassm"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            margin: "30px auto",
            width: "200px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: emailerror ? "block" : "none",
          }}
        >
          Email cannot be left empty !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: passerror ? "block" : "none",
          }}
        >
          Password cannot be left empty !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: cpasserror ? "block" : "none",
          }}
        >
          Wrong Login Credentials !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "green",
            display: confirmationMsg ? "block" : "none",
          }}
        >
          LogIn successful !!
        </label>
        <button
          className="loginBtn"
          onClick={() =>
            loginf(
              document.getElementById("lemailm").value,
              document.getElementById("lpassm").value
            )
          }
        >
          Login
        </button>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "#021f3e",
          }}
          onClick={() => (setSigninm(false), setSignupm(true))}
        >
          Dont have an account?
        </label>
      </div>
      <div
        className="loginMobile"
        style={{ display: loginm && signupm ? "flex" : "none" }}
      >
        <label
          style={{
            display: "inline",
            position: "relative",
            left: "90%",
            marginTop: "-60px",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => setLoginm(false)}
        >
          X
        </label>

        <h1
          style={{
            margin: "42px auto 32px auto",
            fontSize: "32px",
            color: "#021f3e",
          }}
        >
          Register
        </h1>
        <input
          placeholder="Email"
          id="semail2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            margin: "0px auto",
            width: "200px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <input
          placeholder="Password"
          id="spass2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            margin: "30px auto",
            width: "200px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        ></input>
        <input
          placeholder="Confirm Password"
          id="scpass2"
          type="password"
          style={{
            margin: "30px auto",
            width: "200px",
            height: "20px",
            padding: "13px",
            borderRadius: "5px",
            border: "1px solid gray",
            marginTop: "0px",
          }}
        ></input>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: emailerror ? "block" : "none",
          }}
        >
          Please enter a valid email !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: passerror ? "block" : "none",
          }}
        >
          Please make a stronger password !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: cpasserror ? "block" : "none",
          }}
        >
          Password doesn't match !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "red",
            display: emailDuperror ? "block" : "none",
          }}
        >
          Email already registered !!
        </label>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "green",
            display: confirmationMsg ? "block" : "none",
          }}
        >
          Succesfully Registered !!
        </label>

        <button
          className="loginBtn"
          onClick={() =>
            signupf(
              document.getElementById("semail2").value,
              document.getElementById("spass2").value,
              document.getElementById("scpass2").value
            )
          }
        >
          Register
        </button>
        <label
          style={{
            cursor: "pointer",
            margin: "10px auto 30px auto",
            color: "#021f3e",
          }}
          onClick={() => (setSigninm(true), setSignupm(false))}
        >
          Already got an account?
        </label>
      </div>
    </>
  );
}
export default Nav;
