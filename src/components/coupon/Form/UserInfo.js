import React, { Fragment } from "react";

import CKEditor from "ckeditor4-react";

class UserInfo extends React.Component {
  state = { error: "" };
  continue = (e) => {
    e.preventDefault();
    if (this.props.formData.merchantUser === "") {
      this.setState({ error: "Enter Merchant User" });
      return;
    }
    this.props.nextStep();
  };
  renderCheckBox = () => {
    switch (this.props.formData.merchantUser) {
      case "KFC":
        return "KFC";
      case "Taj Mahal Palace":
        return "Taj Hotel";
    }
  };
  renderExtra = () => {
    console.log(this.props.category);
    if (this.props.category == "hotel") {
      return (
        <Fragment>
          <div className='form-element'>
            <label htmlFor=''>No of Rooms</label>
            <input
              type='text'
              name='noOfRooms'
              value={this.props.formData.noOfRooms}
              onChange={this.props.handleChange("noOfRooms")}
            />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Qty Adult</label>
            <input
              type='text'
              name='qtyAdult'
              value={this.props.formData.noOfRooms}
              onChange={this.props.handleChange("noOfRooms")}
            />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Qty Child</label>
            <input
              type='text'
              name='noOfRooms'
              value={this.props.formData.noOfRooms}
              onChange={this.props.handleChange("noOfRooms")}
            />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Max Qty Adult</label>
            <input
              type='text'
              name='noOfRooms'
              value={this.props.formData.noOfRooms}
              onChange={this.props.handleChange("noOfRooms")}
            />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Max Qty Child</label>
            <input
              type='text'
              name='noOfRooms'
              value={this.props.formData.noOfRooms}
              onChange={this.props.handleChange("noOfRooms")}
            />
          </div>
          <div className='form-element'>
            <label htmlFor=''>Inclusions</label>
            <CKEditor />
          </div>
        </Fragment>
      );
    }
  };

  render() {
    const { handleChange } = this.props;

    return (
      <>
        <div className='form-element'>
          <label htmlFor=''>Merchant User</label>
          <select
            type='text'
            name='merchantUser'
            value={this.props.formData.merchantUser}
            onChange={handleChange("merchantUser")}
          >
            <option disabled selected value=''>
              Select an option
            </option>
            {this.props.formData.merchantOptions.map(mer =>
            <option key={mer._id}>{mer.businessName}</option>
            )}
            
          </select>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Outlets user</label>
          <input type='checkbox' name='' value='' />{" "}
          <label htmlFor='' className='checkbox-label'>
            {this.renderCheckBox()}
          </label>
        </div>
        <div className='form-element'>
          <label htmlFor=''>Category</label>
          <select
            type='text'
            name='category'
            onChange={handleChange("category")}
          >
            <option value='Food'>Food</option>
            <option value='Drink'>Drink</option>
            <option value='hotel'>Hotel</option>
            <option value='activity'>Activity</option>
            <option value='movie'>Movie</option>
          </select>
        </div>
        {this.renderExtra()}
        <div className='form-element'>
          <label htmlFor=''>Image</label>
          <input type='file' name='' id='' />
        </div>
        <div>
          <div className='error center' style={{ margin: "20px" }}>
            {this.state.error}
          </div>
          <div className='center'>
            <button className='Next' onClick={this.continue}>
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default UserInfo;
