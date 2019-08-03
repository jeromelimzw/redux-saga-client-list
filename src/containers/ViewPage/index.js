import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Typography,
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody
} from "@material-ui/core";
import { connect } from "react-redux";
import "./styles.css";

class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push("/edit");
  };

  render() {
    const { firstName, lastName, telNo } = this.props.details;
    console.log(this.props.details);
    return (
      <React.Fragment>
        <Typography variant="h3">Client Details</Typography>
        <div className="table">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>First Name:</TableCell>
                <TableCell>{firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Last Name:</TableCell>
                <TableCell>{lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone No:</TableCell>
                <TableCell>{telNo}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Button onClick={this.handleSubmit} color="primary">
          Update Details
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(withRouter(ViewPage));
