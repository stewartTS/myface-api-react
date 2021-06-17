import React from 'react';
 
function UserLikes( {userData} ) {
const likes = []
    
    userData.likes.forEach(function(like) {
        likes.push(
            <div>
                <p>{like.message}</p>
                <img src={like.imageUrl} />
            </div>
        )
    })

    return (
        <div>
            <h1> Likes </h1>
            {likes}
        </div> 

    )

}

export { UserLikes };