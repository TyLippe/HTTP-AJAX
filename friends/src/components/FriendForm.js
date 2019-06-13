import React from "react";

class FriendForm extends React.Component {
    state = {
        friend: {
            name: "",
            age: "",
            email: ""
        }
    }

    changeHandler = e => {
        e.persist();
        let value = e.target.value;
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: "",
                age: "",
                email: ""
            }
        })
    }
    
    render(){
    return(
        <div>
        <h1>Add A Friend!</h1>
        <form onSubmit={this.handleSubmit}>
            
            <input 
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.friend.name}
            onChange={this.changeHandler} />

            <input 
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.friend.age}
            onChange={this.changeHandler}/>

            <input 
            type="text"
            name="email"
            placeholder="E-Mail"
            value={this.state.friend.email}
            onChange={this.changeHandler}/>

            <button>Add</button>
        </form>
        
    </div>
    );
}
}

export default FriendForm;