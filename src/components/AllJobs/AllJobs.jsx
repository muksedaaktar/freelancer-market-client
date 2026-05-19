import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    useEffect(() => {

        // setLoading(true);

        let url = "https://freelancer-market-server.vercel.app/jobs";

        if (category) {
            url += `?category=${category}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });

    }, [category]);

    // LOADING SPINNER
    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="mt-3 text-primary font-medium animate-pulse">
                    Coming All Jobs...
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">

            <h2 className="text-4xl font-bold text-center mb-10">
                <span className="text-primary">All</span> Jobs{" "}
                {category && (
                    <span className="text-primary">
                        ({category})
                    </span>
                )}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                {jobs.map(job => (
                    <div
                        key={job._id}
                        className="bg-base-100 shadow-xl rounded-xl overflow-hidden"
                    >

                        <img
                            src={job.coverImage}
                            className="h-52 w-full object-cover"
                            alt={job.title}
                        />

                        <div className="p-5 space-y-2">

                            <div className="badge badge-primary">
                                {job.category}
                            </div>

                            <h2 className="text-xl font-bold">
                                {job.title}
                            </h2>

                            <p className="text-sm text-gray-500">
                                Posted by: {job.postedBy}
                            </p>

                            <p className="text-sm line-clamp-2">
                                {job.summary}
                            </p>

                            <Link
                                to={`/allJobs/${job._id}`}
                                className="btn btn-primary w-full mt-3"
                            >
                                View Details
                            </Link>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AllJobs;