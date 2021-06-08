import { Link } from "react-router-dom";

const PortfolioList = ({ portfolios, title }) => {

  return (
    <div className="portfolio-list">
      <h2>{title}</h2>
      {portfolios.map(portfolio => (
        <div className="portfolio-preview" key={portfolio.id} >
          <Link to={`/portfolio/${portfolio.id}`}>
            <h2>{portfolio.title}</h2>
            <p>Developed by {portfolio.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PortfolioList;