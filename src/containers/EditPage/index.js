import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Typography, Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editDetails, addNew } from "../../redux/actions";
import "./styles.css";

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName, telNo } = this.state;
    if (
      firstName !== undefined ||
      lastName !== undefined ||
      telNo !== undefined
    ) {
      this.props.addNew(this.state);
      this.props.history.push("/view");
    }
  };

  handleGoBack = event => {
    event.preventDefault();
    this.props.history.push("/view");
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
          <br />
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
        <Button color="primary" onClick={this.handleGoBack}>
          Back to Client List
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { editDetails, addNew }
)(withRouter(EditPage));
