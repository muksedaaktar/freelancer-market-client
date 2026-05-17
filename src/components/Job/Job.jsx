// import React from 'react';

import { Link } from "react-router";

const Job = ({job}) => {


    const {title , category, summary, coverImage, _id} = job;

    return (
        <div className="bg-base-100 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-base-200 p-6">

      {/* Image */}
      <figure className="h-48 overflow-hidden rounded-xl">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Category */}
        <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-base-content line-clamp-1">
          {title}
        </h2>

        {/* Summary */}
        <p className="text-sm text-base-content/70 line-clamp-2">
          {summary}
        </p>

        {/* Button */}
        <div className="pt-3">
          <Link to={`/jobDetails/${_id}`}>
            <button className="btn btn-primary btn-sm w-full">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
    )
}






export default Job;