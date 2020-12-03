import React from 'react'
import './TimelineItem.css'

class TimelineItem extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="timeline-item">
                    <div className="tl-periode">
                        <h5>{this.props.tlPeriode}</h5>
                        <span>{this.props.tlCompany}</span>
                    </div>
                    <div className="tl-content">
                        <h4>{this.props.tlTitle}</h4>
                        <p>{this.props.tlText}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default TimelineItem