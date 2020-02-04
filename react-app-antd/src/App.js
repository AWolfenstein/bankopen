import React, { Component } from "react";

import "./App.css";
import Layout from "./components/layout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Layout></Layout>;
  }
}

export default App;
