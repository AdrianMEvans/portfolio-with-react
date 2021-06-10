import { useHistory } from "react-router-dom";

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import BurgerLogger from './images/BurgerLogger.png'
import PasswordFactory from './images/PasswordFactory.png'
import Hookt from './images/Hookt.png'
import POTR_v_LOTR from './images/POTR_v_LOTR.png'
import WeatherChecker from './images/WeatherChecker.png'
import WorkoutTracker from './images/WorkoutTracker.png'


const Test = () => {
    const portfolios = [
        {
            title: 'Burger Logger',
            body: 'Burger Logger allows the user to capture burgers they want to consume and then log consumed burgers.',
            author: 'Adrian Evans',
            image: BurgerLogger,
            gitHub: 'https://github.com/AdrianMEvans/Burger-Logger-App',
            deploy: true,
            deployLink: 'https://cryptic-savannah-68939.herokuapp.com/',
            id: 1
        },
        { 
            title: 'Workout Tracker',
            body: 'The Workout Tracker allows the user to log workouts and view a summary of workouts on a dashboard.',
            author: 'Adrian Evans', 
            image: WorkoutTracker, 
            gitHub: 'https://github.com/AdrianMEvans/WorkoutTracker',
            deploy: true,
            deployLink: 'https://fathomless-lake-21087.herokuapp.com/',
            id: 2 
        },
        { 
            title: 'WeatherCheck',
            body: 'This is a basic weather search application that allows the user search current and 5 day forecasted weather for a specified location.', 
            author: 'Adrian Evans', 
            image: WeatherChecker, 
            gitHub: 'https://github.com/AdrianMEvans/WeatherCheck',
            deploy: true,
            deployLink: 'https://adrianmevans.github.io/WeatherCheck/',
            id: 3 
        },
        { 
            title: 'Potter || Lotter - API Project', 
            body: 'Potter or LOTR (pronounced /lɒtər/) is a quiz based on the series Lord of the Rings (LOTR) and Harry Potter (Potter).', 
            author: 'Adrian Evans, Marco Jansen, Nadia Flam, Abbie Barker', 
            image: POTR_v_LOTR, 
            gitHub: 'https://github.com/AdrianMEvans/LOTR-or-Potter-Quiz',
            deploy: true,
            deployLink: 'https://marcojansen-gmx.github.io/LOTR-or-Potter-Quiz/',
            id: 4 
        },
        { 
            title: 'Password Factory', 
            body: 'The Password Factory is a webpage that is designed to generate a password based on user specified criteria.', 
            author: 'Adrian Evans', 
            image: PasswordFactory, 
            gitHub: 'https://github.com/AdrianMEvans/Password-Generator',
            deploy: true,
            deployLink: 'https://adrianmevans.github.io/Password-Generator/',
            id: 5 
        },
        {
            title: 'Hookt - Loyalty App',
            body: 'Hookt is a mobile application for Android or iOS that offers an alternative to Stamp / Clip based loyalty programs.',
            author: 'Adrian Evans',
            image: Hookt,
            gitHub: 'https://github.com/AdrianMEvans/hookt',
            deploy: false,
            id: 6
        }
    ];
    const history = useHistory();

    const handleClick = () => {
        history.push('/portfolio');
    }

    return (
        <div className="portfolio-detail">
        <h1>Portfolio</h1>
            {portfolios.map((portfolio) => (
                <article>
                <h2>{portfolio.title}</h2>
                <img src={portfolio.image} alt="portfolio item" width="auto" height="150" />
                <div>{portfolio.body}</div>
                <h6>Developed by {portfolio.author}</h6>
                <ButtonGroup variant="outlined">
                    <Button onClick={handleClick}
                        startIcon={<GitHubIcon />}
                        href={portfolio.gitHub}
                        style={{
                            fontSize: 10
                        }}
                        target="_blank"
                        variant="contained"
                        color="secondary">
                        Project Repo
                    </Button>
                    <Button onClick={handleClick}
                        startIcon={<HttpIcon />}
                        href={portfolio.deployLink}
                        style={{
                            fontSize: 10
                        }}
                        target="_blank"
                        variant="contained"
                        color="secondary">
                        Published Project
                    </Button>
                </ButtonGroup>
            </article>
            ))}
        </div>
    );
}

export default Test;