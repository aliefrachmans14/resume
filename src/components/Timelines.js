import React from 'react'
import TimelineItem from './TimelineItem'
import './Timelines.css'

class Timelines extends React.Component {
    render() {
        const eduList = [
            {
                tlPeriode: '2018',
                tlCompany: 'University of Gunadarma',
                tlTitle: 'Informatics Engeenering',
                tlText: 'The fields of science that are mostly studied are programming and computing, software engineering for various application fields in various business fields, and computer network technology.'
            },
        ]

        const expList = [
            {
                tlPeriode: '2020',
                tlCompany: 'PT XSIS Mitra Utama',
                tlTitle: 'JAVA Bootcamp',
                tlText: 'Learn and create programs with JAVA language programming.'
            },
            {
                tlPeriode: '2019',
                tlCompany: 'PT Indocyber Global Technology',
                tlTitle: 'SQL Bootcamp',
                tlText: 'Learn and create programs with SQL language programming.'
            },
        ]

        const orgList = [
            {
                tlPeriode: '2015-2017',
                tlCompany: 'Himpunan Mahasiswa Teknik Informatika (HIMTI)',
                tlTitle: 'Academic Division',
                tlText: 'In the organization I was a member and chief executive of a seminar. In this division, it holds activities related to academics such as seminars and workshops.'
            }
        ]

        const courseList = [
            {
                tlPeriode: '2020',
                tlCompany: 'Udemy',
                tlTitle: 'Welcome to React - The Complete Guide with React Hook Redux 2020',
                tlText: 'Learn how to create high performance web app with react. Hooks, Redux, React Routing, useContext, Fireabase and more'
            },
            {
                tlPeriode: '2020',
                tlCompany: 'Udemy',
                tlTitle: 'The Complete React JS Course - Basics to Advanced',
                tlText: 'Learn React JS from scratch with hands-on practice assignments and projects.'
            },
            {
                tlPeriode: '2020',
                tlCompany: 'Udemy',
                tlTitle: 'The Complete Front-End Web Development',
                tlText: 'Get started as a front-end web developer using HTML, CSS, JavaScript, jQuery, and Bootstrap.'
            },
            {
                tlPeriode: '2020',
                tlCompany: 'LinkedIn Learning',
                tlTitle: 'CSS Essential Training',
                tlText: 'Learn the concepts form the foundation of CSS, explaining to tweak existing CSS and write my own.'
            },
            {
                tlPeriode: '2020',
                tlCompany: 'Progate',
                tlTitle: 'React Fundamental',
                tlText: 'Learn React JS from the basics.'
            },
        ]

        return (
            <div className="experiences-section" id="experiences">
                <div className="container">
                    <div className="row timeline-list">
                        <div className="col-lg-6">
                            <h2>Education</h2>
                            <div className="tl-list">
                                {
                                    eduList.map((tlList) => {
                                        return (
                                            <TimelineItem
                                                tlPeriode={tlList.tlPeriode}
                                                tlCompany={tlList.tlCompany}
                                                tlTitle={tlList.tlTitle}
                                                tlText={tlList.tlText}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2>Experience</h2>
                            <div className="tl-list">
                                {
                                    expList.map((tlList) => {
                                        return (
                                            <TimelineItem
                                                tlPeriode={tlList.tlPeriode}
                                                tlCompany={tlList.tlCompany}
                                                tlTitle={tlList.tlTitle}
                                                tlText={tlList.tlText}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2>Organisation</h2>
                            <div className="tl-list">
                                {
                                    orgList.map((tlList) => {
                                        return (
                                            <TimelineItem
                                                tlPeriode={tlList.tlPeriode}
                                                tlCompany={tlList.tlCompany}
                                                tlTitle={tlList.tlTitle}
                                                tlText={tlList.tlText}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2>Course</h2>
                            <div className="tl-list">
                                {
                                    courseList.map((tlList) => {
                                        return (
                                            <TimelineItem
                                                tlPeriode={tlList.tlPeriode}
                                                tlCompany={tlList.tlCompany}
                                                tlTitle={tlList.tlTitle}
                                                tlText={tlList.tlText}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Timelines;