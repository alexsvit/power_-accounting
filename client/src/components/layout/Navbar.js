import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";



class Navbar extends Component {

  constructor() {
    super();
  }



  render() {

    const { user } = this.props.auth;

    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper black">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {user.id?<li><Link to="settings">Settings</Link></li>:null}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

//export default Navbar;


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, {}
)(Navbar);
