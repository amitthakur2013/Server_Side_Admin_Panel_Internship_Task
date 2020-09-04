import React from "react";
import moment from "moment";

class Info extends React.Component {
  state = { error: "", newArr: [] };
  continue = (e) => {
    e.preventDefault();
    if (this.props.title == "") {
      this.setState({ error: "enter title" });
      return;
    }
    this.props.handleChangeArray(this.state.newArr);
    // console.log(this.state.newArr);
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    // console.log(dateArray);
    return dateArray;
  }

  myHandler = (e) => {
    console.log(e.target.value);
    console.log("here");
    const mine = this.state.newArr;
    mine.push(e.target.value);
    this.setState({ newArr: mine });
    // this.setState({ newArr: [1, 2] });
  };

  renderDaysAndTimes = () => {
    let datesArray = [];
    datesArray = this.getDates(
      this.props.formData.validFrom,
      this.props.formData.validTo
    );
    var newArray = datesArray.map((date) => {
      // console.log(typeof date);
      // this.props.handleChangeArray(date);
      return (
        <div className='form-element'>
          <label for='date'>{date}</label>
          <input
            type='time'
            id=''
            onChange={this.myHandler}
            name={date.valueOf()}
          />
        </div>
      );
    });
    // this.setState({ newArr: newArray });
    console.log(newArray);
    return <div>{newArray}</div>;
  };

  render() {
    const { handleChange, title } = this.props;
    return (
      <>
        <div className='form-element'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={this.props.formData.title}
            name='title'
            onChange={handleChange("title")}
          />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Sub Title</label>
          <input
            type='text'
            name='subTitle'
            onChange={handleChange("subTitle")}
          />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Actual Price</label>
          <input type='text' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Discounted Price</label>
          <input type='text' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Valid For</label>
          <input type='text' name='price' onChange={handleChange("validFor")} />
        </div>

        <div className='form-element'>
          <label htmlFor=''> Valid On</label>
          <input type='text' name='validOn' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Valid From</label>
          <input
            type='date'
            name='validFrom'
            onChange={handleChange("validFrom")}
          />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Valid To</label>
          <input
            type='date'
            name='validTo'
            onChange={handleChange("validTo")}
          />
        </div>
        {/* Render individual dates */}
        {this.renderDaysAndTimes()}

        <div className='form-element'>
          <label htmlFor=''>Display From</label>
          <input type='date' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Display To</label>
          <input type='date' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Quantity</label>
          <input type='text' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Min Purches Limit</label>
          <input type='text' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Max Purches Limit</label>
          <input type='text' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''>Percentage</label>
          <input type='text' name='price' onChange={handleChange("price")} />
        </div>
        <div className='form-element'>
          <label htmlFor=''> Add Image</label>
          <input type='file' name='price' onChange={handleChange("price")} />
        </div>

        <div className='error'>{this.state.error}</div>
        <div className='center'>
          <button className='Back' onClick={this.back}>
            Prev
          </button>
          <button className='Next' onClick={this.continue}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default Info;
