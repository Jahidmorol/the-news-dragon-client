import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaCalendar, FaCalendarAlt } from "react-icons/fa";
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import thired from "../../../assets/3.png";

const EditorsInsight = () => {
  return (
    <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      <Col>
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
            <Card.Text><FaCalendarAlt className="mb-1 me-1"/> Jan 4, 2022</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
            <Card.Text><FaCalendarAlt className="mb-1 me-1"/> Jan 4, 2022</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img variant="top" src={thired} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
            <Card.Text><FaCalendarAlt className="mb-1 me-1"/> Jan 4, 2022</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EditorsInsight;
