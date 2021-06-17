import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserDetails } from './user_details';
import { UserLikes } from './user_likes';
import { UserDislikes } from './user_dislikes';
import { UserPosts} from './user_posts';
import { useParams } from 'react-router-dom';


function UserPage() {

    const [data, setData] = useState(null)
    const { id } = useParams();
console.log(id)
    useEffect(() => {
        fetch(`http://localhost:3001/users/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
    console.log(data);

    if(!data){
        return (
            <div></div>
        )
    }

    return (
        <div>
            <UserDetails userData={data} />
            <UserPosts userData={data} />
            <UserLikes userData={data} /> 
            <UserDislikes userData={data}/>
        </div>
    )
}

export { UserPage };
