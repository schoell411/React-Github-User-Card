import React from 'react';

const FollowersCard = ({name, img}) => {
    return (
        <div className="followers-card">
            <h1 className='follower-name'>{name}</h1>
            <img src={img} alt={name} className='follower-pic'/>
        </div>
    )
}

export default FollowersCard;