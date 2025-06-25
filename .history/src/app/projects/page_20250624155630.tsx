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
    name: "Youtube Clone",
    description: `YouTubeClone is a modern web application that replicates the core features of YouTube 
            using React and Material UI. It allows users to explore trending videos, search content, view 
            video details, and navigate a user-friendly interface — all in real-time. Designed with 
            responsiveness and clean UI in mind, this clone delivers a seamless user experience across 
            devices. Deployed on Vercel, it ensures lightning-fast performance and global availability 
            for users accessing video content..`,
    link: "https://youtube-clone-lac-mu.vercel.app/",
    images: [
      "/assets/projects-screenshots/youtubeclone/1.png",
      "/assets/projects-screenshots/youtubeclone/2.png",
    ],
  },
  {
    id: 2,
    name: "Computer Society of India",
    description: `This website showcases the activities and initiatives of the Computer Society of India (CSI),
            CBIT Chapter. It serves as a centralized platform for students, faculty, and tech enthusiasts
            to engage with upcoming events, technical workshops, and collaborative opportunities. Designed
            to reflect the spirit of innovation, the platform highlights CSI’s contributions to the tech
            community at CBIT and provides seamless access to chapter details, event archives, and
            membership benefits—empowering students to lead, learn, and grow in the world of technology.`,
    link: "https://github.com/dikshant-s/CSI",
    images: [
      "/assets/projects-screenshots/CSI/1.png",
      "/assets/projects-screenshots/CSI/2.png",
      "/assets/projects-screenshots/CSI/3.png",
      "/assets/projects-screenshots/CSI/4.png",
      "/assets/projects-screenshots/CSI/5.png",
      "/assets/projects-screenshots/CSI/6.png",
      "/assets/projects-screenshots/CSI/7.png",
      "/assets/projects-screenshots/CSI/8.png",
      "/assets/projects-screenshots/CSI/9.png",
      "/assets/projects-screenshots/CSI/10.png",
    ],
  },
  {
    id: 3,
    name: "Personal Finance Manager",
    description: `The Personal Finance Dashboard is a responsive web application that helps users 
            manage, visualize, and plan their finances.`,
    link: "https://personalfinancedashboard-9giv.onrender.com",
    images: [
      "/assets/projects-screenshots/personalfinancemanager/login.png",
      "/assets/projects-screenshots/personalfinancemanager/dashboard.png",
      "/assets/projects-screenshots/personalfinancemanager/expense.png",
      "/assets/projects-screenshots/personalfinancemanager/savingsgoals.png",
    ],
  },
  {
    id: 4,
    name: "Smart Parking Assistant",
    description: `Transform parking with the Smart Parking Assistant, an IoT marvel powered by Arduino 
            and IR sensors to detect and recommend the best spots in real-time. Enjoy a sleek GUI 
            that visualizes availability and an intelligent system for quick, optimal decisions. 
            Built to adapt with customizable hardware and Python-powered software for seamless 
            integration. Say goodbye to parking woes and hello to smarter space utilization!`,
    link: "https://github.com/dikshant-s/SelfDrivingCar",
    images: [
      "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/03.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/04.jpeg",
    ],
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
