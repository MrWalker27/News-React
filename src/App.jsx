import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/Story";
import Nav from "./components/Nav";
function App() {
  
  return (
    <><div>{Nav()}</div>
      <Routes>
        <Route
          path="/News-React-api"
          element={
            <Home />
          }
        />
        <Route
          path="/Story/:slug1/:slug2"
          element={
            <Story />
          }
        />
      </Routes>
    </>
  );
}

export default App;
