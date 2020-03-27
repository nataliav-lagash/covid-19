import React, { Fragment } from "react";
import axios from "axios";
import List from "../_components/List";

import { userService, authenticationService } from "@/_services";

class ListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
      users: null,
      paisData: []
    };
  }

  componentDidMount() {
    userService.getAll().then(users => this.setState({ users }));
    axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
      .then(res => {
        const paisData = res.data;
        console.log(paisData);
        this.setState({ paisData });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { paisData } = this.state;
    return (
      <>
        <List paisData={paisData} />
      </>
    );
  }
}

export { ListPage };
