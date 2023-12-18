import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  TabContent,
  TabPane,
  CardHeader,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function TariffCharges() {
  const [pills, setPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("regulatory-updates");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("regulatory-updates");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
        <div className="content">
        <div className="section section-tabs">
        <Container>
          <Row>
          <Col className="ml-auto mr-auto" md="12" xl="12">
              <h2 className="category">OPEN ACCESS TARIFF & CHARGES</h2>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral-tariff justify-content-center"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        COMMERCIAL
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        INDUSTRIAL
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <Row>
                <Col className="ml-auto mr-auto" md="12" xl="6">
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                    <h3>
                      OA - CHARGES 
                      </h3>
                      <h2></h2>
                      <h3>
                      CHART 1
                      </h3>
                    </TabPane>
                  </TabContent>
                  </CardBody>
                </Col>
                <Col className="ml-auto mr-auto" md="12" xl="6">
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                    <h3>
                      OA - ELECTRICITY TARIFF 
                      </h3>
                      <h2></h2>
                      <h3>
                      CHART 2
                      </h3>
                    </TabPane>
                  </TabContent>
                  </CardBody>
                </Col>
                <Col className="ml-auto mr-auto" md="12" xl="6">
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills2">
                    <h3>
                      OA - CHARGES
                      </h3>
                      <h2></h2>
                      <h3>
                      CHART 1
                      </h3>
                    </TabPane>
                  </TabContent>
                  </CardBody>
                </Col>
                <Col className="ml-auto mr-auto" md="12" xl="6">
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills2">
                      <h3>
                      OA - ELECTRICITY TARIFF
                      </h3>
                      <h2></h2>
                      <h3>
                      CHART 2
                      </h3>
                      
                    </TabPane>
                  </TabContent>
                  </CardBody>
                </Col>
               </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
   <TransparentFooter />
    </>
  );
}

export default TariffCharges;
