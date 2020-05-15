import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: {},
    };
  }

  componentDidMount() {
    fetch("https://icanhazdadjoke.com/slack")
      .then((res) => res.json())
      .then((jokes) => {
        let str = jokes.attachments[0].text.split("?");
        console.log(str);
        this.setState({
          joke: {
            question: str[0],
            answer: str[1],
          },
        });
        console.log(this.state.joke);
      });

    //get the weather
    // fetch("")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ }));
  }
  render() {
    const { joke } = this.state;
    return (
      <div className="container ">
        <h1>DAD'S JOKES</h1>
        <h2>{joke.question}</h2>
        <h3>{joke.answer}</h3>
      </div>
    );
  }
}

export default App;
