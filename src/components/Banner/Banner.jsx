import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="hero min-h-[90vh] bg-base-200 overflow-hidden px-4 lg:px-10">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1736892868674-a79d83a1baf8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Freelancer Market"
            className="w-full max-w-2xl rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-extrabold leading-tight"
          >
            Hire Trusted <span className="text-primary">Freelancers</span>
            <br />
            For Any Project 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="py-8 text-lg text-gray-500 max-w-xl"
          >
            Freelancer Market is a reliable platform where clients and
            freelancers connect securely. Find verified experts, manage tasks
            smoothly, and complete projects with confidence.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white shadow-xl rounded-2xl p-2 flex items-center mb-8 max-w-xl"
          >
            <FiSearch className="text-2xl text-gray-400 ml-3" />

            <input
              type="text"
              placeholder="Search freelancers, jobs, skills..."
              className="w-full px-4 py-3 outline-none bg-transparent text-gray-700"
            />

            <button className="btn btn-primary rounded-xl px-6">
              Search
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-6 mb-8"
          >
            <div className="bg-white shadow-lg rounded-2xl px-6 py-4">
              <h2 className="text-3xl font-bold text-primary">10K+</h2>
              <p className="text-gray-500">Trusted Freelancers</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl px-6 py-4">
              <h2 className="text-3xl font-bold text-primary">98%</h2>
              <p className="text-gray-500">Client Satisfaction</p>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/allJobs">
              <button className="btn btn-primary px-8 text-white text-lg rounded-xl shadow-lg hover:scale-105 transition duration-300">
                Explore Jobs
              </button>
            </Link>

            {/* <Link to="/addJob">
              <button className="btn btn-outline btn-primary px-8 text-lg rounded-xl hover:scale-105 transition duration-300">
                Create a Job
              </button>
            </Link> */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;