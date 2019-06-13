import React from "react";

class UpdateFriendForm extends React.Component {
    state = {
        friend: this.props.activeFriend
    };

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
        this.props.updateFriend(this.state.friend);
    };
    
    render(){
    return(
        <div>
        <h1>Update Friend</h1>
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

            <button>Update</button>
        </form>
        
    </div>
    );
}
}

export default UpdateFriendForm;