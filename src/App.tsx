import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/article-page/ArticlePage.page";
import HomePage from "./pages/home-page/HomePage.page";
import NotFound from "./components/not-found/NotFound.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/article/:id" element={<ArticlePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
