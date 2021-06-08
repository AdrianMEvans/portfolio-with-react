const PortfolioList = ({ portfolios, title}) => {
    
    return (
      <div className="portfolio-list">
        <h2>{ title }</h2>
        {portfolios.map(portfolio => (
          <div className="portfolio-preview" key={portfolio.id} >
            <h2>{ portfolio.title }</h2>
            <p>Written by { portfolio.author }</p>
          </div>
        ))}
      </div>
    );
  }
 
export default PortfolioList;