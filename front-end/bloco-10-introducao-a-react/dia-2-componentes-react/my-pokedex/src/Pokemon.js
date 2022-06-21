import React from 'react';
import Image from './image';
class Pokemon extends React.Component {
    render() {
        return (
            <>
                <div className='card'>
                    <p> Nome:{" "}{this.props.pokem.name}</p>
                    <p> tipo:{" "}{this.props.pokem.type}</p>
                    <p> Peso:{" "}{this.props.pokem.averageWeight.value}{" "}{this.props.pokem.averageWeight.measurementUnit}</p>
                    <Image source={this.props.pokem.image} alternativeText="avatar" />
                </div>
            </>
        )
    }
}

export default Pokemon;