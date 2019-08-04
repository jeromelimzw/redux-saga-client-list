import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editDetails } from "../../redux/actions";
import "./styles.css";

class EditPage extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, telNo } = this.props.details;
    this.state = {
      firstName: firstName,
      lastName: lastName,
      telNo: telNo
    };
  }
  handleSubmit = event => {
    const { firstName, lastName, telNo } = this.state;
    event.preventDefault();
    if (firstName !== "" || lastName !== "" || telNo !== "") {
      this.props.editDetails(this.state);
      this.props.history.push("/view");
    }
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { firstName, lastName, telNo } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h3">Edit Details</Typography>
        <form noValidate autoComplete="off" className="form">
          <TextField
            defaultValue={firstName}
            name="firstName"
            label="First Name"
            onChange={this.handleChange}
          />
          <br />

          <TextField
            defaultValue={lastName}
            name="lastName"
            label="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <TextField
            defaultValue={telNo}
            name="telNo"
            label="Tel. No."
            onChange={this.handleChange}
          />
          <br />
          <br />
          <Button type="submit" color="primary" onClick={this.handleSubmit}>
            Submit Changes
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { editDetails }
)(withRouter(EditPage));
