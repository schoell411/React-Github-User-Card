import React from 'react';

const FollowersCard = ({name, img}) => {
    return (
        <div className="followers-card">
            <h1 className='followers-name'>{name}</h1>
            <img src={img} alt={name} className='followers-img'/>
        </div>
    )
}

export default FollowersCard;