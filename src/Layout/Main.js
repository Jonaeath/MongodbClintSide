import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pagees/Shared/Footer/Footer";
import Header from "../Pagees/Shared/Header/Header";
import LeftSideHeader from "../Pagees/Shared/LeftSideHeader/LeftSideHeader";
import RightSideHeader from "../Pagees/Shared/RightSideHeader/RightSideHeader";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideHeader></LeftSideHeader>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideHeader></RightSideHeader>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
