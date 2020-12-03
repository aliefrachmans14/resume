import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardItem from './CardItem'
import './Cards.css'

import Photoshop from '../img/photoshop.svg';
import Figma from '../img/figma.svg';
import AdobeXD from '../img/adobe-xd.svg';
import HTML from '../img/html.svg';
import CSS from '../img/css.svg';
import Bootstrap from '../img/bootstrap.svg';
import JavaScript from '../img/js.svg';
import ReactJS from '../img/react.png';

// class Cards extends React.Component
function Cards() {
    // render() {
    const cardDesignList = [
        {
            cardName: 'Photoshop',
            cardImage: Photoshop
        },
        {
            cardName: 'Figma',
            cardImage: Figma
        },
        {
            cardName: 'Adobe XD',
            cardImage: AdobeXD
        },
    ]

    const cardCodingList = [
        {
            cardName: 'HMTL',
            cardImage: HTML
        },
        {
            cardName: 'CSS',
            cardImage: CSS
        },
        {
            cardName: 'Bootstrap',
            cardImage: Bootstrap
        },
        {
            cardName: 'JavaScript',
            cardImage: JavaScript
        },
        {
            cardName: 'ReactJS',
            cardImage: ReactJS
        },
    ]

    return (
        <div className="skills-section" id="skills">
            <Container className='main-section-myskill'>
                <Row className='row-section-myskill'>
                    <Col lg className='col-section-myskill'>
                        <h2>Design Skills</h2>
                        <div className='skill-list'>
                            {cardDesignList.map((CardList) => {
                                return (
                                    <CardItem
                                        cardName={CardList.cardName}
                                        cardImage={CardList.cardImage}
                                    />
                                )
                            })}
                        </div>
                    </Col>
                    <Col lg className='col-section-myskill'>
                        <h2>Coding Skills</h2>
                        <div className='skill-list'>
                            {cardCodingList.map((CardList) => {
                                return (
                                    <CardItem
                                        cardName={CardList.cardName}
                                        cardImage={CardList.cardImage}
                                    />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    // }
}

export default Cards
