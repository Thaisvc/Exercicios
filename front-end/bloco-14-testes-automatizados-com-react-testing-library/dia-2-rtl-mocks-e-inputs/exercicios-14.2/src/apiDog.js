import React from 'react';

class ApiDog extends React.Component {
    constructor() {
        super();
        this.state = {
            dog: '',
        };
    }
    // tentei
    componentDidMount() {
        const API_URL = 'https://dog.ceo/api/breeds/image/random';
        fetch(API_URL)
            .then((response) => response.json())
            /* .then((data) => this.setState({ dog: data.message })); */
            .then(({message}) => this.setState({ dog: message }));

    }

    render() {
        const { dog } = this.state;
        return (
            <>
                <img src={dog} alt='dog' />
            </>
        )
    }
}



export default ApiDog;