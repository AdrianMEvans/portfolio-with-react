import PortfolioListDeployed from "./PortfolioListDeployed";
import PortfolioListNotDeployed from "./PortfolioListNotDeployed";

import useFetch from "./useFetch";

const Portfolio = () => {
    const {  data: portfolios, isLoading, error } = useFetch('http://localhost:8000/portfolios');

  return (
    <div className="home">
      { error && <div>{ error }</div> }      
      { isLoading && <div>Loading...</div> }
      {portfolios && <PortfolioListDeployed portfolios={portfolios} title="All Portfolios" />}
      {portfolios && <PortfolioListNotDeployed portfolios={portfolios.filter((portfolio) => portfolio.deploy === false)} title="Deployed Portfolios" />}
    </div>
  );
}
 
export default Portfolio;