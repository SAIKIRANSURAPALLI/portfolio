"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import CheckIcon from "@/assets/icons/check-circle.svg";
type TimelineData = {
  title: string;
  subtitle: string;
  description?: string[];
  year: string;
  location?: string;
  icon: JSX.Element;
  iconStyle: React.CSSProperties;
  contentStyle: React.CSSProperties;
  contentArrowStyle: React.CSSProperties;
  type: "experience" | "education";
};

const timelineData: TimelineData[] = [
  {
    type: "experience",
    title: "Software Developer",
    subtitle: "ITJOBXS",
    description: [
      "Utilized modern JavaScript frameworks and tools such as Next.js and Vite.js to develop and maintain Web 2.0 applications.",
      "Applied Solidity to write smart contracts for decentralized applications (dApps), ensuring secure and efficient interaction with the Ethereum blockchain.",
      "Automated deployment pipelines using CI/CD tools, and integrated Terraform, Docker, and Kubernetes to streamline the software release process.",
      "Reduced AWS costs by 15% and enhanced performance through optimization of resources, implementing best practices for instance types, storage classes, and data lifecycle management.",
      "Enhanced comprehensive log management, monitoring, and analysis by integrating Splunk with AWS services, providing actionable insights into application and infrastructure performance.",
    ],
    year: "2023/03 – Present",
    icon: (
      <div
        style={{
          background: "#1e1e1e",
          color: "#f0f0f0",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        💼
      </div>
    ),
    iconStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentArrowStyle: { borderRight: "7px solid #1e1e1e" },
  },
  {
    type: "experience",
    title: "Software Engineer Trainee",
    subtitle: "Cisco Systems India Private Limited",
    description: [
      "Trained in Python, CCNA, and Java Automation Testing.",
      "Designed a few scripts to execute the test cases automatically.",
      "Generated a Python script to extract info from logs.",
    ],
    year: "2023/02 – 2024/02",
    icon: (
      <div
        style={{
          background: "#1e1e1e",
          color: "#f0f0f0",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        💼
      </div>
    ),
    iconStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentArrowStyle: { borderRight: "7px solid #1e1e1e" },
  },
  {
    type: "education",
    subtitle: "Electronics and Communication Engineering",
    title: "Kakatiya University",
    year: "2018/08 – 2022/08",
    icon: (
      <div
        style={{
          background: "#1e1e1e",
          color: "#f0f0f0",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🏫
      </div>
    ),
    iconStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentStyle: {
      background: "#1e1e1e",
      color: "#f0f0f0",
      maxWidth: "500px",
    },
    contentArrowStyle: { borderRight: "7px solid #1e1e1e" },
  },
  {
    type: "education",
    subtitle: "Intermediate",
    title: "Alphores Junior College",
    year: "2016/04 – 2018/04",
    icon: (
      <div
        style={{
          background: "#1e1e1e",
          color: "#f0f0f0",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🏫
      </div>
    ),
    iconStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentStyle: {
      background: "#1e1e1e",
      color: "#f0f0f0",
      maxWidth: "500px",
    },
    contentArrowStyle: { borderRight: "7px solid #1e1e1e" },
  },
  {
    type: "education",
    subtitle: "School",
    title: "Sadhana School of Excellence",
    year: "2015/04 – 2016/04",
    icon: (
      <div
        style={{
          background: "#1e1e1e",
          color: "#f0f0f0",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🏫
      </div>
    ),
    iconStyle: { background: "#1e1e1e", color: "#f0f0f0" },
    contentStyle: {
      background: "#1e1e1e",
      color: "#f0f0f0",
      maxWidth: "500px",
    },
    contentArrowStyle: { borderRight: "7px solid #1e1e1e" },
  },
];

export const Timeline = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  const filteredData = timelineData.filter((item) => item.type === activeTab);

  return (
    <section id="journey" className="container py-16 flex flex-col gap-10">
      <div className="text-center mb-10">
        <SectionHeader
          eyebrow="My Journey"
          title="Milestones"
          description="Education & Professional Experience"
        />
      </div>

      <div className="flex gap-4 justify-center">
        <button
          className={`py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === "experience"
              ? "bg-gray-800 text-emerald-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </button>
        <button
          className={`py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === "education"
              ? "bg-gray-800 text-emerald-500"
              : "text-gray-400 hover:text-gray-300"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>

      <div className="flex flex-col gap-8">
        {filteredData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex items-start gap-4 relative ${
              item.type === "education" ? "py-4 px-6" : "py-6 px-8"
            } ${
              item.type === "education"
                ? "bg-gray-700 rounded-lg"
                : "bg-gray-800 rounded-lg"
            }`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full shadow-md"
              style={item.iconStyle}
            >
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="justify-between flex">
                <h4 className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-lg font-sans">
                  {item.title}
                </h4>
                <span className="text-gray-400">{item.year}</span>
              </div>
              <span className="text-gray-500 font-serif text-sm ">
                {item.subtitle}
              </span>
              {item.location && (
                <div className="text-gray-500">{item.location}</div>
              )}
              <ul className="mt-2 text-gray-400">
                {item.description?.map((desc, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm md:text-base text-white/50"
                  >
                    <CheckIcon className="size-5 md:size-6" />
                    <span> {desc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="absolute right-0 top-0 w-4 h-full bg-gray-700"
              style={{ display: item.type === "education" ? "none" : "block" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
