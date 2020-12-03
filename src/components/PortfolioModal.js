import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'
import './PortfolioModal.css'

function PortfolioModal(props) {
    const arrowRightIcon = <FontAwesomeIcon icon={faArrowCircleRight} />

    return (
        <div>
            <Modal
                {...props}
                scrollable={true}
                // size="lg"
                dialogClassName="custom-modal-dialog"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h4>{props.pModalTitle}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row modal-view">
                        <div className="col col-lg-5">
                            <h5>Description</h5>
                            <p>{props.pModalText}</p>
                            <h5>Category</h5>
                            <span>{props.pModalCategory}</span>
                            <h5>Tool/Technology</h5>
                            <div className="portfolio-tool">
                                {
                                    props.pModalTool.length && props.pModalTool.map((toolModal) =>
                                        <>
                                            <span>{toolModal}</span>
                                        </>
                                    )
                                }
                            </div>
                            <div className="btn-modal-prev">
                                <a href={props.pModalPrev} target="_blank" rel="noreferrer" >
                                    <Button text="View" type="primary" icon={arrowRightIcon} />
                                </a>
                            </div>
                        </div>
                        <div className="col col-lg-7">
                            {
                                props.pModalItem.length && props.pModalItem.map((itemModal) =>
                                    <>
                                        <img src={itemModal.itemImage} alt='' />
                                        <p>{itemModal.itemCaption}</p>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default PortfolioModal
