import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class User extends Component {
    state = {
        name: []
    }
    componentDidMount () {
        axios
        .get(`https://api.github.com/users/schoell411`)
        .then(result => {
            console.log(result);
            this.setState({
                name: result.data.name,
                img: result.data.avatar_url,
                github: result.data.html_url
            })
        })
        .catch (error => console.log(error))
    }

    render (){
        return(
            <div>
                <UserCard name={this.state.name} img={this.state.img} github={this.state.github} />
            </div>
        )
    }
}

export default User;