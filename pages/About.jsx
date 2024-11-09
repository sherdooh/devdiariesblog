import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Contact from './Contact';
import '@/app/globals.css';

const About = () => {
    return (
        <>
            <Header />

            
            <section className="pt-10 pb-20 sm:pt-16 2xl:pt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-5xl">
                            About
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            DevDiaries Blog is a modern, fully-featured platform designed for developers, tech enthusiasts, and content creators. Built with Next.js, MongoDB, and Tailwind CSS, it offers a seamless experience for both readers and admins, making content management easy and engaging.
                        </p>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Whether you are sharing insights, logging projects, or growing an audience, DevDiaries Blog empowers you to publish, manage, and scale your content effortlessly.
                        </p>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                        <div className="text-center space-y-4">
                            <Image src={assets.user1} alt="Feature Icon 1" width={60} height={60} className="mx-auto"/>
                            <h3 className="text-xl font-semibold text-gray-800">Smooth User Experience</h3>
                            <p className="text-gray-700">Optimized for desktop and mobile, ensuring seamless content engagement across devices.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <Image src={assets.cms1} alt="Feature Icon 2" width={60} height={60} className="mx-auto"/>
                            <h3 className="text-xl font-semibold text-gray-800">Powerful Content Management</h3>
                            <p className="text-gray-700">Admin dashboard allows easy handling of posts and subscribers, giving admins full control.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <Image src={assets.features2} alt="Feature Icon 3" width={60} height={60} className="mx-auto"/>
                            <h3 className="text-xl font-semibold text-gray-800">Flexible Features</h3>
                            <p className="text-gray-700">From blog post pages to email subscriptions and RESTful APIs—DevDiaries covers all bases.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="pt-20 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet the Team</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                        
                        <div className="space-y-6 text-center md:text-left max-w-lg">
                            <h4 className="text-2xl font-semibold text-gray-800">Hi, I am Shadrack Kiplangat</h4>
                            <p className="text-lg text-gray-700">
                                I am a web developer passionate about building high-performance applications that prioritize user experience. Proficient in most dev technologies, I create solutions that solve problems and deliver exceptional results.
                            </p>
                            <p className="text-lg text-gray-700">
                                Driven by quality and efficiency, I constantly explore new technologies and contribute to open-source projects. Outside coding, I love engaging with the developer community.
                            </p>
                            <div className="mt-6">
                                <a
                                    href="https://my-portfolio-website-two-nu.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-5 py-3 text-lg font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                                >
                                    Visit My Portfolio
                                </a>
                            </div>

                            {/* Socials*/}
                            <div className="flex gap-6 mt-8 justify-center md:justify-start">
                                <a href="https://wa.me/+254700581448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition-transform duration-200">
                                    <Image src={assets.whatsapp} alt="WhatsApp" width={40} height={40} />
                                </a>
                                <a href="https://www.linkedin.com/in/shadrack-kiplangat-4282b9109/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform duration-200">
                                    <Image src={assets.linkedin} alt="LinkedIn" width={40} height={40} />
                                </a>
                                <a href="mailto:sherkiplah@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail" className="hover:scale-110 transition-transform duration-200">
                                    <Image src={assets.gmail} alt="Gmail" width={40} height={40} />
                                </a>
                                <a href="https://www.facebook.com/cherdrerk.kiplangat" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform duration-200">
                                    <Image src={assets.facebook} alt="Facebook" width={40} height={40} />
                                </a>
                                <a href="https://github.com/sherdooh" target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:scale-110 transition-transform duration-200">
                                    <Image src={assets.github} alt="Github" width={40} height={40} />
                                </a>
                            </div>
                        </div>

                        
                        <div className="relative flex justify-center md:justify-end w-full max-w-sm">
                            <div className="relative w-full max-w-sm md:max-w-md">
                                <div className="absolute inset-x-0 bottom-0 bg-indigo-600 rounded-full transform translate-y-12 h-80 w-80 opacity-50" aria-hidden="true"></div>
                                <Image
                                    src={assets.about}
                                    alt="Shadrack Kiplangat"
                                    width={400}
                                    height={400}
                                    className="relative w-full rounded-full border-4 border-white shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <CTA />
            <Footer />
        </>
    );
};

export default About;
