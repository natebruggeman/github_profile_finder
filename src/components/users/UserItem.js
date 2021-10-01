import React, { Component } from 'react'

class UserItem extends Component {

    render() {
        const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className= "card text-center">
                <img src={avatar_url} className="round-img" style={{width: '60px'}} alt="avatar"/>
                <h3>{login}</h3>
                <div><a href={html_url} className="btn btn-dark btn-sm my-1">More</a>  </div>
                <div></div>
            </div>
        )
    }
}

export default UserItem
