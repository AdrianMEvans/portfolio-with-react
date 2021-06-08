import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";

const Home = () => {
  const [portfolios, setPortfolios] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/portfolios')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setPortfolios(data);
      })
  }, [])

  return (
    <div className="home">
      {portfolios && <PortfolioList portfolios={portfolios} title="All Portfolios" />}
      {portfolios && <PortfolioList portfolios={portfolios.filter((portfolio) => portfolio.deploy === true)} title="Deployed Portfolios" />}
    </div>
  );
}
 
export default Home;
