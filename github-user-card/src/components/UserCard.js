import React from 'react';

const UserCard = ({name, img}) => {
    return (
        <div className="user-card">
            <h1 className='user-name'>{name}</h1>
            <img src={img} alt={name} className='user-img'/>
        </div>
    )
};

export default UserCard;