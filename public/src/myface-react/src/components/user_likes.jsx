import React from 'react';
 
function UserLikes( {userData} ) {
const likes = []
    
    userData.likes.forEach(function(like) {
        likes.push(
            <div class="itemList">
                <p>{like.message}</p>
                <img class="imgDisplay" src={like.imageUrl} />
            </div>
        )
    })

    return (
        <div>
            <h1> Likes </h1>
            <div class="userPosts">
            {likes}
            </div>
        </div> 

    )

}

export { UserLikes };