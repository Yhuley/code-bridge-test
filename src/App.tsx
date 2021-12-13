import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/article-page/article-page.page";
import HomePage from "./pages/home-page/home-page.page";
import { useDispatch } from "react-redux";
import { fetchNewsStart } from "./reducers/news/news.actions"


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsStart())  
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/article/:id" element={<ArticlePage/>}/>
      </Routes>
    </>
  );
}

export default App;
