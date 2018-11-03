import React, { Component } from "react";
import "./main.css";
import MainSection1 from "./main_section1"
import MainSection2 from "./main_section2"
import MainSection3 from "./main_section3"

import axios from "axios";


export default class Main extends Component {
    state ={
      findData:[],
      witnessData:[]
    }

  componentDidMount() {
    axios.get("http://localhost:5000/find?id_lte=8")
      .then(res => {
        console.log("axios_get",res.data);
        this.setState({
          findData: res.data
        })
      })
      .catch(err => console.log(err))
      
    axios.get("http://localhost:5000/witness?id_lte=8")
      .then(res => {
        console.log("axios_get",res.data);
        this.setState({
          witnessData: res.data
        })
      })
      .catch(err => console.log(err))
  }
  
  
  render() {
    // console.log(this.state.data)
    if (this.state.findData.length === 0 || this.state.witnessData.length === 0) {
      return <div>loding....</div>;
    }
    // console.log(this.state.data)
    return <div className="component_body">
        <MainSection1 findData={this.state.findData} />
        <MainSection2 findData={this.state.findData} />
        <MainSection3 witnessData={this.state.witnessData} />
      </div>;
  }
}


