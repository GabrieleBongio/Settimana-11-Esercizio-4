import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux";
import { useEffect } from "react";
import { Dispatch } from "redux";
import { articleObj, state } from "../typeScript/exportTS";
import { Container } from "react-bootstrap";
import ArticleSum from "./ArticleSum";

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { data, loading, error } = useSelector((state: state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="display-4 mt-3">Top News:</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      {data && data.map((news: articleObj) => <ArticleSum key={`article_n_${news.id}`} article={news}></ArticleSum>)}
    </Container>
  );
};

export default Home;
