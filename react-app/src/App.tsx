import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ArticlePage from "./component/ArticlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:articleId" element={<ArticlePage></ArticlePage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
