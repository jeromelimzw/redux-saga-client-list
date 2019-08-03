import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editDetails } from "../../redux/actions";
import "./styles.css";

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      telNo: ""
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
    return (
      <React.Fragment>
        <Typography variant="h3">Edit Details</Typography>
        <form noValidate autoComplete="off" className="form">
          <TextField
            name="firstName"
            label="First Name"
            onChange={this.handleChange}
          />
          <br />

          <TextField
            name="lastName"
            label="Last Name"
            onChange={this.handleChange}

            // onChange={this.handleChange("lastName")}
          />
          <br />
          <TextField
            name="telNo"
            label="Tel. No."
            onChange={this.handleChange}

            // onChange={this.handleChange("telNo")}
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

export default connect(
  null,
  { editDetails }
)(withRouter(EditPage));
