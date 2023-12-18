import React from "react";
// react plugin used to create switch buttons
// plugin that creates slider

// reactstrap components
import {
  Button,
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
          <p className="category-new"><h2 className="title">RENEWABLE ENERGY TECHNOLOGY TRENDS</h2></p>
          <Row>
            <Col md="12">
              <Button
                      color="info"
                      href="/regulatory-updates"
                      size="lg"
                      id="upgrade-to-pro"
                    >
                      REGULATORY UPDATES
              </Button>
              <Button
                      color="info"
                      href="/open-access"
                      size="lg"
                    >
                      OPEN ACCESS TRACKER
              </Button>
              <Button color="info" size="lg">
              MARKET SHARE TRACKER
              </Button>
              <Button color="info" size="lg">
              TENDER TRACKER
              </Button>
              <Button color="info" size="lg">
              EXPORT-IMPORT TRACKER
              </Button>
              <Button color="info" size="lg">
              REGULATORY UPDATES
              </Button>
              <Button color="info" size="lg">
              MARKET SHARE TRACKER
              </Button>
              <Button color="info" size="lg">
              TENDER TRACKER
              </Button>
              <Button color="info" size="lg">
              TENDER TRACKER
              </Button>
              <Button color="info" size="lg">
              TENDER TRACKER
              </Button>
              <Button color="info" size="lg">
              TENDER TRACKER
              </Button>
              <Button color="info" size="lg">
              TENDER TRACKER
              </Button>
            </Col>
          </Row>         
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
