import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PortfolioDetail = () => {
    const { id } = useParams();
    const { data: portfolios, error, isLoading } = useFetch('http://localhost:8000/portfolios/' + id);

    return ( 
        <div className="portfolio-detail">
            { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { portfolios && (
        <article>
          <h2>{ portfolios.title }</h2>
          <p>Written by { portfolios.author }</p>
          <div>{ portfolios.body }</div>
        </article>
      )}
        </div>
     );
}
 
export default PortfolioDetail;