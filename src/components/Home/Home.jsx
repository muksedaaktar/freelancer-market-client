// import React from 'react';

import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import LatestJobs from "../LatestJobs/LatestJobs";

const LatestJobsPromise = fetch('http://localhost:3000/latest-jobs').
then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestJobs LatestJobsPromise = {LatestJobsPromise}></LatestJobs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;