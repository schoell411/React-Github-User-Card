import React, { Component } from 'react';
import axios from 'axios';
import FollowersCard from './FollowersCard';

class Followers extends Component {
    state = {
        followers: []
    }
    componentDidMount = () => {
        axios
        .get(`https://api.github.com/users/schoell411/followers`)
        .then(result => {
            console.log(result);
            this.setState({
                followers: result.data
            })
        })
        .catch (error => console.log(error))
    }

    render (){
        return(
            <div>
                {this.state.followers.map (follower => (
                    <FollowersCard key={follower.id}
                        name={follower.login}
                        img={follower.avatar_url}
                    />
                ))}
            </div>
        )
    }
}

export default Followers;