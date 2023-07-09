import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/Story";
import Nav from "./components/Nav";
import NewsMain from "./components/NewsMain";
import Footer from "./components/footer";
import Search from "./components/Search";
import SavedStories from "./components/SavedStories";

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
          path="/News"
          element={
            <NewsMain />
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
