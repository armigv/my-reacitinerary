import React, { Component } from 'react'


 class CitiesSon extends Component {
    constructor(props) {
        super(props)
        this.state={props}      
    }
    
    render() {

        return (
        <div className="card">
        <div className="card__body">
          <img src={this.props.img} class="card__image" />
          <h2 className="card__title">{this.props.title}</h2>
          <p className="card__description">{this.props.description}</p>
        </div>
        <button className="card__btn">View Recipe</button>
      </div>
      
        )
    }
}
export default CitiesSon
