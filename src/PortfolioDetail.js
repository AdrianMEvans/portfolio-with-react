import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import ViewListIcon from '@material-ui/icons/ViewList'; import '@fontsource/roboto';

const PortfolioDetail = () => {
    const { id } = useParams();
    const { data: portfolios, error, isLoading } = useFetch('http://localhost:8000/portfolios/' + id);
    const history = useHistory();
    const handleClick = () => {
        history.push('/portfolio');
    }

    return (

        <div className="portfolio-detail">
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { portfolios && (
                <article>
                    <h2>{portfolios.title}</h2>
                    <img src={portfolios.image} alt="" />
                    <h4>Developed by {portfolios.author}</h4>
                    <div>{portfolios.body}</div>
                    <ButtonGroup variant="outlined">
                        <Button onClick={handleClick}
                            startIcon={<GitHubIcon />}
                            href={portfolios.gitHub}
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
                            href={portfolios.deployLink}
                            style={{
                                fontSize: 10
                            }}
                            target="_blank"
                            variant="contained"
                            color="secondary">
                            Published Project
                        </Button>
                        <Button
                            startIcon={<ViewListIcon />}
                            href="/portfolio"
                            style={{
                                fontSize: 10
                            }}
                            target="_blank"
                            variant="outlined"
                            color="secondary">
                            Back to List
                        </Button>
                    </ButtonGroup>
                </article>
            )}
        </div>
    );
}

export default PortfolioDetail;