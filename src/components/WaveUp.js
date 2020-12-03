import React from 'react'
import styled from 'styled-components'
import WaveUpImg from '../img/wave-up.svg'

const WaveUp = styled.img`
    display: inline-block;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

function WaveUpComponent() {
    return (
        <div className="wave-up-section">
            <WaveUp src={WaveUpImg} alt="" />
        </div>
    )
}

export default WaveUpComponent