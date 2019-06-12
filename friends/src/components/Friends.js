import React from "react";

const Friends = (props) => {
    return(
        <div className="friend-box">
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

export default Friends;