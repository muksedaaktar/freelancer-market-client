import { motion } from "framer-motion";
import aboutImg from "../../assets/about-f.avif";

const AboutUs = () => {
    return (
        <section className="py-10 bg-base-100 px-4 lg:px-10 overflow-hidden">

            {/* Section Title */}
            <div className="text-center mb-16">
                <h1 className="text-5xl lg:text-6xl font-extrabold">
                    About <span className="text-primary">Us</span>
                </h1>

                <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                    Connecting talented freelancers with clients worldwide through a
                    secure and reliable marketplace.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    <img
                        src={aboutImg}
                        alt="About Freelancer Market"
                        className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
                    />

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 right-4 bg-white shadow-xl rounded-2xl px-6 py-5">
                        <h2 className="text-3xl font-bold text-primary">10K+</h2>

                        <p className="text-gray-500 font-medium">
                            Trusted Freelancers
                        </p>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >

                    <h2 className="text-4xl font-bold leading-snug">
                        Connecting Clients With
                        <span className="text-primary"> Skilled Freelancers </span>
                        Worldwide 🚀
                    </h2>

                    <p className="text-gray-500 text-lg leading-relaxed">
                        Freelancer Market is a trusted freelancing platform designed to
                        connect talented professionals with clients efficiently. We help
                        businesses hire skilled experts for web development, graphic design,
                        content writing, digital marketing, and many more services.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                        <div className="bg-base-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-lg font-bold mb-2">
                                Verified Freelancers
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Work with trusted and skilled professionals worldwide.
                            </p>
                        </div>

                        <div className="bg-base-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-lg font-bold mb-2">
                                Secure Marketplace
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Safe communication and smooth project management system.
                            </p>
                        </div>

                        <div className="bg-base-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-lg font-bold mb-2">
                                Fast Hiring
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Easily find the perfect freelancer within minutes.
                            </p>
                        </div>

                        <div className="bg-base-200 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <h3 className="text-lg font-bold mb-2">
                                24/7 Support
                            </h3>

                            <p className="text-gray-500 text-sm">
                                Dedicated support for clients and freelancers anytime.
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                        <button className="btn btn-primary px-8 rounded-xl text-lg shadow-lg hover:scale-105 transition duration-300">
                            Explore Marketplace
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutUs;