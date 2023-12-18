import React from "react";
// react plugin used to create switch buttons
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function BasicElements() {
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container> 
          <div className="space-70"></div>
          <Row id="checkRadios">
            <Col lg="12" sm="12">
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
