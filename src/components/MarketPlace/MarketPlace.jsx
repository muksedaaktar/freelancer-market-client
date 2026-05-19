import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Marketplace = () => {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    // FETCH DATA
    useEffect(() => {
        // setLoading(true);

        fetch("https://freelancer-market-server.vercel.app/all-jobs")
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });

    }, []);

    // LOADING UI
    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    // FILTER LOGIC (safe)
    const filteredJobs = jobs
        .filter(job =>
            job.title?.toLowerCase().includes(search.toLowerCase())
        )
        .filter(job =>
            category === "all"
                ? true
                : job.category?.toLowerCase() === category.toLowerCase()
        );

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            {/* HERO */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">
                    Explore <span className="text-primary">Marketplace</span>
                </h1>
                <p className="text-base-content/60 mt-2">
                    Find your perfect freelance job from thousands of listings
                </p>
            </div>

            {/* SEARCH + FILTER */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">

                <input
                    type="text"
                    placeholder="Search jobs..."
                    className="input input-bordered w-full"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="select select-bordered"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="all">All Categories</option>
                    <option value="Design">Design</option>
                    <option value="Development">Development</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Writing">Writing</option>
                </select>

            </div>

            {/* JOB GRID */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

                {filteredJobs.length === 0 ? (
                    <div className="text-center col-span-full py-10">
                        <p className="text-gray-500 text-lg">
                            No jobs found 😢
                        </p>
                    </div>
                ) : (
                    filteredJobs.map(job => (
                        <div
                            key={job._id}
                            className="bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
                        >

                            {/* IMAGE */}
                            <img
                                src={job.coverImage}
                                alt="job"
                                className="h-48 w-full object-cover"
                            />

                            {/* CONTENT */}
                            <div className="p-5 space-y-2">

                                <span className="badge badge-primary">
                                    {job.category}
                                </span>

                                <h2 className="text-lg font-bold">
                                    {job.title}
                                </h2>

                                <p className="text-sm text-base-content/70 line-clamp-2">
                                    {job.summary}
                                </p>

                                <Link
                                    to={`/allJobs/${job._id}`}
                                    className="btn btn-primary btn-sm w-full mt-3"
                                >
                                    View Details
                                </Link>

                            </div>

                        </div>
                    ))
                )}

            </div>

        </div>
    );
};

export default Marketplace;