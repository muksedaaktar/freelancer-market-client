import { useContext, useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContexts";

const AcceptedTasks = () => {

    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    // fetch accepted tasks
    useEffect(() => {

        if (!user?.email) return;

        fetch(`http://localhost:3000/acceptedTasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data));

    }, [user?.email]);

    //  remove from DB + UI
    const handleRemove = (id) => {

        console.log("Clicked ID:", id);

        fetch(`http://localhost:3000/acceptedTasks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                console.log("DELETE RESPONSE:", data);
                if (data.deletedCount > 0) {

                    // instant UI update
                    setTasks(prev =>
                        prev.filter(task => task._id !== id)
                    );

                }

            })
            .catch(err => console.log(err));

    };

    return (
        <div className="max-w-7xl mx-auto p-6">

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-10">
                <span className="text-primary">My Accepted</span>{" "}
                <span>Tasks</span>
            </h2>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6">

                {tasks.length === 0 ? (
                    <p className="text-center col-span-full text-base-content/60">
                        No accepted tasks found
                    </p>
                ) : (
                    tasks.map(task => (
                        <div
                            key={task._id}
                            className="bg-base-100 shadow-xl rounded-xl overflow-hidden border border-base-200"
                        >

                            {/* Image */}
                            <img
                                src={task.coverImage}
                                alt={task.title}
                                className="h-52 w-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-5 space-y-3">

                                <div className="badge badge-primary">
                                    {task.category}
                                </div>

                                <h2 className="text-xl font-bold">
                                    {task.title}
                                </h2>

                                <p className="text-sm text-base-content/70 line-clamp-2">
                                    {task.summary}
                                </p>

                                {/* Buttons */}
                                <div className="flex gap-3 pt-4">

                                    {/* DONE */}
                                    <button
                                        onClick={() => handleRemove(task._id)}
                                        className="btn btn-success flex-1"
                                    >
                                        <FaCheck />
                                        Done
                                    </button>

                                    {/* CANCEL */}
                                    <button
                                        onClick={() => handleRemove(task._id)}
                                        className="btn btn-error flex-1"
                                    >
                                        <FaTimes />
                                        Cancel
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

export default AcceptedTasks;