import React from 'react';

function UserDetails({ userData: { coverImageUrl, profileImageUrl, name, username, email } }) {

    return (
        <div class="userDetails">
            <div>
                <img class="coverImg" src={coverImageUrl} />
                <img class="profileImg" src={profileImageUrl} />
            </div>

            <div>

                <div class="userInfo">
                    <h2>{name}</h2>
                    <h2>{username}</h2>
                    <h2>{email}</h2>
                </div>
            </div>
        </div>
    )
}

export { UserDetails }