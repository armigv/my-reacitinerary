import React, { Component } from 'react'






 class CitiesSon extends Component {
    constructor(props) {
        super(props)
        this.state={
        props
        }      
    }
    
    render() {

        return (
          <div key={this.props.id} className='card__content-item'>
        <div className="card">
        <div className="card__body">
          <img src={this.props.img} className="card__image" alt=''/>
          <h2 className="card__title">{this.props.name}</h2>
          <p className="card__description">{this.props.role}</p>
        </div>
        <button className="card__btn">View Recipe</button>
      </div>
      </div>
        )
    }
}
export default CitiesSon
