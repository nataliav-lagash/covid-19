import React from "react";
import axios from "axios";

import { userService, authenticationService } from "@/_services";
import Paisglobal from "../_components/paisglobal";

class HomePage extends React.Component {
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
      .get("https://coronavirus-19-api.herokuapp.com/all")
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
        <h1>Covid-19 a Nivel Global</h1>
        <Paisglobal paisData={paisData} />;
      </>
    );
  }
}

export { HomePage };
