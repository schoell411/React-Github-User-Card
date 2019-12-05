import React from 'react';

const UserCard = ({name, img, github}) => {
    return (
        <div className="user-card">
            <h1 className='user-name'><a href={github}>{name}</a></h1>
            <img src={img} alt={name} className='user-img'/>
        </div>
    )
};

export default UserCard;