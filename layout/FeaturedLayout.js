import React from "react";

import Link from "next/link";
import Image from "next/image";

import { blog_data } from "@/Assets/assets";
import Tag from "@/lib/Tag";

const FeaturedLayout = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <Image
        src={blog_data[0].image}
        placeholder="blur"
        
        alt={blog_data[0].title}
        width={40}
        height={40}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        
        

        <Link href={'##'} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog_data[0].title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedLayout;