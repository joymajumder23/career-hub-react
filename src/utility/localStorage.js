const getApplicationJob = () => {
    const storedJobApplication = localStorage.getItem('job-application');

    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}
const saveApplicationJob = id => {
    const storedJobApplication = getApplicationJob();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
        
    }
}

export {getApplicationJob, saveApplicationJob};