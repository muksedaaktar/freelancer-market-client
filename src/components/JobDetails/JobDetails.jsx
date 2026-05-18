import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

    if (!job) {
        return (
            <div className="text-center mt-20">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }

    const isOwnJob = job?.postedBy === user?.email;

    const handleAccept = () => {
        console.log("JOB:", job.postedBy);
        console.log("USER:", user?.email);

        if (!user) {
            toast.error("Please login first!");
            return;
        }

        if (isOwnJob) {
            toast.error("You cannot accept your own job!");
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
            })
            .catch(err => {
                console.log(err);
                toast.error("Something went wrong!");
            });
    };

    return (
        <div className="max-w-5xl mx-auto p-6">

            <img
                src={job.coverImage}
                className="w-full h-80 object-cover rounded-xl"
            />

            <h1 className="text-3xl font-bold mt-4">{job.title}</h1>

            <p className="text-sm text-gray-500">
                Posted by: {job.postedBy}
            </p>

            <p className="mt-4">{job.summary}</p>

            <p className="text-sm text-gray-500">
                Contact: {job.userEmail}
            </p>

            <div className="pt-4">
                <button
                    disabled={isOwnJob}
                    onClick={handleAccept}
                    className={`btn btn-primary ${isOwnJob ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    Accept Job
                </button>
            </div>

        </div>
    );
};

export default JobDetails;