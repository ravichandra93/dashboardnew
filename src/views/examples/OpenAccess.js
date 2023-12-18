import React from "react";

// reactstrap components
import {
  Card,
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

function OpenAccess() {
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
            <Col className="ml-auto mr-auto" md="12" xl="9">
            <h2 className="title">Open Access Tracker</h2>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral-open justify-content-center"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="tariff-charges" 
                        onClick={(e) => {
                          
                        }}
                      >
                        <p><i className="now-ui-icons education_paper"></i></p>
                        OA TARIFF & CHARGES
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="oa-regulatory-updates"
                        onClick={(e) => {

                        }}
                      >
                        <p><i className="now-ui-icons ui-2_settings-90"></i></p>
                        OA REGULATORY UPDATES
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="oa-project"
                        onClick={(e) => {

                        }}
                      >
                        <p><i className="now-ui-icons objects_planet"></i></p>
                        OA PROJECT TRACKER
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
              </Card>
            </Col>
            
            <Col className="ml-auto mr-auto" md="12" xl="3">
              <p className="category-new">NEWS FEEDS</p>
              <div className="category-news">SJVN Green Invites Bids to Acquire Land for 1 GW Solar Projects</div>
              <div className="category-news">SJVN Invites Bids to Acquire Land for 200 MW Solar Projects in Punjab</div>
              <div className="category-news">Railways Invites Bids for 1.125 MW Rooftop Solar Project in Howrah</div>
              <div className="category-news">Railways Invites Bids for 1.125 MW Rooftop Solar Project in Howrah</div>
              <div className="category-news">US Solar Power Capacity Soars to 6.5 GW in Q3 2023, Reflecting 35% YoY Rise</div>
              <div className="category-news">Daily News Wrap-Up: Punjab Floats 100 MW Solar Tender with Transmission</div>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
   <TransparentFooter />
    </>
  );
}

export default OpenAccess;
