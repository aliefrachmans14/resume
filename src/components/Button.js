import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    background-color: ${props => props.type.bgColor};
    border: 2px solid #486189;
    color: ${props => props.type.textColor};
    padding: 0.5em 1em;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 700;
    cursor:pointer;
    transition: 0.3s;
    
    &:hover{
        background-color: #8094C6;
        border: 2px solid #8094C6;
        color: white;
        box-shadow: 0px 10px 10px -8px rgba(0,0,0,0.3);
    }

    svg{
        margin-left: 10px;
    }
`;

const buttonStyle = {
    primary: {
        textColor: 'white',
        bgColor: '#486189',

    },
    secondary: {
        textColor: '#486189',
        bgColor: 'transparent',
    },
}

const ButtonComponent = ({ text, type, icon }) => {
    return (
        <Button type={buttonStyle[type]}>
            {text}
            {icon}
        </Button>
    )
}

export default ButtonComponent
