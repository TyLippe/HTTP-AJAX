import React from "react";
import axios from "axios";
import Friends from "./Friends";
import AddFriend from "./AddFriend";

class FriendContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            friends:[],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/friends")
        .then((response) => {
            this.setState({
                friends: response.data
            })
        })
        .catch((error) => {
            alert("Data was not given", error)
        })
    }

    handleChanges = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    addFriend(){
        const newFriend = {
            name: this.state.name,
            age: "",
            email: ""
        };

        console.log(newFriend)

        axios.post("http://localhost5000/friends", newFriend)
        .then((response) => {    
        this.setState({
                friends: response.data
            })
        })
        .catch((error) => {
                alert("New friend not found")
        })
    }

    render() {
        return(
            <div className="friend-container">
                <Friends friends={this.state.friends} />
                <AddFriend addFriend={this.addFriend}
                handleChanges={this.handleChanges} />
            </div>
        )
}
}

export default FriendContainer;