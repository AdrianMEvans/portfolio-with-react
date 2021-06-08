import { useEffect, useState } from "react";
import PortfolioListDeployed from "./PortfolioListDeployed";
import PortfolioListNotDeployed from "./PortfolioListNotDeployed";

import useFetch from "./useFetch";

const Home = () => {

  return ( 
    <div className="portfolio">
        <h2>Home Page</h2>
    </div>
 );
}
//   const {  data: portfolios, isLoading, error } = useFetch('http://localhost:8000/portfolios');

//   return (
//     <div className="home">
//       { error && <div>{ error }</div> }      
//       { isLoading && <div>Loading...</div> }
//       {portfolios && <PortfolioListDeployed portfolios={portfolios} title="All Portfolios" />}
//       {portfolios && <PortfolioListNotDeployed portfolios={portfolios.filter((portfolio) => portfolio.deploy === false)} title="Deployed Portfolios" />}
//     </div>
//   );
// }
 
export default Home;