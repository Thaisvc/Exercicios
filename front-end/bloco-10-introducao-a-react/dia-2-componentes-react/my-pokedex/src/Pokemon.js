import React from 'react';
import Image from './image';
import PropTypes from 'prop-types';
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
Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;