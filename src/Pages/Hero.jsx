import React from "react";
import profile from "../assets/images/avatar.jpg";
import { FaCheck } from "react-icons/fa6";
import Conduct from "./Conduct";

const Hero = () => {
  const candidateData = [
    {
      id: 1,
      name: "Pavithra",
      email: "pavithrarajase1@gmail.com",
      role: "Fullstack Engineer",
      image: profile,
      joinedDate: "Oct 30,2025",
      completionDate: "April 30,2026",
      totalDuration: "6 Months",
      totalDays: "182 Days",
      gitLink: "https://github.com/Pavibritta",
      linkedIn: "https://www.linkedin.com/in/pavithra-r-2621bb232/",
      techStack: [
        "Javascript",
        "TailwindCss",
        "React",
        "Figma",
        "MangoDB",
        "Node.js",
      ],
      recommendation: "Highly Recommended",
      attendance: "96.5%",
      projects: [
        {
          id: 1,
          title: "Task Management System",
          desc: "A JavaScript-based Task Management System that allows users to add, update, and delete tasks efficiently. The application helps users organize daily tasks with a simple and user-friendly interface, focusing on core JavaScript functionality and DOM manipulation.",
          link: "https://pavibritta.github.io/JavasriptInternshipProjects/Jstaskmanagement/",
        },
        {
          id: 2,
          title: "Internship Project – MP3 Song Downloader Website",
          desc: "A modern and responsive learning-based MP3 Song Downloader website developed using HTML, CSS, and Bootstrap. The website includes structured sections such as Home, How to Install, Features, and GitHub, providing clear guidance and an intuitive user experience. Fully responsive across mobile, tablet, and desktop devices.",
          link: "https://pavibritta.github.io/MP3-song-downloader/",
        },
      ],
      standing: "Good Standing",
      warnings: 0,
      completionStatus: "Completed",
      validationStatus: "Valid Certificate",
    },
  ];
  return (
    <>
      <section className="container mx-auto text-center md:px-30 px-20 py-30 bg-primary min-h-screen ">
        {candidateData.map((candidate) => {
          return (
            <div className="grid md:grid-cols-2 gap-5 container " key={candidate.id}>
              <div>
                <div className="relative flex flex-col justify-center md:items-start items-center">
                  <img
                    src={candidate.image}
                    alt="profileImage"
                    className="h-54 w-54 object-cover overflow-hidden rounded-full flex items-center justify-center mb-3"
                  />
                  <div className="flex flex-col items-start justify-center gap-1 ">
                    <h2 className="text-white font-semibold">Candidate Name</h2>
                    <h1 className="text-secondary font-bold">
                      {candidate.name}
                    </h1>
                    <h2 className="text-white font-semibold">
                      Candidate Email
                    </h2>
                    <h1 className="text-secondary font-bold">
                      {candidate.email}
                    </h1>
                    <h2 className="text-white font-semibold">Candidate Role</h2>
                    <h1 className="text-secondary font-bold">
                      {candidate.role}
                    </h1>
                    <h2 className="text-white font-semibold">Status</h2>
                    <div className="bg-green-700 text-white flex gap-10 items-center p-5 rounded-2xl">
                      <FaCheck className="text-xl" />
                      <span className="font-bold">
                        {candidate.validationStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:mt-20">
                <div className="md:flex gap-20">
                  <div className="bg-secondary px-3 py-5 text-white rounded-xl shadow flex-1 text-left mb-3">
                    <h1 className="font-semibold text-sm">JOINED DATE</h1>
                    <p className="text-xl font-bold">{candidate.joinedDate}</p>
                  </div>
                  <div className="bg-secondary px-3 py-5 text-white rounded-xl shadow flex-1 text-left mb-3">
                    <h1 className="font-semibold text-sm">COMPLETION DATE</h1>
                    <p className="text-xl font-bold">
                      {candidate.completionDate}
                    </p>
                  </div>
                </div>
                <div className="bg-secondary px-3 py-5 text-white rounded-xl shadow text-left mt-5">
                  <p className="text-lg">TOTAL DURATION</p>
                  <p className="text-xl font-semibold">
                    {candidate.totalDuration}
                  </p>
                  <p>{candidate.totalDays}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      {/* conduct section */}
      <Conduct candidateData={candidateData} />
    </>
  );
};

export default Hero;
