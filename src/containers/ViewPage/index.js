import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { addRandom, removeClient } from "../../redux/actions";
import CloseIcon from "@material-ui/icons/Close";
import _ from "lodash";

import {
  Typography,
  Button,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TableHead
} from "@material-ui/core";
import { connect } from "react-redux";
import "./styles.css";

class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = { list: this.props.details.list };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push("/edit");
  };

  handleAddRandom = async () => {
    await this.props.addRandom();
    await this.setState({ list: this.props.details.list });
  };

  handleRemoveClient = async id => {
    await this.props.removeClient(id);
    await this.setState({ list: this.props.details.list });
  };

  async componentDidMount() {
    await this.setState({ list: this.props.details.list });
  }

  render() {
    const { list } = this.state;

    return (
      <React.Fragment>
        <Typography variant="h3">Client Details</Typography>
        <div className="table">
          {list.length === 0 ? (
            <Typography variant="h5">You Have No Clients!</Typography>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID:</TableCell>
                  <TableCell>First Name:</TableCell>
                  <TableCell>Last Name:</TableCell>
                  <TableCell>Phone No:</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow />
                {list.map((a, index) => (
                  <TableRow key={index}>
                    <TableCell>{a.id}</TableCell>
                    <TableCell>{_.startCase(_.toLower(a.firstName))}</TableCell>
                    <TableCell>{_.startCase(_.toLower(a.lastName))}</TableCell>
                    <TableCell>{a.telNo}</TableCell>
                    <TableCell>
                      <CloseIcon
                        className="close-icon"
                        onClick={() => this.handleRemoveClient(a.id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        <Button onClick={this.handleSubmit} color="primary">
          Add New Client
        </Button>
        <Button color="primary" onClick={this.handleAddRandom}>
          Add Random
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
  { addRandom, removeClient }
)(withRouter(ViewPage));
