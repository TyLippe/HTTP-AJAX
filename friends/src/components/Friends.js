import React from "react";

function Friends (props) {
    const friend = props.friends

    return(
    <div className="friend-container">
        {props.friends.map((friendData =>
            <div className="friend">
                <h1>{friendData.name}</h1>
                <p>Age: {friendData.age}</p>
                <p>Email: {friendData.email}</p>

            <button 
            onClick={e => props.setUpdateForm(e, friend)}>
            Update Friend
            </button>

            <button>Delete</button>

            </div>
          ))} 
        </div>
    )
}

export default Friends;