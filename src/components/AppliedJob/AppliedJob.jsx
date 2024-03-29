import { CiLocationOn } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AppliedJob = ({job}) => {
    console.log(job);
    const {id, logo, company_name, remote_or_onsite, job_title, job_type, location, salary} = job;
    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Jobs</title>
            </Helmet>
            <div className="card card-compact w-full bg-base-100 shadow-xl mb-4 p-4">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-2">
                        <button className="btn bg-transparent border-blue-400">{remote_or_onsite}</button>
                        <button className="btn bg-transparent border-blue-400">{job_type}</button>
                    </div>
                    <div className="flex gap-6">
                        <p className="flex gap-2 items-center"><CiLocationOn className="text-2xl"></CiLocationOn>{location}</p>
                        <p className="flex gap-2 items-center"><BiDollarCircle className="text-2xl"></BiDollarCircle> Salary : <span>{salary}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;