/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
              >
                Dashboards
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                News
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="#"
            target="_blank"
          >
            Mercom
          </a>
          . Coded by{" "}
          <a
            href="#"
            target="_blank"
          >
            Mercomindia
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
