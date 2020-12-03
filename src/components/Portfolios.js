import React from 'react'
import './Portfolios.css'
import PortfolioItem from './PortfolioItem';

import Dota from '../img/dota2-home.png';
import BajuBolaHome from '../img/bajubola-home.png';
import G102 from '../img/g102-home.png';
import KuotaKu from '../img/kuotaku-home&splash.png';
import Jobbbs from '../img/jobbbs.png';
import Archipelago from '../img/archipelago-homepage.png';

import { Acl1, Acl2, Acl3, Acl4, Acl5, Acl8, Acl6, Acl7 } from '../img/';
import { BajuBola1, BajuBola2, BajuBola3, BajuBola4, BajuBola5, BajuBola6 } from '../img/';
import { Dota1, Dota2, Dota3, Dota4, Dota5 } from '../img/';
import { GP1, GP2, GP3, GP4, GP5, GP6, GP7 } from '../img/';
import { Jobbbs1, Jobbbs2, Jobbbs3, Jobbbs4, Jobbbs5, Jobbbs6, Jobbbs7 } from '../img/';
import { KuotaKu1, KuotaKu2, KuotaKu3 } from '../img/';

function Portfolios() {
    const portfolioList = [
        {
            pImage: Dota,
            pLabel: 'Dota 2',
            pCaption: 'This is a website homepage design regarding an online game, namely Dota 2. This site contains an introduction to the game, its superior features, and provides a link to download the game.',
            pCategory: 'Web Design',
            pTool: ['Figma'],
            pItemModal: [
                { itemImage: Dota1, itemCaption: 'This header section contains the navigation to access the website. There is a "Login" button for users who already have an account to get more features. Then there is a text banner and a "Play For Free" button to download the game.' },
                { itemImage: Dota2, itemCaption: "Featured News. This section contains the latest news about updates from the game." },
                { itemImage: Dota3, itemCaption: "Key Features. This section contains the excellent features of the game and what makes this game popular." },
                { itemImage: Dota4, itemCaption: 'Fully Strategic Gameplay. This section contains gameplay video footage of the game. "Learn More" button to access more gameplay video.' },
                { itemImage: Dota5, itemCaption: 'In this section contains a brief explanation and conclusion about the game and a "Play For Free" button to download the game. At the bottom of the page there is a navigation menu.' },
            ],
            pImagePrev: 'https://www.behance.net/gallery/108899625/DOTA-2-Home-Page-Design'
        },
        {
            pImage: BajuBolaHome,
            pLabel: 'BajuBola',
            pCaption: 'This is a website homepage design of an e-commerce site that sells a lot of soccer uniforms. This site contains the latest promos, popular uniform collections, available payment methods, and the advantages of shopping through this site.',
            pCategory: 'Web Design',
            pTool: ['Figma'],
            pItemModal: [
                { itemImage: BajuBola1, itemCaption: 'This header section contains a navigation in the form of a hamburger on the top left, the latest promos, "Login" and "Signup" buttons for users, then a search field to find favorite jersey.' },
                { itemImage: BajuBola2, itemCaption: 'Collections. This section contains a collection of favorite jersey with the names and prices. And the "See More" button to see all jersey collections available.' },
                { itemImage: BajuBola3, itemCaption: "Available On Marketplace. This section contains jerseys that are sold not only on this website but also in other popular marketplaces." },
                { itemImage: BajuBola4, itemCaption: "Payment Methods. This section contains the payment methods available for purchases on this website." },
                { itemImage: BajuBola5, itemCaption: "This section contains the advantages when shopping on this website." },
                { itemImage: BajuBola6, itemCaption: "This footer section contains information about this store such as contact and address. You can also subscribe to get the latest news and can also follow their social media." },
            ],
            pImagePrev: 'https://www.behance.net/gallery/108899443/BajuBola-Home-Page-Design'
        },
        {
            pImage: G102,
            pLabel: 'Logitech G102 Prodigy',
            pCaption: 'This is a single product web design from a logitech g102 prodigy mouse that contains information about the product from features, prices, to other products from logitech.',
            pCategory: 'Web Design',
            pTool: ['Figma'],
            pItemModal: [
                { itemImage: GP1, itemCaption: "This header section contains a navigation in the form of hamburger on the top left, the price of the product, then you can login / signup, search for products, and view orders in the top right corner." },
                { itemImage: GP2, itemCaption: "G102 Prodigy Features. This section contains all the features available in this product." },
                { itemImage: GP3, itemCaption: "G102 Prodigy Specs. This section contains the specification information of the product." },
                { itemImage: GP4, itemCaption: "G102 Prodigy Variants. This section contains the available variants of the product." },
                { itemImage: GP5, itemCaption: "This section contains the use of this product as gaming equipment." },
                { itemImage: GP6, itemCaption: "Logitech New Arrival. This section apart from the mouse, there are other products that have just been released." },
                { itemImage: GP7, itemCaption: "This footer section contains more navigation. You can also subscribe to get the latest news and can also follow their social media." },
            ],
            pImagePrev: 'https://www.behance.net/gallery/108899775/G102-Prodigy-Home-Page-Design'
        },
        {
            pImage: KuotaKu,
            pLabel: 'KuotaKu',
            pCaption: 'This is a mobile application design that allows you to check and buy data packages, top up credit, and other special packages.',
            pCategory: 'UI Design',
            pTool: ['Figma'],
            pItemModal: [
                { itemImage: KuotaKu1, itemCaption: "This section contains information on user name, mobile number, balance, validity. In addition, users can access the hamburger menu as a navigation menu in the upper left corner, get messages from the icon in the upper right corner. And can buy packages and top up credit." },
                { itemImage: KuotaKu2, itemCaption: "My Quota. This section contains the remaining data packet usage information." },
                { itemImage: KuotaKu3, itemCaption: "This section the user can get some special offers. At the bottom there is a navigation bar that can be accessed to view promos, buy packages / pulses, etc." },
            ],
            pImagePrev: 'https://www.behance.net/gallery/108900087/KuotaKu-Home-App-Design'
        },
        {
            pImage: Jobbbs,
            pLabel: 'Jobbbs',
            pCaption: 'This is a job seeker website design. This site is primarily for job seekers, but recruiters can also post available job vacancies at the company.',
            pCategory: 'Web Design',
            pTool: ['Figma'],
            pItemModal: [
                { itemImage: Jobbbs1, itemCaption: "This header section contains menu navigation, login, and signup that can be accessed by users. Then user can also search for jobs in the column provided." },
                { itemImage: Jobbbs2, itemCaption: "Newest Job Vacancy. This section contains the available jobs, starting from the name of the job, the name of the company that provides the job vacancy, job location, and the salary given." },
                { itemImage: Jobbbs3, itemCaption: "This section contains the advantages of searching for a job on this site." },
                { itemImage: Jobbbs4, itemCaption: "Best Vcancy in Your City. This section contains jobs available from various cities in Indonesia." },
                { itemImage: Jobbbs5, itemCaption: 'Most Wanted Job in This Year. This section contains the most searched jobs this year. but users can also search for other types of work by going to the "See All" button.' },
                { itemImage: Jobbbs6, itemCaption: "Career Inspiration. This section contains articles related to tips in terms of finding a job, and life in the work environment." },
                { itemImage: Jobbbs7, itemCaption: "This footer section contains information about this site such as short description and contact. You can also access the navigation and follow their social media." },
            ],
            pImagePrev: 'https://www.behance.net/gallery/108899909/Jobbbs-Home-Page-Design'
        },
        {
            pImage: Archipelago,
            pLabel: 'Archipelago Champions League',
            pCaption: 'This is a website about an online game tournament Dota 2. On this site contains information about events, match schedules, a list of teams participating, and the rules for the tournament.',
            pCategory: 'Frontend Development',
            pTool: ['Figma', 'HTML', 'CSS', 'Bootstrap'],
            pItemModal: [
                { itemImage: Acl1, itemCaption: 'Overview. This page contains an overview of the tournament that will soon be held, such as the schedule and details via the "More Information" button.' },
                { itemImage: Acl2, itemCaption: "Schedule. This page contains the fixtures for the main event." },
                { itemImage: Acl3, itemCaption: "Schedule. This page contains the fixtures for the group stage." },
                { itemImage: Acl4, itemCaption: "Standings. This page contains the team standings from each group." },
                { itemImage: Acl8, itemCaption: "Standigns. This page contains the bracket phase after the group stage." },
                { itemImage: Acl5, itemCaption: "Media. This page contains social media that provides information related to the ongoing tournament." },
                { itemImage: Acl6, itemCaption: "Teams. This page contains the winners of the tournament." },
                { itemImage: Acl7, itemCaption: "Rules. This page contains the rules that must be followed by participants in the tournament." },
            ],
            pImagePrev: 'https://archipelagocl.com/'
        },
    ]

    return (
        <div className="portfolio-section" id="portfolio">
            <div className="container">
                <div className="row portfolio-list">
                    <h2>Recent Portfolio</h2>
                    <div className="port-list">
                        {
                            portfolioList.map((pList) => {
                                return (
                                    <>
                                        <PortfolioItem
                                            pImage={pList.pImage}
                                            pLabel={pList.pLabel}
                                            pCaption={pList.pCaption}
                                            pCategory={pList.pCategory}
                                            pTool={pList.pTool}
                                            pItemModal={pList.pItemModal}
                                            pImagePrev={pList.pImagePrev}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolios
