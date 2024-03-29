import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveApplicationJob } from "../../utility/localStorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    // console.log(job);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, logo} = job;

    const handleAppliedJob = () => {
        saveApplicationJob(intId);
        toast.success('Applied Successfully');
    }
    toast.error('Already exist');
    return (
        <div className="mt-32">
                <Helmet>
                    <title>Career Hub | Job Details {id}</title>
                </Helmet>
            <img src={logo} alt="" />
            <div className="grid gap-4 md:grid-cols-4 mt-4">
                <div className="md:col-span-3">
                    <h3><span className="font-extrabold">Job Description:</span> {job_description}</h3>
                    <h3><span className="font-extrabold">Job Responsibility:</span> {job_responsibility}</h3>
                    <h3><span className="font-extrabold">Educational Requirements:</span> <br /> {educational_requirements}</h3>
                    <h3><span className="font-extrabold">Experience:</span> <br /> {experiences}</h3>
                </div>
                <div>
                <div className="bg-slate-200 border rounded p-6 space-y-2">
                    <h3 className="font-extrabold">Job Details</h3>
                    <hr />
                    <h3><span className="font-bold">Salary:</span> <span>{salary}</span>(Per Month)</h3>
                    <h3><span className="font-bold">Job Title:</span> {job_title}</h3>
                    <h3 className="font-extrabold">Contact Information</h3>
                    <hr />
                    <h3><span className="font-bold">Phone:</span> {contact_information.phone}</h3>
                    <h3><span className="font-bold">Email:</span> {contact_information.email}</h3>
                    <h3><span className="font-bold">Address:</span> {contact_information.address}</h3>
                </div>
                <div className="mt-6">
                    <button onClick={handleAppliedJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;