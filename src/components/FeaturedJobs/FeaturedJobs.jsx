import { useEffect, useState } from "react";
import Job from "../Job.jsx/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=> {
        fetch('./jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[]);
    console.log(jobs);
    return (
        <div>
            <h1 className="text-5xl text-bold text-center">Featured Jobs</h1>
            <p className="text-xl text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mt-6 ${dataLength === jobs.length? 'hidden' : ''}`}>
            <button onClick={()=> setDataLength(jobs.length)} className="btn btn-primary">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;