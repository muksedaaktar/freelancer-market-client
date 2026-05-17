import { useEffect, useState } from "react";
import Job from "../Job/Job";

const LatestJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/latest-jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>

                <p className="mt-3 text-primary font-medium animate-pulse">
                    Loading latest jobs...
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6 px-15">

            {/* Section Heading */}
            <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-center my-16">
                    <span className="text-primary">Latest</span>{" "}
                    <span className="text-base-content">Jobs</span>
                </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

                {jobs.map(job => (
                    <Job key={job._id} job={job} />
                ))}

            </div>

        </div>
    );
};

export default LatestJobs;