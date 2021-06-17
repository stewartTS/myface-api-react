import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';



function PostList() {
    const responses = [];

    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/posts/")
            .then((response) => response.json())
            .then((data) => {
                setData(data.results)
            });
    }, []);

    data.forEach(function (post) {
        responses.push(
            <div class= 'postItem' >
                <h1>{post.message}</h1>
                <img class= 'imgDisplay' src={post.imageUrl} />
                <p> Created by: {post.postedBy.username} </p>
                
            </div>
        )
    });

    return (
        <div>
            <h1>Posts</h1>
            <div class="postList">
            {responses}
            </div>
        </div>
    )
}



export { PostList };

