import React from 'react';
import axios from "axios";
import FriendForm from "./components/FriendForm";
import Friends from "./components/Friends";
import { Route, NavLink} from "react-router-dom";
import UpdateFriendForm from "./components/UpdateFriendForm";

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        friends:[],
        activeFriend: null
    }
}

componentDidMount(){
    axios.get("http://localhost:5000/friends")
    .then((res) => {
        this.setState({
        friends: res.data
        })
    })
    .catch((err) => {
        alert("Data was not given", err)
    })
}

addFriend = friend => {
  axios
    .post("http://localhost:5000/friends", friend)
    .then(res => {
      this.setState({ friends: res.data})
      this.props.history.push('/')
    })
    .catch(err => alert("Add Friends", err))
}

updateFriend = friend => {
  axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      this.setState({ friends: res.data });
      this.props.history.push('/');
    })
    .catch(err => alert("Update Friends", err));
};

setUpdateForm = (e, friend) => {
  e.preventDefault();
  this.setState({ activeFriend: friend});
  this.props.history.push("/update-friend");
};

render() {
    return(
      <div className="friend-container">
          <NavLink to="/">
            Home
          </NavLink>
          
          <NavLink to="/friendform">
            Add A Friend!
          </NavLink>
          
          <Route exact path="/friendform"
          render={props => (
          <FriendForm
            {...props} 
            addFriend={this.addFriend} />)} 
          /> 
          
          <Route exact path="/" 
          render={props => (
          <Friends
            {...props}
            friends={this.state.friends}
            setUpdateForm={this.setUpdateForm} />)}
          />
      
          <Route exact path="/update-friend"
          redner={props => (
          <UpdateFriendForm
            {...props}
            updateFriend={this.updateFriend}
            activeFriend={this.state.activeFriend} />)}
          />

      </div>
    )
}
}

export default App;
