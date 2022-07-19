import PortfolioCard from "../components/PortfolioCard"

function Portfolio () {
    return (
        <section class="section">
        <div class="portfolio">
            <div class="container">
                <h2 class="h2-title portfolio-title">Portfolio</h2>

                <PortfolioCard />
                <PortfolioCard />
                <PortfolioCard />

            </div>
        </div>
    </section> 

    )
}

export default Portfolio;


