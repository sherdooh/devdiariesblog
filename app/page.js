"use Client"


import BlogList from "@/components/BlogList";
import CTA from "@/components/CTA";
import FeaturedPosts from "@/components/FeaturedPosts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home() {
  return (
    <>
    <ToastContainer theme="dark"/>
      <Hero />

      <FeaturedPosts/>


      <BlogList />

      <CTA/>

      <Footer />

    </>


  );
}
