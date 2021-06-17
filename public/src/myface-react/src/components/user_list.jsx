import React from 'react';
import { UserPage } from './user_page';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function UserList() {
    const list = []

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/users/`)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
            });
    }, []);

    data.forEach(person => {
        console.log(person.id);
        list.push(
            <div class='userList'>
                
                <Link to={`/users/${person.id}`}><img  src={person.profileImageUrl} /></Link>
                <p class="usersName">{person.name}</p>
            </div>
            
        )
    });
;
   

    return (
        <div class="userGrid"> 
             {list}
        </div>
    )
}

export { UserList }