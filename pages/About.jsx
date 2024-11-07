import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Contact from './Contact';

const About = () => {
    return (
        <>
            <Header />

            <section className="pt-10 pb-20 sm:pt-16 2xl:pt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                    {/* About Section */}
                    <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Text Section */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold leading-tight text-black sm:text-5xl lg:text-5xl">
                                Hi, I&apos;m Shadrack Kiplangat
                            </h2>

                            <p className="max-w-lg mt-4 text-lg leading-relaxed text-gray-700">
                                I am a web developer passionate about building high-performance applications that prioritize user experience. With proficiency in technologies like JavaScript, React, and Node.js, I create solutions that not only solve problems but also deliver exceptional results.
                            </p>
                            <p className="max-w-lg text-lg text-gray-700">
                                My work is driven by a commitment to quality and efficiency, and I’m always ready to take on new challenges that allow me to grow and innovate. When I’m not coding, you’ll find me exploring new technologies, contributing to open-source projects, or sharing insights with the developer community.
                            </p>
                            <p className="mt-6">
                                <a
                                    href="https://my-portfolio-website-two-nu.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-5 py-3 text-lg font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                                >
                                    Visit My Portfolio
                                </a>
                            </p>

                            {/* Social Links Section */}
                            <div className="flex gap-6 mt-8">
                                <a href="https://wa.me/0700581448" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition-transform duration-200">
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

                        {/* Image Section */}
                        <div className="relative flex justify-center md:justify-end">
                            <div className="relative w-full max-w-lg">
                                <Image
                                    src={assets.blob}
                                    alt="Decorative shape"
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute inset-x-0 bottom-0 transform translate-y-1/4 opacity-80"
                                    aria-hidden="true"
                                />
                                <Image
                                    src={assets.about}
                                    alt="Shadrack Kiplangat"
                                    width={500}
                                    height={500}
                                    className="relative w-full rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <Contact />

            </section>

            {/* Call-to-Action Section */}
            <CTA />

            {/* Footer */}
            <Footer />
        </>
    );
};

export default About;
