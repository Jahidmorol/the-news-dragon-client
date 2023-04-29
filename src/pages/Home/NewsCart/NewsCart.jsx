import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCart = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="text-center mt-4">
      <Card.Header className="d-flex align-items-center">
        <div className="d-flex align-items-center gap-2">
          <Image
            style={{ height: "40px", width: "40px" }}
            src={author.img}
            roundedCircle
          />
          <div className="text-start">
            <p className="mb-0">{author?.name}</p>
            <p className="mb-0">
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
        <div className="flex-grow-1 text-end">
          <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link to={`/news/${_id}`}>Read More</Link>{" "}
            </>
          )}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted d-flex text-start">
        <div className="flex-grow-1 d-flex gap-2 align-items-center">
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          ></Rating>
          <span className="mt-1"> {rating?.number}</span>
        </div>
        <div>
          <FaEye></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
