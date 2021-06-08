import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
    const { id } = useParams()
    return ( 
        <div className="portfolio-detail">
            <h2>Portfolio Detail - { id } </h2>
        </div>
     );
}
 
export default PortfolioDetail;