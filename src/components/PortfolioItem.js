import React, { useState } from 'react'
import './PortfolioItem.css'
import PortfolioModal from './PortfolioModal'

function PortfolioItem(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [style, setStyle] = useState({ display: 'none' });

    const pModal = {
        pModalTitle: props.pLabel,
        pModalText: props.pCaption,
        pModalCategory: props.pCategory,
        pModalTool: props.pTool,
        pModalItem: props.pItemModal,
        pModalPrev: props.pImagePrev
    }

    return (
        <div className="portfolio-item" alt={props.pLabel} >
            <img src={props.pImage} alt="Portfolio" />
            {/* <p>{props.pLabel}</p> */}

            <div className="portfolio-hover-content"
                onMouseEnter={e => {
                    setStyle({ display: 'block' });
                }}
                onMouseLeave={e => {
                    setStyle({ display: 'none' })
                }}
                onClick={() => setModalShow(true)}
            >
                <p style={style} >{props.pLabel}
                    <br />
                    <span>{props.pCategory}</span>
                </p>
            </div>

            <PortfolioModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                pModalTitle={pModal.pModalTitle}
                pModalText={pModal.pModalText}
                pModalCategory={pModal.pModalCategory}
                pModalTool={pModal.pModalTool}
                pModalItem={pModal.pModalItem}
                pModalPrev={pModal.pModalPrev}
            />
        </div>
    )
}

export default PortfolioItem