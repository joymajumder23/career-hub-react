import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobsList from "../JobsList/JobsList";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <JobsList></JobsList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;