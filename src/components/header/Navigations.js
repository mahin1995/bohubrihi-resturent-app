import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
class Navigations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }
  navToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <div>
        <Navbar dark color="dark" expand="sm">
          <div className="container">
            <NavbarToggler onClick={this.navToggle} />
            <NavbarBrand href="/">Bohubrihi Restaurant</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/menu" className="nav-link">
                    Menu
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

// const Navigations = () => {
//   return (
//     <div>
//       <Navbar dark color="dark">
//         <div className="container">
//           <NavbarBrand href="/">Bohubrihi Resturent</NavbarBrand>
//         </div>
//       </Navbar>
//     </div>
//   );
// };

export default Navigations;
