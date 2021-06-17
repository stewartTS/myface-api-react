import React from 'react';

function UserPosts( {userData} ) {
    const posts = [];

    userData.posts.forEach(function(post) {
        posts.push(
            <div class= 'itemList'>
                <p>{post.message}</p>
                <img class= 'imgDisplay' src={post.imageUrl} />
                <p>{post.createdAt}</p>
            </div>
        )
    })


    return (
        <div>
            <h1>Posts</h1>
            <div  class = 'userPosts'>
            {posts}
            </div>
        </div>
    )
}

export {UserPosts}