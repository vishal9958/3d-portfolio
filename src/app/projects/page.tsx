"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "soul-and-stitch",
    description: `Soul & Stitch is a full-featured e-commerce platform designed to sell
          handmade crochet and wool-based products.`,
    link: "https://expo.dev/accounts/vishal00/projects/soul-stitch/builds/3d655c24-8c6c-429e-b8eb-59f2c762af05",
    images: [
      "/assets/projects-screenshots/soul-stitch/login.jpg",
      "/assets/projects-screenshots/soul-stitch/profile.jpg",
      "/assets/projects-screenshots/soul-stitch/products.jpg",
      "/assets/projects-screenshots/soul-stitch/product.jpg",
      "/assets/projects-screenshots/soul-stitch/wishlist.jpg",
    ],
  },
  {
    id: 2,
    name: "smart-pdf",
    description: `Smart PDF Toolkit is a productivity-focused web application that offers
          essential PDF tools in one place. It allows users to convert, edit,
          and manage PDF documents easily without installing heavy software.`,
    link: "https://pdf-smart.netlify.app/",
    images: [
      "/assets/projects-screenshots/smart-pdf/landing.png",
      "/assets/projects-screenshots/smart-pdf/image-to-pdf.png",
      "/assets/projects-screenshots/smart-pdf/pdf-to-word.png",
      "/assets/projects-screenshots/smart-pdf/pdf-tools.png",
    ],
  },
  {
    id: 3,
    name: "vishal-bharat",
    description: `Vishal Bharat is a complete travel booking and trip planning platform
          where users can explore destinations, book trips, and plan journeys
          across India as well as international locations.`,
    link: "https://vishal-bharat.netlify.app/",
    images: [
      "/assets/projects-screenshots/vishal-bharat/landing.png",
      "/assets/projects-screenshots/vishal-bharat/destinations.png",
      "/assets/projects-screenshots/vishal-bharat/trip-planner.png",
      "/assets/projects-screenshots/vishal-bharat/packages.png",
      "/assets/projects-screenshots/vishal-bharat/bookings.png",
    ],
  },
  {
    id: 4,
    name: "portfolio",
    description: `the go-to app for JNTUA students, empowering them to analyze, compare, and view classwise results effortlessly.
     Dive into your academic journey with ease, track your progress, and gain valuable insights.`,
    link: "https://bappaditya-portfolio.netlify.app/",
    images: ["/assets/projects-screenshots/oldfolio/3.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
