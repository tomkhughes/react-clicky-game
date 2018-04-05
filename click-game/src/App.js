import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Rules from "./components/Rules";
import Nav from "./components/Nav";

import friends from "./friends.json";
import "./App.css";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0

  };

onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }


scoreCount = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ count: this.state.count + 1 });
  };
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
        count={this.state.count}
        ></Nav>
        <Title>Clicky Game!</Title>

        <Rules>Click on an image to earn points, but don't click on any more than once!</Rules>
        {this.state.friends.map(friend => (
          <FriendCard 
            scoreCount={this.scoreCount}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
