import React from 'react'
import './CardItem.css'


class CardItem extends React.Component {
    render() {
        return (
            <div className='card-item'>
                <img src={this.props.cardImage} alt="card" className='card-image' />
                <div className="card-name">{this.props.cardName}</div>
            </div>
        )
    }
}

export default CardItem
