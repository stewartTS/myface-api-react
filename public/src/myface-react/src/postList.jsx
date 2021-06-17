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
            <div>
                <p>{post.message}</p>
                <img src={post.imageUrl} />
                <p> {post.postedBy.username} </p>
                
            </div>
        )
    });

    return (
        <div>
            <h1>Posts</h1>
            {responses}
        </div>
    )
}



export { PostList };

