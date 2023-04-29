import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../editorsInsight/EditorsInsight";

const News = () => {
  const news = useLoaderData();
  const {
    _id,
    title,
    details,
    image_url,
    author,
    rating,
    total_view,
    category_id,
  } = news;
  // console.log(news);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} className="p-3" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft className="mb-1 me-2" /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default News;