import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dae",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h4>First React App (Local Add and Delete)</h4>
          <p>This project is made using React JS and Bootstrap</p>
        </div>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
        <div class="footer-copyright text-center py-3">
          <p>© 2020 Made by <a href="yehezkielgunawan123.surge.sh">Yehezkiel Gunawan</a> </p>
           <p>Using resource and knowledge from <a href="https://www.taniarascia.com/getting-started-with-react/">Tania Rascia</a> </p>
        </div>
      </div>
    );
  }
}

export default App;
