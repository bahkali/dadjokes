import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      joke: {},
    };
  }

  componentDidMount() {
    fetch("https://icanhazdadjoke.com/slack")
      .then((res) => res.json())
      .then((jokes) => {
        let str = jokes.attachments[0].text.split("?");
        this.setState({
          joke: {
            question: str[0],
            answer: str[1],
          },
        });
        console.log(this.state.joke);
      });

    // fetch("")
    //   .then((response) => response.json())
    //   .then((users) => this.setState({ }));
  }
  render() {
    return <div className="App">Hello</div>;
  }
}

export default App;
