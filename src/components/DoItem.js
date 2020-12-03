import React from 'react'
import './DoItem.css'

class DoItem extends React.Component {
    render() {
        return (
            <div className="do-item">
                <div className="do-icon">
                    <i>{this.props.doIcon}</i>
                </div>
                <div className="do-title">
                    <h4>{this.props.doTitle}</h4>
                </div>
                <div className="do-text">
                    <p>{this.props.doText}</p>
                </div>
            </div>
        )
    }
}
export default DoItem;