import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateJob = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        summary: "",
        coverImage: ""
    });

    // load existing data
    useEffect(() => {

        fetch(`https://freelancer-market-server.vercel.app/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setFormData({
                    title: data.title,
                    category: data.category,
                    summary: data.summary,
                    coverImage: data.coverImage
                });
            });

    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://freelancer-market-server.vercel.app/jobs/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success("Job updated successfully!");
                    navigate("/myJobs");
                }

            })
            .catch(err => {
                console.log(err);
                toast.error("Update failed");
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-8">
                Update <span className="text-primary">Job</span>
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-base-100 shadow-xl p-8 rounded-xl space-y-5">

                {/* Title */}
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Job Title"
                    required
                />

                {/* Category */}
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

                {/* Summary */}
                <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Job Description"
                    required
                ></textarea>

                {/* Cover Image */}
                <input
                    type="text"
                    name="coverImage"
                    value={formData.coverImage}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Cover Image URL"
                    required
                />

                {/* Submit */}
                <button className="btn btn-primary w-full">
                    Update Job
                </button>

            </form>
        </div>
    );
};

export default UpdateJob;