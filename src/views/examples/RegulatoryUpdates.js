import React from "react";
import Datetime from "react-datetime";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

function RegulatoryUpdates() {
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
        <h2 className="title">Renewable Energy Regulatory Updates</h2>
          <Row>
          <Col className="ml-auto mr-auto" md="12" xl="3"> 
          <div class="search-container">
          <form action="/regulatory-updates">
          <input type="text" placeholder="SEARCH.." name="search"></input>
          <button type="submit"><i class="fa fa-search"></i></button>
          </form>
          </div>
          </Col>
          <Col className="ml-auto mr-auto" md="12" xl="2"> 
            <div class="tech-select">
             <select name="tech" id="tech-select">
              <option value="">STATE/CENTRAL</option>
              <option value="dog">State</option>
              <option value="dog">Central</option>
             </select>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="12" xl="2"> 
            <div class="tech-select">
            <select name="tech" id="tech-select">
              <option value="">CATEGORY</option>
              <option value="dog">Solar</option>
              <option value="cat">Wind</option>
              <option value="hamster">Hybrid</option>
              <option value="parrot">OpenAccess</option>
              <option value="spider">Renewable Energy</option>
              <option value="goldfish">Hydro</option>
            </select>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="12" xl="3"> 
                  <div className="datepicker-container">
                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "DATE" }}
                      />
                    </FormGroup>
                  </div>
          </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="12" xl="9">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
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
                        <h3>18</h3>
                        Solar
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
                        <h3>12</h3>
                        Wind
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <h3>03</h3>
                        Hybride
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <h3>21</h3>
                        Open Access
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        <h3>15</h3>
                        Renewable Energy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("6");
                        }}
                      >
                        <h3>07</h3>
                        Electric Vehicles
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "7" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("7");
                        }}
                      >
                        <h3>03</h3>
                        Hydro
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "8" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("8");
                        }}
                      >
                        <h3>02</h3>
                        Tariff
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "9" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("9");
                        }}
                      >
                        <h3>01</h3>
                        Rooftop
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "10" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("10");
                        }}
                      >
                        <h3>07</h3>
                        Waste to Energy
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "11" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("11");
                        }}
                      >
                        <h3>03</h3>
                        DSM
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "12" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("12");
                        }}
                      >
                        <h3>21</h3>
                        Power
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                   <TabPane tabId="pills1">
                <h4 className="card-title">Renewable Energy Regulatory Updates Solar</h4>
                <Row>
          <Col className="ml-auto mr-auto" md="12" xl="4"> 
            <div class="tech-select">
             <select name="tech" id="tech-select">
              <option value="">STATE/CENTRAL</option>
              <option value="dog">State</option>
              <option value="dog">Central</option>
             </select>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="12" xl="4"> 
            <div class="tech-select">
            <select name="tech" id="tech-select">
              <option value="">CATEGORY</option>
              <option value="dog">Solar</option>
              <option value="cat">Wind</option>
              <option value="hamster">Hybrid</option>
              <option value="parrot">OpenAccess</option>
              <option value="spider">Renewable Energy</option>
              <option value="goldfish">Hydro</option>
            </select>
            </div>
          </Col>
          <Col className="ml-auto mr-auto" md="12" xl="4"> 
                  <div className="datepicker-container">
                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "DATE" }}
                      />
                    </FormGroup>
                  </div>
          </Col>
          </Row>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Solar </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Solar </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills2">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Wind</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Wind </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills3">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Hybride</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hybride </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Hybride </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills4">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Open Access</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Open Access</td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Open Access </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Open Access </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills5">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Renewable Energy</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Renewable Energy</td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Renewable Energy </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Renewable Energy </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills6">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Electric Vehicles</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Electric Vehicles</td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Electric Vehicles </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills7">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Hydro</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hydro</td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Hydro </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Hydro </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                    <TabPane tabId="pills8">
                    <h4 className="card-title">Renewable Energy Regulatory Updates Tariff</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th> Date </th>
                        <th> Agency </th>
                        <th> State/Central</th>
                        <th> Description</th>
                        <th> Subject</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-info">
                        <td> 20-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Wind </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 12-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Extension of waiver of domestic ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-info">
                        <td> 05-09-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 29-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-info">
                        <td> 208-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Nearly 2.46 lakh farmers have ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Central Government had issued Solar ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-info">
                        <td> 01-08-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Achieving Universal Energy Access by 2030 ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Ministry following up with concerned...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-danger">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Updation of List I ...</td>
                        <td> Tariff </td>
                      </tr>
                      <tr className="table-info">
                        <td> 25-07-2023 </td>
                        <td> MNRE </td>
                        <td> Central </td>
                        <td> Petition by Kamuthi Renewable Energy Ltd...</td>
                        <td> Tariff </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto" md="12" xl="3">
              <p className="category">NEWS FEEDS</p>
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

export default RegulatoryUpdates;
