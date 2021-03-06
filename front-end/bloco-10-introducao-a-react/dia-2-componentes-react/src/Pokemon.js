import React,{Component} from 'react';
import PropTypes from 'prop-types';


class Pokemon extends Component {
  render (){
    const { pokemon: {name, type, averageWeight, image }} = this.props;
    return (
      <div className='pokemon'>
        <section>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Average weight ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </section>
          <img src= {image} alt='' width='100'/> 
      </div>
    );
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
