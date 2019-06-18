import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      location: '',
      images: '',
      about: '',
    };
  }

  onChangeHandler = (event) => {
    const field = {}
   
    field[event.target.name] = event.target.value;
    this.setState(field);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const ima = this.state.images
    this.props.addPetCallback({
      name: this.state.name,
      species: this.state.species,
      location: this.state.location,
      images: [this.state.images],
      about: this.state.about,
    });

    this.setState ({
      name: '',
      species: '',
      location: '',
      images: '',
      about: '',
    });

  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.handleSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name </label>
          <input name="name"
          value={this.state.name}
          onChange={this.onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="species">Species </label>
          <input name="species"
            value={this.state.species}
            onChange={this.onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="location">Location </label>
          <input name="location"
            value={this.state.location}
            onChange={this.onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="images">Image </label>
          <input name="images"
            value={this.state.images}
            onChange={this.onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="about">About </label>
          <textarea name="about"
            value={this.state.about}
            onChange={this.onChangeHandler}
          />
        </div>
        
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;