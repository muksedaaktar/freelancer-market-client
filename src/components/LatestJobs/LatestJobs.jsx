import { use } from "react";
import Job from "../Job/Job";

const LatestJobs = ({ LatestJobsPromise }) => {
    const jobs = use(LatestJobsPromise);
    console.log(jobs);

    return (
        <div className="space-y-6 px-25">

            {/* Section Heading */}
            <div>
                <p className="text-5xl lg:text-6xl font-extrabold text-center my-16">
                    <span className="text-primary">Latest</span>{" "}
                    <span className="text-base-content">Products</span>
                </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {jobs.map((job) => (
                    <Job key={job._id} job={job} />
                ))}
            </div>

        </div>
    );
};

export default LatestJobs;