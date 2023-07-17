import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/Story";
import Nav from "./components/Nav";
import NewsMain from "./components/NewsMain";
import Footer from "./components/footer";
import Search from "./components/Search";
import SavedStories from "./components/SavedStories";
import NewsAdvertisment from "./components/NewsAdvertisment.jsx";
import NewsPeople from "./components/NewsPeople";
import NewsCompanies from "./components/NewsCompanies";
import ArticlesInterviews from "./components/ArticlesInterviews";
import ArticlesPlain from "./components/ArticlesPlain";
import ContactUs from "./components/ContactUs";

function App() {
  
  return (
    <><div>{Nav()}</div>
      <Routes>
        <Route
          path="/News-React-api"
          element={
            <Home
            />
          }
        />
        <Route
          path="/Story/:slug1/:slug2"
          element={
            <Story />
          }
        />
        <Route
          path="/ArticlesInterviews"
          element={
            <ArticlesInterviews />
          }
        />
        <Route
          path="/ContactUs"
          element={
            <ContactUs />
          }
        />
        <Route
          path="/ArticlesPlain"
          element={
            <ArticlesPlain />
          }
        />
        <Route
          path="/News"
          element={
            <NewsMain />
          }
        />
        <Route
          path="/NewsAdvertisment"
          element={
            <NewsAdvertisment />
          }
        />
        <Route
          path="/NewsCompanies"
          element={
            <NewsCompanies />
          }
        />
        <Route
          path="/NewsPeople"
          element={
            <NewsPeople />
          }
        />
        <Route
          path="/Search/:slug1"
          element={
            <Search />
          }
        />
        <Route
          path="/SavedStories"
          element={
            <SavedStories />
          }
        />
      </Routes>
      <div>{Footer()}</div>
    </>
  );
}

export default App;
