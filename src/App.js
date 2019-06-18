import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: {
        about: '',
        images: [''],
        location: '',
        name: '',
        species: '',},
    };
  }

  onSelectPet = (pet) => {
    console.log(pet);

     this.setState(
       { currentPet: pet}
     );
    
  }

  onRemovePet = (pet) => {
    
    const toDelete = this.state.petList.find((v) => v["id"] === pet.id 
    )

    const indexToDelete= this.state.petList.indexOf(toDelete)
  
    const pets = this.state.petList
    pets.splice(indexToDelete, 1)

    this.setState(
      { pets}
    );
    
  }

  addPet = (newPet) => {
    
    newPet.id = this.state.petList.length + 1
    const allPets = this.state.petList
    allPets.push(newPet)
    this.setState (
      allPets,
    )

  }




  render() {
    const { currentPet } = this.state;
    

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>

          < PetDetails currentPet={currentPet}/>

        <section className="pet-list-wrapper">
          <PetList pets={this.state.petList} onSelectPetCallBack={this.onSelectPet} onCloseClickCallBack={this.onRemovePet}/>
        </section>

        <section className="new-pet-form-wrapper">
          <NewPetForm addPetCallback={this.addPet}/>
        </section>

      </main>
    );
  }
}

export default App;
