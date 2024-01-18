import { Col, Row } from "react-bootstrap";
import { articleObj } from "../typeScript/exportTS";

const ArticleDetails = (props: { articleData: articleObj }) => {
  const articleData = props.articleData;
  const publishedDate = new Date(articleData.published_at);
  console.log(props);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="text-start mb-4">
      <h3 className="display-6">{articleData.title}</h3>
      <p className="fw-lighter">
        from {articleData.news_site}, pubblished on {days[publishedDate.getDay()]} {publishedDate.getDate()}{" "}
        {month[publishedDate.getMonth()]} {publishedDate.getFullYear()} at {publishedDate.getHours()}:
        {publishedDate.getMinutes() + 1 < 10 ? "" + publishedDate.getMinutes() + 1 : publishedDate.getMinutes() + 1}
      </p>
      <Row className="justify-content-center">
        <Col xs={10}>
          <img src={articleData.image_url} alt="Immagine articolo" className="img-fluid" />
        </Col>
      </Row>
      <p className="mt-4 fw-lighter fs-5">Summary:</p>
      <p>{articleData.summary}</p>
      <a className="link-underline-opacity-25 link-underline-opacity-100-hover link-primary" href={articleData.url}>
        To the official site:
      </a>
    </div>
  );
};

export default ArticleDetails;
