import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";
import useFetch from "./useFetch";

const Home = () => {
  const {  data: portfolios, isLoading, error } = useFetch('http://localhost:8000/portfolios');

  return (
    <div className="home">
      { error && <div>{ error }</div> }      
      { isLoading && <div>Loading...</div> }
      {portfolios && <PortfolioList portfolios={portfolios} title="All Portfolios" />}
      {portfolios && <PortfolioList portfolios={portfolios.filter((portfolio) => portfolio.deploy === false)} title="Deployed Portfolios" />}
    </div>
  );
}
 
export default Home;
