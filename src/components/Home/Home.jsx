// import React from 'react';

import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import LatestJobs from "../LatestJobs/LatestJobs";
import TopCategories from "../TopCategories/TopCategories";

const LatestJobsPromise = fetch('http://localhost:3000/latest-jobs').
    then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center py-20 bg-base-200">
                <h1 className="text-5xl font-bold">
                    Find Your Dream <span className="text-primary">Freelance Job</span>
                </h1>
                <p className="mt-4 text-gray-500">
                    Explore thousands of remote and freelance opportunities
                </p>
            </div>
            <TopCategories></TopCategories>
            <LatestJobs LatestJobsPromise={LatestJobsPromise}></LatestJobs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;