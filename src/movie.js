import React, { Component } from 'react'

import PropTypes from 'prop-types';

export default class Movie extends Component {

    static propTypes = {
        movie:PropTypes.shape({
            name:PropTypes.string.isRequired
        }),
        desc:PropTypes.string
    }

    static defaultProps ={
        desc:'Description not available'   
    }

    render() {
        console.log(PropTypes)
        return (

            <div>
                <p>
                {this.props.movie.name}
                </p>
                <p>
                {this.props.desc}
                </p>
            </div>
        )
    }
}
