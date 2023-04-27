import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bgpng from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button variant="outline-primary" className="my-2 w-100">
        <FaGoogle></FaGoogle> Login With Google
      </Button>
      <Button variant="outline-info" className="w-100">
        <FaGithub></FaGithub> Login With Github
      </Button>
      <div className="my-3">
        <h4 className="my-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twiter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      {/* Qzone component  */}
      <Qzone></Qzone>

      <div className="my-3 rounded">
        <img src={bgpng} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
