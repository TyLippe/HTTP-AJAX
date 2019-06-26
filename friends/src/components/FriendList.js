import React from "react";

const FriendList = props => {
    return(
    <div className="friend-container">
        {props.friends.map((friendData =>
            <div className="friend">
                <h1>{friendData.name}</h1>
                <p>Age: {friendData.age}</p>
                <p>Email: {friendData.email}</p>
            </div>
        ))} 
    </div>
    )
}

export default FriendList;