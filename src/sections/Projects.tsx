"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import mock from "@/assets/images/mock.png";
import muzic from "@/assets/images/muzic.png";
import staking from "@/assets/images/staking.png";
import portfolio from "@/assets/images/portfolio.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Category } from "../components/type";
import GithubIcon from "@/assets/icons/github.svg";
const portfolioProjects = [
  {
    company: "Portfolio",
    year: "2024",
    title: "Tech Stack",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "Web2",
    results: [
      { title: "Present detailed case studies of significant projects" },
      { title: "Outline my professional journey and milestones" },
      { title: "Provide interactive demonstrations of my work" },
    ],
    link: "https://saikiranportfolio.vercel.app",
    github: "https://github.com/saikiran/portfolio",
    image: portfolio,
  },
  {
    company: "AI Resume Builder",
    year: "2024",
    title: "Tech Stack",
    techStack: ["Vite.js", "JavaScript", "Strapi", "PostgreSQL", "TailwindCSS"],
    category: "Web2",
    results: [
      { title: "Library of keywords to boost visibility in job searches." },
      { title: "Simple, user-friendly interface for easy resume creation" },
      { title: "Industry-specific recommendations and pre-built phrases" },
    ],
    link: "https://ai-resume-main.vercel.app",
    github: "https://github.com/saikiran/ai-resume-builder",
    image: darkSaasLandingPage,
  },
  {
    company: "AI-Interview-Mocker",
    year: "2024",
    title: "Tech Stack",
    techStack: ["Next.js", "JavaScript", "PostgreSQL", "TailwindCSS"],
    category: "Web2",
    results: [
      { title: "AI-generated mock interviews based on job roles" },
      { title: "Performance analytics to track strengths and weaknesses" },
      { title: "Progress tracking to monitor interview readiness" },
    ],
    link: "https://ai-mock-interview-zeta.vercel.app",
    github: "https://github.com/saikiran/ai-interview-mocker",
    image: mock,
  },
  {
    company: "Muzic",
    year: "2024",
    title: "Tech Stack",
    techStack: ["Next.js", "TypeScript", "Prisma"],
    category: "Web2",
    results: [
      { title: "Add and view video URLs within the app" },
      { title: "Create and manage customizable lists" },
      { title: "Share and collaborate on lists with others" },
    ],
    link: "https://muzic-psi.vercel.app",
    github: "https://github.com/saikiran/muzic",
    image: muzic,
  },
  {
    company: "Staking Dapp",
    year: "2024",
    title: "Tech Stack",
    techStack: ["Solidity", "JavaScript", "Next.js"],
    category: "Web3",
    results: [
      { title: "Explore and join different staking pools" },
      { title: "Overview of staking activities and rewards" },
      { title: "Insights and metrics on staking performance" },
    ],
    link: "https://staking-dapp-flax.vercel.app",
    github: "https://github.com/saikiran/staking-dapp",
    image: staking,
  },
  {
    company: "BlockForge",
    year: "2024",
    title: "Tech Stack",
    techStack: ["Astro", "Next.js"],
    category: "Web2",
    results: [
      { title: "The main landing page showcasing company highlights" },
      { title: "Articles and updates related to the industry and company" },
      { title: "Job openings and information about working at the company" },
    ],
    link: "https://blockforge.vercel.app",
    github: "https://github.com/saikiran/blockforge",
    image: aiStartupLandingPage,
  },
];
const categories: Category[] = ["All", "DevOps", "Web2", "Web3"];
export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
  };
  const filteredProjects = portfolioProjects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <SectionHeader
        eyebrow="Real-World Results"
        title="Featured Projects"
        description="See how I transformed concepts into engaging digital experiences."
      />
      <div className="flex flex-col mt-10 md:mt-20 gap-20">
        <div className="container grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          <div className="lg:col-span-1 flex justify-center items-center">
            <Sidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
          <div className="lg:col-span-3">
            {filteredProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px`,
                }}
              >
                <div className="lg:grid grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-center inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <div className="p-2 mt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <div
                            key={index}
                            className="flex-1 min-w-[calc(50%-0.5rem)] border border-emarald-300 bg-gradient-to-r from-emerald-300 to-sky-400 text-white text-base mb-2 py-1 px-2 text-center rounded-lg"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2 mt-8">
                      <a
                        href={project.github}
                        className="inline-flex items-center gap-1 bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold justify-center"
                        target="_blank"
                      >
                        <GithubIcon className="size-5" />
                      </a>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 bg-white text-gray-950 h-12 px-12 rounded-xl font-semibold justify-center"
                        target="_blank"
                      >
                        <span>Live</span>
                        <ArrowUpRightIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
