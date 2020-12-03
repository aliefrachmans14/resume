import React from 'react'
import styled from 'styled-components'
import WaveDownImg from '../img/wave-down.svg'

const WaveDown = styled.img`
    display: inline-block;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

function WaveDownComponent() {
    return (
        <div className="wave-down-section">
            <WaveDown src={WaveDownImg} alt="" />
        </div>
    )
}

export default WaveDownComponent
