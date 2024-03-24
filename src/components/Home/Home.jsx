import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobsList from "../JobsList/JobsList";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobsList></JobsList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;