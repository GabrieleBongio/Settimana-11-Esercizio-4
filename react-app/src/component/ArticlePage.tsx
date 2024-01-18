import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { state } from "../typeScript/exportTS";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchArticle } from "../redux";
import { Container } from "react-bootstrap";
import ArticleDetails from "./ArticleDetails";

const ArticlePage = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { articleData, loading, error } = useSelector((state: state) => state);
  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    dispatch(fetchArticle(articleId));
  }, [dispatch, articleId]);

  return (
    <Container className="mt-3">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-danger text-center">Error: {error}</p>}
      {articleData && <ArticleDetails articleData={articleData}></ArticleDetails>}
    </Container>
  );
};

export default ArticlePage;
