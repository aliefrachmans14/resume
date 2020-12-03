import { faDesktop, faLaptopCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import DoItem from './DoItem';
import './Do.css'

class Do extends React.Component {
    render() {
        const uiDesign = <FontAwesomeIcon icon={faPalette} size='2x' />
        const webDesign = <FontAwesomeIcon icon={faDesktop} size='2x' />
        const frontendDev = <FontAwesomeIcon icon={faLaptopCode} size='2x' />


        const doingList = [
            {
                doIcon: uiDesign,
                doTitle: 'UI Design',
                doText: 'If you can dream it, i can design it.'

            },
            {
                doIcon: webDesign,
                doTitle: 'Web Design',
                doText: 'Web design is my creativeness.'

            },
            {
                doIcon: frontendDev,
                doTitle: 'Frontend Development',
                doText: 'Implementing from design to the real website.'

            },
        ]

        return (
            <div className="do-section" id="about">
                <div className="container">
                    <div className="row doing-list">
                        <h2>What I Do</h2>
                        <div className="do-list">
                            {
                                doingList.map((doList) => {
                                    return (
                                        <DoItem
                                            doIcon={doList.doIcon}
                                            doTitle={doList.doTitle}
                                            doText={doList.doText}
                                        />
                                    )
                                }
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Do;