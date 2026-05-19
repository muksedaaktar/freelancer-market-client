import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddJob = () => {

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: "",
        category: "Web Development",
        summary: "",
        coverImage: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newJob = {
            title: formData.title,
            category: formData.category,
            summary: formData.summary,
            coverImage: formData.coverImage,
            postedBy: user?.displayName,
            userEmail: user?.email,
            createdAt: new Date()
        };

        fetch("https://freelancer-market-server.vercel.app/jobs", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    toast.success("Job added successfully!");
                    navigate("/");
                    setFormData({
                        title: "",
                        category: "Web Development",
                        summary: "",
                        coverImage: ""
                    });
                }

            })
            .catch(err => {
                console.log(err);
                toast.error("Failed to add job");
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-8">
                Add <span className="text-primary">New Job</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-base-100 shadow-xl p-8 rounded-xl space-y-5">

                {/* Title */}
                <div>
                    <label className="label">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter job title"
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="label">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="select select-bordered w-full"
                    >
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                        <option>App Development</option>
                        <option>Content Writing</option>
                        <option>Digital Marketing</option>
                        <option>Data Science</option>
                        <option>Graphics Designing</option>
                        <option>Networking</option>
                    </select>
                </div>

                {/* Summary */}
                <div>
                    <label className="label">Summary</label>
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        className="textarea textarea-bordered w-full"
                        placeholder="Write job details..."
                        required
                    ></textarea>
                </div>

                {/* Cover Image */}
                <div>
                    <label className="label">Cover Image URL</label>
                    <input
                        type="text"
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="https://image-link.com"
                        required
                    />
                </div>

                {/* Auto Fields Info */}
                <div className="bg-base-200 p-4 rounded-lg text-sm text-gray-600 space-y-1">
                    <p>Posted By: <b>{user?.displayName}</b></p>
                    <p>Email: <b>{user?.email}</b></p>
                    <p>Posted Time: Auto Generated</p>
                </div>

                {/* Submit */}
                <button className="btn btn-primary w-full">
                    Post Job
                </button>

            </form>
        </div>
    );
};

export default AddJob;