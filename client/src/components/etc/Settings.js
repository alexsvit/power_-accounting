import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Settings extends Component {

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div><h1>Settings</h1></div>
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              {user.name.split(" ")[0]}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps, {}
)(Settings);
