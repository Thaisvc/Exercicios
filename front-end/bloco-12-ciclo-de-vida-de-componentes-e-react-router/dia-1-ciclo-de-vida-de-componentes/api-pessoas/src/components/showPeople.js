import React, { Component } from 'react';

class ShowPeople extends React.Component {
    render() {
        const { api: { name, email, age, image } } = this.props;
        return (
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{age}</p>
                <img src={image} alt={name}/>
            </div>
        )
    }
}

export default ShowPeople;
