import React from "react";

const AddFriend = props => {
    return(
        <div>
        <h1>Add A Friend!</h1>
        <form>
            <input placeholder="name"
            value={props.name}
            name="name"
            onChange={props.handleChanges} />

            <input placeholder="age"
            value={props.age}
            name="age"
            onChange={props.handleChanges} />

            <input placeholder="email"
            value={props.email}
            name="email"
            onChange={props.handleChanges} />
        </form>
        <button onClick={props.addFriend}>Add</button>
    </div>
    );
}

export default AddFriend;