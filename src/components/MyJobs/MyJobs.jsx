import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const MyJobs = () => {

    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    // fetch user jobs
    useEffect(() => {

        if (!user?.email) return;

        fetch(`http://localhost:3000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [user?.email]);

    // delete job
    const handleDelete = (id) => {

        fetch(`http://localhost:3000/jobs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {

                    setJobs(prev => prev.filter(job => job._id !== id));
                    toast.success("Job deleted!");

                }

            });
    };

    return (
        <div className="max-w-7xl mx-auto p-6">

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-10">
                My <span className="text-primary">Jobs</span>
            </h2>

            {/* Grid */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">

                {jobs.length === 0 ? (
                    <p className="text-center col-span-full text-gray-500">
                        No jobs found
                    </p>
                ) : (
                    jobs.map(job => (
                        <div
                            key={job._id}
                            className="bg-base-100 shadow-xl rounded-xl overflow-hidden border"
                        >

                            <img
                                src={job.coverImage}
                                className="h-52 w-full object-cover"
                            />

                            <div className="p-5 space-y-2">

                                <div className="badge badge-primary">
                                    {job.category}
                                </div>

                                <h2 className="text-xl font-bold">
                                    {job.title}
                                </h2>

                                <p className="text-sm text-gray-500">
                                    {job.summary}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-2 pt-4">

                                    {/* UPDATE */}
                                    <Link
                                        to={`/updateJob/${job._id}`}
                                        className="btn btn-warning flex-1"
                                    >
                                        <FaEdit />
                                        Update
                                    </Link>

                                    {/* DELETE */}
                                    <button
                                        onClick={() => handleDelete(job._id)}
                                        className="btn btn-error flex-1"
                                    >
                                        <FaTrash />
                                        Delete
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default MyJobs;