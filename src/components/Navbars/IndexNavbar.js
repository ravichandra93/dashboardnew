import React from "react";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="http://localhost:3000/index"
              id="navbar-brand"
            >
              <div className="logo-container">
                      <img
                        alt="..."
                        src={require("assets/img/logonew.png")}
                      ></img>
              </div>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Dashboards</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem
                    href="regulatory-updates"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Regulatory Updates Tracker
                  </DropdownItem>
                  <DropdownItem
                    href="open-access"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Open Access Tracker
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Tender Tracker
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Export Import Tracker
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Projects Tracker
                  </DropdownItem>
                  <DropdownItem
                    href="#"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Market Share Tracker
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="http://localhost:3000/login-page"
                  id="upgrade-to-pro"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>LogIn</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
