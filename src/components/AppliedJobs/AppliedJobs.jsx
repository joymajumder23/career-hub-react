import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getApplicationJob } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = (filter) => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJob);
        }
        else if(filter === 'onsite'){
            const onsiteJob = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJob);
        }
    }
    useEffect(() => {
        const storeJobId = getApplicationJob();
        // console.log(storeJobId);
        if (jobs.length > 0) {
            // console.log(jobs);
            //     const jobApplied = jobs.filter(job => storeJobId.include(job.id));
            //    setAppliedJobs(jobApplied);
            const jobsApplied = [];
            for (const id of storeJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);
    // console.log(appliedJobs);
    return (
        <div>
            <div className="flex justify-around">
            <h2 className="font-bold">Applied Jobs: {appliedJobs.length}</h2>
            <div>
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleJobFilter('all')}><a>All</a></li>
                        <li onClick={()=> handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=> handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            </div>
            <div>
                {
                    displayJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;