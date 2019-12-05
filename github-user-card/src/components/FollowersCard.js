import React from 'react';

const FollowersCard = ({name, img, github}) => {
    return (
        <div className="followers-card">
            <h1 className='followers-name'><a href={github}>{name}</a></h1>
            <img src={img} alt={name} className='followers-img'/>
        </div>
    )
}

export default FollowersCard;