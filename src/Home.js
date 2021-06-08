import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";

const Home = () => {
  const [portfolios, setPortfolios] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/portfolios')
      .then(res => {
        if(!res.ok) {
          throw Error('Could not fetch the requested data');
        }
        return res.json();
      })
      .then(data => {
        setPortfolios(data);
        setisLoading(false);
        setError(null);
      })
      .catch(err => {
        setisLoading(false);
        setError(err.message);
      })
  }, [])

  return (
    <div className="home">
      { error && <div> {error}</div> } 
      { isLoading && <div>Loading...</div> }
      {portfolios && <PortfolioList portfolios={portfolios} title="All Portfolios" />}
      {portfolios && <PortfolioList portfolios={portfolios.filter((portfolio) => portfolio.deploy === true)} title="Deployed Portfolios" />}
    </div>
  );
}
 
export default Home;
