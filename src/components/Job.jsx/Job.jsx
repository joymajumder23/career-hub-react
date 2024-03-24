import { CiLocationOn } from "react-icons/ci";
import { BiDollarCircle } from "react-icons/bi";

const Job = ({ job }) => {
    console.log(job);
    const { logo, job_title, remote_or_onsite, location, job_type, salary, company_name } = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl p-10 border">
                <div className=""><img src={logo} alt="" /></div>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div className="flex gap-4">
                        <button className="btn bg-transparent border-blue-400 p-4">{remote_or_onsite}</button>
                        <button className="btn bg-transparent border-blue-400 p-4">{job_type}</button>
                    </div>
                    <div className="flex gap-6">
                        <p className="flex gap-2 items-center"><CiLocationOn className="text-2xl"></CiLocationOn>{location}</p>
                        <p className="flex gap-2 items-center"><BiDollarCircle className="text-2xl"></BiDollarCircle> Salary : <span>{salary}</span></p>
                    </div>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;