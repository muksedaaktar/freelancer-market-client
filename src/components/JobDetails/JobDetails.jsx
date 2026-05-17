import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContexts";

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [job, setJob] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs/${id}`)
            .then(res => res.json())
            .then(data => setJob(data))
            .catch(err => console.log(err));
    }, [id]);

    const handleAccept = () => {

        if (!user) {
            toast.error("Please login first!");
            return;
        }

        const acceptedTask = {
            ...job,
            acceptedBy: user.email
        };

        fetch("http://localhost:3000/acceptedTasks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(acceptedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Job accepted!");
                    navigate("/acceptedTask");
                }
            });
    };

    if (!job) {
        return (
            <div className="text-center mt-20">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-6">

            {/* Cover Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                    src={job.coverImage}
                    alt={job.title}
                    className="w-full h-80 object-cover"
                />
            </div>

            {/* Content */}
            <div className="mt-6 space-y-4">

                {/* Category */}
                <span className="px-4 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {job.category}
                </span>

                {/* Title */}
                <h1 className="text-3xl font-bold text-base-content">
                    {job.title}
                </h1>

                {/* Posted By */}
                <p className="text-sm text-base-content/60">
                    Posted by: <span className="font-semibold">{job.postedBy}</span>
                </p>

                {/* Summary */}
                <p className="text-base text-base-content/80 leading-relaxed">
                    {job.summary}
                </p>

                {/* Email */}
                <p className="text-sm text-base-content/60">
                    Contact: {job.userEmail}
                </p>

                {/* Accept Button */}
                <div className="pt-4">
                    <Link to='/acceptedTask'>
                        <button
                            onClick={handleAccept}
                            className="btn btn-primary w-full md:w-auto"
                        >
                            Accept Job
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;