import React from 'react';

function UserDislikes( {userData} ) {
    const dislikes = []
        
        userData.dislikes.forEach(function(dislike) {
            dislikes.push(
                <div class="itemList" >
                    <p>{dislike.message}</p>
                    <img class="imgDisplay" src={dislike.imageUrl} /> 
                </div>
            )
        })
    
    
        return (
            <div>
                <h1> Dislikes </h1>
                <div class="userPosts">
                {dislikes}
                </div>
            </div> 
    
        )
    
    }

    export { UserDislikes }