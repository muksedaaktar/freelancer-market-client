// import React from 'react';

import { useEffect, useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import LatestJobs from "../LatestJobs/LatestJobs";
import TopCategories from "../TopCategories/TopCategories";

const Home = () => {

    const [latestJobs, setLatestJobs] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/latest-jobs")
            .then(res => res.json())
            .then(data => setLatestJobs(data));

    }, []);


    return (
        <div>
            <Banner></Banner>
            <div className="text-center py-10 bg-base-200">
                <h1 className="text-5xl font-bold">
                    Find Your Dream <span className="text-primary">Freelance Job</span>
                </h1>
                <p className="mt-4 text-gray-500">
                    Explore thousands of remote and freelance opportunities
                </p>
            </div>
            <TopCategories></TopCategories>
            <LatestJobs jobs={latestJobs}></LatestJobs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;