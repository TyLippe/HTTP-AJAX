import React from "react";

const AddFriend = props => {
    return(
        <form onSubmit={props.addFriend}>
            <input placeholder="name"
            value={this.state.name}
            name="name"
            onChange={props.handleChanges} />

            <input placeholder="age"
            value={this.state.age}
            name="age"
            onChange={props.handleChanges} />

            <input placeholder="email"
            value={this.state.email}
            name="email"
            onChange={props.handleChanges} />
        </form>
    );
}

export default AddFriend;