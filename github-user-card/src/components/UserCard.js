import React from 'react';

const UserCard = ({name, img}) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt={name}/>
        </div>
    )
};

export default UserCard;