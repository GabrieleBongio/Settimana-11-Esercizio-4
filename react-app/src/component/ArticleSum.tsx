import { Col, Row } from "react-bootstrap";
import { articleObj } from "../typeScript/exportTS";
import { useNavigate } from "react-router-dom";

const ArticleSum = (props: { article: articleObj }) => {
  const article = props.article;
  const publishedDate = new Date(article.published_at);
  const navigate = useNavigate();

  function handleClick(): void {
    navigate(`/${article.id}`);
  }

  return (
    <Col>
      <Row
        className="p-0 overflow-hidden align-items-center rowHover border border-2 rounded-3 my-3"
        onClick={handleClick}
      >
        <Col xs={3} className="p-0">
          <img src={article.image_url} alt="Immagine articolo" className="img-fluid" />
        </Col>
        <Col xs={9}>
          <h6 className="fw-normal fs-5">{article.title}</h6>
          <p className="m-0">
            {publishedDate.getHours()}:
            {publishedDate.getMinutes() + 1 < 10 ? "" + publishedDate.getMinutes() + 1 : publishedDate.getMinutes() + 1}{" "}
            - {publishedDate.getDate()}/
            {publishedDate.getMonth() + 1 < 10 ? "" + publishedDate.getMonth() + 1 : publishedDate.getMonth() + 1}/
            {publishedDate.getFullYear()}
          </p>
        </Col>
      </Row>
    </Col>
  );
};

export default ArticleSum;
