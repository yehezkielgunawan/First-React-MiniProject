import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };


  //submit & validation
  submitForm = () => {
    let nama = this.state;
    if (!nama["name"] || !nama["job"]) {
      console.log("kosong tuh nama");
      alert("All form must be filled");
    } else {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
    }
  };

  render() {
    const { name, job } = this.state;

    return (
      <form className="mt4">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="job">Job</label>
          <input
            className="form-control"
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange}
          />
        </div>
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm}
          className="btn btn-primary"
        />
      </form>
    );
  }
}

export default Form;
