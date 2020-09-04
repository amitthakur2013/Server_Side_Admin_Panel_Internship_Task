import React from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import Info from "./Info";
import { Templates } from "./Templates";
import { Settings } from "./Settings";

class Form extends React.Component {
  state = {
    step: 1,

    //movie
    movieName:"",
    description:"",
    row:"",
    col:"",
    img:"",
    merchant:"",
    price:"",
    commision:0,
    discountPercent:0,
    prefernceOrder:0,
    category:"",
    valid:{
      from:"",
      to:""
    },
    display:{
      from:"",
      to:""
    },
    location:"",
    movieAvailability:[],

    //step 1
    merchantUser: "",
    merchantOptions:[],
    category: "",
    outlets: [],
    noOfRooms: "",
    qtyAdult: "",
    qtyChild: "",
    maxQtyAdult: "",
    maxQtyChild: "",
    perAdultExtraAmount: "",
    perChildExtraAmount: "",

    //step 2
    title: "",
    subTitle: "",
    price: "",
    validFrom: "",
    validTo: "",
    validDayAndTimes: [],
    menuTemplate:[],
    howtouseTemplate:[],
    cancellationTemplate:[],
    thingstorememberTemplate:[]
  };

  componentDidMount(){
    axios.get("http://localhost:3124/api/merchant/all")
    .then(({data}) => {
      this.setState({merchantOptions:data});
      //console.log(this.state.merchantOptions);
    })
    .catch(err => console.log(err))

    axios.get("http://localhost:3124/api/menuTemplate/all")
    .then(({data}) => {
      this.setState({menuTemplate:data});
      //console.log(this.state.merchantOptions);
    })
    .catch(err => console.log(err))

    axios.get("http://localhost:3124/api/howtouse/all")
    .then(({data}) => {
      this.setState({howtouseTemplate:data});
      //console.log(this.state.merchantOptions);
    })
    .catch(err => console.log(err))

    axios.get("http://localhost:3124/api/cancellationpolicy/all")
    .then(({data}) => {
      this.setState({cancellationTemplate:data});
      //console.log(this.state.merchantOptions);
    })
    .catch(err => console.log(err))

    axios.get("http://localhost:3124/api/thingstoremember/all")
    .then(({data}) => {
      this.setState({thingstorememberTemplate:data});
      //console.log(this.state.merchantOptions);
    })
    .catch(err => console.log(err))

  }

  nextStep = () => {
    const { step } = this.state;
    if (step == 4) {
      return;
    }
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleChangeArray = (value) => {
    let a = new Array();
    a = this.state.validDayAndTimes;
    a.push(value);
    this.setState({ validDayAndTimes: a });
  };

  showStepName = () => {
    const step = this.state.step;
    switch (step) {
      case 1:
        return "User";
      case 2:
        return "Info";
      case 3:
        return "Templates";
      case 4:
        return "Settings";
      default:
        return "";
    }
  };

  showStep = () => {
    const { step } = this.state;
    if (step === 1) {
      return (
        <UserInfo
          handleChange={this.handleChange}
          // merchantUser={this.state.merchantUser}
          formData={this.state}
          category={this.state.category}
          nextStep={this.nextStep}
        />
      );
    }
    if (step === 2) {
      return (
        <Info
          handleChangeArray={this.handleChangeArray}
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          formData={this.state}
        />
      );
    }
    if (step === 3) {
      return (
        <Templates
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          title={this.state.title}
          formData={this.state}
        />
      );
    }
    if (step === 4) {
      return (
        <Settings
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          title={this.state.title}
          formData={this.state}
        />
      );
    }
  };

  render() {
    const { step } = this.state;
    return (
      <div className='Content'>
        <h2>
          Step {step} of 4 : {this.showStepName()}
        </h2>
        {this.showStep()}
      </div>
    );
  }
}

export default Form;
