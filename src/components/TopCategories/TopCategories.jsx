import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    FaCode,
    FaPaintBrush,
    FaMobileAlt,
    FaPen,
    FaBullhorn,
    FaDatabase,
    FaVideo,
    FaLaptopCode
} from "react-icons/fa";

const categories = [
    { name: "Web Development", icon: <FaCode />, color: "bg-blue-500" },
    { name: "UI/UX Design", icon: <FaPaintBrush />, color: "bg-pink-500" },
    { name: "App Development", icon: <FaMobileAlt />, color: "bg-green-500" },
    { name: "Content Writing", icon: <FaPen />, color: "bg-yellow-500" },
    { name: "Digital Marketing", icon: <FaBullhorn />, color: "bg-purple-500" },
    { name: "Data Science", icon: <FaDatabase />, color: "bg-indigo-500" },
    { name: "Graphics Designing", icon: <FaVideo />, color: "bg-red-500" },
    { name: "Networking", icon: <FaLaptopCode />, color: "bg-gray-700" }
];

const TopCategories = () => {

    const navigate = useNavigate();

    const handleCategoryClick = (name) => {
        navigate(`/allJobs?category=${name}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Heading */}
            <h2 className="text-4xl font-bold text-center mb-12">
                Top <span className="text-primary">Categories</span>
            </h2>

            {/* Grid */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">

                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCategoryClick(cat.name)}
                        className="cursor-pointer bg-base-100 shadow-xl rounded-xl p-6 text-center hover:shadow-2xl transition"
                    >

                        <div className={`text-white text-3xl w-14 h-14 flex items-center justify-center mx-auto rounded-full ${cat.color}`}>
                            {cat.icon}
                        </div>

                        <h3 className="text-lg font-bold mt-4">
                            {cat.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            Explore jobs
                        </p>

                    </motion.div>
                ))}

            </div>

        </div>
    );
};

export default TopCategories;